# Cinemags Awards 2026 Frontend Handoff

This folder contains the standalone frontend prototype and the local image assets required by it.

## Run locally

Open `index.html` directly in a browser, or serve this directory with any static web server.

Example:

```bash
npx serve .
```

The page loads Tailwind CSS, DaisyUI, GSAP, html2canvas, Google Fonts, and Material Symbols from public CDNs, so an internet connection is required for the complete presentation and interaction set.

## Structure

```text
.
|-- index.html
|-- assets/
|-- docs/
|   |-- DESIGN.md
|   |-- TECH_STACK_HANDOFF.md
|   |-- TICKET_BACKGROUND_GUIDE.md
|   `-- cinemags_awards_2026_prd.md
|-- LICENSE
`-- README.md
```

## Backend integration

The frontend currently keeps categories, nominees, voter selections, and submission behavior in browser-side JavaScript inside `index.html`. The expected API contracts, database recommendations, security considerations, and integration flow are documented in `docs/TECH_STACK_HANDOFF.md`.

The backend team should replace the in-memory data and simulated submission flow with production API calls while preserving the existing DOM hooks and user experience.
