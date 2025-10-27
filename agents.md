# Tech Stack
- Framework: NuxtJS 4.1.2 with @nuxt/content@3.7.1
- Language: TypeScript
- UI/App Framework: TailwindCSS with @tailwindcss/vite@4.1.14
- Deployment to web using bun run build

# Build up knowledge
- Read up the documentation from https://nuxt.com/docs/3.x/getting-started/introduction and https://content.nuxt.com/docs/getting-started

# Commands
- Always use "bun run build" when building the project, no "npm"
- For component install, use "bun install", not npm

# Code Style
- Follow the eslint rules strictly
- Vue components have order of <script>, <template> then <style>
- Inside script setup, the sections are delimited by double comments and follow the order
  - props, composables, local data, computed, lifecycle, watchers, local page api
- Prefer arrow functions for component definitions.
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (e.g., import { foo } from 'bar')
- Follow Vue.js best practices for component structure and naming
- Use consistent indentation and spacing
- When implementing new function or components, always include and then keep updated JSDoc documentation
- When implementing a new component, always ask before if it should be an internal use only component for VueJS or
a dynamic content-based component where all its parameters are exposed through slots and props
and are instantiated through .md files in /content

# Visual considerations

# Do Not Touch
- Ignore everything from the dist folder as it contains build artefacts
- Always assume a live hot reload dev server is running on port 9000 and test using it
- Never start the dev server again, unless after a proposed restart
- Do not modify the node_modules/ directory

# Project Specific Instructions

As this projects is using functionality shared with other projects from the ../../layers folder
Current using "auth", "database", "orders" and "lightning". Scan these folders and and be up to date with
their feature so to reuse them whenever possible.

# Always Follow After Every Prompt!
- Do not execute lint on the project as the final task
- Do not nun "bun run build" and the end of the process for validation
- Persist inside docs/implementation_results folder the Implementation Summary dumped in the terminal for the current task. Between the Initial Prompt and the Implementation Summary, also include the Plan that was follwed to perform the implementation, then the proposed Next Steps.
The filename should be the normalized iso datetime timestamp plus the extracted relevant title for the feature/task that was worked on.
