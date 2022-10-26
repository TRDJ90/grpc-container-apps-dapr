/**
 * @fileoverview gRPC-Web generated client stub for test
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as test_pb from './test_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSayHello = new grpcWeb.MethodDescriptor(
    '/test.Greeter/SayHello',
    grpcWeb.MethodType.UNARY,
    test_pb.HelloRequest,
    test_pb.HelloReply,
    (request: test_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    test_pb.HelloReply.deserializeBinary
  );

  sayHello(
    request: test_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<test_pb.HelloReply>;

  sayHello(
    request: test_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: test_pb.HelloReply) => void): grpcWeb.ClientReadableStream<test_pb.HelloReply>;

  sayHello(
    request: test_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: test_pb.HelloReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.Greeter/SayHello',
        request,
        metadata || {},
        this.methodDescriptorSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.Greeter/SayHello',
    request,
    metadata || {},
    this.methodDescriptorSayHello);
  }

}

