use test::greeter_client::GreeterClient;
use test::HelloRequest;

pub mod test {
    tonic::include_proto!("test");
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut client = GreeterClient::connect("http://[::1]:50051").await?;
    
    let request = tonic::Request::new(HelloRequest {
        name: "Tonic".into(),
    });
    
    let response = client.say_hello(request).await?;
    
    println!("RESPONSE={:?}", response);
    
    Ok(())
}

