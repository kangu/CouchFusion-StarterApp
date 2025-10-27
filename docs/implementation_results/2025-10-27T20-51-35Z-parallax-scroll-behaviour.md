# Initial Prompt
The Parallax component doesn't seem to be working, I see no change in scroll behaviour no matter what option I put in for "speed". Look at this for a simple implementation https://github.com/Lioruby/vue3-parallax. The idea is that for the center slot content to scroll at a different speed than the background.

## Plan
1. Implement scroll-driven parallax transforms for background and slot content using a rAF-updated state with cleanup.
2. Handle reduced-motion and speed prop reactivity; refine styles for new background/content structure.
3. Document parallax updates for nuxt-app-starter (component doc + implementation log).

## Implementation Summary
Rebuilt the Parallax content component with rAF-driven scroll tracking so the background and slot content translate at different speeds based on the `speed` prop, including reduced-motion fallbacks.

## Next Steps
- Evaluate whether exposing separate `contentSpeed`/`backgroundSpeed` props would offer finer creative control.
- Consider suspending scroll listeners via IntersectionObserver when the component is outside the viewport for additional performance gains on content-heavy pages.
