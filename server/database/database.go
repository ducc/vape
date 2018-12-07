package database

import (
	"database/sql"
	_ "github.com/lib/pq"
)

func Open(addr string) (*sql.DB, error) {
	db, err := sql.Open("postgres", addr)
	if err != nil {
		return nil, err
	}

	return db, nil
}
