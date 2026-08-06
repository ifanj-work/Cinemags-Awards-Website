# Digital Voter Ticket — Background and Layout Guide

## Visual direction

The ticket should feel cinematic, prestigious, and celebratory without competing with the voter's ten selections. Use the generated background as atmosphere, while keeping all logos, names, categories, selections, and hashtags as live HTML.

- Asset: `assets/ticket-bg.webp`
- Source size: 941 × 1672 px
- Aspect ratio: 9:16
- Palette: near-black `#0D0D0D`, charcoal `#181818`, gold `#D29E2F`, warm ivory `#F5E9CC`
- Motif: film strips and soft awards-night light restricted to the outer edges

## Layout map

The percentages below are relative to the ticket card.

| Zone | Position | Purpose |
| --- | --- | --- |
| Outer artwork | 0–12% left/right | Film-strip detail and gold accents |
| Top safe area | 5–15% height | Cinemags Awards logo |
| Main reading field | 12–88% width, 15–88% height | Ten selected categories and nominees |
| Footer safe area | 88–96% height | Campaign hashtags |

Keep important copy at least 12% away from both side edges. Do not place text over the brightest top or bottom highlights.

## Content hierarchy

1. Logo: centered, maximum width 42% of the card, with 20–24 px visual breathing room.
2. Selection list: one compact row per category, left-aligned for fast scanning.
3. Category label: gold, uppercase or display face, 9–11 px at the current 320 px card width.
4. Nominee: warm white, 10–12 px, one line where possible.
5. Footer hashtags: centered, gold, 9–10 px, with increased letter spacing.

Use 16–22 px internal padding at the rendered 320 px card width. Maintain at least 4 px between a category label and its nominee, and 6–8 px between rows.

## Background treatment

Apply the asset with `background-size: cover` and `background-position: center`. Add a subtle dark overlay above the image and below the content to stabilize contrast on different displays.

```css
.wrapped-card-9-16 {
  background:
    linear-gradient(rgba(5, 5, 5, 0.18), rgba(5, 5, 5, 0.28)),
    url("assets/ticket-bg.webp") center / cover no-repeat;
  border: 1px solid rgba(210, 158, 47, 0.55);
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.55),
    inset 0 0 40px rgba(0, 0, 0, 0.28);
}
```

All content must sit in a positioned layer above the background. Avoid additional large glows inside the card because the image already provides the visual framing.

## Readability rules

- Target at least 4.5:1 contrast for every nominee and category label.
- Keep the center dark; do not add texture or flare behind the selection list.
- Truncate unusually long nominee text gracefully rather than shrinking the entire ticket.
- Preserve 9:16 at all export sizes.
- Test the final ticket at 320 × 569 px and at a 1080 × 1920 px exported resolution.
- Keep all text, logos, and voter data out of the bitmap so the ticket remains dynamic and accessible.

## Export checklist

- Background covers the card without stretching.
- Logo is clear and does not touch the top highlight.
- All ten selection rows fit without internal scrolling.
- Footer remains above the bottom gold flare.
- No text is clipped at the card edges.
- Downloaded image matches the on-screen ticket.
