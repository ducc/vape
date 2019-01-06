module github.com/ducc/vape/server

require (
	github.com/ducc/vape/protos_go v0.0.0
	github.com/gogo/protobuf v1.2.0 // indirect
	github.com/golang/protobuf v1.2.0
	github.com/google/uuid v1.1.0
	github.com/grpc-ecosystem/go-grpc-middleware v1.0.0
	github.com/grpc-ecosystem/grpc-gateway v1.6.3
	github.com/lib/pq v1.0.0
	github.com/sirupsen/logrus v1.3.0
	github.com/stretchr/testify v1.3.0 // indirect
	golang.org/x/crypto v0.0.0-20190103213133-ff983b9c42bc // indirect
	google.golang.org/grpc v1.17.0
)

replace github.com/ducc/vape/protos_go => ../protos_go
