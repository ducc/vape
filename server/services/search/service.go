package search

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"github.com/ducc/vape/protos_go"
	"github.com/ducc/vape/server/database"
	"strings"
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

var products = []string{"smok gx350 mod", "smok prince tank", "smok h-priv 2 kit", "aspire cleito pro tank", "aspire speeder 2 mod", "tec evo kit", "smok g-priv mod", "aspire proteus shisha"}

func (s *Service) Search(ctx context.Context, req *protos.SearchRequest) (*protos.SearchResponse, error) {
	if len(req.Query) == 0 {
		return nil, errors.New("query must not be empty")
	}

	query := strings.ToLower(req.Query)
	results := make([]*protos.Product, 0)

	for _, product := range products {
		if strings.Contains(product, query) {
			results = append(results, &protos.Product{
				Title: product,
			})
		}
	}

	return &protos.SearchResponse{Products: results}, nil
}
