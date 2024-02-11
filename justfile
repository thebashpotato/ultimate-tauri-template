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
