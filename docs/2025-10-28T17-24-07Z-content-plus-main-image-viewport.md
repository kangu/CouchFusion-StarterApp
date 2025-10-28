# Implementation Documentation – Content Plus Main Image Viewport Activation

## Initial Prompt
The scroll animation should start when the element comes into the viewport through scrolling and should stop when the element exits the viewport.

## Implementation Summary
Constrained ContentPlusMainImage image drift to the viewport by using an IntersectionObserver so the slide only runs while the block is visible.

## Documentation Overview
- Added a section-level `IntersectionObserver` in `ContentPlusMainImage.vue` that toggles an `isActive` flag based on viewport intersection.
- Scroll deltas and requestAnimationFrame updates now early-exit when the component is off-screen, preventing drift when hidden and stopping the animation loop.
- Existing motion configuration (intensity, easing, max shift) continues to determine the in-viewport behaviour; when the block re-enters view, it resumes seamlessly from its stored offset.

## Implementation Examples
- To keep the image motion active only during visibility with unlimited travel:
  ```json
  [
    "content-plus-main-image",
    {
      "imageSrc": "/images/hero.png",
      "maxImageShift": 0,
      "motionIntensity": 0.12
    }
  ]
  ```
- To limit travel to 240px while retaining viewport-triggered motion:
  ```json
  [
    "content-plus-main-image",
    {
      "imageSrc": "/images/hero.png",
      "maxImageShift": 240,
      "motionIntensity": 0.1,
      "motionEasing": 0.2
    }
  ]
  ```
