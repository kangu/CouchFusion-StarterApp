# Initial Prompt
Update the Clone and Remove buttons to have button styling like the Expand/Collapse one, but only include small icons, no text. Keep icon + text on expand/collapse button.

## Plan
1. Update `NodeEditor` buttons to reuse the toggle styling while rendering icon-only markup for clone/remove with accessible labels.
2. Extend the scoped styles with icon-specific modifiers and colour variants so the new controls match the existing toggle aesthetic.
3. Record documentation updates for the content layer and nuxt-app-starter implementation log.

## Implementation Summary
Reworked builder clone/remove controls to reuse the primary toggle styling with icon-only buttons, providing consistent affordances while keeping expand/collapse text intact.

## Next Steps
- Validate hover/focus states in the running dev build to ensure colour contrast remains acceptable.
- Consider sharing the icon assets via dedicated components if additional actions adopt the same visual language.
