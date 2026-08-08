# Green Leaf Society — Design System

Reference: dark-mode adaptation of a bento-panel editorial layout (rounded panels, big centered
display type, horizontal marquees, small pill buttons) pushed toward streetwear-premium cannabis.

## Tone

Premium / elevated crossed with streetwear-bold. Copy is short, declarative, a little cocky.
"WELCOME TO THE SOCIETY." not "Welcome to our website."

## Color

| Token | Value | Use |
|---|---|---|
| `--gls-void` | `#0A0A0A` | Page canvas |
| `--gls-panel` | `#141414` | Bento panel fill |
| `--gls-panel-2` | `#1C1C1C` | Raised panel / hover |
| `--gls-line` | `rgba(245,245,240,0.10)` | Hairline borders |
| `--gls-acid` | `#B6FF3C` | Neon green accent — CTAs, active state, highlights |
| `--gls-acid-dim` | `#7FB82A` | Accent hover / pressed |
| `--gls-bone` | `#F5F5F0` | Primary text |
| `--gls-ash` | `#8A8A85` | Secondary text |
| `--gls-amber` | `#D9A05B` | Strain / terpene tags, oil warmth |

Rules: accent is used for emphasis, never decoration. At most one acid-green element per
viewport-third. Text is bone on void; never pure `#FFF` on pure `#000`.

## Typography

- **Display**: Chillax (Fontshare) — 600/700. Tight tracking (`-0.03em`), uppercase for headers.
- **Body**: Satoshi (Fontshare) — 400/500/700.
- Loaded via Fontshare CSS in `index.html`.

Scale (clamped, fluid):
- `display-xl` — hero: `clamp(3rem, 11vw, 9.5rem)`, leading `0.88`
- `display-lg` — section header: `clamp(2.25rem, 6vw, 5rem)`, leading `0.92`
- `display-md` — panel title: `clamp(1.5rem, 3vw, 2.5rem)`
- `body` — `1rem`/`1.65`
- `label` — `0.6875rem`, uppercase, tracking `0.18em`, ash

## Layout

- Max width `1400px`, gutter `clamp(1rem, 4vw, 2.5rem)`.
- **Bento panels** are the primary unit: `border-radius: 24px` (mobile `18px`), `--gls-panel` fill,
  1px `--gls-line` border, generous internal padding (`clamp(1.5rem, 3vw, 2.75rem)`).
- Asymmetric grids — a 12-col grid with panels spanning 7/5, 8/4, 4/4/4. Avoid uniform 3-ups.
- Section headers are **centered**, two lines max, with a small `label` eyebrow above.
- **Marquee strips** separate major sections: full-bleed, 1px borders top/bottom, acid or bone text,
  duplicated content, CSS `translateX` loop, `prefers-reduced-motion` safe.

## Texture

- Fine grain overlay on the body (SVG `feTurbulence`, `opacity: .035`, `pointer-events: none`).
- Radial green haze behind the hero and section transitions (`radial-gradient` blurred blob).
- Product panels get a subtle top-edge sheen: `linear-gradient(180deg, rgba(255,255,255,.05), transparent 40%)`.

## Components

- **Pill button** — `border-radius: 999px`, `height: 44px`, `padding: 0 22px`, `font-weight: 700`,
  `letter-spacing: .02em`. Primary = acid fill / void text. Secondary = bone fill / void text.
  Ghost = transparent + `--gls-line` border, hover fills `--gls-panel-2`.
- **ProductCard** — bento panel, square image well on `--gls-panel-2`, strain-type chip top-left,
  THC % top-right, name + price row, add-to-cart on hover (always visible on touch). Hover: lift
  `-4px`, border → `rgba(182,255,60,.35)`.
- **StrainBadge** — small pill, amber text on `rgba(217,160,91,.12)`.
- **Nav** — sticky, blurred `rgba(10,10,10,.72)` + hairline bottom border. Wordmark left, links
  center, cart button right with acid count bubble.
- **AgeGate** — full-screen void overlay, blurred backdrop, centered panel, 21+ confirm.
- **Footer** — oversized wordmark that bleeds off the bottom edge, link columns, compliance note.

## Motion

Motion (`motion/react`). One orchestrated load per page: staggered children, `y: 24 → 0`,
`opacity: 0 → 1`, 0.6s, `easeOut`, 60ms stagger. Marquees loop continuously. Card hovers are CSS
transforms only. Everything respects `prefers-reduced-motion`.

## UX patterns

- Age gate once per browser (localStorage `gls-age-ok`).
- Cart in localStorage + React context; opens as a right-side drawer.
- Every API call renders a skeleton in the panel shape it will fill.
- Filters are pill toggles, reflected in URL query so links are shareable.
- Compliance: 21+ notices, "for legal use only" footer line, no health claims.
