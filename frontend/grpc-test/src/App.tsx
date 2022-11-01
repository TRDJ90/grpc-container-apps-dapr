import { Component, createResource, Suspense, lazy } from 'solid-js';
import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport";
import { GreeterClient } from './generated/test.client'

const transport = new GrpcWebFetchTransport({baseUrl: 'http://localhost:3050'});
const client = new GreeterClient(transport);

const greeting = async () => {
  let {response} = await client.sayHello({ name: "test" });
  await new Promise(r => setTimeout(r, 5000));
  return response.message;
}

const App: Component = () => {
  const [resource, {mutate, refetch}] = createResource(greeting);
  
  return (
      <>
        <Suspense fallback={<p>Loading...</p>}>
            <h3>{resource}</h3>
        </Suspense>
      </>
  );
};

export default App;
