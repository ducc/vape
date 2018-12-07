cd ..

# generate go protos
#protoc -I protos/ protos/protos.proto --go_out=plugins=grpc:protos_go/

# generate ts protos
#pbjs -t static-module -w commonjs -o protos_ts/protos.js protos/protos.proto
#pbts -o protos_ts/protos.d.ts protos_ts/protos.js

protoc -I=protos protos/protos.proto \
    --go_out=plugins=grpc:protos_go/ \
    --js_out=import_style=commonjs+dts:protos_ts/ \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:protos_ts/

cp -r protos_ts/ frontend/src/protos
