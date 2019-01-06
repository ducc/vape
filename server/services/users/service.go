package users

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

func (s *Service) GetUser(ctx context.Context, req *protos.GetUserRequest) (*protos.GetUserResponse, error) {
	var (
		id          string
		name        string
		timeCreated pq.NullTime
		timeUpdated pq.NullTime
	)

	if req.User.Id != "" {
		rows, err := s.db.Query(`SELECT name, time_created, time_updated FROM users WHERE user_id = $1 LIMIT 1;`, req.User.Id)
		if err != nil {
			log.WithError(err).WithField("user", req.User).Error("error querying users by user_id")
			return nil, fmt.Errorf("error getting user by user_id")
		}

		if !rows.Next() {
			return nil, fmt.Errorf("user does not exist")
		}

		if err := rows.Scan(&name, &timeCreated, &timeUpdated); err != nil {
			log.WithError(err).WithField("user", req.User).Error("error scanning rows")
			return nil, fmt.Errorf("error getting user by user_id")
		}

		id = req.User.Id
	} else if req.User.Name != "" {
		rows, err := s.db.Query(`SELECT user_id, time_created, time_updated FROM users WHERE name = $1 LIMIT 1;`, req.User.Name)
		if err != nil {
			log.WithError(err).WithField("user", req.User).Error("error querying users by name")
			return nil, fmt.Errorf("error getting user by name")
		}

		if !rows.Next() {
			return nil, fmt.Errorf("user does not exist")
		}

		if err := rows.Scan(&id, &timeCreated, &timeUpdated); err != nil {
			log.WithError(err).WithField("user", req.User).Error("error scanning rows")
			return nil, fmt.Errorf("error getting user by id")
		}

		name = req.User.Name
	} else {
		return nil, fmt.Errorf("id or name is required")
	}

	timestamps := &protos.Timestamps{
		Created: utils.ToTimestamp(timeCreated.Time),
	}

	if timeUpdated.Valid {
		timestamps.Updated = utils.ToTimestamp(timeUpdated.Time)
	}

	return &protos.GetUserResponse{
		User: &protos.User{
			Id:         id,
			Timestamps: timestamps,
			Name:       name,
		},
	}, nil
}

func (s *Service) CreateUser(ctx context.Context, req *protos.CreateUserRequest) (*protos.CreateUserResponse, error) {
	if req.User.Name == "" {
		return nil, fmt.Errorf("name is required")
	}

	// todo name validation

	_, err := s.db.Exec(`INSERT INTO users (name) VALUES ($1);`, req.User.Name)
	if err != nil {
		log.WithError(err).WithField("user", req.User).Error("error inserting user")
		return nil, fmt.Errorf("error creating user")
	}

	return &protos.CreateUserResponse{}, nil
}

func (s *Service) UpdateUser(ctx context.Context, req *protos.UpdateUserRequest) (*protos.UpdateUserResponse, error) {
	if req.User.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	if req.User.Name != "" {
		_, err := s.db.Exec("UPDATE users SET name = $1, time_updated = CURRENT_TIMESTAMP() WHERE user_id = $2;", req.User.Name, req.User.Id)
		if err != nil {
			log.WithError(err).WithField("user", req.User).Error("error updating user")
			return nil, fmt.Errorf("error updating user")
		}
	} else {
		return nil, fmt.Errorf("nothing to update")
	}

	return &protos.UpdateUserResponse{}, nil
}

func (s *Service) DeleteUser(ctx context.Context, req *protos.DeleteUserRequest) (*protos.DeleteUserResponse, error) {
	if req.User.Id == "" {
		return nil, fmt.Errorf("id is required")
	}

	_, err := s.db.Exec("DELETE FROM users WHERE user_id = $1;", req.User.Id)
	if err != nil {
		log.WithError(err).WithField("user", req.User).Error("error deleting user")
		return nil, fmt.Errorf("error deleting user")
	}

	return &protos.DeleteUserResponse{}, nil
}

func (s *Service) ListUsers(ctx context.Context, req *protos.ListUsersRequest) (*protos.ListUsersResponse, error) {
	// todo paging?

	rows, err := s.db.Query(`SELECT user_id, time_created, time_updated, name FROM users;`)
	if err != nil {
		return nil, fmt.Errorf("error listing users: %s", err)
	}

	res := &protos.ListUsersResponse{
		Users: make([]*protos.User, 0),
	}

	for rows.Next() {
		var (
			id          string
			name        string
			timeCreated pq.NullTime
			timeUpdated pq.NullTime
		)

		if err := rows.Scan(&id, &timeCreated, &timeUpdated, &name); err != nil {
			log.WithError(err).Error("error scanning row")
			return nil, fmt.Errorf("error listing users")
		}

		user := &protos.User{
			Id: id,
			Timestamps: &protos.Timestamps{
				Created: utils.ToTimestamp(timeCreated.Time),
			},
			Name: name,
		}

		if timeUpdated.Valid {
			user.Timestamps.Updated = utils.ToTimestamp(timeUpdated.Time)
		}

		res.Users = append(res.Users, user)
	}

	return res, nil
}
