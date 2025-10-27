# Initial Prompt
Update the "content" module and the node builder workbench to include a "Clone" option, alongside "Expand" and "Remove", which should insert an identical clone right after the given element (after a short confirmation). Make sure the change works in the /builder inline system.

## Plan
1. Add builder node cloning logic and expose handler in Workbench, inserting duplicates after source node with confirmation.
2. Expose Clone action in NodeEditor UI and ensure text/component nodes use new handler.
3. Confirm inline builder workbench wiring and adjust if needed to pass clone support.
4. Document changes for content layer and nuxt-app-starter per guidelines (docs + implementation results).

## Implementation Summary
Added a clone workflow to the content builder, generating fresh UIDs and inserting duplicated nodes after confirmation for both component and text blocks across workbench and inline editors.

## Next Steps
- Consider adding undo/redo coverage for clone operations once the history stack is extended.
- Evaluate automated tests around clone behaviour in the Playwright suite when the dev server verification tasks resume.
