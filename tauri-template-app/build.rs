fn main() {
    let manifest_dir = std::path::PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    assert_eq!(manifest_dir.file_name().unwrap(), "tauri-template-app");
    let build_dir = manifest_dir
        .parent()
        .unwrap()
        .join("tauri-template-ui/dist");
    if !build_dir.exists() {
        #[allow(clippy::expect_fun_call, clippy::create_dir)]
        std::fs::create_dir(&build_dir).expect(
            format!(
                "failed to create [tauri-template-ui] dist directory: {:?}",
                build_dir
            )
            .as_str(),
        );
    }

    tauri_build::build()
}
