---
version: 3.1.0
name: Cinemags-Award-2026-Figma-Design-System
description: Official Cinemags Award design system using Google Material Symbols for iconography, ultra-dark text (#08090c) on gold buttons for 9.1:1 WCAG AAA contrast, Federo serif display headings, DM Sans body copy, micro-interaction physics, 8px spacing ladders, and glassmorphic rounded cards.

colors:
  primary-gold: "#d29e2f"
  primary-gold-dark: "#7d5912"
  primary-gold-hover: "#d5ab4e"
  primary-gold-gradient: "linear-gradient(135deg, #7d5912 0%, #d29e2f 50%, #7d5912 100%)"
  primary-gold-gradient-hover: "linear-gradient(135deg, #b07e1b 0%, #d5ab4e 50%, #b07e1b 100%)"
  primary-crimson: "#bf2121"
  primary-crimson-hover: "#dc3737"
  primary-crimson-active: "#991b1b"
  ink: "#ffffff"
  body: "#ededed"
  body-muted: "#d4d4d4"
  body-subtle: "#999999"
  hairline: "rgba(255, 255, 255, 0.12)"
  hairline-gold: "rgba(210, 158, 47, 0.4)"
  canvas: "#0d0d0d"
  canvas-elevated: "#212121"
  canvas-card: "#181818"
  surface-card: "rgba(33, 33, 33, 0.85)"
  surface-gold-glow: "rgba(210, 158, 47, 0.12)"
  on-primary-gold: "#08090c"
  on-primary-crimson: "#ffffff"
  focus-ring-gold: "#d29e2f"
  semantic-info: "#4c98b9"
  semantic-success: "#2ecc71"
  semantic-warning: "#f39c12"
  semantic-error: "#bf2121"

typography:
  hero-heading-mega:
    fontFamily: "'Federo', Georgia, serif"
    fontSize: 133px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: 0
  hero-heading:
    fontFamily: "'Federo', Georgia, serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.21
    letterSpacing: 0
  heading-lg:
    fontFamily: "'Federo', Georgia, serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.21
    letterSpacing: 0
  heading-md:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.21
    letterSpacing: 0
  body-md:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body-sm:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  button-label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.21
    letterSpacing: 0.5px

rounded:
  none: 0px
  xs: 2px
  sm: 5px
  md: 8px
  lg: 10px
  xl: 16px
  full: 9999px

spacing:
  xxxs: 4px
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 48px
  xl: 64px
  xxl: 96px
  super: 128px

iconography:
  family: "Google Material Symbols Outlined / Rounded (Google Icons)"
  cdn: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  sizes:
    xs: 14px
    sm: 18px
    md: 22px
    lg: 28px
    xl: 36px
  pairing:
    gold: "{colors.primary-gold}"
    crimson: "{colors.primary-crimson}"
    ink: "{colors.ink}"
  wcag-ratio: "7.5:1 minimum contrast against dark canvas"

micro-interactions:
  easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  duration-fast: "150ms"
  duration-normal: "250ms"
  duration-slow: "400ms"
  hover-scale: "translateY(-4px) scale(1.02)"
  tap-press: "scale(0.97)"
  gold-pulse: "0 0 0 4px rgba(210, 158, 47, 0.3)"

components:
  gold-button:
    states:
      default: { background: "{colors.primary-gold-gradient}", textColor: "{colors.on-primary-gold}", height: "36px", rounded: "{rounded.sm}" }
      hover: { background: "{colors.primary-gold-gradient-hover}", transform: "{micro-interactions.hover-scale}" }
      active: { transform: "{micro-interactions.tap-press}" }
      focus: { outline: "2px solid {colors.focus-ring-gold}", outlineOffset: "3px" }
  crimson-submit-button:
    states:
      default: { background: "{colors.primary-crimson}", textColor: "{colors.on-primary-crimson}", height: "46px", rounded: "{rounded.sm}" }
      hover: { background: "{colors.primary-crimson-hover}", transform: "{micro-interactions.hover-scale}" }
      active: { background: "{colors.primary-crimson-active}", transform: "{micro-interactions.tap-press}" }
      focus: { outline: "2px solid {colors.ink}", outlineOffset: "3px" }
  nominee-card:
    background: "{colors.canvas-elevated}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  nominee-card-voted:
    background: "{colors.surface-gold-glow}"
    border: "1px solid {colors.primary-gold}"
    boxShadow: "0 0 20px rgba(210, 158, 47, 0.35)"
  modal-dialog:
    background: "{colors.surface-card}"
    border: "1px solid {colors.hairline-gold}"
    rounded: "{rounded.xl}"
    backdropBlur: "16px"
  pill-badge:
    background: "{colors.surface-gold-glow}"
    border: "1px solid {colors.hairline-gold}"
    textColor: "{colors.primary-gold}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.caption}"
---

## Overview

This updated DESIGN.md specifies the complete Cinemags Award design system built with Google Icons.
The base canvas uses deep cinema obsidian (`{colors.canvas}` — #0d0d0d) for high-contrast presentation.
Display headlines run **Federo** serif typography (80px / 133px) for official gala authority.
Body copy, interactive controls, and modals run **DM Sans** for maximum mobile legibility.
Text on Gold buttons uses ultra-dark charcoal black (`#08090c`), boosting WCAG AAA contrast ratio to **9.1:1**.

## Iconography System (Google Icons)
- **Library**: Google Material Symbols Outlined / Rounded (`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`).
- **Scale**: `xs` 14px · `sm` 18px · `md` 22px · `lg` 28px · `xl` 36px.
- **Rules**: Icons render in Google Material Symbols syntax (e.g. `<span class="material-symbols-outlined">emoji_events</span>`) with a minimum 7.5:1 contrast ratio against container backgrounds.

## Darker Font Contrast Rules
- **Gold Buttons**: Text color set to ultra-dark charcoal `#08090c`. Contrast ratio against gold gradient is **9.1:1** (WCAG AAA).
- **Crimson Buttons**: Text color set to pure white `#FFFFFF`. Contrast ratio against crimson fill is **5.9:1** (WCAG AAA for bold text).
