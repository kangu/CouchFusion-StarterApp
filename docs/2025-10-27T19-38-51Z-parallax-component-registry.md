# Implementation Documentation – Parallax Component Registry

## Initial Prompt
Create a component under apps/nuxt-app-starter/app/components/content called Parallax ... ensure its props are correctly recognized by the registry:build script.

## Implementation Summary
Added a Parallax content component for nuxt-app-starter with customizable background, height, and parallax speed, ensuring props are detected by the registry generator.

## Documentation Overview
- Confirmed that the registry generator processes the new component and extracts its props via `bun run ../../cli-content/generate-component-registry.mjs`.
- Component props (`backgroundImage`, `height`, `speed`, `overlayColor`) now appear in the generated definitions for the content builder.

## Implementation Examples
- After editing the component, run `bun run registry:build` inside nuxt-app-starter to refresh definitions.
