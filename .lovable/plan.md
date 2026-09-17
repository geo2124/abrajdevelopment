# Abraj navigation, logo, and AI concierge

## What will change
- Show the full corporate header navigation from tablet/desktop widths onward, preserving the existing glass, hover, and dropdown effects.
- Remove the visible logo background, enlarge the wordmark, and keep it crisp over the header and footer.
- Add a branded floating Abraj AI concierge button on the right side of desktop screens.
- Add the same concierge entry point to the mobile app-style bottom navigation.
- Open a polished front-end chat panel with a welcome message, suggested questions, and a message field; label it as coming soon and keep responses non-interactive for now.

## Technical details
- Use the existing design tokens, typography, and button/dialog components.
- Build the chat surface from AI Elements primitives, as required for chat interfaces.
- Keep everything front-end only: no database, login, API, model usage, or AI credits.
- Optimize the supplied logo as a transparent project asset rather than placing it on a colored tile.
- Verify desktop and mobile layouts, menu dropdowns, chat opening/closing, and overlap with sticky navigation.
