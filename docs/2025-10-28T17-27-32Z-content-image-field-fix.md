# Implementation Documentation – Content Image Field Fix

## Initial Prompt
I get this error: ContentImageField.vue:175 Uncaught (in promise) TypeError: value.replace is not a function
    at normalizeFolder (ContentImageField.vue:175:50)
    at isImageKitPath (ContentImageField.vue:184:27)
    at ensureAbsoluteUrl (ContentImageField.vue:198:8)
    at watch.immediate (ContentImageField.vue:212:24)

## Implementation Summary
Corrected the ContentPlusMainImage builder metadata so only string props use ContentImageField and numeric motion props use number types, eliminating the value.replace error.

## Documentation Overview
- Updated `app/content-builder/component-definitions.ts` to remove the `ContentImageField` UI from non-image props (`imageAlt`, `maxImageShift`) and converted motion settings to numeric types.
- Ensures the image picker composable always receives string values, preventing `.replace` from running against numbers.
- Editors now see appropriate controls: text inputs for alt text, numeric inputs for motion tuning, and colour pickers for highlight hues.

## Implementation Examples
- Minimal content entry after the fix:
  ```json
  [
    "content-plus-main-image",
    {
      "imageSrc": "/images/hero.png",
      "imageAlt": "Marketing layout",
      "maxImageShift": 0,
      "motionIntensity": 0.12
    }
  ]
  ```
- Builder UI now surfaces numeric inputs for `maxImageShift`, `motionIntensity`, and `motionEasing` rather than image selectors.
