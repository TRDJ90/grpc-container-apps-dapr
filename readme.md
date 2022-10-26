# Generate web based grpc client

``` bash
protoc -I=./proto test.proto \
    --js_out=import_style=commonjs,binary:./test-typescript \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:./test-typescript
```
