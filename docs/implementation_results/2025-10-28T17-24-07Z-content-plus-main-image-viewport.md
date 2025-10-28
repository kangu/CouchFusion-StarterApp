# Initial Prompt
The scroll animation should start when the element comes into the viewport through scrolling and should stop when the element exits the viewport.

# Plan
1. Gate the ContentPlusMainImage scroll logic behind viewport detection so the slide only runs while visible.
2. Capture documentation updates reflecting the new in-viewport animation behaviour per repo rules.

# Implementation Summary
Constrained ContentPlusMainImage image drift to the viewport by using an IntersectionObserver so the slide only runs while the block is visible.

# Next Steps
- Manually verify on the running dev server that the animation awakens precisely as the block enters view and pauses once fully scrolled past.
- Capture a short clip for future docs demonstrating the viewport-triggered motion.
- If editors request lazy-loading adjustments for large images, consider integrating responsive sources or prefetch hints in a follow-up.
