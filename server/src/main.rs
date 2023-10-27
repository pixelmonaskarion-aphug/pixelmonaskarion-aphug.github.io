use std::{fs, io::Error};

use rocket::{Request, catch, fs::FileServer, http::ContentType, catchers};

#[catch(404)]
fn not_found(_req: &Request) -> Result<(ContentType, String), Error> {
        return Ok((ContentType::HTML, fs::read_to_string("../code/build/index.html")?));
}

#[rocket::main]
async fn main() {
    rocket::build()
        .register("/", catchers![not_found])
        .mount("/", FileServer::from("../code/build"))
        .launch()
        .await
        .unwrap();
}