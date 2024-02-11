# setup the project
setup:
    pnpm run setup

# Format rust code, and typescript
format:
    cargo fmt --all
    pnpm run format

# Lint rust code with clippy, and typescript with prettier
lint:
    cargo clippy --all-targets --all-features --tests
    pnpm run lint

# Launch development build
dev:
    pnpm run tauri dev

# Remove Rust and Node artifacts
clean:
    rm -rf target
    rm -rf target_ra
    rm -rf node_modules
    rm -rf tauri-template-ui/node_modules
