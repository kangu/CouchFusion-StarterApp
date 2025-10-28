# Implementation Documentation – Content Plus Main Image Momentum

## Initial Prompt
As I scroll, the element should continue scrolling in the assigned direction slowly until it even gets off screen. Then scrolling back up slowly moves back the image into the opposite direction. The movement direction is always in sync with the scroll direction.

## Implementation Summary
Updated ContentPlusMainImage scroll physics to accumulate movement with scroll direction, letting the hero image glide past the viewport while keeping easing fully configurable.

## Documentation Overview
- Refined `app/components/content/ContentPlusMainImage.vue` so scroll deltas accumulate into the image offset with no friction decay, allowing unbounded travel (unless editors set `maxImageShift`).
- Kept motion smoothing via `motionEasing` while dropping friction, ensuring the image settles at its latest scroll-aligned offset when the user stops scrolling.
- Adjusted props and defaults: `maxImageShift` now defaults to unlimited travel (≤0 interpreted as infinite) and builder metadata mirrors the updated controls.

## Implementation Examples
- To leave the image unlimited:
  ```json
  [
    "content-plus-main-image",
    {
      "imageSrc": "/images/hero-stack.png",
      "motionIntensity": 0.14,
      "maxImageShift": 0
    }
  ]
  ```
- To constrain the travel to 320px while keeping the drift noticeable:
  ```json
  [
    "content-plus-main-image",
    {
      "imageSrc": "/images/hero-stack.png",
      "motionIntensity": 0.12,
      "maxImageShift": 320,
      "motionEasing": 0.22
    }
  ]
  ```
