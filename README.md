# Ultimate Tuari Template

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> **Start your project off on the right foot**.

The default tauri application setup works, but for larger projects it can become difficult.
This template uses cargo workspaces in order to allow the developer to seperate their rust code
into libraries, rather than packing it all into the `src-tauri` folder, as well as have more contorl
over their front-end code.


## Table of Contents

- [Tech-Stack](#tech-stack)
- [Usage](#usage)
- [Install](#install)
- [Contributing](#contributing)
- [License](#license)

## Tech-Stack

1. **React** - Main library for building interactive stuff
2. **Vite** - The build system.
3. **Tailwind** - your css library.
4. **Shadcn/ui** - Will probably kill off component libraries in the future.
5. **TypeScript** - JavaScript with Types.
6. **pnpm** -  Better than npm, and probably yarn too.
7. **Tauri** - Framework for building tiny, blazingly fast binaries for all desktop platforms.
8. **just** - Modern cross-platform command runner, basically a better GNU make.

### Other features

1. Pre-configured `cippy` lints
2. Pre-configured `prettier`
3. Pre-configured `eslint`
4. Pre-configured debugging (check out the `.vscode/launch.json`)

## Usage

1. To make the template yours, use ripgrep as so: `rg "tauri-template" --hidden`.
2. Change every occurance of "tauri-template" to whatever your application name is.
3. Start building.

## Install

A few tools will need to be installed first (assuming you have rust and node/npm installed)

1. Install pnpm (A better package manager for node) `npm install -g pnpm`
2. Install just (A modern cross-platform command runner, replaces GNU Makefiles) `cargo install just`

Now you can set up the project

1. Install dependences and compile `just setup`
2. Run the desktop application in development mode `just dev`


## Contributing

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

### Any optional sections

## License

[MIT © Matt Williams.](../LICENSE)
