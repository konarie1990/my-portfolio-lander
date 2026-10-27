# Standard Project Page Schema

## Layout Structure
All project pages in `src/routes/projects/[slug]/+page.svelte` must follow this exact DOM structure:
1. **Page Title:** Wrapped in a `nes-container is-dark with-title`. The title sits at the very top.
2. **Content Grid:** The layout must be vertically stacked on all viewports (`flex-col`). The project image/screenshot sits at the top, spanning the width of the container. The body copy sits directly below it.
3. **Body Content:** Emphasize AI methodology, architecture, and business acceleration. Use `nes-text` classes for emphasis.
4. **Action Bar:** A flex row at the bottom of the body copy containing:
   - "View Project" link (`nes-btn is-primary`)
   - "GitHub Repo" link (`nes-btn`)

## Image Hosting
All project images must be stored locally in the `static/images/projects/` directory and referenced via absolute paths (e.g., `/images/projects/filename.png`).

## Storefront Security Modal
When linking to a protected Shopify demo, do not use a standard href. Instead, the 'View Live Project' button must trigger a `<SecurityCheckpoint>` modal component. This modal handles bot verification and reveals the store password.
