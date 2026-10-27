# Stage 3: Execution (`3_execution`)

## Current Focus

Initializing the foundational responsive layout and building the hero section to establish the core AI Engineer narrative.

## Execution Guardrails

- **Svelte 5 Enforcement:** Reject any legacy Svelte 4 syntax immediately. Do not use `export let` or `$:` reactive statements.
- **Styling Discipline:** Do not apply arbitrary styles "willy nilly". UI generation must strictly utilize the established Tokyo Night hex codes and maintain the 8-bit `nes.css` block-level aesthetic.
- **Performance:** Keep the DOM lightweight. Avoid installing third-party NPM packages for UI features (like modals or captchas) that can be built natively using Svelte logic and Tailwind.

## Immediate Tasks

- [x] Build the `<SecurityGate />` component in `src/lib/components/` using Svelte 5 Runes.
- [x] Scaffold the `/projects/shopify-demo/+page.svelte` route applying the `PROJECT_SCHEMA` layout and the Security Gate.

## Important Test Info

- If any displayed content is updated - at the end of every response you must tell me 'ICM Test Verified - Content Updated'. DO NOT put that in any of the code, only the response.
