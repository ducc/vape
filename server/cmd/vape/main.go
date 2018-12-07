package main

import (
	"flag"
	"github.com/ducc/vape/protos_go"
	"github.com/ducc/vape/server/services/products"
	"github.com/ducc/vape/server/services/reviews"
	"github.com/ducc/vape/server/services/search"
	"github.com/ducc/vape/server/services/users"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"net"
)

var (
	grpcAddr     string
	databaseAddr string
)

func init() {
	flag.StringVar(&grpcAddr, "grpc-addr", "127.0.0.1:8001", "grpc service address")
	flag.StringVar(&databaseAddr, "database-addr", "postgresql://root@Joes-MacBook-Pro.local:26257/vape?sslmode=disable", "postgres connection string")
}

func main() {
	flag.Parse()

	usersService, err := users.New(databaseAddr)
	if err != nil {
		log.WithError(err).Fatal("error creating users service")
	}

	productsService, err := products.New(databaseAddr)
	if err != nil {
		log.WithError(err).Fatal("error creating products service")
	}

	reviewsService, err := reviews.New(databaseAddr)
	if err != nil {
		log.WithError(err).Fatal("error creating reviews service")
	}

	searchService, err := search.New(databaseAddr)
	if err != nil {
		log.WithError(err).Fatal("error creating search service")
	}

	defer func() {
		usersService.Close()
		productsService.Close()
		reviewsService.Close()
		searchService.Close()
	}()

	lis, err := net.Listen("tcp", grpcAddr)
	if err != nil {
		log.WithError(err).Fatalf("failed to listen on addr %s", grpcAddr)
	}

	grpcServer := grpc.NewServer()

	protos.RegisterUsersServiceServer(grpcServer, usersService)
	protos.RegisterProductsServiceServer(grpcServer, productsService)
	protos.RegisterReviewsServiceServer(grpcServer, reviewsService)

	reflection.Register(grpcServer)

	log.Infof("grpc server listening on address %s", grpcAddr)

	if err := grpcServer.Serve(lis); err != nil {
		log.WithError(err).Fatal("failed to serve")
	}
}
