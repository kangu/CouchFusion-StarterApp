# Initial Prompt
Inside layers/content/docs/extracted_component there is a component that I want to use instead of <ContentRenderer> for page rendering. Provide the step by step guide of integrating that into the host app so it's automatically available on all pages. Check the current /components folder structure in the content layer and propose the best solution for integration. Rename the component everywhere from ContentRenderer to Content so it doesn't conflict with the @nuxt/content module. Proceed with the integration steps as you laid them out.

# Implementation Summary
Embedded the extracted renderer into the content layer as a global `<Content>` component, updating consuming apps to render with it and avoiding collisions with @nuxt/content.

# Documentation Overview
- Updated `app/pages/[...slug].vue` to render the shared `<Content>` runtime component provided by the content layer instead of the previous `<ContentRenderer>` alias.
- The catch-all page logic that fetches summaries and converts them with `contentToMinimalDocument` remains unchanged; only the render tag switched over.
- Because the content layer auto-registers runtime components globally, no additional imports were required inside the page.

# Implementation Examples
- The catch-all template now renders shared content documents like so:
  ```vue
  <Content v-else-if="pageDocument" :value="pageDocument" />
  ```
- Any custom page wanting to reuse the renderer can drop the same tag without manual registration thanks to the layer integration.
