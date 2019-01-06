package main

import (
	"context"
	"flag"
	"github.com/ducc/vape/protos_go"
	"github.com/ducc/vape/server/services/products"
	"github.com/ducc/vape/server/services/reviews"
	"github.com/ducc/vape/server/services/search"
	"github.com/ducc/vape/server/services/users"
	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	"github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"net"
	"net/http"
)

var (
	grpcAddr     string
	databaseAddr string
	logLevel string
)

func init() {
	flag.StringVar(&grpcAddr, "grpc-addr", "127.0.0.1:9211", "grpc service address")
	flag.StringVar(&databaseAddr, "database-addr", "postgresql://root@127.0.0.1:26257/vape?sslmode=disable", "postgres connection string")
	flag.StringVar(&logLevel, "log-level", "debug", "logrus logging level")
}

func main() {
	flag.Parse()

	if lvl, err := log.ParseLevel(logLevel); err != nil {
		log.WithError(err).Fatalf("error parsing logrus logging level %s", logLevel)
	} else {
		log.SetLevel(lvl)
	}

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
		if err := usersService.Close(); err != nil {
			log.WithError(err).Error("error closing users service")
		}
		if err := productsService.Close(); err != nil {
			log.WithError(err).Error("error closing products service")
		}
		if err := reviewsService.Close(); err != nil {
			log.WithError(err).Error("error closing reviews service")
		}
		if err := searchService.Close(); err != nil {
			log.WithError(err).Error("error closing search service")
		}
	}()

	lis, err := net.Listen("tcp", grpcAddr)
	if err != nil {
		log.WithError(err).Fatalf("failed to listen on addr %s", grpcAddr)
	}

	logrusEntry := log.NewEntry(log.StandardLogger())
	grpc_logrus.ReplaceGrpcLogger(logrusEntry)

	grpcServer := grpc.NewServer(
		grpc_middleware.WithUnaryServerChain(
			grpc_ctxtags.UnaryServerInterceptor(grpc_ctxtags.WithFieldExtractor(grpc_ctxtags.CodeGenRequestFieldExtractor)),
			grpc_logrus.UnaryServerInterceptor(logrusEntry),
		),
	)

	protos.RegisterUsersServiceServer(grpcServer, usersService)
	protos.RegisterProductsServiceServer(grpcServer, productsService)
	protos.RegisterReviewsServiceServer(grpcServer, reviewsService)
	protos.RegisterSearchServiceServer(grpcServer, searchService)

	reflection.Register(grpcServer)

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}

	if err := protos.RegisterUsersServiceHandlerFromEndpoint(context.Background(), mux, grpcAddr, opts); err != nil {
		log.WithError(err).Fatal("error registering user service handler")
	}
	if err := protos.RegisterProductsServiceHandlerFromEndpoint(context.Background(), mux, grpcAddr, opts); err != nil {
		log.WithError(err).Fatal("error registering products service handler")
	}
	if err := protos.RegisterReviewsServiceHandlerFromEndpoint(context.Background(), mux, grpcAddr, opts); err != nil {
		log.WithError(err).Fatal("error registering reviews service handler")
	}
	if err := protos.RegisterSearchServiceHandlerFromEndpoint(context.Background(), mux, grpcAddr, opts); err != nil {
		log.WithError(err).Fatal("error registering search service handler")
	}

	go func() {
		log.Infof("grpc server listening on address %s", grpcAddr)
		if err := grpcServer.Serve(lis); err != nil {
			log.WithError(err).Fatal("failed to serve grpc")
		}
	}()

	if err := http.ListenAndServe(":8123", mux); err != nil {
		log.WithError(err).Fatal("error serving on 8080")
	}
}
