# Cinemags Awards 2026 — Frontend

Standalone frontend for the Cinemags Awards 2026 public voting experience. The website lets visitors explore ten award categories, view nominee details, select one nominee per category, review their choices, and generate a shareable digital Voter Pass.

This folder is the clean frontend handoff. It contains only website code, static assets, and implementation documentation for the backend team.

## Main features

- Responsive award-category and nominee browsing
- One nominee selection per category with automatic category advancement
- Adaptive sticky navigation for mobile and desktop
- Vote progress, completion validation, and review flow
- Nominee detail modals
- Single-open Syarat & Ketentuan accordion
- Client-side 9:16 Voter Pass generation
- JPEG ticket download and native social sharing
- Responsive layouts and motion-enhanced interactions

## Frontend tech stack

| Area | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | Tailwind CSS v4 via CDN, DaisyUI v5 via CDN, custom CSS |
| Client logic | Vanilla JavaScript (ES6+) |
| Animation | GSAP 3 and ScrollTrigger |
| Ticket generation | HTML Canvas API and browser Blob/File APIs |
| Sharing | Web Share API with download fallback |
| Icons | Google Material Symbols and inline SVG |
| Typography | Google Fonts: Federo, DM Sans, and Fira Code |
| Assets | Local WebP and JPEG images |
| Hosting | Static deployment on Vercel |

There is no framework, package manager, compilation step, or frontend build pipeline. Application data and behavior currently live inside `index.html`.

## Run locally

Serve the directory through a static web server:

```bash
npx serve .
```

Then open the local URL printed by the server. Using a web server is recommended because direct `file://` access can restrict image processing and ticket downloads.

An internet connection is required for the CDN-hosted styles, animation libraries, fonts, and icon set.

## Project structure

```text
.
|-- index.html
|-- changelog.md
|-- assets/
|   |-- Logo.webp
|   |-- Trophy.webp
|   |-- ticket-bg.webp
|   `-- nominee posters and portraits
|-- docs/
|   |-- DESIGN.md
|   |-- TECH_STACK_HANDOFF.md
|   |-- TICKET_BACKGROUND_GUIDE.md
|   `-- cinemags_awards_2026_prd.md
`-- README.md
```

## Backend integration

The current frontend stores categories, nominees, vote selections, and simulated submission behavior in browser-side JavaScript. Before production voting opens, the backend team should replace the simulated submission flow with authenticated API calls and server-side validation.

Recommended backend responsibilities include:

- Serving category and nominee data
- Validating voting periods and submitted selections
- Preventing duplicate or automated votes
- Persisting voter and vote records securely
- Returning server-generated ticket or submission IDs
- Applying rate limits and abuse protection
- Providing production analytics and audit records

Expected API contracts, data recommendations, security considerations, and integration points are documented in `docs/TECH_STACK_HANDOFF.md`.

## Handoff notes

- Preserve the existing element IDs and interaction hooks when connecting APIs.
- Keep sensitive credentials and validation logic out of the browser.
- Optimize or move CDN dependencies into the production asset pipeline if required by the backend team’s deployment standards.
- Test ticket generation and native sharing on real mobile devices before release.
