# Implementation Documentation – Component Registry Autodetect

## Initial Prompt
Can you make the registry:build script work without setting --app parameter, by detecting from which folder it's executed?

## Implementation Summary
Updated registry scripts to leverage app auto-detection so nuxt-app-starter can regenerate its component registry without specifying --app.

## Documentation Overview
- Adjusted `package.json` scripts to call the shared cli-content tooling without passing `--app`.
- Relies on the generator's working-directory detection to resolve the app name automatically.

## Implementation Examples
- `bun run registry:build` now determines the app context from the nuxt-app-starter directory.
- `bun run registry:watch` can be invoked the same way for continuous updates.
