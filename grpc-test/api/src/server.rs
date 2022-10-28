use tonic::{transport::Server, Request, Response, Status };

use test::greeter_server::{Greeter, GreeterServer};
use test::{HelloReply, HelloRequest};

pub mod test {
    tonic::include_proto!("test");
}

#[derive(Debug, Default)]
pub struct GreeterService {}

#[tonic::async_trait]
impl Greeter for GreeterService {
    async fn say_hello(
        &self,
        request:Request<HelloRequest>,
    ) -> Result<Response<HelloReply>, Status> {
        println!("Got a request: {:?}", request);
        
        let reply = test::HelloReply {
            message: format!("Hello {}!", request.into_inner().name).into()
        };
        
        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:3000".parse()?;
    
    let greeter = GreeterService::default();
    let greeter = GreeterServer::new(greeter);
    let greeter = tonic_web::config()
        .allow_origins(vec!["127.0.0.1"])
        .enable(greeter);
    
    println!("GreeterServer listening on {}", addr);
        
    Server::builder()
        .accept_http1(true)
        .add_service(greeter)
        .serve(addr)
        .await?;
    
    Ok(())
}