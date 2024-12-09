use serde::Deserialize;
use tauri::{command, generate_handler};
use serde::Serialize;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[derive(Deserialize)]
#[derive(Debug)]
#[derive(Serialize)]
struct RequestParams {
    name: Option<String>,
}

#[tauri::command]
fn getEncodeHeader(params: RequestParams, appKey: &str, appSecret: &str) -> String {
    println!("params={}", serde_json::to_string(&params).unwrap());
    return format!("params = {:?}, appKey = {}, appSecret= {}", params, appKey, appSecret);
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![getEncodeHeader])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
