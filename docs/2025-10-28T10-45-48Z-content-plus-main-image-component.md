# Implementation Documentation – Content Plus Main Image Component

## Initial Prompt
Build a ContentPlusMainImage component using the content props guide that matches the design in the attached screenshot. Make the image on the right side (for desktop). Make the image on the right slowly slide to the left as scrolling down, and slowly to the right when scrolling up. All parameters should be configurable from the component props [Screenshot 2025-10-28 at 12.23.27.png 3002x1610]

## Implementation Summary
Implemented a ContentPlusMainImage content block with fully configurable copy, color, spacing, and motion props plus a scroll-direction-sensitive image drift, and registered it in the content builder.

## Documentation Overview
- Added `app/components/content/ContentPlusMainImage.vue` with configurable typography, color palette, spacing, and scroll-aware image motion that respects reduced-motion settings.
- Implemented horizontal drift that reacts to scroll direction while easing and friction props keep the effect subtle and editor-tunable.
- Updated `app/content-builder/component-definitions.ts` so editors can configure every prop (including colors, motion tuning, and dividers) through the content builder UI.

## Implementation Examples
- Minimal content document entry:
  ```json
  [
    "content-plus-main-image",
    {
      "eyebrow": "100% RESPONSIVE",
      "eyebrowUppercase": true,
      "title": "Fully Responsive & Perfectly fit to all Screens.",
      "titleHighlight": "Screens.",
      "highlightColor": "#ff1f7d",
      "description": "Timisoara is responsive so the layout adapts to any device.",
      "imageSrc": "/images/marketing/hero-stack.png",
      "motionIntensity": 0.14,
      "maxImageShift": 42
    }
  ]
  ```
- Direct Vue usage:
  ```vue
  <ContentPlusMainImage
    eyebrow="100% Responsive"
    :eyebrow-uppercase="false"
    title="Experience pixel-perfect responsiveness."
    title-highlight="Everywhere."
    description="Ship polished pages that look great on phones, tablets, and desktops with zero extra work."
    image-src="/images/showcase/dashboard.png"
    :motion-intensity="0.1"
    :max-image-shift="48"
  />
  ```
