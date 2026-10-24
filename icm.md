# IN-CONTEXT MEMORY (ICM) - RON HAJEWSKI PORTFOLIO

## 1. THE DEVELOPER (USER PERSONA)
*   **Name:** Ron Hajewski (Senior Web Developer)
*   **Location:** Westminster, Colorado (Denver Metro)
*   **Hardware/Environment:** M1 MacBook Air (16GB RAM, 1TB SSD), macOS. 
*   **Primary IDE:** Antigravity IDE (DO NOT assume VS Code or cursor).
*   **Professional Background:** ~10 years experience. Formerly Web Developer & Storefront Lead at HumanN. Previous roles span front-end development at Giddy Holdings, self-taught founder/developer of Konarie Music LLC (built the Konarie Chirp synth plugin for Reason Studios), and enterprise tech sales (Apple, Informatica).
*   **Core Philosophy:** Software development must always be framed and executed as a *business accelerator*, never a bottleneck. 
*   **Technical Profile:** Prefers lightweight, self-hosted, high-performance web tooling over heavy monolithic frameworks. Expert in Shopify Plus, custom Liquid themes, AWS serverless solutions, and modern front-end frameworks (SvelteKit).
*   **Hobbies & Tinkerings:** Designing pixel art and 8-bit game assets (Aseprite, PixelLab AI). Building local AI workflows (Ollama, Aider). Flashing custom ZMK firmware for mechanical keyboards. Modifying a 2018 Jeep Wrangler JKU Sport (4.88 re-gearing, Eaton ELockers). 

## 2. THE PROJECT (ARCHITECTURE & GOALS)
*   **Project:** Personal developer portfolio and landing page.
*   **Framework:** SvelteKit (Locked to v3.0.0 for Cloudflare environment compatibility), Tailwind CSS, mdsvex (for Markdown blog parsing).
*   **Deployment:** Cloudflare Pages (Node.js v22.16.0 edge environment).
*   **Design Language:** 8-bit / retro-styled layout. Incorporate pixel art assets designed in Aseprite.
*   **Core Features Needed:** 
    *   Hero section linking to a Shopify development portfolio (with a custom "captcha" password gate).
    *   `/blog` routing for markdown-based articles.
    *   `/games` routing for small Svelte-based browser games (e.g., 8-bit animated dice roller).
    *   Future implementation of a "local" LLM chatbot interface.

## 3. AGENTIC DIRECTIVES & BEHAVIOR (JAKE VAN CLIEF METHODOLOGY)
*   **Strict Styling Rules:** DO NOT style components "willy nilly." If explicit styling instructions or changes were previously established, adhere to them strictly. Only apply CSS/Tailwind classes that fit the 8-bit/retro aesthetic or have been directly requested.
*   **Proactive Terminal Monitoring:** Continuously monitor terminal output. If an error, stack trace, or build failure is detected in the terminal, proactively analyze the issue, explain the root cause, and execute the fix without waiting for explicit permission.
*   **No Unnecessary Bloat:** Favor vanilla Svelte logic and standard Tailwind utility classes. Do not install heavy third-party NPM packages for things that can be easily built natively (e.g., build custom Svelte captchas/modals instead of relying on external libraries).
*   **Contextual Awareness:** Remember that this site serves as a resume for software engineering and design engineering roles (targeting companies like Extend or Park Street). The code quality must reflect a senior-level architectural mindset.