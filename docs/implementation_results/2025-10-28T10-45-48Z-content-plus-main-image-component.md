# Initial Prompt
Build a ContentPlusMainImage component using the content props guide that matches the design in the attached screenshot. Make the image on the right side (for desktop). Make the image on the right slowly slide to the left as scrolling down, and slowly to the right when scrolling up. All parameters should be configurable from the component props [Screenshot 2025-10-28 at 12.23.27.png 3002x1610]

# Plan
1. Review the content props guidance and finalize the prop schema needed to match the provided design and builder expectations.
2. Implement `ContentPlusMainImage.vue` with responsive layout, configurable styling props, and the scroll-direction-based image motion including reduced-motion fallbacks.
3. Extend the content builder registry so editors can configure the new component directly from the workbench.
4. Produce the required documentation artifacts summarizing the change, usage patterns, and suggested follow-ups.

# Implementation Summary
Implemented a ContentPlusMainImage content block with fully configurable copy, color, spacing, and motion props plus a scroll-direction-sensitive image drift, and registered it in the content builder.

# Next Steps
- Capture a follow-up screenshot or video once the live dev server showcases the motion effect for future documentation assets.
- Monitor editor feedback to determine if additional props (e.g., optional CTA button or alternate image alignment) are desired.
- Consider adding automated visual regression coverage for the new component when the Playwright suite resumes.
