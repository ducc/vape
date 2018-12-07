package products

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/ducc/vape/protos_go"
	"github.com/ducc/vape/server/database"
	"github.com/ducc/vape/server/utils"
	"github.com/google/uuid"
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

func (s *Service) GetProduct(ctx context.Context, req *protos.GetProductRequest) (*protos.GetProductResponse, error) {
	if req.Product.Id != "" {
		rows, err := s.db.Query(productByIDQuery, req.Product.Id)
		if err != nil {
			log.WithError(err).WithField("product", req.Product).Error("error querying products by id")
			return nil, fmt.Errorf("error getting product by id")
		}

		if !rows.Next() {
			return nil, fmt.Errorf("product does not exist")
		}

		var (
			product = &protos.Product{
				Id:         req.Product.Id,
				Timestamps: &protos.Timestamps{},
				Images:     make([]*protos.ProductImage, 0),
				Links:      make([]*protos.ProductLink, 0),
			}

			productTimeCreated pq.NullTime
			productTimeUpdated pq.NullTime
			productTitle       string
			productDescription string
			imageID            sql.NullString
			imageType          sql.NullString
			imageURL           sql.NullString
			linkID             sql.NullString
			linkType           sql.NullString
			linkURL            sql.NullString
		)

		found := false
		for rows.Next() {
			if !found {
				found = true
			}

			if err := rows.Scan(&productTimeCreated, &productTimeUpdated, &productTitle, &productDescription, &imageID, &imageType, &imageURL, &linkID, &linkType, &linkURL); err != nil {
				log.WithError(err).WithField("product", req.Product).Error("error scanning rows")
				return nil, fmt.Errorf("error getting product by id")
			}

			product.Timestamps.Created = utils.ToTimestamp(productTimeCreated.Time)
			if productTimeUpdated.Valid {
				product.Timestamps.Updated = utils.ToTimestamp(productTimeUpdated.Time)
			}

			product.Title = productTitle
			product.Description = productDescription

			if imageID.Valid && imageType.Valid && imageURL.Valid {
				protosImageType := protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN
				if v, ok := protos.ProductImage_ProductImageType_value[imageType.String]; ok {
					protosImageType = protos.ProductImage_ProductImageType(v)
				}

				product.Images = append(product.Images, &protos.ProductImage{
					Id:   imageID.String,
					Type: protosImageType,
					Url:  imageURL.String,
				})
			}

			if linkID.Valid && linkType.Valid && linkURL.Valid {
				protosLinkType := protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN
				if v, ok := protos.ProductLink_ProductLinkType_value[imageType.String]; ok {
					protosLinkType = protos.ProductLink_ProductLinkType(v)
				}

				product.Links = append(product.Links, &protos.ProductLink{
					Id:   imageID.String,
					Type: protosLinkType,
					Url:  imageURL.String,
				})
			}
		}

		if found {
			return &protos.GetProductResponse{
				Product: product,
			}, nil
		} else {
			return nil, fmt.Errorf("product does not exist")
		}
	} else if req.Product.Title != "" {
		rows, err := s.db.Query(productByTitleQuery, req.Product.Title)
		if err != nil {
			log.WithError(err).WithField("product", req.Product).Error("error querying products by title")
			return nil, fmt.Errorf("error getting product by title")
		}

		if !rows.Next() {
			return nil, fmt.Errorf("product does not exist")
		}

		var (
			product = &protos.Product{
				Timestamps: &protos.Timestamps{},
				Title:      req.Product.Title,
				Images:     make([]*protos.ProductImage, 0),
				Links:      make([]*protos.ProductLink, 0),
			}

			productID          string
			productTimeCreated pq.NullTime
			productTimeUpdated pq.NullTime
			productDescription string
			imageID            sql.NullString
			imageType          sql.NullString
			imageURL           sql.NullString
			linkID             sql.NullString
			linkType           sql.NullString
			linkURL            sql.NullString
		)

		found := false
		for rows.Next() {
			if !found {
				found = true
			}

			if err := rows.Scan(&productID, &productTimeCreated, &productTimeUpdated, &productDescription, &imageID, &imageType, &imageURL, &linkID, &linkType, &linkURL); err != nil {
				log.WithError(err).WithField("product", req.Product).Error("error scanning rows")
				return nil, fmt.Errorf("error getting product by id")
			}

			product.Id = productID

			product.Timestamps.Created = utils.ToTimestamp(productTimeCreated.Time)
			if productTimeUpdated.Valid {
				product.Timestamps.Updated = utils.ToTimestamp(productTimeUpdated.Time)
			}

			product.Description = productDescription

			if imageID.Valid && imageType.Valid && imageURL.Valid {
				protosImageType := protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN
				if v, ok := protos.ProductImage_ProductImageType_value[imageType.String]; ok {
					protosImageType = protos.ProductImage_ProductImageType(v)
				}

				product.Images = append(product.Images, &protos.ProductImage{
					Id:   imageID.String,
					Type: protosImageType,
					Url:  imageURL.String,
				})
			}

			if linkID.Valid && linkType.Valid && linkURL.Valid {
				protosLinkType := protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN
				if v, ok := protos.ProductLink_ProductLinkType_value[imageType.String]; ok {
					protosLinkType = protos.ProductLink_ProductLinkType(v)
				}

				product.Links = append(product.Links, &protos.ProductLink{
					Id:   imageID.String,
					Type: protosLinkType,
					Url:  imageURL.String,
				})
			}
		}

		if found {
			return &protos.GetProductResponse{
				Product: product,
			}, nil
		} else {
			return nil, fmt.Errorf("product does not exist")
		}
	} else {
		return nil, fmt.Errorf("id or title are required")
	}
}

func (s *Service) CreateProduct(ctx context.Context, req *protos.CreateProductRequest) (*protos.CreateProductResponse, error) {
	if req.Product.Title == "" || req.Product.Description == "" || len(req.Product.Images) == 0 || len(req.Product.Links) == 0 {
		return nil, fmt.Errorf("title, description, images and links are required")
	}

	// todo validate inputs
	// todo resize images?

	for _, image := range req.Product.Images {
		if image.Url == "" {
			return nil, fmt.Errorf("image type and url are required")
		}
	}

	for _, link := range req.Product.Links {
		if link.Url == "" {
			return nil, fmt.Errorf("link type and url are required")
		}
	}

	transaction, err := s.db.BeginTx(ctx, &sql.TxOptions{}) // todo set isolation option
	if err != nil {
		log.WithError(err).WithField("product", req.Product).Error("error begining transaction")
		return nil, fmt.Errorf("error creating product")
	}

	id := uuid.New().String()

	_, err = transaction.ExecContext(ctx, `INSERT INTO products (product_id, title, description) VALUES ($1, $2, $3);`, id, req.Product.Title, req.Product.Description)
	if err != nil {
		log.WithError(err).WithField("product", req.Product).Error("error inserting product")
		return nil, fmt.Errorf("error creating product")
	}

	for _, image := range req.Product.Images {
		_, err := transaction.ExecContext(ctx, `INSERT INTO products_images (product_id, type, url) VALUES ($1, $2, $3);`, id, image.Type.String(), image.Url)
		if err != nil {
			log.WithError(err).WithField("product", req.Product).WithField("image", image).Error("error inserting product image")
			return nil, fmt.Errorf("error creating product")
		}
	}

	for _, link := range req.Product.Links {
		_, err := transaction.ExecContext(ctx, `INSERT INTO products_links (product_id, type, url) VALUES ($1, $2, $3);`, id, link.Type.String(), link.Url)
		if err != nil {
			log.WithError(err).WithField("product", req.Product).WithField("link", link).Error("error inserting product link")
			return nil, fmt.Errorf("error creating product")
		}
	}

	if err := transaction.Commit(); err != nil {
		log.WithError(err).Error("error committing transaction")
		return nil, fmt.Errorf("error creating product")
	}

	return &protos.CreateProductResponse{}, nil
}

// returns true if successful
type updateExecution func(context.Context, *sql.Tx) bool

func (s *Service) UpdateProduct(ctx context.Context, req *protos.UpdateProductRequest) (*protos.UpdateProductResponse, error) {
	if req.Product.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	executions := make([]updateExecution, 0)

	if req.Product.Title != "" {
		executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
			_, err := tx.ExecContext(ctx, `UPDATE products SET title = $1, time_updated = CURRENT_TIMESTAMP() WHERE product_id = $2;`, req.Product.Title, req.Product.Id)
			if err != nil {
				log.WithError(err).WithField("product", req.Product).Error("error updating product title")
			}
			return err == nil
		})
	}

	if req.Product.Description != "" {
		executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
			_, err := tx.ExecContext(ctx, `UPDATE products SET description = $1, time_updated = CURRENT_TIMESTAMP() WHERE product_id = $2;`, req.Product.Description, req.Product.Id)
			if err != nil {
				log.WithError(err).WithField("product", req.Product).Error("error updating product description")
			}
			return err == nil
		})
	}

	if len(req.Product.Images) > 0 {
		for _, image := range req.Product.Images {
			if image.Url == "" {
				return nil, fmt.Errorf("image url is required")
			}

			imageType := image.Type
			imageURL := image.Url

			if image.Id == "" {
				executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `INSERT INTO products_images (product_id, type, url) VALUES ($1, $2, $3);`, req.Product.Id, imageType, imageURL)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("image", image).Error("error inserting product image")
					}
					return err == nil
				}, func(i context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products SET time_updated = CURRENT_TIMESTAMP() WHERE  product_id = $1;`, req.Product.Id)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("image", image).Error("error updating products")
					}
					return err == nil
				})
			} else {
				imageID := image.Id

				executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products_images SET type = $1, url = $2 WHERE product_id = $3 AND image_id = $4;`, imageType, imageURL, req.Product.Id, imageID)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("image", image).Error("error updating product image")
					}
					return err == nil
				}, func(i context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products SET time_updated = CURRENT_TIMESTAMP() WHERE  product_id = $1;`, req.Product.Id)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("image", image).Error("error updating products timestamp")
					}
					return err == nil
				})
			}
		}
	}

	if len(req.Product.Links) > 0 {
		for _, link := range req.Product.Links {
			if link.Url == "" {
				return nil, fmt.Errorf("link url is required")
			}

			linkType := link.Type
			linkURL := link.Url

			if link.Id == "" {
				executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `INSERT INTO products_links (product_id, type, url) VALUES ($1, $2, $3);`, req.Product.Id, linkType, linkURL)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("link", link).Error("error inserting product link")
					}
					return err == nil
				}, func(i context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products SET time_updated = CURRENT_TIMESTAMP() WHERE  product_id = $1;`, req.Product.Id)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("link", link).Error("error updating products timestamp")
					}
					return err == nil
				})
			} else {
				linkID := link.Id

				executions = append(executions, func(ctx context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products_links SET type = $1, url = $2 WHERE product_id = $3 AND link_id = $4;`, linkType, linkURL, req.Product.Id, linkID)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("link", link).Error("error updating product link")
					}
					return err == nil
				}, func(i context.Context, tx *sql.Tx) bool {
					_, err := tx.ExecContext(ctx, `UPDATE products SET time_updated = CURRENT_TIMESTAMP() WHERE  product_id = $1;`, req.Product.Id)
					if err != nil {
						log.WithError(err).WithField("product", req.Product).WithField("link", link).Error("error updating products timestamp")
					}
					return err == nil
				})
			}
		}
	}

	if len(executions) == 0 {
		return nil, fmt.Errorf("nothing to update")
	}

	transaction, err := s.db.BeginTx(ctx, &sql.TxOptions{}) // todo isolation level
	if err != nil {
		log.WithError(err).WithField("product", req.Product).Errorf("error beginning transaction")
		return nil, fmt.Errorf("error updating product")
	}

	for _, execution := range executions {
		if ok := execution(ctx, transaction); !ok {
			return nil, fmt.Errorf("error updating product")
		}
	}

	if err := transaction.Commit(); err != nil {
		log.WithError(err).WithField("product", req.Product).Errorf("error committing transaction")
		return nil, fmt.Errorf("error upadting product")
	}

	return &protos.UpdateProductResponse{}, nil
}

func (s *Service) DeleteProduct(ctx context.Context, req *protos.DeleteProductRequest) (*protos.DeleteProductResponse, error) {
	if req.Product.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	_, err := s.db.ExecContext(ctx, `DELETE FROM products WHERE product_id = $1;`, req.Product.Id)
	if err != nil {
		log.WithError(err).WithField("product", req.Product).Error("error executing delete product")
		return nil, fmt.Errorf("error deleting prdouct")
	}

	return &protos.DeleteProductResponse{}, nil
}

func (s *Service) ListProducts(ctx context.Context, req *protos.ListProductsRequest) (*protos.ListProductsResponse, error) {
	rows, err := s.db.Query(listProductsQuery)
	if err != nil {
		log.WithError(err).Error("error executing list products query")
		return nil, fmt.Errorf("error listing products")
	}

	res := &protos.ListProductsResponse{
		Products: make([]*protos.Product, 0),
	}

	var product *protos.Product

	for rows.Next() {
		var (
			productID          string
			productTimeCreated pq.NullTime
			productTimeUpdated pq.NullTime
			productTitle       string
			productDescription string
			imageID            sql.NullString
			imageType          sql.NullString
			imageURL           sql.NullString
			linkID             sql.NullString
			linkType           sql.NullString
			linkURL            sql.NullString
		)

		if err := rows.Scan(&productID, &productTimeCreated, &productTimeUpdated, &productTitle, &productDescription, &imageID, &imageType, &imageURL, &linkID, &linkType, &linkURL); err != nil {
			log.WithError(err).Error("error scanning rows")
			return nil, fmt.Errorf("error listing products")
		}

		if product == nil || product.Id != productID {
			product = &protos.Product{
				Id: productID,
				Timestamps: &protos.Timestamps{
					Created: utils.ToTimestamp(productTimeCreated.Time),
				},
				Title:       productTitle,
				Description: productDescription,
				Images:      make([]*protos.ProductImage, 0),
				Links:       make([]*protos.ProductLink, 0),
			}

			res.Products = append(res.Products, product)

			if productTimeUpdated.Valid {
				product.Timestamps.Updated = utils.ToTimestamp(productTimeUpdated.Time)
			}
		}

		if imageID.Valid && imageType.Valid && imageURL.Valid {
			protosImageType := protos.ProductImage_PRODUCT_IMAGE_TYPE_UNKNOWN
			if v, ok := protos.ProductImage_ProductImageType_value[imageType.String]; ok {
				protosImageType = protos.ProductImage_ProductImageType(v)
			}

			product.Images = append(product.Images, &protos.ProductImage{
				Id:   imageID.String,
				Type: protosImageType,
				Url:  imageURL.String,
			})
		}

		if linkID.Valid && linkType.Valid && linkURL.Valid {
			protosLinkType := protos.ProductLink_PRODUCT_LINK_TYPE_UNKNOWN
			if v, ok := protos.ProductLink_ProductLinkType_value[imageType.String]; ok {
				protosLinkType = protos.ProductLink_ProductLinkType(v)
			}

			product.Links = append(product.Links, &protos.ProductLink{
				Id:   imageID.String,
				Type: protosLinkType,
				Url:  imageURL.String,
			})
		}
	}

	return res, nil
}
