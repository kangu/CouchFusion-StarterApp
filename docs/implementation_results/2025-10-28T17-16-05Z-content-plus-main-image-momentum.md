# Initial Prompt
As I scroll, the element should continue scrolling in the assigned direction slowly until it even gets off screen. Then scrolling back up slowly moves back the image into the opposite direction. The movement direction is always in sync with the scroll direction.

# Plan
1. Refine ContentPlusMainImage scroll motion logic so offsets accumulate with scroll direction and tune defaults to allow off-screen travel.
2. Sync content builder definition defaults and exposed props with the revised motion behaviour.
3. Document the update with the required prompt, summary, overview, and examples.

# Implementation Summary
Updated ContentPlusMainImage scroll physics to accumulate movement with scroll direction, letting the hero image glide past the viewport while keeping easing fully configurable.

# Next Steps
- Smoke-test on the running dev server to validate the off-screen travel feels natural with real scroll velocity.
- Gather editor feedback on whether additional motion props (e.g., vertical drift or damping) should be exposed.
- Consider adding a visual regression or interaction test when the automated suite is back in scope to catch future motion regressions.
