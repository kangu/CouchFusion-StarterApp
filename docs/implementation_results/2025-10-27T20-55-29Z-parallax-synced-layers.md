# Initial Prompt
I get the slot layer and the background layer scrolling separately. They should be in sync and just the frame around them should move with the adjusted speed.

## Plan
1. Update the parallax logic to rely on a single scroll-derived offset that applies to both background and slot layers.
2. Retain reduced-motion handling and lifecycle cleanup, ensuring the adjusted offset responds to prop changes.
3. Document the synced-layer behaviour in the app docs and implementation log.

## Implementation Summary
Aligned the parallax component layers to share a single scroll-derived offset so both slot content and background move together while the section drifts according to the `speed` prop.

## Next Steps
- Monitor performance; consider pausing scroll tracking with IntersectionObserver when the section is off-screen if needed.
- Gather creative feedback on whether separate multipliers for frame/background should be exposed for fine tuning.
