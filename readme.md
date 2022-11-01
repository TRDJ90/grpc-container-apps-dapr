# Generate web based grpc client

go to grpc-test and run the server with command: 
```bash
cargo run --bin api
```

https://github.com/timostamm/protobuf-ts/blob/master/MANUAL.md#code-size-vs-speed

```bash
npx protoc \
--ts_out ./src/generated/ \
--ts_opt long_type_string \
--proto_path ../../proto/ \
../../proto/test.proto
```

https://connect.build/docs/web/generating-code