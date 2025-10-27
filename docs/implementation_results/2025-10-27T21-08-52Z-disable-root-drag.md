# Initial Prompt
When a node from the node editor is expanded, make sure to remove the drag support for the outer element. Make sure inside dragging of list elements is still working.

## Plan
1. Track expanded state from NodeEditor and disable root drag interactions when expanded.
2. Ensure Workbench template reflects expansion state (draggable attr, drag handlers) without breaking internal list drag.
3. Document the change for the content layer and log implementation results for nuxt-app-starter.

## Implementation Summary
Tracked NodeEditor expansion state and disabled root-level dragging while panels are open, without affecting the existing array item drag-and-drop interactions.

## Next Steps
- Consider dimming or disabling the drag handle visually when expanded to reinforce the state change.
- Revisit once undo/redo lands to ensure expansion state interacts correctly with potential history features.
