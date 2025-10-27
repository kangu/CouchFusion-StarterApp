# Implementation Documentation – Parallax Synced Layers

## Initial Prompt
I get the slot layer and the background layer scrolling separately. They should be in sync and just the frame around them should move with the adjusted speed.

## Implementation Summary
Aligned the parallax component layers to share a single scroll-derived offset so both slot content and background move together while the section drifts according to the `speed` prop.

## Documentation Overview
- Simplified `Parallax.vue` to compute one parallax offset value that feeds both the background and overlay transforms, keeping them visually locked.
- Reduced redundant state, keeping the existing rAF scroll measurement, reduced-motion handling, and prop reactivity intact.
- The effect now adjusts the whole frame’s motion speed without desynchronising foreground and background content.

## Implementation Examples
- `<Parallax background-image="/hero.jpg" :speed="0.35">` now keeps the slot content aligned with the background while shifting the entire section for the parallax feel.
- Set `speed="0"` to disable the drift entirely while maintaining the component structure.
