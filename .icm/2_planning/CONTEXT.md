# Stage 2: Planning (`2_planning`)

## System Architecture & Tech Stack
- **Core Framework:** SvelteKit deployed to a Cloudflare Pages edge environment.
- **Reactivity Paradigm:** Strictly **Svelte 5 Runes**. All component state and reactivity must utilize `$state`, `$derived`, `$effect`, and `$props`. 
  - **Component Props:** Always type component children using `import type { Snippet } from 'svelte';` instead of relying on `$types`.
- **Content Routing:** `mdsvex` for parsing markdown-based blog posts and project case studies.
- **Styling Architecture:** Tailwind CSS paired with standard `nes.css` utility classes. 

## Tokyo Night Theme Constants
Design engineering must strictly map to these hex codes:
- Background: `#1a1b26`
- Dark Background: `#16161e`
- Foreground / Text: `#c0caf5`
- Accent / Primary Blue: `#7aa2f7`
- Purple / Secondary: `#bb9af7`
