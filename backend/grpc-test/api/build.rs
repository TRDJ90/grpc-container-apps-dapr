fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto = &["../../../proto/test.proto"]; 
    let dir = &["../../../proto"];

    tonic_build::configure()
        .build_client(false)
        .compile(proto, dir)?;
        
    Ok(())
}