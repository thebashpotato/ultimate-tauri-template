# setup the project
setup:
	fnm use
	pnpm run setup

# Format rust code, and typescript
format:
	cargo fmt --all
	fnm use
	pnpm run format

# Lint rust code with clippy, and typescript with prettier
lint:
	cargo clippy --all-targets --all-features --tests
	fnm use
	pnpm run lint

# Launch development build
dev:
	fnm use
	pnpm run tauri dev

# Remove Rust and Node artifacts
clean:
	rm -rf target
	rm -rf target_ra
	rm -rf node_modules
	rm -rf tauri-template-ui/node_modules
