# Initial Prompt
I get this error: ContentImageField.vue:175 Uncaught (in promise) TypeError: value.replace is not a function
    at normalizeFolder (ContentImageField.vue:175:50)
    at isImageKitPath (ContentImageField.vue:184:27)
    at ensureAbsoluteUrl (ContentImageField.vue:198:8)
    at watch.immediate (ContentImageField.vue:212:24)

# Plan
1. Inspect the ContentPlusMainImage builder schema for non-string props using the `ContentImageField` UI or incorrect types.
2. Update the definitions so only image-string props use `ContentImageField`, numeric props leverage `number` fields, and document the fix.

# Implementation Summary
Corrected the ContentPlusMainImage builder metadata so only string props use ContentImageField and numeric motion props use number types, eliminating the value.replace error.

# Next Steps
- Refresh the content builder to confirm the image field no longer throws and that numeric inputs appear for motion settings.
- Review other custom components to ensure they do not assign `ContentImageField` to non-string props.
- Consider adding validation in the registry generator to flag mismatched UI components automatically.
