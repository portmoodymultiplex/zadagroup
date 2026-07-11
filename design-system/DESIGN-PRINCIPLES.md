# Zada Group — Design Principles

Rules for building new sections of zadagroup.ca in the brand style without asking. Read once, follow always. Tokens referenced here live in `tokens.css`.

---

## 1. The two typefaces and how they split the work

**Abigail (`--font-serif`)** is the display voice. Use it for:
- Every heading (h1 to h4), hero statements, section titles
- Serif prices on listing cards, big stat numbers, team member names
- Never below ~1.5rem. Abigail is a high-contrast face; small sizes lose the hairlines.

**Sweet Sans Pro (`--font-sans`)** is everything else: body copy, eyebrows, buttons, labels, nav, forms, captions, fine print. Default body weight is Light (300). Medium (500) is reserved for eyebrows, buttons, and labels.

**Hard rules:**
- Abigail has one upright face only. **Never set `font-style: italic` on Abigail.** The browser fakes a slant and it looks broken. Emphasis inside a heading is done with color, not italics (see next rule).
- The signature heading move: one accent word wrapped in `<strong>`, colored `--brown-warm`, same weight as the rest. Example: `The right move, made <strong>properly</strong>.` One accent word per heading, not two.
- Large serif headings get negative tracking: `--tracking-display` (-0.02em) at display size, `--tracking-tight` (-0.01em) below that.
- Body text never bolder than 400 except inline emphasis.

## 2. Casing and uppercase

- Headings and body are **sentence case**. Always.
- UPPERCASE is allowed in exactly four places: eyebrows, buttons, small labels (badges, specs lines, form labels, footer column headers), and the scroll cue.
- Uppercase is never set at default tracking. Minimum 0.14em (listing specs); eyebrows and labels use `--tracking-eyebrow` (0.2em); the scroll cue uses `--tracking-cue` (0.32em). The smaller the type, the wider the tracking.
- Uppercase text is always small (0.65rem to 0.82rem). Never set a heading in uppercase.

## 3. Color

- Three section worlds, and every section belongs to one:
  1. **Paper** (`--paper` / `--off-white`) for reading: guides, blog, forms.
  2. **Deep green** (`--green-deepest`) for brand and trust moments: stats, testimonials, footer.
  3. **Cinema black** (`--black-cinema`) for listings strips and full-bleed photography moments.
- Alternate dark/light down the page. Never two different dark worlds back to back. Max 1-2 background colors per page beyond paper.
- `--brown-warm` is the only accent, everywhere: eyebrows, accent words, hairlines, badges, filled buttons, stat numbers. **Never introduce a new hue.** Need a tint? Use the `--brown-08/15/25/40` opacity steps.
- Text on dark is off-white at opacity: `--ink-on-dark` (0.88) for body, `--ink-on-dark-soft` (0.70) for secondary, `--ink-on-dark-faint` (0.45) for fine print. Never pure white, never pure black.

## 4. Corners, borders, shadows

- **Sharp corners by default.** Cards, images, sections, badges: `border-radius: 0`.
- 6px (`--radius-sm`) on exactly two things: buttons and form inputs.
- Cards have no borders and no shadows. A card is an image with a hairline-divided text block under it.
- Hairlines are 1px: `--brown-25` on dark, `--hairline-dark` on light. Use them to divide stats, open card bodies, and top section heads.
- Shadows exist only for floating elements: contact form cards (`--shadow-card`), device mockups (`--shadow-lift`), cinematic overlays (`--shadow-cinema`). Never on hover, never on listing/team cards.

## 5. Spacing rhythm

- Page content maxes at `--max-width` (1440px); long-form reading at `--content-narrow` (880px).
- Horizontal padding is always `--gutter` (fluid 1.25rem to 4rem). Don't hardcode side padding.
- Vertical section padding is `--section-y` (fluid 4rem to 8rem); feature sections get `--section-y-lg`. Sections breathe; when in doubt, add space, don't fill it.
- Inside a section: eyebrow, then 1rem to heading, then 1.5rem to body, then 2.5rem to buttons. Grids gap at `--space-6` (2rem).
- Whitespace is a brand feature. Never add content to fill a gap.

## 6. Photography treatment

- Full-bleed architectural and interior photography, warm-toned. No stocky lifestyle cliches, no clip art, no illustration, no SVG scenes.
- Text never sits on a raw photo. Always apply a protection gradient in deep green, directional toward the text:
  - Hero (text bottom): `linear-gradient(to bottom, rgba(4,26,16,0.55), rgba(4,26,16,0.15) 50%, rgba(4,26,16,0.68))`
  - Statement band (text center): `linear-gradient(to bottom, rgba(4,26,16,0.88), rgba(4,26,16,0.15))`
  - Never use black scrims; always green-tinted (4,26,16).
- Image hover: zoom to `scale(1.04)` over `--dur-slow` (0.6s), inside an `overflow: hidden` crop. No lift, no shadow, no border change.
- Team portraits render at `grayscale(0.4)` and warm to full color on hover over 0.6s.
- Hero video: slow, loopable, minimal motion. Autoplay muted loop playsinline, poster frame supplied.

## 7. Motion

- The signature reveal: elements start `opacity: 0; translateY(40px)` and ease in over `--dur-reveal` (1.1s) with `--ease-out-soft` (cubic-bezier(0.16,1,0.3,1)), staggered `--reveal-stagger` (0.15s) between siblings. Trigger on scroll with IntersectionObserver (`.reveal` / `.is-visible` in base.css).
- Durations: 0.25s link fades, 0.4s button fills, 0.6s image zooms, 1.1s reveals. Nothing faster, nothing slower.
- **Never:** bounces, spins, parallax scroll-jacking, marquees, typewriter effects, count-up numbers.
- Respect `prefers-reduced-motion`: reveals become instant, smooth scroll off.

## 8. Buttons and interactive states

- Buttons are uppercase, 0.2em tracking, Medium weight, 6px radius, 1px border.
- Filled gold inverts to deep green on hover. Ghost buttons fill with their border color on hover. Transition 0.4s.
- Nav links draw a left-anchored brown underline on hover and shift to `--brown-warm`.
- Plain text links fade to `opacity: 0.7`.
- Focus is always visible: 2px `--brown-warm` outline, 2px offset.
- Max two buttons side by side; if two, one filled + one ghost. Never two filled.

## 9. Nav and footer

- Nav is fixed, transparent over the hero, and gains `rgba(4,26,16,0.95)` + `blur(16px) saturate(140%)` + a `--brown-15` bottom hairline after 40px of scroll, shrinking slightly.
- The wordmark is absolutely centered (`left: 50%; translateX(-50%)`) so links can never collide with it. Links collapse to a `☰` toggle below 1160px.
- Footer is always `--green-deepest`: white logo, brown uppercase column headers, off-white links at 0.8 opacity, hairline-divided legal bar.

## 10. Iconography

- The brand uses almost none. Prefer typography, photography, and the middot `·` separator ("House · 7 Bed · 6 Bath").
- Permitted glyphs: a thin-stroke down chevron (scroll cue), a play triangle in a brown circle (video), `☰` for mobile nav.
- If a new UI genuinely needs icons, use Lucide at 1.5px stroke, in `--brown-warm` or `--off-white`, sparingly. Flag it as an extension.
- No emoji, ever.

## 11. Writing rules (copy in new sections)

- Voice: casual, direct, human. "We" for the team, "you" for the reader.
- Facts do the work: specific numbers, dates, dollar figures. "Over 90% of our business comes from past clients."
- Short declaratives. Fragments for emphasis. "SOLD. Strategy and preparation matter."
- **No em dashes or en dashes.** Use commas, periods, or restructure. Middot `·` for spec separators.
- No filler vocabulary: "delve," "unlock," "elevate," "leverage," "robust," "in today's fast-paced world," "it's not just X, it's Y."
- PREC is written without an asterisk.

## 12. Breakpoints

- 1440px: content max-width.
- 1160px: nav links collapse to burger.
- 1024px: 3-up grids become 2-up; asymmetric splits stack.
- 768px: footer grid goes 2-column; tablet portrait adjustments.
- 640px: everything single column; buttons may go full-width; display type relies on the clamp() floors.

---

**The test for any new section:** if it feels loud, it's wrong. Quiet luxury: dark green, warm gold, generous space, one serif statement, photography doing the emotional work.
