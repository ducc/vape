go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
go get -u github.com/golang/protobuf/protoc-gen-go

protoc -I/usr/local/include -I. \
    -I$GOPATH/src \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    --plugin=protoc-gen-grpc-gateway=$GOPATH/bin/protoc-gen-grpc-gateway \
    --grpc-gateway_out=logtostderr=true:../protos_go/ \
    --go_out=plugins=grpc:../protos_go/ \
    protos.proto
