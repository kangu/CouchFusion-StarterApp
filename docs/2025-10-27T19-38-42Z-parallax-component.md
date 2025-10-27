# Implementation Documentation – Parallax Component

## Initial Prompt
Create a component under apps/nuxt-app-starter/app/components/content called Parallax which contains a customizable height element with a background image, parallax effect while scrolling and central slot that can handle multiple components.

## Implementation Summary
Added a Parallax content component for nuxt-app-starter with customizable background, height, and parallax speed, ensuring props are detected by the registry generator.

## Documentation Overview
- Added `app/components/content/Parallax.vue` implementing reactive props (`backgroundImage`, `height`, `speed`, `overlayColor`) and a centered slot overlay.
- Component uses CSS-based parallax/fallbacks without new dependencies and is compatible with prefers-reduced-motion.
- Verified that `bun run registry:build` registers the component props for the content builder.

## Implementation Examples
- `<Parallax background-image="/hero.jpg" height="70vh" :speed="0.5"><h1>Hero</h1></Parallax>` renders a hero section with parallax background and centered slot content.
