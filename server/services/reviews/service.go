package reviews

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/ducc/vape/protos_go"
	"github.com/ducc/vape/server/database"
	"github.com/ducc/vape/server/utils"
	"github.com/lib/pq"
	log "github.com/sirupsen/logrus"
)

type Service struct {
	db *sql.DB
}

func New(databaseAddr string) (*Service, error) {
	db, err := database.Open(databaseAddr)
	if err != nil {
		return nil, fmt.Errorf("error opening database connection: %s", err)
	}

	return &Service{
		db: db,
	}, nil
}

func (s *Service) Close() error {
	return s.db.Close()
}

func (s *Service) GetReview(ctx context.Context, req *protos.GetReviewRequest) (*protos.GetReviewResponse, error) {
	if req.Review.Product.Id == "" || req.Review.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	rows, err := s.db.QueryContext(ctx, getReviewByIDQuery, req.Review.Product.Id, req.Review.Id)
	if err != nil {
		log.WithError(err).WithField("review", req.Review).Error("error querying reviews")
		return nil, fmt.Errorf("error getting review")
	}

	var review *protos.Review

	found := false
	for rows.Next() {
		if !found {
			found = true
		}

		var (
			productID         string
			reviewTimeCreated pq.NullTime
			reviewTimeUpdated pq.NullTime
			reviewUserID      string
			reviewContent     string
			likeID            sql.NullString
			likeUserID        sql.NullString
		)

		if err := rows.Scan(&productID, &reviewTimeCreated, &reviewTimeUpdated, &reviewUserID, &reviewContent, &likeID, &likeUserID); err != nil {
			log.WithError(err).WithField("review", req.Review).Error("error scanning rows")
			return nil, fmt.Errorf("error getting review")
		}

		if review == nil {
			timestamps := &protos.Timestamps{
				Created: utils.ToTimestamp(reviewTimeCreated.Time),
			}

			if reviewTimeUpdated.Valid {
				timestamps.Updated = utils.ToTimestamp(reviewTimeUpdated.Time)
			}

			review = &protos.Review{
				Id:         req.Review.Id,
				Timestamps: timestamps,
				Product: &protos.Product{
					Id: productID,
				},
				User: &protos.User{
					Id: reviewUserID,
				},
				Content: reviewContent,
				Likes:   make([]*protos.ReviewLike, 0),
			}
		}

		if likeID.Valid && likeUserID.Valid {
			review.Likes = append(review.Likes, &protos.ReviewLike{
				Id: likeID.String,
				User: &protos.User{
					Id: likeUserID.String,
				},
			})
		}
	}

	if !found {
		return nil, fmt.Errorf("review does not exist")
	}

	return &protos.GetReviewResponse{
		Review: review,
	}, nil
}

func (s *Service) CreateReview(ctx context.Context, req *protos.CreateReviewRequest) (*protos.CreateReviewResponse, error) {
	if req.Review.Product.Id == "" || req.Review.User.Id == "" || req.Review.Content == "" {
		return nil, fmt.Errorf("product id, author id and content fields are required")
	}

	// todo validate inputs

	_, err := s.db.ExecContext(ctx, `INSERT INTO reviews (product_id, user_id, content) VALUES ($1, $2, $3);`, req.Review.Product.Id, req.Review.User.Id, req.Review.Content)
	if err != nil {
		log.WithError(err).WithField("review", req.Review).Error("error scanning rows")
		return nil, fmt.Errorf("error creating review")
	}

	return &protos.CreateReviewResponse{}, nil
}

func (s *Service) UpdateReview(ctx context.Context, req *protos.UpdateReviewRequest) (*protos.UpdateReviewResponse, error) {
	if req.Review.Product.Id == "" || req.Review.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	if req.Review.Content != "" {
		_, err := s.db.ExecContext(ctx, `UPDATE reviews SET content = $1, time_updated = CURRENT_TIMESTAMP() WHERE product_id = $2 AND review_id = $3;`, req.Review.Content, req.Review.Product.Id, req.Review.Id)
		if err != nil {
			log.WithError(err).WithField("review", req.Review).Error("error updating review content")
			return nil, fmt.Errorf("error updating review")
		}
	} else if len(req.Review.Likes) > 0 {
		transaction, err := s.db.BeginTx(ctx, &sql.TxOptions{}) // todo set isolation level?
		if err != nil {
			log.WithError(err).WithField("review", req.Review).Error("error beginning review transaction")
			return nil, fmt.Errorf("error updating review")
		}

		for _, like := range req.Review.Likes {
			if like.User.Id == "" {
				return nil, fmt.Errorf("like user id is required")
			}
		}

		_, err = transaction.ExecContext(ctx, `UPDATE reviews SET time_updated = CURRENT_TIMESTAMP() WHERE product_id = $1 AND review_id = $2;`, req.Review.Product.Id, req.Review.Id)
		if err != nil {
			log.WithError(err).WithField("review", req.Review).Error("error updating review time updated timestamp")
			return nil, fmt.Errorf("error updating review")
		}

		for _, like := range req.Review.Likes {
			_, err := transaction.ExecContext(ctx, `INSERT INTO reviews_likes (product_id, review_id, user_id) VALUES ($1, $2, $3);`, req.Review.Product.Id, req.Review.Id, like.User.Id)
			if err != nil {
				log.WithError(err).WithField("review", req.Review).WithField("like", like).Error("error inserting review like")
				return nil, fmt.Errorf("error updating review")
			}
		}

		if err := transaction.Commit(); err != nil {
			log.WithError(err).WithField("review", req.Review).Error("error committing transaction")
			return nil, fmt.Errorf("error updating review")
		}
	} else {
		return nil, fmt.Errorf("nothing to update")
	}

	return &protos.UpdateReviewResponse{}, nil
}

func (s *Service) DeleteReview(ctx context.Context, req *protos.DeleteReviewRequest) (*protos.DeleteReviewResponse, error) {
	if req.Review.Product.Id == "" || req.Review.Id == "" {
		return nil, fmt.Errorf("product id and review id are required")
	}

	_, err := s.db.ExecContext(ctx, `DELETE FROM reviews WHERE product_id = $1 AND review_id = $2;`, req.Review.Product.Id, req.Review.Id)
	if err != nil {
		log.WithError(err).WithField("review", req.Review).Error("error deleting review")
		return nil, fmt.Errorf("error deleting review")
	}

	return &protos.DeleteReviewResponse{}, nil
}

func (s *Service) ListReviews(ctx context.Context, req *protos.ListReviewsRequest) (*protos.ListReviewsResponse, error) {
	rows, err := s.db.QueryContext(ctx, getReviewsQuery)
	if err != nil {
		log.WithError(err).Error("error listing reviews")
		return nil, fmt.Errorf("error listing reviews")
	}

	res := &protos.ListReviewsResponse{
		Reviews: make([]*protos.Review, 0),
	}

	var review *protos.Review

	for rows.Next() {
		var (
			reviewID          string
			productID         string
			reviewTimeCreated pq.NullTime
			reviewTimeUpdated pq.NullTime
			reviewUserID      string
			reviewContent     string
			likeID            sql.NullString
			likeUserID        sql.NullString
		)

		if err := rows.Scan(&productID, &reviewID, &reviewTimeCreated, &reviewTimeUpdated, &reviewUserID, &reviewContent, &likeID, &likeUserID); err != nil {
			log.WithError(err).Error("error scanning rows")
			return nil, fmt.Errorf("error listing reviews")
		}

		if review == nil || review.Id != reviewID {
			timestamps := &protos.Timestamps{
				Created: utils.ToTimestamp(reviewTimeCreated.Time),
			}

			if reviewTimeUpdated.Valid {
				timestamps.Updated = utils.ToTimestamp(reviewTimeUpdated.Time)
			}

			review = &protos.Review{
				Id:         reviewID,
				Timestamps: timestamps,
				Product: &protos.Product{
					Id: productID,
				},
				User: &protos.User{
					Id: reviewUserID,
				},
				Content: reviewContent,
				Likes:   make([]*protos.ReviewLike, 0),
			}

			res.Reviews = append(res.Reviews, review)
		}

		if likeID.Valid && likeUserID.Valid {
			review.Likes = append(review.Likes, &protos.ReviewLike{
				Id: likeID.String,
				User: &protos.User{
					Id: likeUserID.String,
				},
			})
		}
	}

	return res, nil
}

func (s *Service) DeleteReviewLike(ctx context.Context, req *protos.DeleteReviewLikeRequest) (*protos.DeleteReviewLikeResponse, error) {
	if req.Like.Review.Product.Id == "" || req.Like.Review.Id == "" || req.Like.Id == "" {
		return nil, fmt.Errorf("product id, review id and like id are required")
	}

	_, err := s.db.ExecContext(ctx, `DELETE FROM reviews_likes WHERE product_id = $1 AND review_id = $2 AND like_id = $3;`, req.Like.Review.Product.Id, req.Like.Review.Id, req.Like.Id)
	if err != nil {
		log.WithError(err).WithField("like", req.Like).Error("error deleting review like")
		return nil, fmt.Errorf("error deleting review like")
	}

	return &protos.DeleteReviewLikeResponse{}, nil
}
