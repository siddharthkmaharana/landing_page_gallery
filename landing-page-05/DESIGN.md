# ORTHOGON — Style Reference
> Technical blueprint and structural UI system

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

ORTHOGON is a sophisticated, structural design system inspired by technical blueprints, architectural schematics, and high-end UI wireframes. It utilizes a large-scale mosaic background of interlocking rectangular panels, razor-thin hairlines, and a prestige-green primary color. The aesthetic is flat, 2D, and emphasizes high negative space and structural precision. It pairs a sans-serif display header (Space Grotesk) with a humanized body typeface (General Sans) and a monospaced functional font (JetBrains Mono). The palette revolves around Paper (#F7F7F5), Forest Green (#1A3C2B), and Grid (#3A3A38). Depth effects like box shadows and gradients are strictly avoided in favor of 1px border-lines, 0.5px hairlines, and flat color blocks. Micro-interactions are snappy with linear or standard ease-out curves.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper Base | `#F7F7F5` | `--color-paper` | Page background canvas and base surface of panels |
| Paper Pure White | `#FFFFFF` | `--color-paper-light` | Primary input surface, elevated bento cells, and active cards |
| Forest Green | `#1A3C2B` | `--color-forest` | Primary brand accent, solid action buttons, logo mark, and corner markers |
| Forest Deep | `#11281D` | `--color-forest-dark` | Hover states for primary buttons and high-contrast technical badges |
| Forest Faint | `rgba(26, 60, 43, 0.08)` | `--color-forest-faint` | Active row tints, subtle badge fills, and wireframe highlights |
| Forest Border | `rgba(26, 60, 43, 0.20)` | `--color-forest-border` | Hairline border for system status badges, corner markers, and active elements |
| Grid Gray | `#3A3A38` | `--color-grid` | Primary text, headings, dark icons, and structural wireframe elements |
| Grid Hairline | `rgba(58, 58, 56, 0.20)` | `--color-grid-hairline` | 1px dividers, section rules, bento cell separators, and table borders |
| Grid Faint | `rgba(58, 58, 56, 0.10)` | `--color-grid-faint` | Secondary structural hairlines and table column zebra fills |
| Grid Solid | `rgba(58, 58, 56, 0.40)` | `--color-grid-solid` | High-emphasis borders, active tab outlines, and focused input borders |
| Coral Accent | `#FF8C69` | `--color-coral` | Left-border accent for Component Synthesis, error states, and critical telemetry |
| Mint Accent | `#9EFFBF` | `--color-mint` | Left-border accent for Topology Verification, live status, and schema compiler pass |
| Gold Accent | `#F4D35E` | `--color-gold` | Left-border accent for Blueprint Telemetry, warning indicators, and runtime metrics |

## Tokens — Typography

### Space Grotesk — Primary display typeface powering bold, tight-tracking headers. Scaled from 20px up to 96px (8xl) with aggressive negative letter spacing (-0.04em to -0.05em) and compressed line heights (0.9 to 1.15). Space Grotesk brings architectural presence and sharp geometric rhythm to section titles and hero statements. · `--font-header`
- **Substitute:** Space Grotesk, Syne, Archivo, system-ui, sans-serif
- **Weights:** 500, 600, 700
- **Sizes:** 20px, 24px, 32px, 48px, 64px, 80px, 96px
- **Line height:** 0.9–1.15
- **Letter spacing:** -0.045em at 64px–96px, -0.03em at 32px–48px
- **Role:** Display headings, hero title ("ORTHOGONAL PRECISION"), section numerals, and uppercase display labels.

### General Sans — Workhorse body typeface delivering clean editorial legibility across paragraphs, documentation blocks, and form labels. Renders at standard weights with neutral tracking, balancing the technical rigidity of Space Grotesk and JetBrains Mono. · `--font-body`
- **Substitute:** General Sans, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 15px, 16px
- **Line height:** 1.5–1.65
- **Letter spacing:** -0.01em to 0.0em
- **Role:** Long-form body text, paragraph descriptions, editorial specifications, and form help text.

### JetBrains Mono — Technical and functional monospace typeface for all labels, tags, numerical indices, metadata chips, code mockups, and telemetry logs. Formatted in uppercase with expanded tracking (0.1em) for crisp tabular alignment. · `--font-mono`
- **Substitute:** JetBrains Mono, SF Mono, Consolas, "Fira Code", monospace
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 11px, 12px, 13px, 14px
- **Line height:** 1.4–1.6
- **Letter spacing:** 0.05em to 0.12em (tracking-wide / uppercase)
- **Role:** Status badges, section index labels ("01. SPECIFICATION", "02. BENTO GRID", "03. TOPOLOGY", "04. BENCHMARKS", "05. INITIALIZE"), code snippets, table values, input labels, and corner coordinates.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-mono | JetBrains Mono | 500 | 10px | 1.4 | 0.1em | `--text-mono-xs` |
| label-mono | JetBrains Mono | 500 | 11px | 1.4 | 0.08em | `--text-mono-sm` |
| meta-mono | JetBrains Mono | 400 | 12px | 1.5 | 0.05em | `--text-mono-base` |
| body-sm | General Sans | 400 | 14px | 1.5 | -0.01em | `--text-body-sm` |
| body | General Sans | 400 | 15px | 1.6 | 0.0em | `--text-body` |
| body-lg | General Sans | 500 | 16px | 1.5 | -0.01em | `--text-body-lg` |
| heading-sm | Space Grotesk | 600 | 20px | 1.2 | -0.02em | `--text-heading-sm` |
| heading-md | Space Grotesk | 600 | 32px | 1.1 | -0.03em | `--text-heading-md` |
| heading-lg | Space Grotesk | 700 | 48px | 1.05 | -0.04em | `--text-heading-lg` |
| heading-xl | Space Grotesk | 700 | 64px | 0.95 | -0.045em | `--text-heading-xl` |
| display-hero | Space Grotesk | 700 | 80px–96px | 0.90 | -0.05em | `--text-display-hero` |

## Tokens — Spacing & Shapes

**Density:** structural / high-precision

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
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value | Notes |
|---------|-------|-------|
| components | 0px | Strict default for cards, panels, inputs, bento cells, and schematic containers |
| sm | 2px | Permitted subtle rounding on action buttons and status pills |
| pills | 0px or 2px | Pill styling strictly avoids round 9999px caps; uses sharp rectangular geometry |

### Shadows

| Name | Value | Token | Notes |
|------|-------|-------|-------|
| none | `none` | `--shadow-none` | **Strictly NO box shadows** throughout the entire system (`box-shadow: none !important`) |
| all-elevations | `0 0 0 0 rgba(0,0,0,0)` | `--shadow-flat` | Layering is achieved solely via 1px border-lines and Paper surface shifts |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px–96px
- **Bento cell gap:** 1px (using Grid hairline color `--color-grid-hairline`)
- **Hairline border width:** 1px (0.5px for background SVG mosaic)

## Components (Current Modified Architecture)

### 1. Mosaic Background
**Role:** Full-page technical blueprint canvas
Seamless repeating SVG mosaic pattern (480px x 480px) of interlocking rectangular panels (large squares 240x160px, vertical columns 120x240px, horizontal bars 240x80px). Panels are outlined by 0.5px hairlines in `#3A3A38` at 0.3 opacity and filled with Paper (`#F7F7F5`). The pattern sits fixed at `inset: 0` with `pointer-events: none` and `z-index: 0`.

### 2. Technical Navigation
**Role:** Fixed top header with precision technical index
Fixed top navigation bar at 56px height with 1px border-bottom in `#3A3A38` at 20% opacity.
- **Left:** 32x32px square logo box in solid Forest Green (`#1A3C2B`) containing a crisp white orthogonal geometry glyph.
- **Center:** Monospaced nav links in JetBrains Mono, 10px, uppercase, tracking-wide, prefixed with two-digit numerical indices:
  - `01. SPECIFICATION`
  - `02. BENTO GRID`
  - `03. TOPOLOGY`
  - `04. BENCHMARKS`
  - `05. INITIALIZE`
- **Right:** Ghost button (1px hairline in `#3A3A38/20`, 0px/2px radius) paired with a solid Forest Green (`#1A3C2B`) CTA button with white monospaced text.

### 3. Hero Section (`#specification`)
**Role:** High-impact technical manifesto statement
- **Left Column:**
  - Status Badge: Inline-flex container with 1px hairline border (`#1A3C2B/20`), 8x8px solid `#1A3C2B` pulsing square dot, and JetBrains Mono 10px uppercase tracking-widest text (`SYS_VER // 2.4.0 — ARCHITECTURAL`).
  - Large Typography Statement: Space Grotesk `8xl` (64px–80px), tracking-tight (`-0.045em`), solid Forest Green (`#1A3C2B`), line-height 0.92: "ORTHOGONAL PRECISION".
  - Technical Subtext: JetBrains Mono 13px all-caps copy bordered on the left by a vertical 1px Forest Green line with 16px left padding.
  - Action Group: Primary solid Forest button (`INITIALIZE SPEC // 01`) and Ghost button (`VIEW REPOSITORY →`).
- **Right Column:**
  - Abstract Wireframe Container: Square container with four L-shaped 10x10px corner markers, dashed circular coordinate orbit, rotating reticle ticks, and a `mix-blend-luminosity` architectural photograph at 90% opacity shifting to full color on hover.

### 4. Metric Telemetry Strip (`#benchmarks`)
**Role:** High-density structural benchmark readout
Full-width container divided by 1px hairlines presenting four high-precision system invariants:
- `0.5PX` // HAIRLINE VECTOR (Sub-pixel vector accuracy across all viewports)
- `0.0PX` // ZERO DROP SHADOWS (Pure flat 2D architectural rigor without depth deception)
- `100%` // BENTO STRUCTURAL RIGOR (Rectilinear coordinate grid with 1px hairline borders)
- `20SEC` // TOPOLOGY ORBIT CYCLE (Deterministic linear state sync cycle across distributed nodes)

### 5. Bento Feature Grid (`#bento`)
**Role:** 2x2 modular technical component showcase
A 2x2 grid layout separated by a 1px Grid color gap (`--color-grid-hairline`). Each cell features:
- Paper background (`#F7F7F5`), 32px padding, 0px border-radius.
- Monospaced header label with a colored left-border accent:
  - **Cell 01 (Component Synthesis):** Coral (`#FF8C69`) left-border accent, accompanied by a simulated code stream box and flat token chips.
  - **Cell 02 (Topology Verification):** Mint (`#9EFFBF`) left-border accent, accompanied by diagnostic compiler schema checks.
  - **Cell 03 (Blueprint Telemetry):** Gold (`#F4D35E`) left-border accent, accompanied by real-time runtime log monitors.
  - **Cell 04 (Runtime Diagnostics):** Forest (`#1A3C2B`) left-border accent, accompanied by zero-shadow compliance validation rules.

### 6. Network Topology Graph (`#topology`)
**Role:** Abstract SVG visualization of an interconnected design system
A circular container (max-width 450px) with 1px border.
- **Center:** 16px solid Forest Green (`#1A3C2B`) core node with pulse ring.
- **Satellites:** Three orbiting satellite nodes (`α`, `β`, `γ`) on dashed circular paths (140px radius), connected to center via 1px solid lines at 0.2 opacity.
- **Motion:** Linear 20s infinite continuous rotation with hover-pause and real-time node metadata tooltips.
- **Telemetry Console:** Right-side node inspector reporting real-time node latency, packet parity, and active schema compilation.

### 7. Specification Matrix (`#matrix`) — *Current Modified Section*
**Role:** Architectural calibration schematics and formal ISO-128 compliance matrix (replacing legacy testimonials)
Divided into two high-precision structural modules:

#### A. Three Technical Blueprint Schematic Cards
1. **01 // GEO_VECTOR_0.5PX (Orthogonal Vector Hairlines):**
   - Viewport equipped with corner L-markers and dimensional calipers: horizontal caliper (`240.00 MM`) and vertical caliper (`160.00 MM`).
   - Center geometry mockup with concentric 0.5px hairline boxes, focal crosshairs, and chip label `0.5PX // 20%`.
   - Technical metadata: Stroke weight `0.5px Sub-Pixel`, grid opacity `0.20 (#3A3A38)`, corner radius `0px / 2px Strict`.
2. **02 // GAMUT_LUMINOSITY_90 (Prestige Gamut & Luminosity):**
   - Caliper bar labeled `GAMUT_SRGB`.
   - Palette swatch matrix displaying 5 flat swatches: Forest (`#1A3C2B`), Paper (`#F7F7F5`), Coral (`#FF8C69`), Mint (`#9EFFBF`), and Gold (`#F4D35E`).
   - Technical metadata: Base palette `Paper (#F7F7F5)`, Key chroma `Forest (#1A3C2B)`, Mix-blend `Luminosity (90% → 100%)`.
3. **03 // TYPO_METRIC_0.9LH (Typographical Triangulation):**
   - Caliper bar labeled `BASELINE // 8PT`.
   - Dynamic typographical specimen display with lead glyph `Aa` and stacked metric calipers: `CAP_HEIGHT: 72PX`, `X_HEIGHT: 52PX`, `BASELINE: 0PX`.
   - Technical metadata: Display header `Space Grotesk (-0.04em)`, Technical mono `JetBrains Mono (0.1em)`, Body system `General Sans (15px / 1.6)`.

#### B. Formal Specification Tolerances Table (ISO-128 Compliance)
High-density technical comparison table with status chips:
- **Depth Illusions:** `0px Box-Shadows (100% Flat 2D Rigor)` vs. Conventional Gaussian Drop Shadows → `[STRICT_ZERO]`
- **Hairline Tolerance:** `0.5px Exact Sub-Pixel / 20% Opacity` vs. Inconsistent 1px–2px Borders → `[SUB_PIXEL_OK]`
- **Image Treatment:** `Mix-Blend-Luminosity at 90% Opacity` vs. Unfiltered Chromatic Overlays → `[CALIBRATED]`
- **Grid Cell Matrix:** `Interlocking Rectangular Bento (1px Gap)` vs. Fluid Arbitrary Flexboxes → `[ORTHOGONAL]`
- **Topology Dispatch:** `Synchronous 20s Linear Orbit Protocol` vs. Asynchronous Dynamic Floats → `[DETERMINISTIC]`

### 8. Technical Form CTA (`#cta`)
**Role:** High-precision input console
Centered 640px wide form box on Paper background with 1px hairline border:
- Four L-shaped corner markers (10px x 10px in `#1A3C2B`) positioned at container vertices.
- Form fields with solid white backgrounds (`#FFFFFF`), 1px borders, and monospaced labels positioned directly above inputs.
- Micro-interactions: Focused fields show 1px solid `#1A3C2B` outline; submit triggers cryptographic voucher ID generation with instant copy action.

### 9. Interactive Blueprint HUD & Wireframe Toggle
**Role:** Real-time structural diagnostic controls
- **Bottom-Left HUD:** Monospaced coordinate tracker display reporting active cursor position `[X: 0000 | Y: 0000]`.
- **Wireframe Mode Toggle:** Fixed button that outlines all containers, margins, and bento cells with red/green 1px alignment boundaries.

## Do's and Don'ts

### Do
- Use 1px hairlines (`rgba(58, 58, 56, 0.20)`) for all dividers, card outlines, and bento cell separations.
- Maintain strictly 0px or 2px (`sm`) border radii across all elements — sharp architectural lines define the identity.
- Apply `mix-blend-mode: luminosity` at 90% opacity to all photography, transitioning to full color on hover.
- Keep typography strictly segregated: Space Grotesk for bold display headers, General Sans for body text, JetBrains Mono for metadata and technical labels.
- Set all numerical indices in JetBrains Mono with two-digit format (`01.`, `02.`, `03.`).
- Add L-shaped corner markers (10px x 10px) to key technical containers and form boxes.
- Preserve generous negative space with 80px–96px vertical section gaps.

### Don't
- **Do not use box shadows anywhere** — depth is expressed solely through 1px borders, surface fills, and hairline mosaic panels (`box-shadow: none !important`).
- Do not use gradients or blurred glassmorphism effects — the aesthetic is strictly flat and 2D.
- Do not use rounded pill shapes (9999px) — all buttons, tags, and inputs must use rectangular 0px or 2px geometry.
- Do not mix fonts within a single label run — keep header, body, and monospaced metadata strictly segregated.
- Do not use saturated primary colors other than Forest Green (`#1A3C2B`); Coral, Mint, and Gold are reserved for left-border accents and status chips.
- Do not round images — image containers must have 0px or 2px radius to maintain blueprint alignment.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Mosaic Canvas | `#F7F7F5` | Page background with 0.5px hairline interlocking mosaic SVG pattern |
| 1 | Paper Panel | `#F7F7F5` | Bento cells, schematic cards, technical form containers, and navigation bar |
| 2 | White Input / Active | `#FFFFFF` | Form fields, active bento hover state, and code simulation boxes |
| 3 | Forest Accent | `#1A3C2B` | Primary action buttons, square logo mark, status dot, and corner L-markers |

## Elevation

- **All Cards & Panels:** `none !important` (elevation rendered via 1px hairlines and Paper color shifts)
- **Active / Hover State:** `1px solid #1A3C2B` or `background: #FFFFFF`
- **Corner Markers:** `10px x 10px` solid `#1A3C2B` L-brackets positioned at container vertices

## Imagery

All photography adheres to the **Technical Blueprint** visual treatment:
- Container: Square or rectilinear with 0px or 2px radius and 1px hairline border.
- Styling: `mix-blend-mode: luminosity` at `opacity: 0.90`.
- Hover Transition: Smoothly shifts to full color and `opacity: 1.0` with `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
- Subject Matter: Architectural concrete, geometric façades, aerospace structural frames, and minimalist precision engineering.

## Layout Hierarchy

1. **Navigation:** 56px fixed header with 32x32px logo box, 5 monospaced numbered index links, and Forest CTA.
2. **Hero Section (`#specification`):** Dual-column layout (typography manifesto on the left with status badge, abstract wireframe with reticle and orbit on the right).
3. **Metric Telemetry Strip (`#benchmarks`):** High-density 4-item technical readout (`0.5PX`, `0.0PX`, `100%`, `20SEC`).
4. **Bento Feature Grid (`#bento`):** 2x2 grid separated by 1px hairline gaps with left-border accents (Coral, Mint, Gold, Forest).
5. **Network Topology Graph (`#topology`):** Circular SVG topology model with central core and 3 orbiting nodes on 20s linear cycle.
6. **Specification Matrix (`#matrix`):** 3 Blueprint Schematic Cards (Geometry Calipers, Color Gamut, Typo Baseline) + ISO-128 Specification Tolerances Table.
7. **Technical Form CTA (`#cta`):** Centered 640px form box with 4 L-shaped corner brackets.
8. **Interactive Diagnostics:** Fixed bottom-left HUD coordinate tracker and Wireframe Blueprint toggle.

## Agent Prompt Guide

Quick Color Reference:
- Background: `#F7F7F5` (Paper)
- Primary Accent: `#1A3C2B` (Forest Green)
- Hairlines: `#3A3A38` at 20% opacity (`rgba(58, 58, 56, 0.20)`)
- Accents: Coral (`#FF8C69`), Mint (`#9EFFBF`), Gold (`#F4D35E`)
- Text: `#3A3A38` (Grid Gray)

Example Component Prompts (Current Modified Architecture):

1. **Status Badge:** Create an inline-flex container with 1px border (`#1A3C2B/20`). Inside, place a 8px x 8px square dot of solid `#1A3C2B` followed by JetBrains Mono text at 10px, uppercase, tracking-widest. Padding: 4px 12px.
2. **Network Topology Graph:** A circular container (max-width: 450px) with 1px border. Central 16px solid forest green node. Three orbiting nodes on dashed paths (140px radius). Connect nodes to center using 1px solid lines at 0.2 opacity. Animate orbiting nodes with a linear 20s infinite rotation.
3. **Blueprint Schematic Card:** 1px bordered square card with Paper fill. Top: tag group (`01 // GEO_VECTOR_0.5PX`) and status chip (`HAIRLINE_STRICT`). Center: viewport with 4 corner L-markers and dimensional calipers (240.00 MM x 160.00 MM). Bottom: title, description, and key-value metadata list in JetBrains Mono.
4. **Specification Tolerances Table:** Full-width technical table enclosed in 1px hairlines. Monospaced headers with uppercase subsystem attributes, formal tolerance assertions, and colored status chips (`STRICT_ZERO`, `SUB_PIXEL_OK`, `CALIBRATED`).
5. **Technical Form CTA:** Centered 640px wide form box. Background: `#F7F7F5`, Border: 1px hairline. Add four L-shaped 'corner markers' (10px x 10px) in `#1A3C2B` at each corner of the container. Form fields use solid white backgrounds with 1px borders and monospaced labels positioned directly above inputs.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-paper: #F7F7F5;
  --color-paper-light: #FFFFFF;
  --color-forest: #1A3C2B;
  --color-forest-dark: #11281D;
  --color-forest-faint: rgba(26, 60, 43, 0.08);
  --color-forest-border: rgba(26, 60, 43, 0.20);
  
  --color-grid: #3A3A38;
  --color-grid-hairline: rgba(58, 58, 56, 0.20);
  --color-grid-faint: rgba(58, 58, 56, 0.10);
  --color-grid-solid: rgba(58, 58, 56, 0.40);
  
  --color-coral: #FF8C69;
  --color-mint: #9EFFBF;
  --color-gold: #F4D35E;

  /* Typography — Font Families */
  --font-header: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'General Sans', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  /* Typography — Scale */
  --text-mono-xs: 10px;
  --text-mono-sm: 11px;
  --text-mono-base: 12px;
  --text-body-sm: 14px;
  --text-body: 15px;
  --text-body-lg: 16px;
  --text-heading-sm: 20px;
  --text-heading-md: 32px;
  --text-heading-lg: 48px;
  --text-heading-xl: 64px;
  --text-display-hero: 80px;

  /* Spacing */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;
  --border-hairline: 1px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-components: 0px;
  --radius-buttons: 2px;

  /* Shadows — Strictly None */
  --shadow-none: none;

  /* Timing & Curves */
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-linear: linear;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-paper: #F7F7F5;
  --color-paper-light: #FFFFFF;
  --color-forest: #1A3C2B;
  --color-forest-dark: #11281D;
  --color-forest-faint: rgba(26, 60, 43, 0.08);
  --color-forest-border: rgba(26, 60, 43, 0.20);
  --color-grid: #3A3A38;
  --color-grid-hairline: rgba(58, 58, 56, 0.20);
  --color-grid-faint: rgba(58, 58, 56, 0.10);
  --color-grid-solid: rgba(58, 58, 56, 0.40);
  --color-coral: #FF8C69;
  --color-mint: #9EFFBF;
  --color-gold: #F4D35E;

  /* Typography */
  --font-header: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'General Sans', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  /* Typography — Scale */
  --text-mono-xs: 10px;
  --text-mono-sm: 11px;
  --text-mono-base: 12px;
  --text-body-sm: 14px;
  --text-body: 15px;
  --text-body-lg: 16px;
  --text-heading-sm: 20px;
  --text-heading-md: 32px;
  --text-heading-lg: 48px;
  --text-heading-xl: 64px;
  --text-display-hero: 80px;

  /* Spacing */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
}
```

Tailwind v4 - 
@theme {
  /* Colors */
  --color-paper: #F7F7F5;
  --color-paper-light: #FFFFFF;
  --color-forest: #1A3C2B;
  --color-forest-dark: #11281D;
  --color-forest-faint: rgba(26, 60, 43, 0.08);
  --color-forest-border: rgba(26, 60, 43, 0.20);
  --color-grid: #3A3A38;
  --color-grid-hairline: rgba(58, 58, 56, 0.20);
  --color-grid-faint: rgba(58, 58, 56, 0.10);
  --color-grid-solid: rgba(58, 58, 56, 0.40);
  --color-coral: #FF8C69;
  --color-mint: #9EFFBF;
  --color-gold: #F4D35E;

  /* Typography */
  --font-header: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'General Sans', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  /* Typography — Scale */
  --text-mono-xs: 10px;
  --text-mono-sm: 11px;
  --text-mono-base: 12px;
  --text-body-sm: 14px;
  --text-body: 15px;
  --text-body-lg: 16px;
  --text-heading-sm: 20px;
  --text-heading-md: 32px;
  --text-heading-lg: 48px;
  --text-heading-xl: 64px;
  --text-display-hero: 80px;

  /* Spacing */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
}

CSS variables - 
:root {
  /* Colors */
  --color-paper: #F7F7F5;
  --color-paper-light: #FFFFFF;
  --color-forest: #1A3C2B;
  --color-forest-dark: #11281D;
  --color-forest-faint: rgba(26, 60, 43, 0.08);
  --color-forest-border: rgba(26, 60, 43, 0.20);
  --color-grid: #3A3A38;
  --color-grid-hairline: rgba(58, 58, 56, 0.20);
  --color-grid-faint: rgba(58, 58, 56, 0.10);
  --color-grid-solid: rgba(58, 58, 56, 0.40);
  --color-coral: #FF8C69;
  --color-mint: #9EFFBF;
  --color-gold: #F4D35E;

  /* Typography — Font Families */
  --font-header: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'General Sans', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  /* Typography — Scale */
  --text-mono-xs: 10px;
  --text-mono-sm: 11px;
  --text-mono-base: 12px;
  --text-body-sm: 14px;
  --text-body: 15px;
  --text-body-lg: 16px;
  --text-heading-sm: 20px;
  --text-heading-md: 32px;
  --text-heading-lg: 48px;
  --text-heading-xl: 64px;
  --text-display-hero: 80px;

  /* Spacing */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-components: 0px;
  --radius-buttons: 2px;

  /* Shadows — Strictly None */
  --shadow-none: none;

  /* Surfaces */
  --surface-canvas: #F7F7F5;
  --surface-panel: #F7F7F5;
  --surface-active: #FFFFFF;
  --surface-accent: #1A3C2B;
}

Design tokens - 
{
  "color": {
    "paper": {
      "$value": "#F7F7F5",
      "$type": "color",
      "$description": "Paper — Canvas background and structural panel fill"
    },
    "paper-light": {
      "$value": "#FFFFFF",
      "$type": "color",
      "$description": "Paper Pure White — High-contrast active surface, form fields, and schematic containers"
    },
    "forest": {
      "$value": "#1A3C2B",
      "$type": "color",
      "$description": "Forest Green — Primary brand accent, solid buttons, logo glyph, and L-markers"
    },
    "forest-dark": {
      "$value": "#11281D",
      "$type": "color",
      "$description": "Forest Dark — Active and pressed state for primary controls"
    },
    "forest-border": {
      "$value": "rgba(26, 60, 43, 0.20)",
      "$type": "color",
      "$description": "Forest Border — Hairline accent on status badges and focal outlines"
    },
    "grid": {
      "$value": "#3A3A38",
      "$type": "color",
      "$description": "Grid Gray — Primary text, headings, and wireframe outlines"
    },
    "grid-hairline": {
      "$value": "rgba(58, 58, 56, 0.20)",
      "$type": "color",
      "$description": "Grid Hairline — 1px dividers, bento grid cell gaps, and section borders"
    },
    "grid-faint": {
      "$value": "rgba(58, 58, 56, 0.10)",
      "$type": "color",
      "$description": "Grid Faint — Subtle secondary table borders and internal grid lines"
    },
    "coral": {
      "$value": "#FF8C69",
      "$type": "color",
      "$description": "Coral — Accent border for Component Synthesis and critical notifications"
    },
    "mint": {
      "$value": "#9EFFBF",
      "$type": "color",
      "$description": "Mint — Accent border for Topology Verification and compiler pass states"
    },
    "gold": {
      "$value": "#F4D35E",
      "$type": "color",
      "$description": "Gold — Accent border for Blueprint Telemetry and active runtime logs"
    }
  },
  "font": {
    "space-grotesk": {
      "$value": "Space Grotesk",
      "$type": "fontFamily",
      "$description": "Primary display typeface for bold, tight-tracking headers (64px–96px, line-height 0.9)"
    },
    "general-sans": {
      "$value": "General Sans",
      "$type": "fontFamily",
      "$description": "Workhorse editorial body typeface for descriptions, paragraphs, and specifications"
    },
    "jetbrains-mono": {
      "$value": "JetBrains Mono",
      "$type": "fontFamily",
      "$description": "Technical and functional monospace font for labels, tags, numerical indices, and metadata"
    }
  },
  "typography": {
    "mono-xs": {
      "$value": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "10px",
        "fontWeight": 500,
        "lineHeight": 1.4,
        "letterSpacing": "0.1em"
      },
      "$type": "typography",
      "$description": "Micro technical label, uppercase indices, and status badge copy"
    },
    "mono-sm": {
      "$value": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "11px",
        "fontWeight": 500,
        "lineHeight": 1.4,
        "letterSpacing": "0.08em"
      },
      "$type": "typography",
      "$description": "Technical component tags, caliper dimensions, and coordinate indicators"
    },
    "mono-base": {
      "$value": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.6,
        "letterSpacing": "0.05em"
      },
      "$type": "typography",
      "$description": "Monospaced schematic descriptions, code snippets, and table values"
    },
    "body-sm": {
      "$value": {
        "fontFamily": "General Sans",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "-0.01em"
      },
      "$type": "typography",
      "$description": "Secondary descriptions and form helper text"
    },
    "body": {
      "$value": {
        "fontFamily": "General Sans",
        "fontSize": "15px",
        "fontWeight": 400,
        "lineHeight": 1.6,
        "letterSpacing": "0em"
      },
      "$type": "typography",
      "$description": "Standard editorial body text"
    },
    "body-lg": {
      "$value": {
        "fontFamily": "General Sans",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "-0.01em"
      },
      "$type": "typography",
      "$description": "Large paragraph copy and emphasized lead sentences"
    },
    "heading-sm": {
      "$value": {
        "fontFamily": "Space Grotesk",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.2,
        "letterSpacing": "-0.02em"
      },
      "$type": "typography",
      "$description": "Bento cell titles and schematic card headers"
    },
    "heading-md": {
      "$value": {
        "fontFamily": "Space Grotesk",
        "fontSize": "32px",
        "fontWeight": 600,
        "lineHeight": 1.1,
        "letterSpacing": "-0.03em"
      },
      "$type": "typography",
      "$description": "Section headers and topology group labels"
    },
    "heading-lg": {
      "$value": {
        "fontFamily": "Space Grotesk",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.05,
        "letterSpacing": "-0.04em"
      },
      "$type": "typography",
      "$description": "Major section display headings"
    },
    "heading-xl": {
      "$value": {
        "fontFamily": "Space Grotesk",
        "fontSize": "64px",
        "fontWeight": 700,
        "lineHeight": 0.95,
        "letterSpacing": "-0.045em"
      },
      "$type": "typography",
      "$description": "Hero subheadings and technical manifesto titles"
    },
    "display-hero": {
      "$value": {
        "fontFamily": "Space Grotesk",
        "fontSize": "80px",
        "fontWeight": 700,
        "lineHeight": 0.9,
        "letterSpacing": "-0.05em"
      },
      "$type": "typography",
      "$description": "Primary hero statement in Space Grotesk 8xl"
    }
  },
  "spacing": {
    "2": {
      "$value": "2px",
      "$type": "dimension",
      "$description": "Spacing 2px"
    },
    "4": {
      "$value": "4px",
      "$type": "dimension",
      "$description": "Spacing 4px"
    },
    "8": {
      "$value": "8px",
      "$type": "dimension",
      "$description": "Spacing 8px"
    },
    "12": {
      "$value": "12px",
      "$type": "dimension",
      "$description": "Spacing 12px"
    },
    "16": {
      "$value": "16px",
      "$type": "dimension",
      "$description": "Spacing 16px"
    },
    "20": {
      "$value": "20px",
      "$type": "dimension",
      "$description": "Spacing 20px"
    },
    "24": {
      "$value": "24px",
      "$type": "dimension",
      "$description": "Spacing 24px"
    },
    "32": {
      "$value": "32px",
      "$type": "dimension",
      "$description": "Spacing 32px"
    },
    "40": {
      "$value": "40px",
      "$type": "dimension",
      "$description": "Spacing 40px"
    },
    "48": {
      "$value": "48px",
      "$type": "dimension",
      "$description": "Spacing 48px"
    },
    "64": {
      "$value": "64px",
      "$type": "dimension",
      "$description": "Spacing 64px"
    },
    "80": {
      "$value": "80px",
      "$type": "dimension",
      "$description": "Spacing 80px"
    },
    "96": {
      "$value": "96px",
      "$type": "dimension",
      "$description": "Spacing 96px"
    }
  },
  "radius": {
    "none": {
      "$value": "0px",
      "$type": "dimension",
      "$description": "Strict 0px radius for all components, cards, bento cells, inputs, and schematics"
    },
    "sm": {
      "$value": "2px",
      "$type": "dimension",
      "$description": "Permitted subtle 2px radius on buttons and status badges"
    }
  },
  "shadow": {
    "none": {
      "$value": "none",
      "$type": "shadow",
      "$description": "Zero drop shadows throughout the entire design system"
    }
  },
  "surface": {
    "canvas": {
      "$value": "#F7F7F5",
      "$type": "color",
      "$description": "Surface level 0: Full-page Paper canvas with 0.5px hairline interlocking mosaic"
    },
    "panel": {
      "$value": "#F7F7F5",
      "$type": "color",
      "$description": "Surface level 1: Bento cells, schematic cards, technical form CTA, and navigation"
    },
    "active": {
      "$value": "#FFFFFF",
      "$type": "color",
      "$description": "Surface level 2: Pure white form fields, active states, and code simulation boxes"
    },
    "accent": {
      "$value": "#1A3C2B",
      "$type": "color",
      "$description": "Surface level 3: Prestige Forest Green action controls, square logo box, and corner markers"
    }
  },
  "$extensions": {
    "com.orthogon.spec": {
      "systemName": "ORTHOGON",
      "style": "Technical Minimalist",
      "blueprintType": "Architectural Schematics & Structural UI",
      "version": "2.4.0",
      "sections": [
        "specification",
        "benchmarks",
        "bento",
        "topology",
        "matrix",
        "cta"
      ],
      "extractedAt": "2026-11-20T20:15:00.000Z"
    }
  }
}
