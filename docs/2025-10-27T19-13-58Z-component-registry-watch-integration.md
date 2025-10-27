# Implementation Documentation – Component Registry Watch Integration

## Initial Prompt
Implement the previous plan and keep everything inside  cli-content folder. Make the package.json changes into the "nuxt-app-starter" app

## Implementation Summary
Connected nuxt-app-starter package scripts to the shared cli-content registry tools, enabling one-off and watch-based registry generation via Bun.

## Documentation Overview
- Added `registry:build` and `registry:watch` scripts that delegate to `cli-content` tooling, keeping component registry files current during development.
- The watch command calls `watch-component-registry.ts`, which listens for `.vue` changes and triggers the generator automatically.

## Implementation Examples
- `bun run registry:build` regenerates component definitions for nuxt-app-starter once.
- `bun run registry:watch` starts a watcher that keeps the registry in sync while editing components.
