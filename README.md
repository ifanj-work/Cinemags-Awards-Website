# Cinemags Awards 2026 - Official Event & Voting Platform

Official web platform and interactive public voting application for **Cinemags Awards 2026**, an annual appreciation event initiated by Cinemags to give recognition to the Indonesian film industry.

Slogan: *"Tonton Terus Film Indonesia"*  
Eligibility Period: Films released between January 2025 and June 2026.

---

## 🌟 Key Features & User Experience

- **Hero & Live Countdown**: Dynamic countdown timer counting down to the awards ceremony night with trophy statuette visuals.
- **Mobile-First Category Voting Wizard**: Interactive voting interface covering 8 award categories with a sticky category pill navigation bar.
- **Embedded HD Trailer Video Player**: Detailed nominee dialog modal featuring embedded official YouTube trailer video players, studio/genre tags, director info, and cast lists.
- **Selection Review Drawer**: Summary list of chosen nominees per category with 1-tap edit controls before final submission.
- **Zero-Friction Guest Voting**: Voters can cast their votes by entering only their Name and Email address without requiring password registration.
- **Digital Voter Pass Ticket Generator**: Generates an official cinema ticket receipt upon voting completion with 1-tap WhatsApp and X/Twitter social sharing buttons.
- **Ballot Predictor Mode**: Post-voting prediction game that calculates accuracy scores once official winners are announced.
- **Shareable Voter Persona Cards**: Spotify Wrapped-style story cards celebrating the user's movie voting persona.

---

## 🎨 Design System & Figma Specification

The visual interface is built according to the official Figma Design System (`Cinemags-Award-2025` - Node `3021:2`).
All design tokens are documented in [DESIGN.md](DESIGN.md).

- **Base Canvas**: Deep Cinema Obsidian (`#0D0D0D`) with elevated dark card containers (`#212121`).
- **Primary Brand Accents**:
  - **Cinemags Gold Gradient** (`#7D5912` to `#D29E2F`): Award recognition states, trophy glows, and active selection borders.
  - **Cinemags Crimson Red** (`#BF2121` to `#DC3737`): Primary conversion fill for the "Kirim Vote" submission action.
- **Typography Scale**:
  - **Federo** serif typography for prestigious award display headlines (80px / 133px).
  - **DM Sans** sans-serif typography for mobile UI body copy, forms, and buttons.
- **Iconography**: Google Material Symbols Outlined (`Google Icons`).
- **Accessibility & Contrast**: Strict WCAG AAA compliance with ultra-dark `#08090c` text on gold buttons achieving a **9.1:1 contrast ratio**.

---

## 🛠️ Fullstack Technical Architecture

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, TailwindCSS v4, DaisyUI v5, Zustand for LocalStorage vote state persistence.
- **Backend API**: Next.js Server Actions & Route Handlers with Zod input schema validation.
- **Database & Storage**: Supabase (PostgreSQL 16) with Supavisor connection pooler and Row Level Security (RLS).
- **Caching & Rate-Limiting**: Upstash Redis serverless rate-limiting (`HMAC-SHA256(email + salt + YYYYMMDD)`) enforcing 1 vote per category every 24 hours in `< 5ms`.
- **Anti-Bot Security**: Cloudflare Turnstile invisible CAPTCHA and Edge Middleware IP rate-limiting.
- **Async Queue & Email**: Upstash QStash for background email receipt delivery and Digital Voter Pass generation.

---

## 📁 Repository Structure

```
├── DESIGN.md                                  # Official Figma design system tokens & specification
├── cinemags_awards_2026.html                  # Interactive mobile-first frontend website prototype
├── cinemags_awards_2026_tech_stack.html       # Fullstack technical architecture blueprint
├── cinemags_awards_2026_design_review.html   # Interactive WCAG AAA design review report
└── data/                                      # Project context, learnings, and working preferences
```

---

## 🚀 How to Run Locally

Open `cinemags_awards_2026.html` directly in any web browser to explore the interactive mobile-first voting application, trailer modals, review drawer, and Digital Voter Pass generator.
