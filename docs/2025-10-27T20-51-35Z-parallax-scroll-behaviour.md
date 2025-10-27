# Implementation Documentation – Parallax Scroll Behaviour

## Initial Prompt
The Parallax component doesn't seem to be working, I see no change in scroll behaviour no matter what option I put in for "speed". Look at this for a simple implementation https://github.com/Lioruby/vue3-parallax. The idea is that for the center slot content to scroll at a different speed than the background.

## Implementation Summary
Rebuilt the Parallax content component with rAF-driven scroll tracking so the background and slot content translate at different speeds based on the `speed` prop, including reduced-motion fallbacks.

## Documentation Overview
- Replaced the CSS-only parallax mock with a scroll-aware setup that measures the section against the viewport centre and applies transforms via `requestAnimationFrame`.
- The background and foreground slot now translate in opposite directions with scaling based on the `speed` prop, giving a visible depth effect that responds to prop changes.
- Added reduced-motion detection plus lifecycle cleanup for scroll/resize handlers to keep accessibility and performance in check.

## Implementation Examples
- Render `<Parallax background-image="/hero.jpg" :speed="0.4">` to make the hero background drift slower than the overlaid content while still reacting to scroll.
- Set `speed="0"` when you want to freeze the effect without removing the component.
