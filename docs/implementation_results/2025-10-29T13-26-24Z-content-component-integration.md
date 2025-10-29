# Initial Prompt
Inside layers/content/docs/extracted_component there is a component that I want to use instead of <ContentRenderer> for page rendering. Provide the step by step guide of integrating that into the host app so it's automatically available on all pages. Check the current /components folder structure in the content layer and propose the best solution for integration. Rename the component everywhere from ContentRenderer to Content so it doesn't conflict with the @nuxt/content module. Proceed with the integration steps as you laid them out.

# Plan
1. Migrate the extracted renderer into the content layer runtime, renaming it to `<Content>` and wiring up its supporting helpers.
2. Update each consuming catch-all page (including nuxt-app-starter) and the builder preview to render `<Content>` directly.
3. Smoke-test a content route via Playwright to confirm the new component renders without errors and record documentation updates.

# Implementation Summary
Embedded the extracted renderer into the content layer as a global `<Content>` component, updating consuming apps to render with it and avoiding collisions with @nuxt/content.

# Next Steps
- Audit remaining documentation references to `<ContentRenderer>` and update them to `<Content>` where clarity matters.
- If any app overrides the runtime renderer or injects slots, re-test those flows to ensure the new component name is respected.
- Consider adding a regression test (unit or e2e) that asserts `<Content>` stays globally available via the content layer.
