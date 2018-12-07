module github.com/ducc/vape/server

require (
	github.com/ducc/vape/protos_go v0.0.0
	github.com/golang/protobuf v1.2.0
	github.com/google/uuid v1.1.0
	github.com/lib/pq v1.0.0
	github.com/sirupsen/logrus v1.2.0
	golang.org/x/net v0.0.0-20181201002055-351d144fa1fc
	google.golang.org/genproto v0.0.0-20181101192439-c830210a61df // indirect
	google.golang.org/grpc v1.17.0
)

replace github.com/ducc/vape/protos_go => ../protos_go
