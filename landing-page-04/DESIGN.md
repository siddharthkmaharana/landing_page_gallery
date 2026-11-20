# Epoch Press — Style Reference
> Broadsheet editorial landing hero and interactive 3D WebGL bookshelf

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Epoch Press is a high-energy, broadsheet-inspired literary landing page designed for an independent publisher showcasing its 32-title autumn catalog. The interface merges traditional print broadsheet typography—characterized by dramatic serifs, dateline tickers, and multi-rule mastheads—with a high-performance 3D WebGL interactive bookshelf and a realistic dual-page PageFlip reader. The page operates within a fixed, non-scrolling viewport on an obsidian canvas (#09090b) punctuated by bone text (#f7f4ea), muted ash metadata (#9c978d), and vibrant high-contrast accents: funky vermilion (#ff3811), energetic yellow (#ffea00), and deep cobalt (#1652ff). Micro-interactions combine continuous spring physics (K 70, damping 12.5) with bezier flight curves and SVG film grain.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian Canvas | `#09090b` | `--bg` | Page background canvas, non-scrolling viewport base |
| Ticker Surface | `#0e0f14` | `--bg-ticker` | Top dateline ticker bar and ribbon backdrop |
| Deep Surface | `#131418` | `--bg-surface` | Glass pill containers, card surfaces, and reader chrome backdrops |
| Bone White | `#f7f4ea` | `--text-bone` | Primary headlines, masthead titles, reader text, and high-contrast labels |
| Ash Gray | `#9c978d` | `--text-ash` | Secondary metadata, author bylines, catalog tags, and idle nav items |
| Hairline Rule | `rgba(247, 244, 234, 0.14)` | `--rule` | 1px dividers, ticker bottom border, and shelf ribbon boundaries |
| Light Rule | `rgba(247, 244, 234, 0.22)` | `--rule-light` | Medium-emphasis rules, book card dividers, and subtle outlines |
| Strong Rule | `rgba(247, 244, 234, 0.38)` | `--rule-strong` | Masthead bottom border, kicker rules, and emphasized separators |
| Funky Vermilion | `#ff3811` | `--funky-vermilion` | Primary high-energy accent: catalog numbers, CTA buttons, active indicators |
| Funky Yellow | `#ffea00` | `--funky-yellow` | Secondary energetic accent: edition badges, button hover offsets, highlights |
| Funky Cobalt | `#1652ff` | `--funky-cobalt` | Ambient top-left counter-glow and subtle cool illumination |
| Accent Ember | `#ff3811` | `--accent-ember` | Dynamic catalog tag ember highlight (aliased to funky vermilion) |
| Book Paper | `#f4eee3` | `--book-paper` | Page-flip reader page surface, warm off-white book leaf texture |
| Book Ink | `#14120e` | `--book-ink` | Typeset chapter text, running heads, folios, and title page typography |

## Tokens — Typography

### DM Serif Display — Sculptural display serif with high stroke contrast, elegant terminals, and tight tracking (-0.035em). Used for the giant heroic masthead wordmark ("Epoch"), section titling, and book covers. · `--font-masthead`
- **Substitute:** DM Serif Display, Playfair Display, Georgia, serif
- **Weights:** 400
- **Sizes:** 28px, 44px, min(44vh, 32vw)
- **Line height:** 0.82–1.1
- **Letter spacing:** -0.035em to -0.02em
- **Role:** Hero wordmark ("Epoch"), newspaper title mark, and reader title headers.

### Playfair Display — Classic editorial serif delivering literary elegance with sharp brackets and historical authority. Powers chapter openers, title pages, and literary callouts. · `--font-editorial`
- **Substitute:** Playfair Display, Bodoni MT, Didot, Georgia, serif
- **Weights:** 700, 900 (with italics)
- **Sizes:** 20px, 24px, 32px
- **Line height:** 1.05–1.2
- **Letter spacing:** -0.02em
- **Role:** Chapter openers, drop caps, editorial subheadings, and ex-libris bookplates.

### Newsreader — Optical-size book text serif engineered specifically for continuous editorial reading. Carries comfortable proportions, balanced x-height, and authentic literary cadence. · `--font-serif`
- **Substitute:** Newsreader, Charter, Garamond, Georgia, serif
- **Weights:** 400, 500 (with italics)
- **Sizes:** 13px, 14px, 15px, 16px, clamp(0.95rem, 1.4vw, 1.25rem)
- **Line height:** 1.45–1.7
- **Letter spacing:** -0.01em to 0.0em
- **Role:** Reader body text, novel opening quotes, wordmark editorial deck, and epigraphs.

### Geist — Clean, modern geometric sans-serif providing maximum clarity for interface chrome, controls, tooltips, and interactive buttons. · `--font-ui`
- **Substitute:** Geist, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px
- **Line height:** 1.35–1.5
- **Letter spacing:** -0.01em
- **Role:** Reader chrome buttons, navigation action labels, and interactive hints.

### Geist Mono — Technical, precision monospaced font for all datelines, catalog numbers, shelf indices, ticker items, and print metadata. Rendered in uppercase with generous tracking. · `--font-mono`
- **Substitute:** Geist Mono, JetBrains Mono, SF Mono, Consolas, monospace
- **Weights:** 400, 500, 600, 700
- **Sizes:** 9px, 10px, 11px, 12px
- **Line height:** 1.2–1.4
- **Letter spacing:** 0.12em–0.22em (tracking-widest / uppercase)
- **Role:** Ticker items, department numbers ("01/"), catalog identifiers ("MGN–023"), running folios, and barcodes.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| ticker-mono | Geist Mono | 600 | 10px | 1.2 | 0.16em | `--text-ticker` |
| dept-mono | Geist Mono | 500 | 11px | 1.3 | 0.12em | `--text-dept` |
| catalog-id | Geist Mono | 700 | 12px | 1.2 | 0.14em | `--text-catalog` |
| body-reader | Newsreader | 400 | 14px–15px | 1.6 | -0.01em | `--text-reader-body` |
| deck-italic | Newsreader | 400 (italic) | 16px–18px | 1.45 | -0.01em | `--text-deck` |
| reader-title | Playfair Display | 700 | 24px | 1.15 | -0.02em | `--text-reader-title` |
| brand-title | DM Serif Display | 400 | 28px | 1.05 | -0.02em | `--text-brand` |
| display-hero | DM Serif Display | 400 | min(44vh, 32vw) | 0.82 | -0.035em | `--text-display-hero` |

## Tokens — Spacing & Shapes

**Density:** compact / broadsheet editorial

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 2 | 2px | `--spacing-2` |
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value | Notes |
|---------|-------|-------|
| broadsheet-buttons | 3px | Action buttons and ticker badges |
| tile-logo | 3px | Mini newspaper logo tile |
| glass-pills | 9999px | Hover tags, counter pills, and reader close button |
| flipbook-pages | 4px / 0px | Hard outer book covers (4px) and inner paper spreads (0px) |

### Shadows & Glows

| Name | Value | Role |
|------|-------|------|
| offset-vermilion | `3px 3px 0px var(--funky-yellow)` | Hard print pop shadow behind vermilion CTA buttons |
| offset-hover | `3px 3px 0px var(--funky-vermilion)` | Yellow button hover state offset |
| wordmark-shadow | `0 4px 40px rgba(0, 0, 0, 0.85)` | Deep ambient occlusion behind giant wordmark |
| floor-glow | `radial-gradient(circle at 75% 75%, rgba(255, 56, 17, 0.15) 0%, rgba(255, 234, 0, 0.04) 40%, transparent 70%)` | Warm bottom-right ambient shelf atmosphere |
| top-glow | `radial-gradient(circle at 25% 25%, rgba(22, 82, 255, 0.08) 0%, transparent 65%)` | Cool top-left counter-illumination |

### Layout

- **Viewport:** `100vw` by `100vh` strictly fixed (`overflow: hidden`, no page scrolling).
- **Gutter:** 4vw horizontal padding on desktop.
- **Atmosphere:** Fixed SVG `feTurbulence` grain at 6% opacity (`mix-blend-mode: overlay`).

## Components

### Top Newspaper Dateline Ticker
**Role:** Authentic broadsheet header rule and editorial dateline
Full-width 32px top bar with dark surface (`#0e0f14`) and 1px bottom hairline (`var(--rule)`).
- **Left:** Dateline (`AUTUMN LIST // 32 TITLES`, `EST. 2026`) with a vibrant vermilion badge (`FIRST EDITION`).
- **Center:** Featured publication announcement in bone mono.
- **Right:** Architectural edition metadata and live catalog status.

### Broadsheet Masthead Navigation
**Role:** High-editorial newspaper navigation bar
Floating header at 42px top, bounded by 4vw margins and a 2px strong border-bottom (`var(--rule-strong)`).
- **Tile Logo:** 36x36px bone-white rounded square tile featuring a vertical spine rule and four horizontal text rules (evoking newspaper columns), stamped with a vermilion corner pip.
- **Brand Title:** "Epoch" in sculptural serif (1.85rem), accompanied by an `AUTUMN '26` yellow badge and mono subtext `INDEPENDENT PRESS · EST. 2026`.
- **Department Links:** Monospaced section links prefixed with vermilion index numerals (`01/ CATALOGUE`, `02/ AUTHORS`, `03/ CRITIQUE`, `04/ DISPATCHES`, `05/ EVENTS`).
- **Actions:** "Sign in" ghost link and high-energy vermilion pill button `"Start reading →"` with a 3px yellow offset shadow.

### Giant Sculptural Wordmark & Deck
**Role:** Hero centerpiece establishing publisher identity
Positioned at 45vh vertically, rising 4vh out of a 14px blur on page initialization:
- **Kicker:** Tripartite mono banner featuring vermilion badge (`FIRST EDITION`), ornamental stars (`★ THE 32 TITLES OF AUTUMN ★`), and catalog numbering (`NO. 001–032`).
- **Wordmark:** "Epoch" rendered in `DM Serif Display` at `min(44vh, 32vw)`, with letter-spacing `-0.035em`, line-height `0.82`, and subtle top-edge rim glow.
- **Deck:** Italic Newsreader paragraph (`clamp(0.95rem, 1.4vw, 1.25rem)`): "An independent press dedicated to new literary fiction, quiet engines, and translated thought."

### Shelves Ribbon (Departments Index)
**Role:** Horizontal department taxonomy and quick-filter control
Positioned at 52vh across the entire viewport width with glass backdrop blur (`rgba(14, 15, 20, 0.75)` + `backdrop-filter: blur(12px)`):
- Eight department buttons: `01 New releases`, `02 Bestsellers`, `03 Fiction`, `04 Nonfiction`, `05 Poetry`, `06 In translation`, `07 Small press`, `08 Gift cards`.
- Separated by delicate inline circular dot glyphs.

### Interactive 3D WebGL Bookshelf
**Role:** Full-screen Three.js WebGL viewport rendering 32 physical volumes
- **Texture Atlas:** Single hosted texture atlas (`https://thinkingods.com/demos/margin-press/covers.webp`), size 3968x2944px containing 32 book covers (each 480x720px, 8 cols x 4 rows, 8px gutter). Crop formula: `x = 8 + (n % 8) * 496`, `y = 8 + floor(n / 8) * 736`.
- **Geometry & Mesh:** `BoxGeometry(1, 1.5, 0.2)` in a group rotated `0.32 rad` on Y. Front cover (+z) uses `MeshPhysicalMaterial` with clearcoat `0.55`; spine and back use spine color multiplied by `0.62`; fore-edge and top/bottom use procedural high-res canvas textures of thin brown page lines on `#efe7d6`.
- **Camera Pose:** PerspectiveCamera at `(3.6, 2.15, 7.4)` looking at `(-1.4, 0.05, -0.6)`, fov `19.5` (`40` in portrait). Shelf slot k sits at `(1.55 - k*0.5, -1.12, 0.9 - k*0.2)` in an elegant diagonal row.
- **Floor Mask & Shadows:** Depth-only clipping plane at `y = -1.87` (`colorWrite: false, renderOrder: -1`) to cleanly mask descending books, paired with a `ShadowMaterial` plane (`opacity: 0.42`) catching realistic book drop shadows.
- **Hover Wave & Spring Physics:** Evaluates pointer distance to projected book tops with gaussian falloff (`radius ~8.5% viewport`). Nearest book rises `0.78` units with forward pitch. Driven by 4-substep spring physics (K `70`, damping `12.5`).
- **Hover Pill Tag:** Floating glass pill displaying catalog identifier in vermilion (`MGN–023`), book title in italic serif, and author byline in ash.
- **Sweeping Wave:** Autonomous wave activates after 4 seconds of inactivity, gently cycling along the shelf.

### Bezier Flight Transition & Ripple Sink
**Role:** Cinematic transition into the reading state
Upon clicking any volume:
1. **Ripple Sink:** Neighboring books descend 3.2 units down through the floor mask in a progressive radial ripple outward from the clicked slot.
2. **Atmospheric Scrim:** Nav bar, wordmark, and shelves blur (`10px`), drop `2.5vh`, and dim behind a dark radial vignette (`#scrim.active`).
3. **Flight Arc:** Chosen 3D volume detaches into world space and traverses a 1.1s quadratic bezier curve, slerping into a square orientation facing the camera at the exact distance `D = (1.5 * innerHeight) / (2 * ph * tan(fov/2))` where its dimensions align with the HTML reader.

### Dual-Page PageFlip Preview Reader
**Role:** Realistic literary reading experience via StPageFlip 2.0.7
Hard-cover dual-page flipbook (`showCover: true`, `drawShadow: true`, `flippingTime: 900ms`, portrait mode on narrow screens) turning through 6 complete spreads:
- **Spread 00 (Cover):** Atlas crop cover with realistic spine shadows and clearcoat sheen.
- **Spread 01:** Endpaper in the book's custom spine color with geometric cross-hatch and `Ex Libris · Epoch · MGN-0xx` bookplate + Half-Title page.
- **Spread 02:** "Also from Epoch" catalog listing 4 related titles + Title page with publisher imprint mark.
- **Spread 03:** Formal copyright and cataloguing metadata + Epigraph / Dedication.
- **Spread 04:** Table of Contents with dotted tab leaders + Chapter One opener with decorative dropped capital.
- **Spread 05:** Dual typeset reading pages with running heads, folios, and text dynamically typeset using the novel's actual opening line and paragraphs from a shared pool of ten literary vignettes.
- **Spread 06:** "End of Preview" reservation card + Endpaper + Back cover in spine color featuring the opening quote as a pull quote and a procedural barcode.
- **Reader Chrome:** Top header with catalog ID, book title, author, and `Close ×` pill; bottom footer with left/right turn buttons and dynamic spread counter ("Front cover", "Spread 01 / 06", ..., "Back cover").

## 32 Titles & Catalog Order

Catalogue numbers are assigned as `MGN-` + (slot index + 1) zero-padded to 3:
- **Shelf Order:** `[25, 19, 10, 18, 16, 26, 24, 8, 6, 21, 13, 15, 1, 12, 14, 3, 9, 2, 27, 0, 31, 30, 23, 22, 11, 29, 17, 20, 7, 28, 5, 4]`

| Slot | Catalog ID | Atlas Index | Title | Author | Spine Color |
|------|------------|-------------|-------|--------|-------------|
| 01 | MGN–001 | 25 | Lemon Season | Lucia Ferri | `#f9d147` |
| 02 | MGN–002 | 19 | Meridian | Leo Strand | `#0f0f0f` |
| 03 | MGN–003 | 10 | Soft Machines | Kai Laurent | `#d4b5b6` |
| 04 | MGN–004 | 18 | Tidewater | Ines Ward | `#084253` |
| 05 | MGN–005 | 16 | The Glass Archive | Felix Odo | `#166f8f` |
| 06 | MGN–006 | 26 | The Observatory | Iris Kahn | `#1a263d` |
| 07 | MGN–007 | 24 | Cold Harbour | Ronan Pike | `#c4c7ce` |
| 08 | MGN–008 | 08 | The Last Light Hotel | Hugo Varga | `#202a2c` |
| 09 | MGN–009 | 06 | Salt & Static | Remi Ford | `#4a8089` |
| 10 | MGN–010 | 21 | Ferns & Ferrous | Ash Kerr | `#3b2f1e` |
| 11 | MGN–011 | 13 | Desert Hymns | Sol Navarro | `#c66732` |
| 12 | MGN–012 | 15 | Velvet Hours | Rosa Quinn | `#58202f` |
| 13 | MGN–013 | 01 | Afterglow | Theo Lin | `#d17b63` |
| 14 | MGN–014 | 12 | Signal Lost | Omar Haze | `#09191e` |
| 15 | MGN–015 | 14 | Wintering | Elin Berg | `#bacbdc` |
| 16 | MGN–016 | 03 | Monolith | Ezra Cole | `#202020` |
| 17 | MGN–017 | 09 | Hollow City | Dana Reyes | `#4a5637` |
| 18 | MGN–018 | 02 | The Concrete Garden | Mara Kell | `#2d3229` |
| 19 | MGN–019 | 27 | Sundial | Otto Brandt | `#e8d8b9` |
| 20 | MGN–020 | 00 | Night Cartography | Aria Vance | `#1f2838` |
| 21 | MGN–021 | 31 | Open Road Elegy | Sam Ortiz | `#ae9a6f` |
| 22 | MGN–022 | 30 | Moth Theory | Edie Crane | `#0b0b0b` |
| 23 | MGN–023 | 23 | A House Made of Rain | Mei Arai | `#fefefe` |
| 24 | MGN–024 | 22 | Neon Saints | Cruz Delgado | `#010101` |
| 25 | MGN–025 | 11 | The Orchard Ledger | Clara Moss | `#797842` |
| 26 | MGN–026 | 29 | Copper Sky | Wes Hart | `#854527` |
| 27 | MGN–027 | 17 | Ultraviolet | Zara Knox | `#843bd7` |
| 28 | MGN–028 | 20 | Small Fires | Pia Holm | `#212226` |
| 29 | MGN–029 | 07 | Chromatic | Lux Arden | `#6d8fac` |
| 30 | MGN–030 | 28 | Deep Field | Ana Voss | `#140c1b` |
| 31 | MGN–031 | 05 | The Quiet Engine | Ivy Marsh | `#bdd7c9` |
| 32 | MGN–032 | 04 | Low Light | Noa Sato | `#27292c` |

## Do's and Don'ts

### Do
- Maintain the fixed, non-scrolling single-viewport model — the page is an interactive stage, not a long-scroll document.
- Use the exact crop coordinates for `covers.webp`: `x = 8 + (n % 8) * 496`, `y = 8 + floor(n / 8) * 736`.
- Preserve the shelf slot ordering array `ORDER` so books appear in their curated autumn list sequence.
- Keep the three-tier font separation: DM Serif Display for hero wordmark, Newsreader for reader spreads, Geist Mono for catalog IDs and datelines.
- Animate the hover wave using continuous spring physics (K 70, damping 12.5) with quadratic bezier arc transitions during book open.
- Provide a full 6-spread reading experience in PageFlip, including ex-libris endpapers, title pages, typeset chapter pages, and back cover quotes.

### Don't
- Do not introduce vertical page scrolling — all content, shelf navigation, and reader overlays operate inside the fixed viewport.
- Do not use generic book textures — every volume must reflect its unique spine color and atlas cover crop.
- Do not use hard cut scene switches — all transitions between shelf and reader must interpolate via bezier flight and radial scrim blurs.
- Do not omit mobile adaptations — on narrow viewports, collapse navigation to the tile logo and CTA pill, and switch PageFlip into single-page portrait mode.

## Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Obsidian Canvas | `#09090b` | Base viewport background behind 3D WebGL canvas |
| 1 | Dateline Ticker | `#0e0f14` | Top newspaper ticker bar and shelf ribbon backdrop |
| 2 | Glass Pill / Scrim | `#131418` | Hover tags, counter pills, and radial focus scrim |
| 3 | Book Paper | `#f4eee3` | Opened reader pages, title leaves, and endpaper labels |
| 4 | Funky Accents | `#ff3811` / `#ffea00` | CTA button fills, edition badges, and catalog indicators |

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Canvas & Surfaces */
  --bg: #09090b;
  --bg-ticker: #0e0f14;
  --bg-surface: #131418;
  
  /* Text */
  --text-bone: #f7f4ea;
  --text-ash: #9c978d;
  
  /* Rules & Hairlines */
  --rule: rgba(247, 244, 234, 0.14);
  --rule-light: rgba(247, 244, 234, 0.22);
  --rule-strong: rgba(247, 244, 234, 0.38);

  /* Funky Editorial Accents */
  --funky-vermilion: #ff3811;
  --funky-yellow: #ffea00;
  --funky-cobalt: #1652ff;
  --accent-ember: var(--funky-vermilion);

  /* Book Reader */
  --book-paper: #f4eee3;
  --book-ink: #14120e;

  /* Typography — Font Families */
  --font-masthead: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-ui: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Page Flip Dynamic Dimensions */
  --pw: 380px;
  --ph: 570px;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ticker: #0e0f14;
  --color-surface: #131418;
  --color-bone: #f7f4ea;
  --color-ash: #9c978d;
  --color-vermilion: #ff3811;
  --color-yellow: #ffea00;
  --color-cobalt: #1652ff;
  --color-book-paper: #f4eee3;
  --color-book-ink: #14120e;

  /* Typography */
  --font-masthead: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-ui: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Borders & Radius */
  --radius-button: 3px;
  --radius-pill: 9999px;
}
```

Tailwind v4 - 
@theme {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ticker: #0e0f14;
  --color-surface: #131418;
  --color-bone: #f7f4ea;
  --color-ash: #9c978d;
  --color-vermilion: #ff3811;
  --color-yellow: #ffea00;
  --color-cobalt: #1652ff;
  --color-book-paper: #f4eee3;
  --color-book-ink: #14120e;

  /* Typography */
  --font-masthead: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-ui: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Borders & Radius */
  --radius-button: 3px;
  --radius-pill: 9999px;
}

CSS variables - 
:root {
  /* Colors */
  --bg: #09090b;
  --bg-ticker: #0e0f14;
  --bg-surface: #131418;
  --text-bone: #f7f4ea;
  --text-ash: #9c978d;
  --rule: rgba(247, 244, 234, 0.14);
  --rule-light: rgba(247, 244, 234, 0.22);
  --rule-strong: rgba(247, 244, 234, 0.38);
  --funky-vermilion: #ff3811;
  --funky-yellow: #ffea00;
  --funky-cobalt: #1652ff;
  --accent-ember: #ff3811;
  --book-paper: #f4eee3;
  --book-ink: #14120e;

  /* Typography */
  --font-masthead: 'DM Serif Display', 'Playfair Display', Georgia, serif;
  --font-editorial: 'Playfair Display', Georgia, serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-ui: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Page Flip */
  --pw: 380px;
  --ph: 570px;
}

Design tokens - 
{
  "color": {
    "bg": {
      "$value": "#09090b",
      "$type": "color",
      "$description": "Obsidian Canvas — Full viewport dark background"
    },
    "bg-ticker": {
      "$value": "#0e0f14",
      "$type": "color",
      "$description": "Ticker Surface — Dateline bar and header ribbon background"
    },
    "bg-surface": {
      "$value": "#131418",
      "$type": "color",
      "$description": "Deep Surface — Glass pills, floating tags, and reader chrome"
    },
    "text-bone": {
      "$value": "#f7f4ea",
      "$type": "color",
      "$description": "Bone White — Primary headlines, titles, and high-emphasis text"
    },
    "text-ash": {
      "$value": "#9c978d",
      "$type": "color",
      "$description": "Ash Gray — Secondary metadata, author bylines, and idle nav items"
    },
    "rule": {
      "$value": "rgba(247, 244, 234, 0.14)",
      "$type": "color",
      "$description": "Hairline Rule — 1px dividers and ticker borders"
    },
    "rule-strong": {
      "$value": "rgba(247, 244, 234, 0.38)",
      "$type": "color",
      "$description": "Strong Rule — Masthead borders and emphasized separators"
    },
    "funky-vermilion": {
      "$value": "#ff3811",
      "$type": "color",
      "$description": "Funky Vermilion — Primary editorial accent, catalog tags, and CTA buttons"
    },
    "funky-yellow": {
      "$value": "#ffea00",
      "$type": "color",
      "$description": "Funky Yellow — Secondary energetic accent and edition badges"
    },
    "funky-cobalt": {
      "$value": "#1652ff",
      "$type": "color",
      "$description": "Funky Cobalt — Top-left ambient counter-illumination"
    },
    "book-paper": {
      "$value": "#f4eee3",
      "$type": "color",
      "$description": "Book Paper — Warm off-white surface for PageFlip leaves"
    },
    "book-ink": {
      "$value": "#14120e",
      "$type": "color",
      "$description": "Book Ink — Typeset literary text and running folios"
    }
  },
  "font": {
    "dm-serif": {
      "$value": "DM Serif Display",
      "$type": "fontFamily",
      "$description": "Sculptural display serif for hero wordmark and masthead branding"
    },
    "playfair": {
      "$value": "Playfair Display",
      "$type": "fontFamily",
      "$description": "High-contrast editorial serif for chapter titles and drop caps"
    },
    "newsreader": {
      "$value": "Newsreader",
      "$type": "fontFamily",
      "$description": "Optical-size book serif for chapter body text and novel pull quotes"
    },
    "geist": {
      "$value": "Geist",
      "$type": "fontFamily",
      "$description": "Modern geometric sans-serif for UI controls, buttons, and navigation"
    },
    "geist-mono": {
      "$value": "Geist Mono",
      "$type": "fontFamily",
      "$description": "Monospaced font for dateline tickers, catalog numbers, and print metadata"
    }
  },
  "typography": {
    "ticker": {
      "$value": {
        "fontFamily": "Geist Mono",
        "fontSize": "10px",
        "fontWeight": 600,
        "lineHeight": 1.2,
        "letterSpacing": "0.16em"
      },
      "$type": "typography",
      "$description": "Top dateline ticker copy"
    },
    "catalog-tag": {
      "$value": {
        "fontFamily": "Geist Mono",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.2,
        "letterSpacing": "0.14em"
      },
      "$type": "typography",
      "$description": "Catalog volume identifier (e.g., MGN–023)"
    },
    "reader-body": {
      "$value": {
        "fontFamily": "Newsreader",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.6,
        "letterSpacing": "-0.01em"
      },
      "$type": "typography",
      "$description": "Typeset chapter novel paragraphs"
    },
    "reader-title": {
      "$value": {
        "fontFamily": "Playfair Display",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.15,
        "letterSpacing": "-0.02em"
      },
      "$type": "typography",
      "$description": "Book title page and chapter head"
    },
    "wordmark": {
      "$value": {
        "fontFamily": "DM Serif Display",
        "fontSize": "min(44vh, 32vw)",
        "fontWeight": 400,
        "lineHeight": 0.82,
        "letterSpacing": "-0.035em"
      },
      "$type": "typography",
      "$description": "Giant centered sculptural masthead wordmark"
    }
  },
  "shadow": {
    "button-offset": {
      "$value": "3px 3px 0px #ffea00",
      "$type": "shadow",
      "$description": "Hard print pop shadow for vermilion CTA pill button"
    },
    "wordmark-ambient": {
      "$value": "0 4px 40px rgba(0, 0, 0, 0.85)",
      "$type": "shadow",
      "$description": "Deep ambient blur beneath sculptural wordmark"
    }
  },
  "surface": {
    "canvas": {
      "$value": "#09090b",
      "$type": "color",
      "$description": "Surface level 0: Full-viewport dark background"
    },
    "ticker": {
      "$value": "#0e0f14",
      "$type": "color",
      "$description": "Surface level 1: Top dateline bar and shelves ribbon"
    },
    "pill": {
      "$value": "#131418",
      "$type": "color",
      "$description": "Surface level 2: Floating glass pill tag and reader chrome"
    },
    "book-paper": {
      "$value": "#f4eee3",
      "$type": "color",
      "$description": "Surface level 3: Realistic PageFlip paper leaves"
    }
  },
  "$extensions": {
    "com.epoch.press": {
      "systemName": "Epoch Press",
      "style": "Broadsheet Newspaper & Interactive 3D WebGL Shelf",
      "edition": "Autumn 2026 List",
      "titleCount": 32,
      "webglEngine": "Three.js 0.160.0",
      "readerEngine": "PageFlip 2.0.7",
      "extractedAt": "2026-11-20T20:05:00.000Z"
    }
  }
}
