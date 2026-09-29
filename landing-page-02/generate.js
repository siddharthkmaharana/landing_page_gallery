import fs from 'fs';
import path from 'path';

console.log("Writing complete generate.js script...");

// Read the prompt file to extract the exact constants
const promptContent = fs.readFileSync('prompt_extracted.md', 'utf8');

// Read hero driver image
const imgPath = path.resolve('hero-driver.png');
const imgBase64 = fs.existsSync(imgPath) ? fs.readFileSync(imgPath).toString('base64') : '';

// Let's create the index.html content
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KIMI — GRIDO1 Racing Systems / Kimi Antonelli</title>
  <meta name="description" content="Official driver portfolio for Kimi Antonelli, driver_012 of GRIDO1 Racing Systems in his rookie Mercedes-AMG F1 season.">

  <!-- External libraries import map -->
  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.185.0/examples/jsm/",
      "lenis": "https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.mjs"
    }
  }
  </script>

  <!-- Google Fonts: Oswald and Space Grotesk -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">

  <style>
    /* TOKENS — THE WHOLE PALETTE AND TYPE SCALE */
    :root {
      --raw-color-ice-50: #f7fafb;        /* frame fill */
      --raw-color-ice-100: #ebeef1;       /* backdrop contour lines */
      --raw-color-ice-200: #dfe5e9;       /* hairlines & dividers */
      --raw-color-steel-400: #b6c1c8;     /* muted copy on dark */
      --raw-color-ink-950: #090a0b;       /* all body copy */
      --raw-color-ink-900: #0e0f14;       /* "view profile" panel fill */
      --raw-color-ink-800: #1b1d24;
      --raw-color-ink-700: #2a2d36;
      --raw-color-ink-alpha-35: rgb(9 10 11 / 0.35);   /* driver_012, 01:26 */
      --raw-color-slate-500: #7a7a7a;     /* season map: the halftone */
      --raw-color-slate-600: #4d4d4d;     /* season map: grid lines, inner ring */
      --raw-color-slate-900: #1e1e1e;     /* season map: the two outer rings */
      --raw-color-cyan-400: #02d2e3;      /* accent */
      --raw-color-cyan-alpha-25: rgb(2 210 227 / 0.25);
      --raw-color-stone-600: #535450;     /* timeline: plate outline */
      --raw-color-white-alpha-10: rgb(255 255 255 / 0.1);  /* timeline plate fill; footer contours */
      --raw-color-white-alpha-20: rgb(255 255 255 / 0.2);  /* timeline: the rail */
      --raw-color-ink-alpha-08: rgb(9 10 11 / 0.08);       /* paddock: the contour lines */
      --raw-color-white-alpha-40: rgb(255 255 255 / 0.4);  /* footer: the copyright */
      --raw-color-white: #ffffff;
      --raw-color-orange-500: #ff6b00;

      --raw-font-size-96: 6rem;      /* "kimi antonelli" */
      --raw-font-size-70: 4.375rem;  /* the name on phones */
      --raw-font-size-52: 3.25rem;   /* the headline below 1024 */
      --raw-font-size-38: 2.375rem;  /* stat figures */
      --raw-font-size-20: 1.25rem;   /* "view profile" */
      --raw-font-size-18: 1.125rem;  /* driver meta rows */
      --raw-font-size-16: 1rem;      /* nav, "[ Garage → ]" */
      --raw-font-size-14: 0.875rem;  /* panel body, "watch trailer", socials */
      --raw-font-size-12: 0.75rem;   /* panel eyebrows, stat labels */
      --raw-font-size-55: 3.4375rem; /* "the season so far" */
      --raw-font-size-36: 2.25rem;   /* timeline years */

      --raw-leading-95: 0.95;   /* headline */
      --raw-leading-90: 0.9;    /* every other uppercase run */
      --raw-leading-72: 0.72;   /* cap-height text-box trim */
      --raw-leading-110: 1.1;   /* floor for clipped text reveals */
      --raw-tracking-stat: -0.08em;
      --raw-tracking-label: -0.04em;
      --raw-tracking-eyebrow: -0.02em;

      --raw-radius-16: 1rem;
      --raw-radius-48: 3rem;
      --raw-radius-100: 6.25rem;
      --raw-duration-fast: 150ms;
      --raw-duration-normal: 250ms;
      --raw-duration-slow: 700ms;
      --raw-edge-fade-share: 10%;
      --raw-edge-fade-length: 6rem;

      /* Tier 2 — roles */
      --background: var(--raw-color-ice-50);
      --foreground: var(--raw-color-ink-950);
      --foreground-muted: var(--raw-color-ink-alpha-35);
      --surface-dark: var(--raw-color-ink-900);
      --surface-dark-raised: var(--raw-color-ink-800);
      --surface-black: var(--raw-color-ink-950);
      --surface-muted: var(--raw-color-ice-100);
      --surface-soft: var(--raw-color-ice-200);
      --foreground-on-dark: var(--raw-color-white);
      --foreground-on-dark-muted: var(--raw-color-steel-400);
      --foreground-on-dark-faint: var(--raw-color-white-alpha-40);
      --border-muted: var(--raw-color-ice-200);
      --border-on-dark: var(--raw-color-ink-700);
      --map-dot: var(--raw-color-slate-500);
      --map-grid: var(--raw-color-slate-600);
      --map-grid-ghost: var(--raw-color-slate-900);
      --map-mark: var(--raw-color-ice-50);
      --timeline-outline: var(--raw-color-stone-600);
      --timeline-fill: var(--raw-color-white-alpha-10);
      --timeline-rail: var(--raw-color-white-alpha-20);
      --paddock-contour: var(--raw-color-ink-alpha-08);
      --footer-contour: var(--raw-color-white-alpha-10);
      --accent: var(--raw-color-cyan-400);
      --accent-muted: var(--raw-color-cyan-alpha-25);
      --type-impact: var(--raw-font-size-96);
      --type-display-lg: var(--raw-font-size-70);
      --type-display: var(--raw-font-size-52);
      --type-heading: var(--raw-font-size-38);
      --type-title: var(--raw-font-size-20);
      --type-lead: var(--raw-font-size-18);
      --type-label: var(--raw-font-size-16);
      --type-body: var(--raw-font-size-14);
      --type-eyebrow: var(--raw-font-size-12);
      --type-display-sm: var(--raw-font-size-55);
      --type-year: var(--raw-font-size-36);
      --leading-headline: 0.95;
      --leading-flat: 0.9;
      --leading-cap: 0.72;
      --leading-display: 1.1;
      --duration-fast: 150ms;
      --duration-normal: 250ms;
      --duration-plate: 700ms;
      --ease-entrance: cubic-bezier(0.2, 0, 0, 1);
      --ease-plate: cubic-bezier(0.33, 0, 0, 1);
      --font-sans: "Space Grotesk", system-ui, sans-serif;
      --font-display: "Oswald", Impact, sans-serif;
    }

    /* ROOT FONT-SIZE BANDS */
    html {
      font-size: 16px;
      scroll-behavior: auto;
      background: var(--background);
      box-sizing: border-box;
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    @media (max-width: 1920px) { html { font-size: 0.833333vw; } }
    @media (max-width: 1440px) { html { font-size: 1.111111vw; } }
    @media (max-width: 1279px) { html { font-size: 16px; } }

    @media (min-width: 1441px) and (max-width: 1920px) {
      [data-hero] {
        --hero-base: calc(1920 / 1440);
        --type-impact: calc(6rem * var(--hero-base));
        --type-display-lg: calc(4.375rem * var(--hero-base));
        --type-display: calc(3.25rem * var(--hero-base));
        --type-heading: calc(2.375rem * var(--hero-base));
        --type-title: calc(1.25rem * var(--hero-base));
        --type-lead: calc(1.125rem * var(--hero-base));
        --type-label: calc(1rem * var(--hero-base));
        --type-body: calc(0.875rem * var(--hero-base));
        --type-eyebrow: calc(0.75rem * var(--hero-base));
      }
      [data-hero] [data-hero-panels] { width: calc(13.625rem * var(--hero-base, 1)); }
      [data-hero] [data-hero-stats]  { width: calc(10.75rem * var(--hero-base, 1)); }
      [data-hero] [data-hero-map]    { height: calc(3.125rem * var(--hero-base, 1)); width: calc(4.875rem * var(--hero-base, 1)); }
      [data-season] {
        --season-base: calc(1920 / 1440);
        --type-display-sm: calc(3.4375rem * var(--season-base));
        --type-lead: calc(1.125rem * var(--season-base));
        --type-body: calc(0.875rem * var(--season-base));
        --type-eyebrow: calc(0.75rem * var(--season-base));
      }
    }

    body {
      background: var(--background);
      color: var(--foreground);
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
      min-height: 100lvh;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Helpers & Typography */
    a {
      color: inherit;
      text-decoration: none;
    }
    button {
      background: none;
      border: none;
      font: inherit;
      color: inherit;
      cursor: pointer;
      padding: 0;
    }
    h1, h2, h3, h4, p, ul, dl, dd, dt {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
    }

    /* Visually hidden for screen readers */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* TEXT ENGINE REVEAL CONTAINERS */
    .text-reveal {
      display: inline-flex;
      flex-wrap: wrap;
      column-gap: 0.3em;
      line-height: inherit;
      vertical-align: top;
    }
    .text-reveal-unit {
      display: inline-block;
      white-space: pre;
      transform: translateY(0.35em);
      opacity: 0;
      will-change: transform, opacity;
    }

    /* STICKY STACK CONTAINER */
    .sticky-stack-container {
      position: relative;
      background: var(--surface-black);
    }
    .sticky-stack-layer {
      position: sticky;
      top: 0;
      width: 100%;
    }
    .sticky-stack-layer[data-hero] {
      z-index: 0;
    }
    .sticky-stack-layer[data-season] {
      z-index: 10;
    }
    .sticky-stack-layer[data-timeline] {
      position: relative;
      z-index: 20;
    }

    .sticky-layer-inner {
      transform-origin: center;
      width: 100%;
      height: 100%;
    }
    .sticky-layer-shade {
      position: absolute;
      inset: 0;
      background: var(--surface-black);
      opacity: 0;
      pointer-events: none;
      z-index: 40;
    }

    /* ==========================================================================
       SECTION 1: HERO
       ========================================================================== */
    [data-hero] {
      position: relative;
      isolation: isolate;
      min-height: 100lvh;
      overflow: hidden;
      background: var(--background);
    }
    .hero-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      transform: translateZ(0);
      backface-visibility: hidden;
      will-change: transform;
    }
    .hero-fit-box {
      display: none;
    }
    @media (max-width: 1279px) {
      .hero-fit-box {
        display: block;
        position: absolute;
        inset: 0;
        bottom: 0;
        margin: 0 -1.5rem;
        pointer-events: none;
        z-index: 1;
      }
      .hero-fit-target {
        position: absolute;
        inset-inline: 0;
        bottom: 0;
        height: calc(100% - 4rem);
      }
      .hero-ramp {
        position: absolute;
        inset-inline: 0;
        bottom: 0;
        height: 22%;
        z-index: 10;
        pointer-events: none;
        background-image: linear-gradient(to bottom,
          color-mix(in srgb, var(--background) 0%, transparent) 0%,
          color-mix(in srgb, var(--background) 6%, transparent) 26%,
          color-mix(in srgb, var(--background) 20%, transparent) 46%,
          color-mix(in srgb, var(--background) 45%, transparent) 64%,
          color-mix(in srgb, var(--background) 74%, transparent) 80%,
          color-mix(in srgb, var(--background) 93%, transparent) 91%,
          var(--background) 100%);
      }
    }
    @media (max-width: 767px) {
      .hero-fit-target {
        height: calc(100% - 2rem);
      }
      .hero-ramp-sub {
        position: absolute;
        inset-inline: 0;
        bottom: -13rem;
        height: 26rem;
        z-index: 9;
        pointer-events: none;
        background: linear-gradient(to bottom, transparent, var(--background) 60%, var(--background));
      }
    }

    .hero-content {
      position: relative;
      z-index: 20;
      min-height: 100lvh;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      pointer-events: auto;
    }
    @media (min-width: 640px) {
      .hero-content {
        padding: 1.5rem 2rem;
      }
    }
    @media (max-height: 500px) {
      .hero-content {
        padding: 0.75rem 1.5rem;
      }
    }

    /* Masthead */
    .hero-masthead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 30;
      width: 100%;
    }
    .hero-logo-link {
      display: inline-flex;
      align-items: center;
      height: 1.5rem;
    }
    .hero-logo-svg {
      height: 1.5rem;
      width: auto;
      fill: var(--foreground);
    }
    .hero-nav {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    @media (min-width: 1280px) {
      .hero-nav {
        display: block;
      }
    }
    .hero-nav-list {
      display: flex;
      gap: 4rem;
    }
    .hero-nav-link {
      font-size: var(--type-label);
      text-transform: uppercase;
      line-height: 0.9;
      color: var(--foreground);
      transition: color var(--raw-duration-fast) var(--ease-entrance);
    }
    .hero-nav-link:hover {
      color: var(--accent);
    }
    .hero-garage-link {
      display: none;
      font-size: var(--type-label);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 0.9;
      color: var(--foreground);
      transition: color var(--raw-duration-fast) var(--ease-entrance);
    }
    @media (min-width: 1280px) {
      .hero-garage-link {
        display: inline-flex;
        align-items: center;
      }
    }
    .hero-garage-link:hover {
      color: var(--accent);
    }

    /* Mobile burger button */
    .hero-burger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.3125rem;
      padding: 0.5rem;
      margin-right: -0.5rem;
    }
    @media (min-width: 1280px) {
      .hero-burger {
        display: none;
      }
    }
    .hero-burger-line {
      width: 1.5rem;
      height: 1px;
      background: var(--foreground);
    }

    /* Middle Row */
    .hero-middle {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin: 1.5rem 0;
    }
    @media (max-width: 1279px) {
      .hero-middle {
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        gap: 2rem;
        margin: 1rem 0;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .hero-middle {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }
    }

    /* Left Rail — Driver Identity */
    .hero-identity {
      max-width: 26.0625rem;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 1280px) {
      .hero-identity {
        gap: 6.0625rem;
      }
    }
    .hero-id-tag {
      font-size: var(--type-label);
      text-transform: uppercase;
      color: var(--foreground-muted);
      line-height: var(--leading-flat);
      letter-spacing: var(--raw-tracking-label);
    }
    @media (min-width: 1280px) {
      .hero-id-tag {
        position: absolute;
        left: 20.0625rem;
        top: 0.5625rem;
      }
    }
    @media (max-width: 1279px) {
      .hero-id-tag {
        margin-bottom: 0.75rem;
      }
    }

    .hero-name-h1 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-impact);
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--foreground);
      max-width: 6em;
      text-align: left;
    }
    @media (max-width: 1279px) {
      .hero-name-h1 {
        font-size: var(--type-display-lg);
      }
    }
    @media (max-width: 767px) {
      .hero-name-h1 {
        font-size: var(--raw-font-size-70);
      }
    }
    @media (max-height: 500px) {
      .hero-name-h1 {
        font-size: var(--type-heading);
      }
    }

    .hero-meta-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    @media (min-width: 1280px) {
      .hero-meta-list {
        margin-top: 0;
      }
    }
    @media (max-height: 500px) {
      .hero-meta-list {
        gap: 0.25rem;
        margin-top: 0.5rem;
      }
    }
    .hero-meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--type-lead);
      text-transform: uppercase;
      line-height: var(--leading-flat);
      color: var(--foreground);
    }
    .hero-meta-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .hero-meta-icon.flag {
      width: 1.125rem;
      height: 0.75rem;
    }
    .hero-meta-icon.star {
      width: 1rem;
      height: 1rem;
      color: var(--foreground);
    }
    .hero-meta-icon.merc {
      width: 0.875rem;
      height: 0.875rem;
    }

    /* Right Rail — The Two Panels */
    [data-hero-panels] {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 13.625rem;
    }
    @media (max-width: 639px) {
      [data-hero-panels] {
        display: none !important;
      }
    }
    @media (min-width: 640px) and (max-width: 767px) {
      [data-hero-panels] {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }
    }

    /* Bracket Corner Panels */
    .bracket-panel {
      position: relative;
      padding: 1rem;
      background: transparent;
    }
    @media (min-width: 640px) {
      .bracket-panel {
        padding: 1rem 1.375rem 1.1875rem;
      }
    }
    .bracket-corner {
      position: absolute;
      width: 0.625rem;
      height: 0.625rem;
      stroke: var(--foreground);
      fill: none;
      pointer-events: none;
    }
    .bracket-corner.tl { top: 0; left: 0; transform: scaleX(-1); }
    .bracket-corner.tr { top: 0; right: 0; }
    .bracket-corner.bl { bottom: 0; left: 0; transform: scale(-1); }
    .bracket-corner.br { bottom: 0; right: 0; transform: scaleY(-1); }

    .panel-eyebrow {
      font-size: var(--type-eyebrow);
      font-weight: 500;
      text-transform: uppercase;
      line-height: var(--leading-flat);
      letter-spacing: var(--raw-tracking-eyebrow);
      color: var(--accent);
    }
    .panel-dl {
      font-size: var(--type-body);
      text-transform: uppercase;
      line-height: var(--leading-flat);
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      margin-top: 1rem;
    }
    .panel-dl dt {
      font-weight: 700;
    }
    .panel-map-wrap {
      margin-top: 1.75rem;
      width: 4.875rem;
      height: 3.125rem;
      display: flex;
      align-items: center;
    }
    .panel-map-wrap svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      stroke: var(--foreground);
      fill: none;
    }

    /* Panel 2 Stats */
    [data-hero-stats] {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 1.5rem;
      width: 10.75rem;
    }
    .stat-cell {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .stat-label {
      font-size: var(--type-eyebrow);
      text-transform: uppercase;
      letter-spacing: var(--raw-tracking-label);
      white-space: nowrap;
      color: var(--foreground);
    }
    .stat-value {
      font-family: var(--font-display);
      font-weight: 500;
      font-size: var(--type-heading);
      line-height: var(--leading-cap);
      letter-spacing: var(--raw-tracking-stat);
      color: var(--foreground);
    }

    /* Actions Row (Foot) */
    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 0.5rem;
      position: relative;
      z-index: 30;
      width: 100%;
    }
    @media (min-width: 640px) {
      .hero-actions {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: end;
        gap: 2rem;
        margin-top: 0;
      }
    }

    /* Trailer */
    .hero-trailer {
      display: none;
      align-items: center;
      gap: 0.75rem;
      color: var(--foreground);
      transition: color var(--raw-duration-fast) var(--ease-entrance);
    }
    @media (min-width: 640px) {
      .hero-trailer {
        display: flex;
      }
    }
    .hero-trailer:hover .trailer-label {
      color: var(--accent);
    }
    .trailer-icon {
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }
    .trailer-text {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      font-size: var(--type-body);
      text-transform: uppercase;
      line-height: var(--leading-flat);
    }
    .trailer-label {
      font-weight: 500;
      transition: color var(--raw-duration-fast) var(--ease-entrance);
    }
    .trailer-time {
      color: var(--foreground-muted);
    }

    /* Profile CTA Button */
    .profile-cta {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 1.6em;
      height: 3.5rem;
      width: 100%;
      font-size: var(--type-title);
      text-transform: uppercase;
      line-height: var(--leading-flat);
      color: var(--accent);
      cursor: pointer;
      text-decoration: none;
    }
    @media (min-width: 640px) {
      .profile-cta {
        height: 2.5em;
        width: 11em;
      }
    }
    .profile-cta-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .profile-cta-body {
      fill: #0E0F14;
    }
    .profile-cta-flood {
      fill: var(--accent);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform var(--raw-duration-normal) var(--ease-plate);
    }
    .profile-cta-ring {
      fill: none;
      stroke: var(--accent);
      stroke-opacity: 0.25;
    }
    .profile-cta-brackets {
      fill: none;
      stroke: var(--accent);
      stroke-width: 1.5;
    }
    .profile-cta-text {
      position: relative;
      z-index: 2;
      transition: color var(--raw-duration-normal) ease;
    }
    .profile-cta-arrow {
      position: relative;
      z-index: 2;
      width: 0.65em;
      height: 0.5em;
      stroke: var(--accent);
      stroke-width: 1.5;
      fill: none;
      transition: transform var(--raw-duration-fast) ease, stroke var(--raw-duration-normal) ease;
    }
    .profile-cta:hover .profile-cta-flood {
      transform: scaleX(1);
    }
    .profile-cta:hover .profile-cta-text {
      color: var(--surface-black);
    }
    .profile-cta:hover .profile-cta-arrow {
      transform: translateX(0.25rem);
      stroke: var(--surface-black);
    }

    /* Socials */
    .hero-socials {
      display: none;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;
    }
    @media (min-width: 640px) {
      .hero-socials {
        display: flex;
      }
    }
    @media (min-width: 1280px) {
      .hero-socials {
        gap: 3.6875rem;
      }
    }
    .social-link {
      font-size: var(--type-body);
      text-transform: uppercase;
      line-height: var(--leading-flat);
      color: var(--foreground);
      transition: color var(--raw-duration-fast) var(--ease-entrance);
    }
    .social-link:hover {
      color: var(--accent);
    }

    /* ==========================================================================
       LOADING VEIL
       ========================================================================== */
    #loading-veil {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--background);
      pointer-events: auto;
      will-change: opacity, transform;
    }
    .veil-helmet-box {
      position: relative;
      width: 7.2rem;
      height: 8.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .veil-helmet-shell {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      fill: var(--foreground);
      opacity: 0.12;
    }
    .veil-helmet-fill-wrap {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .veil-helmet-progress {
      width: 100%;
      height: 100%;
      fill: var(--foreground);
      transform-origin: top;
      transform: scaleY(0);
      will-change: transform;
    }
    .veil-name {
      margin-top: 1.75rem;
      font-size: var(--type-lead);
      text-transform: uppercase;
      line-height: var(--leading-flat);
      letter-spacing: 0.18em;
      color: var(--foreground);
      opacity: 0;
      transform: translateY(0.6rem);
      will-change: transform, opacity;
    }
    .veil-meter-track {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: var(--border-muted);
    }
    .veil-meter-fill {
      width: 100%;
      height: 100%;
      background: var(--foreground);
      transform-origin: left;
      transform: scaleX(0);
      will-change: transform;
    }

    /* Mobile Sheet Navigation */
    #mobile-sheet {
      position: fixed;
      inset: 0;
      z-index: 500;
      background: var(--background);
      padding: 1.5rem 2rem;
      display: flex;
      flex-direction: column;
      opacity: 0;
      pointer-events: none;
      transition: opacity 250ms ease;
    }
    #mobile-sheet.open {
      opacity: 1;
      pointer-events: auto;
    }
    .sheet-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sheet-close-btn {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .sheet-close-btn::before, .sheet-close-btn::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 1px;
      background: var(--foreground);
    }
    .sheet-close-btn::before { transform: rotate(45deg); }
    .sheet-close-btn::after { transform: rotate(-45deg); }

    .sheet-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.25rem;
    }
    .sheet-nav-link {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-heading);
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--foreground);
      transform: translateY(0.75rem);
      opacity: 0;
      transition: transform 250ms ease, opacity 250ms ease, color 150ms ease;
    }
    #mobile-sheet.open .sheet-nav-link {
      transform: translateY(0);
      opacity: 1;
    }
    .sheet-nav-link:hover {
      color: var(--accent);
    }

    /* ==========================================================================
       SECTION 2: THE SEASON SO FAR
       ========================================================================== */
    [data-season] {
      container-type: inline-size;
      position: relative;
      isolation: isolate;
      min-height: var(--season-h, 100lvh);
      overflow: hidden;
      background: var(--surface-black);
      color: var(--foreground-on-dark);
    }
    @media (max-width: 1023px) {
      [data-season] {
        --gutter-min: 32px;
        --type-min: 13px;
        --copy-min-size: 17px;
        --copy-min-w: 15rem;
        --head-min: 6.6667cqw;
        --plate-w: 277px;
        --plate-h: 78px;
        --plate-cell: 83px;
        --plate-badge-gap: 11px;
        --plate-globe-w: 37px;
        --plate-globe-h: 23px;
        --plate-stats-left: 16px;
        --plate-stats-gap: 8px;
        --plate-eyebrow: 12px;
        --plate-body: 14px;
      }
    }
    @media (max-width: 639px) {
      [data-season] {
        --head-min: 40px;
        --head-air: 20px;
        --season-h: 680px;
      }
    }

    /* Chequered Dissolve Seam Canvas */
    .chequered-dissolve-canvas {
      position: absolute;
      inset-inline: 0;
      top: 0;
      height: 34svh;
      pointer-events: none;
      z-index: 10;
    }

    /* Circuit Stage Container */
    .circuit-stage-frame {
      position: absolute;
      inset: 0;
      overflow: hidden;
      mask-image: linear-gradient(to bottom, transparent 0, #000 10%, #000 90%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 10%, #000 90%, transparent 100%);
      pointer-events: auto;
    }
    @media (max-width: 1023px) {
      .circuit-stage-frame {
        mask-image: none;
        -webkit-mask-image: none;
      }
    }
    .circuit-stage {
      position: absolute;
      left: 0;
      top: 0;
      width: 1440px;
      height: 800px;
      transform-origin: top left;
    }

    /* Halftone canvas */
    .halftone-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    /* Circuit Map SVG */
    .circuit-map-svg {
      position: absolute;
      left: 0;
      top: -4.559px;
      width: 1438.43px;
      height: 809.11px;
      overflow: visible;
      pointer-events: none;
    }

    /* Circuit Canvas for 6s Lap Trace */
    .circuit-trace-canvas {
      position: absolute;
      inset: 0;
      width: 1440px;
      height: 800px;
      pointer-events: none;
    }

    /* Season Copy Column */
    .season-content {
      position: relative;
      z-index: 20;
      min-height: var(--season-h, 100lvh);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 4rem;
      padding: 4.8611cqw 1.5rem 2rem;
      pointer-events: none;
    }
    @media (min-width: 640px) {
      .season-content {
        padding: 4.8611cqw max(2.2222cqw, var(--gutter-min, 0px)) max(2.2222cqw, var(--gutter-min, 0px));
      }
    }
    .season-content > * {
      pointer-events: auto;
    }

    .season-header-wrap {
      max-width: 32rem;
    }
    .season-h2 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: max(3.8194cqw, var(--head-min, 0px));
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--accent);
    }
    .season-h2-dot {
      color: var(--foreground-on-dark);
      opacity: 0;
      transition: opacity 250ms ease;
    }
    .season-cyan-rule {
      width: 1.6667cqw;
      height: 0.1389cqw;
      min-width: 24px;
      min-height: 2px;
      background: var(--accent);
      margin-top: max(1.9444cqw, var(--head-air, 0px));
      transform-origin: left;
      transform: scaleX(0);
      opacity: 0;
      will-change: transform, opacity;
    }
    .season-intro {
      font-size: max(1.25cqw, var(--copy-min-size));
      width: max(16.1111cqw, var(--copy-min-w));
      text-transform: uppercase;
      line-height: var(--leading-display);
      margin-top: max(2.0833cqw, var(--head-air, 0px));
      color: var(--foreground-on-dark);
    }

    /* Standings Plate */
    .standings-plate {
      align-self: flex-end;
      position: relative;
      width: var(--plate-w, 19.2361cqw);
      height: var(--plate-h, 5.4167cqw);
      display: grid;
      grid-template-columns: var(--plate-cell, 5.7639cqw) 1fr;
      padding: 0.5rem;
      transform: translateY(0.75rem);
      opacity: 0;
      will-change: transform, opacity;
    }
    .standings-plate-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .plate-badge-cell {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--plate-badge-gap, 0.7639cqw);
    }
    .globe-svg {
      width: var(--plate-globe-w, 37px);
      height: var(--plate-globe-h, 23px);
      stroke: var(--accent);
      stroke-width: 1;
      fill: none;
    }
    .plate-badge-text {
      display: flex;
      align-items: center;
      gap: 0.3em;
      font-size: var(--plate-eyebrow, max(0.8333cqw, var(--type-min, 12px)));
      line-height: var(--leading-cap);
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }
    .plate-badge-text .f1 { color: var(--foreground-on-dark); }
    .plate-badge-text .year { color: var(--accent); }

    .plate-stats-cell {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: var(--plate-stats-left, 1.1111cqw);
      gap: var(--plate-stats-gap, 0.5556cqw);
      text-transform: uppercase;
      font-size: var(--plate-body, max(0.9722cqw, var(--type-min, 14px)));
      line-height: var(--leading-cap);
    }
    .plate-stat-row {
      display: flex;
      align-items: center;
      gap: 0.35em;
      white-space: nowrap;
    }
    .plate-stat-row dt { color: var(--accent); font-weight: 700; }
    .plate-stat-row dd { color: var(--foreground-on-dark); flex: 1; }

    /* ==========================================================================
       SECTION 3: FROM KARTS TO F1 (TIMELINE)
       ========================================================================== */
    [data-timeline] {
      container-type: inline-size;
      position: relative;
      isolation: isolate;
      min-height: 100lvh;
      background: var(--surface-black);
      color: var(--foreground-on-dark);
      padding: 6rem 1.5rem 8rem;
    }
    @media (min-width: 768px) {
      [data-timeline] {
        padding: 8rem 3rem 10rem;
      }
    }
    .timeline-title-wrap {
      text-align: center;
      margin-bottom: 5rem;
    }
    .timeline-h2 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--raw-font-size-55);
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--foreground-on-dark);
    }
    .timeline-sub {
      font-size: var(--type-label);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-top: 1rem;
    }

    .timeline-track {
      position: relative;
      max-width: 64rem;
      margin: 0 auto;
    }
    /* Rail */
    .timeline-rail-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      transform: translateX(-50%);
      background: var(--timeline-rail);
    }
    @media (max-width: 767px) {
      .timeline-rail-line {
        left: 2rem;
      }
    }
    .timeline-rail-progress {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background: var(--foreground-on-dark);
      will-change: height;
    }
    .timeline-square-marker {
      position: absolute;
      left: -5px;
      top: 0;
      width: 12px;
      height: 12px;
      background: var(--accent);
      transform: rotate(0deg);
      transform-origin: center;
      box-shadow: 0 0 12px var(--accent);
      will-change: transform, top;
    }

    .timeline-list {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
    .timeline-row {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      transition: opacity 300ms ease;
    }
    .timeline-track:hover .timeline-row:not(:hover) {
      opacity: 0.35;
    }
    .timeline-row.left {
      justify-content: flex-start;
      padding-right: 52%;
    }
    .timeline-row.right {
      justify-content: flex-end;
      padding-left: 52%;
    }
    @media (max-width: 767px) {
      .timeline-row.left, .timeline-row.right {
        justify-content: flex-start;
        padding-left: 4.5rem;
        padding-right: 0;
      }
    }

    .timeline-card {
      position: relative;
      background: var(--timeline-fill);
      border: 1px solid var(--timeline-outline);
      padding: 1.5rem;
      clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
      transition: border-color var(--raw-duration-normal) ease, background var(--raw-duration-normal) ease;
      width: 100%;
    }
    .timeline-card:hover {
      border-color: var(--accent);
      background: rgba(255, 255, 255, 0.14);
    }
    .timeline-year-tag {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-year);
      line-height: var(--leading-flat);
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    .timeline-card-title {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-lead);
      text-transform: uppercase;
      line-height: 1.1;
      margin-bottom: 0.5rem;
      color: var(--foreground-on-dark);
    }
    .timeline-card-desc {
      font-size: var(--type-body);
      color: var(--foreground-on-dark-muted);
      line-height: 1.4;
      text-transform: uppercase;
    }

    /* ==========================================================================
       SECTION 4: FROM THE PADDOCK
       ========================================================================== */
    [data-paddock] {
      container-type: inline-size;
      position: relative;
      isolation: isolate;
      min-height: 100lvh;
      background: var(--background);
      color: var(--foreground);
      padding: 8rem 1.5rem;
      overflow: hidden;
    }
    @media (min-width: 768px) {
      [data-paddock] {
        padding: 10rem 3rem;
      }
    }
    .paddock-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
    .paddock-content {
      position: relative;
      z-index: 10;
      max-width: 80rem;
      margin: 0 auto;
    }
    .paddock-h2 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--raw-font-size-96);
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--foreground);
      margin-bottom: 3rem;
    }
    @media (max-width: 1023px) {
      .paddock-h2 {
        font-size: var(--type-display-lg);
      }
    }
    @media (max-width: 639px) {
      .paddock-h2 {
        font-size: var(--raw-font-size-52);
      }
    }

    .paddock-report-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      margin-bottom: 5rem;
    }
    @media (min-width: 1024px) {
      .paddock-report-grid {
        grid-template-columns: 1.2fr 1fr;
        align-items: center;
      }
    }
    .paddock-quote {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-heading);
      text-transform: uppercase;
      line-height: 1.1;
      color: var(--foreground);
      border-left: 3px solid var(--accent);
      padding-left: 1.5rem;
    }
    .paddock-body-col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: var(--type-lead);
      line-height: 1.5;
      text-transform: uppercase;
      color: var(--foreground);
    }

    /* Chamfered dark button */
    .chamfered-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 2rem;
      background: var(--surface-dark);
      color: var(--accent);
      font-size: var(--type-label);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
      transition: background var(--raw-duration-normal) ease, color var(--raw-duration-normal) ease;
      text-decoration: none;
      align-self: flex-start;
      margin-top: 1rem;
    }
    .chamfered-btn:hover {
      background: var(--accent);
      color: var(--surface-black);
    }

    /* Calendar Strip Band */
    .paddock-calendar-band {
      background: var(--surface-dark);
      color: var(--foreground-on-dark);
      border-radius: var(--raw-radius-16);
      padding: 2.5rem 1.5rem;
      margin-top: 4rem;
      position: relative;
    }
    @media (min-width: 768px) {
      .paddock-calendar-band {
        padding: 3rem 2.5rem;
      }
    }
    .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;
      border-bottom: 1px solid var(--border-on-dark);
      padding-bottom: 1rem;
    }
    .calendar-title {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-heading);
      text-transform: uppercase;
      color: var(--foreground-on-dark);
    }
    .calendar-status {
      font-size: var(--type-body);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .calendar-rounds-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      position: relative;
    }
    .round-card {
      position: relative;
      background: var(--surface-dark-raised);
      border: 1px solid var(--border-on-dark);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.5rem;
      transition: border-color var(--raw-duration-fast) ease;
    }
    .round-card.live {
      border-color: var(--accent);
      box-shadow: 0 0 20px var(--accent-muted);
    }
    .round-num {
      font-size: var(--type-eyebrow);
      color: var(--accent);
      font-weight: 700;
      text-transform: uppercase;
    }
    .round-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: var(--type-lead);
      text-transform: uppercase;
      color: var(--foreground-on-dark);
    }
    .round-meta {
      font-size: var(--type-body);
      color: var(--foreground-on-dark-muted);
      text-transform: uppercase;
    }
    .round-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      font-size: var(--type-eyebrow);
      font-weight: 700;
      text-transform: uppercase;
      color: var(--foreground-on-dark);
    }
    .round-badge.live-badge {
      color: var(--accent);
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 10px var(--accent);
      animation: pulseAnim 1.8s infinite ease-in-out;
    }
    @keyframes pulseAnim {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    /* ==========================================================================
       SECTION 5: KEEP PUSHING FORWARD (FOOTER)
       ========================================================================== */
    [data-footer] {
      background: var(--accent);
      padding: 1rem;
      min-height: 80lvh;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .footer-inner-card {
      background: var(--surface-black);
      color: var(--foreground-on-dark);
      border-radius: var(--raw-radius-16);
      flex: 1;
      padding: 4rem 2rem 2rem;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media (min-width: 768px) {
      .footer-inner-card {
        padding: 6rem 4rem 3rem;
      }
    }
    .footer-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0.1;
    }
    .footer-top {
      position: relative;
      z-index: 10;
    }
    .footer-headline {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(3rem, 8vw, 8rem);
      text-transform: uppercase;
      line-height: var(--leading-headline);
      color: var(--foreground-on-dark);
      margin-bottom: 4rem;
      max-width: 15ch;
    }

    .footer-nav-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 3rem;
      position: relative;
      z-index: 10;
      margin-bottom: 6rem;
    }
    .footer-col-title {
      font-size: var(--type-eyebrow);
      color: var(--accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }
    .footer-col-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .footer-link {
      font-size: var(--type-label);
      text-transform: uppercase;
      color: var(--foreground-on-dark-muted);
      transition: color var(--raw-duration-fast) ease;
    }
    .footer-link:hover {
      color: var(--accent);
    }

    .footer-bottom-row {
      position: relative;
      z-index: 10;
      border-top: 1px solid var(--border-on-dark);
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: var(--type-eyebrow);
      color: var(--raw-color-white-alpha-40);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    @media (min-width: 768px) {
      .footer-bottom-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <!-- LOADING VEIL -->
  <div id="loading-veil" role="status" aria-label="Loading Grido1 Racing Systems">
    <div class="veil-helmet-box">
      <!-- Faint shell silhouette -->
      <svg class="veil-helmet-shell" viewBox="0 0 434 512">
        <path d="M217 20 C100 20 40 100 30 220 C20 340 50 440 110 470 C140 485 180 490 217 490 C254 490 294 485 324 470 C384 440 414 340 404 220 C394 100 334 20 217 20 Z" />
      </svg>
      <!-- Filling sheet from top -->
      <div class="veil-helmet-fill-wrap">
        <svg class="veil-helmet-progress" id="veil-progress-svg" viewBox="0 0 434 512">
          <path d="M217 20 C100 20 40 100 30 220 C20 340 50 440 110 470 C140 485 180 490 217 490 C254 490 294 485 324 470 C384 440 414 340 404 220 C394 100 334 20 217 20 Z" />
        </svg>
      </div>
    </div>
    <div class="veil-name" id="veil-name">kimi antonelli</div>
    <div class="veil-meter-track">
      <div class="veil-meter-fill" id="veil-meter-fill"></div>
    </div>
  </div>

  <!-- MOBILE NAVIGATION DRAWER SHEET -->
  <div id="mobile-sheet" aria-hidden="true">
    <div class="sheet-header">
      <a href="/" class="hero-logo-link" aria-label="Grido1 Racing Systems">
        <svg class="hero-logo-svg" viewBox="0 0 424 97">
          <text x="0" y="70" font-family="'Oswald', Impact" font-weight="700" font-size="75" letter-spacing="-1">GRIDO1</text>
        </svg>
      </a>
      <button class="sheet-close-btn" id="sheet-close" aria-label="Close Navigation"></button>
    </div>
    <nav class="sheet-nav">
      <a href="/driver" class="sheet-nav-link">Driver</a>
      <a href="/season" class="sheet-nav-link">Season</a>
      <a href="/journal" class="sheet-nav-link">Journal</a>
      <a href="/next-race" class="sheet-nav-link">Next Race</a>
      <a href="/store" class="sheet-nav-link">Store</a>
      <a href="/garage" class="sheet-nav-link">Garage</a>
    </nav>
  </div>

  <!-- STICKY STACK WRAPPER -->
  <div class="sticky-stack-container">

    <!-- LAYER 1: HERO SECTION -->
    <section class="sticky-stack-layer" data-hero id="hero-section">
      <div class="sticky-layer-inner" id="hero-inner">
        <!-- WebGL Scene Canvas -->
        <canvas class="hero-canvas" id="hero-scene-canvas" aria-hidden="true"></canvas>

        <!-- Fitting box for mobile / tablet subject sizing -->
        <div class="hero-fit-box" id="hero-fit-box">
          <div class="hero-fit-target" id="hero-fit-target"></div>
        </div>

        <!-- Ramp overlays below xl -->
        <div class="hero-ramp"></div>
        <div class="hero-ramp-sub"></div>

        <!-- Content Column -->
        <div class="hero-content">
          <!-- Masthead Header -->
          <header class="hero-masthead" id="hero-masthead">
            <a href="/" class="hero-logo-link" aria-label="Grido1 Racing Systems">
              <svg class="hero-logo-svg" viewBox="0 0 424 97">
                <text x="0" y="72" font-family="'Oswald', Impact" font-weight="700" font-size="75" letter-spacing="-1">GRIDO1</text>
              </svg>
            </a>

            <nav class="hero-nav" aria-label="Main Navigation">
              <ul class="hero-nav-list">
                <li><a href="/driver" class="hero-nav-link">Driver</a></li>
                <li><a href="/season" class="hero-nav-link">Season</a></li>
                <li><a href="/journal" class="hero-nav-link">Journal</a></li>
                <li><a href="/next-race" class="hero-nav-link">Next Race</a></li>
                <li><a href="/store" class="hero-nav-link">Store</a></li>
              </ul>
            </nav>

            <a href="/garage" class="hero-garage-link">
              <span aria-hidden="true">[&nbsp;</span>
              <span>Garage</span>
              <span aria-hidden="true">&nbsp;→&nbsp;]</span>
            </a>

            <button class="hero-burger" id="hero-burger" aria-label="Open Navigation">
              <span class="hero-burger-line"></span>
              <span class="hero-burger-line"></span>
            </button>
          </header>

          <!-- Middle Row: Identity & Right Panels -->
          <div class="hero-middle">
            <!-- Left Rail: Driver Identity -->
            <div class="hero-identity" id="hero-identity">
              <span class="hero-id-tag" id="hero-id-tag">driver_012</span>
              
              <h1 class="hero-name-h1" id="hero-name-h1">
                <span class="sr-only">Kimi Antonelli</span>
                <span class="text-reveal" aria-hidden="true" id="hero-name-reveal">
                  <span class="text-reveal-unit">KIMI</span>
                  <span class="text-reveal-unit">ANTONELLI</span>
                </span>
              </h1>

              <ul class="hero-meta-list" id="hero-meta-list">
                <li class="hero-meta-item">
                  <span class="hero-meta-icon flag">
                    <svg viewBox="0 0 18 12" width="18" height="12">
                      <rect width="6" height="12" fill="#009246" />
                      <rect x="6" width="6" height="12" fill="#ffffff" />
                      <rect x="12" width="6" height="12" fill="#ce2b37" />
                    </svg>
                  </span>
                  <span>Italy</span>
                </li>
                <li class="hero-meta-item">
                  <span class="hero-meta-icon star">✦</span>
                  <span>Rookie season_2026</span>
                </li>
                <li class="hero-meta-item">
                  <span class="hero-meta-icon merc">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.2">
                      <circle cx="8" cy="8" r="7" />
                      <line x1="8" y1="8" x2="8" y2="1.2" />
                      <line x1="8" y1="8" x2="2.1" y2="11.4" />
                      <line x1="8" y1="8" x2="13.9" y2="11.4" />
                    </svg>
                  </span>
                  <span>Mercedes-AMG F1 Team</span>
                </li>
              </ul>
            </div>

            <!-- Right Rail: Two Bracketed Panels -->
            <div data-hero-panels id="hero-panels">
              <!-- Panel 1: Next Race -->
              <div class="bracket-panel">
                <svg class="bracket-corner tl" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner tr" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner bl" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner br" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>

                <div class="panel-eyebrow">Next race</div>
                <dl class="panel-dl">
                  <dt>Belgian GP</dt>
                  <dd>Spa-Francorchamps</dd>
                  <dd><time datetime="2026-07-27">27 Jul 2026</time></dd>
                </dl>
                <div class="panel-map-wrap" data-hero-map>
                  <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
                    <path d="M20 15 L45 10 L85 18 L75 35 L90 45 L65 52 L35 48 L15 35 Z" stroke-width="2" />
                  </svg>
                </div>
              </div>

              <!-- Panel 2: Season Stats -->
              <div class="bracket-panel">
                <svg class="bracket-corner tl" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner tr" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner bl" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>
                <svg class="bracket-corner br" viewBox="0 0 10.5 10.5"><path d="M0 0.5H10V10.5" /></svg>

                <div class="panel-eyebrow">Season stats</div>
                <dl data-hero-stats>
                  <div class="stat-cell">
                    <dt class="stat-label">Races</dt>
                    <dd class="stat-value" id="stat-races">12</dd>
                  </div>
                  <div class="stat-cell">
                    <dt class="stat-label">Podiums</dt>
                    <dd class="stat-value" id="stat-podiums">3</dd>
                  </div>
                  <div class="stat-cell">
                    <dt class="stat-label">Points</dt>
                    <dd class="stat-value" id="stat-points">118</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <!-- Foot: Actions Row -->
          <div class="hero-actions" id="hero-actions">
            <!-- Trailer -->
            <a href="/trailer" class="hero-trailer">
              <svg class="trailer-icon" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" stroke-width="1.5" />
                <polygon points="13,10 22,16 13,22" fill="currentColor" />
              </svg>
              <div class="trailer-text">
                <span class="trailer-label">Watch trailer</span>
                <span class="trailer-time">01:26</span>
              </div>
            </a>

            <!-- Profile CTA Button -->
            <a href="/driver/kimi-antonelli" class="profile-cta">
              <svg class="profile-cta-svg" viewBox="0 0 220 50" preserveAspectRatio="none">
                <path class="profile-cta-body" d="M220 42L212.932 50H0V0H220V42Z" />
                <path class="profile-cta-flood" d="M220 42L212.932 50H0V0H220V42Z" />
                <path class="profile-cta-ring" d="M220 42L212.932 50H0V0H220V42Z" />
                <path class="profile-cta-brackets" d="M205 49.5H213L219.5 42V36 M212 0.5H219.5V7 M8 0.5H0.5V7 M7.5 49.5H0.5V42.5" />
              </svg>
              <span class="profile-cta-text">View profile</span>
              <svg class="profile-cta-arrow" viewBox="0 0 13.7071 10.7071">
                <path d="M0 5.35355H13M8 10.3536L13 5.35355L8 0.353553" />
              </svg>
            </a>

            <!-- Socials -->
            <div class="hero-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">Inst</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-link">X</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link">Youtube</a>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-layer-shade" id="hero-shade"></div>
    </section>

    <!-- LAYER 2: THE SEASON SO FAR -->
    <section class="sticky-stack-layer" data-season id="season-section">
      <div class="sticky-layer-inner" id="season-inner">
        <!-- Chequered flag dissolve seam (carry="light") -->
        <canvas class="chequered-dissolve-canvas" id="season-dissolve-canvas" aria-hidden="true"></canvas>

        <!-- Circuit Stage Frame -->
        <div class="circuit-stage-frame" id="circuit-stage-frame">
          <div class="circuit-stage" id="circuit-stage">
            <!-- Halftone landmass canvas -->
            <canvas class="halftone-canvas" id="halftone-canvas" width="2560" height="1440" aria-hidden="true"></canvas>

            <!-- Map Vector SVG -->
            <svg class="circuit-map-svg" id="circuit-map-svg" viewBox="0 0 2560 1440" aria-hidden="true">
              <defs>
                <mask id="circuit-lap-mask">
                  <rect width="2560" height="1440" fill="black" />
                  <path id="svg-lap-centreline" d="" fill="none" stroke="white" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" />
                </mask>
                <mask id="circuit-finish-cut">
                  <rect width="2560" height="1440" fill="white" />
                  <rect x="805" y="901" width="36" height="40" fill="black" transform="rotate(144 822.96 921.57)" />
                </mask>
              </defs>

              <!-- Crawling Grid Axes -->
              <g id="grid-axes">
                <line x1="645.31" y1="-4000" x2="645.31" y2="5440" stroke="var(--map-grid)" stroke-width="2.13" stroke-dasharray="12.15 8.35" class="crawling-grid" />
                <line x1="1276.96" y1="-4000" x2="1276.96" y2="5440" stroke="var(--map-grid)" stroke-width="2.13" stroke-dasharray="12.15 8.35" class="crawling-grid" />
                <line x1="1908.61" y1="-4000" x2="1908.61" y2="5440" stroke="var(--map-grid)" stroke-width="2.13" stroke-dasharray="12.15 8.35" class="crawling-grid" />
                <line x1="-4000" y1="697.98" x2="6560" y2="697.98" stroke="var(--map-grid)" stroke-width="2.13" stroke-dasharray="12.15 8.35" class="crawling-grid" />
              </g>

              <!-- Radar Hub with Rings and Ping -->
              <g id="radar-hub">
                <circle cx="1278.48" cy="699.5" r="10.63" fill="var(--map-mark)" />
                <circle cx="1278.48" cy="699.5" r="69.85" stroke="var(--map-grid)" stroke-width="3.04" fill="none" />
                <circle cx="1278.48" cy="699.5" r="356.06" stroke="var(--map-grid-ghost)" stroke-width="2.13" fill="none" />
                <circle cx="1278.48" cy="699.5" r="442.61" stroke="var(--map-grid-ghost)" stroke-width="2.13" fill="none" />
                <circle id="radar-ping" cx="1278.48" cy="699.5" r="10.63" stroke="var(--accent)" stroke-width="2.13" fill="none" opacity="0" />
              </g>

              <!-- Corner Marks -->
              <g id="corner-marks" stroke="var(--map-mark)" stroke-width="2" fill="none">
                <path d="M65.29 76.96 h16.7 M65.29 76.96 v16.7" />
                <path d="M2471.93 76.96 h-16.7 M2471.93 76.96 v16.7" />
                <path d="M65.29 931.81 h16.7 M65.29 931.81 v-16.7" />
                <path d="M2471.93 931.81 h-16.7 M2471.93 931.81 v-16.7" />
                <path d="M65.29 1343.3 h16.7 M65.29 1343.3 v-16.7" />
                <path d="M1155.49 1343.3 h16.7 M1155.49 1343.3 v-16.7" />
                <path d="M1384.77 1343.3 h16.7 M1384.77 1343.3 v-16.7" />
              </g>

              <!-- The Track Ribbon -->
              <g id="track-ribbons" mask="url(#circuit-finish-cut)">
                <!-- Base Track Ribbon in White -->
                <path id="svg-track-ribbon-base" d="" fill="var(--foreground-on-dark)" />
                <!-- Active Lap Fill in Cyan under Lap Mask -->
                <path id="svg-track-ribbon-lap" d="" fill="var(--accent)" mask="url(#circuit-lap-mask)" />
              </g>

              <!-- Turn Markers -->
              <g id="turn-markers">
                <polygon points="13.69,0 -6.85,11.86 -6.85,-11.86" fill="var(--accent)" transform="translate(1349.96, 351.98) rotate(73.5)" />
                <polygon points="13.69,0 -6.85,11.86 -6.85,-11.86" fill="var(--accent)" transform="translate(1862.23, 611.24) rotate(30.5)" />
                <polygon points="13.69,0 -6.85,11.86 -6.85,-11.86" fill="var(--accent)" transform="translate(1732.95, 903.82) rotate(89.5)" />
                <polygon points="13.69,0 -6.85,11.86 -6.85,-11.86" fill="var(--accent)" transform="translate(585.43, 916.65) rotate(17.5)" />
              </g>

              <!-- Chequered Flag Diamonds -->
              <path id="svg-flag-diamonds" d="" fill="var(--map-mark)" />
            </svg>

            <!-- Circuit Trace Canvas for 6s Animated Lap -->
            <canvas class="circuit-trace-canvas" id="circuit-trace-canvas" width="1440" height="800" aria-hidden="true"></canvas>
          </div>
        </div>

        <!-- Season Copy Column -->
        <div class="season-content">
          <!-- Left Rail: Heading & Intro -->
          <div class="season-header-wrap">
            <h2 class="season-h2" id="season-h2">
              <span class="sr-only">The Season So Far.</span>
              <span class="text-reveal" aria-hidden="true">
                <span class="text-reveal-unit">THE</span>
                <span class="text-reveal-unit">SEASON</span>
              </span>
              <br>
              <span class="text-reveal" aria-hidden="true">
                <span class="text-reveal-unit">SO</span>
                <span class="text-reveal-unit">FAR</span>
                <span class="season-h2-dot" id="season-h2-dot">.</span>
              </span>
            </h2>

            <div class="season-cyan-rule" id="season-cyan-rule"></div>

            <p class="season-intro" id="season-intro">
              <span class="sr-only">Every race is a step forward. Here's how the season is shaping up.</span>
              <span class="text-reveal" aria-hidden="true" id="season-intro-reveal">
                <!-- Word units injected via JS -->
              </span>
            </p>
          </div>

          <!-- Bottom Right: Standings Plate -->
          <div class="standings-plate" id="standings-plate">
            <svg class="standings-plate-svg" viewBox="0 0 277 78">
              <path d="M0.5 0.5H276.5V69L268 77.5H0.5Z" fill="var(--surface-black)" stroke="var(--accent)" stroke-width="1" vector-effect="non-scaling-stroke" />
              <line x1="83" y1="0.5" x2="83" y2="77.5" stroke="var(--accent)" stroke-width="1" />
            </svg>

            <div class="plate-badge-cell">
              <svg class="globe-svg" viewBox="0 0 37 23">
                <ellipse cx="18.5" cy="11.5" rx="18" ry="11" />
                <line x1="0.5" y1="11.5" x2="36.5" y2="11.5" />
                <ellipse id="globe-meridian" cx="18.5" cy="11.5" rx="18" ry="11" />
              </svg>
              <div class="plate-badge-text">
                <span class="f1" id="plate-f1">F1</span>
                <span class="year" id="plate-year">/ 2026</span>
              </div>
            </div>

            <div class="plate-stats-cell">
              <div class="plate-stat-row">
                <dt id="plate-stat-p1">P1</dt>
                <dd id="plate-stat-champ">in the championship</dd>
              </div>
              <div class="plate-stat-row">
                <dt id="plate-stat-wins">6</dt>
                <dd id="plate-stat-wins-label">wins</dd>
              </div>
              <div class="plate-stat-row">
                <dt id="plate-stat-podiums">9</dt>
                <dd id="plate-stat-podiums-label">podiums.</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-layer-shade" id="season-shade"></div>
    </section>

    <!-- LAYER 3: FROM KARTS TO F1 (TIMELINE) -->
    <section class="sticky-stack-layer" data-timeline id="timeline-section">
      <!-- Chequered dissolve seam at top (carry="light") -->
      <canvas class="chequered-dissolve-canvas" id="timeline-dissolve-canvas" aria-hidden="true"></canvas>

      <div class="timeline-title-wrap">
        <h2 class="timeline-h2">From Karts to F1</h2>
        <div class="timeline-sub">Career Progression & Milestones</div>
      </div>

      <div class="timeline-track" id="timeline-track">
        <!-- Central Rail -->
        <div class="timeline-rail-line">
          <div class="timeline-rail-progress" id="timeline-progress-bar"></div>
          <div class="timeline-square-marker" id="timeline-square-marker"></div>
        </div>

        <div class="timeline-list">
          <!-- Item 1: 2018 -->
          <div class="timeline-row left">
            <div class="timeline-card">
              <div class="timeline-year-tag">2018</div>
              <div class="timeline-card-title">WSK Champions Cup & Rookie Dominance</div>
              <div class="timeline-card-desc">International 60 Mini karting breakthrough with double crowns across European circuits.</div>
            </div>
          </div>

          <!-- Item 2: 2020 -->
          <div class="timeline-row right">
            <div class="timeline-card">
              <div class="timeline-year-tag">2020</div>
              <div class="timeline-card-title">CIK-FIA European Champion OK-J</div>
              <div class="timeline-card-desc">Secured the European Junior Championship title with dominant pole-to-win conversions.</div>
            </div>
          </div>

          <!-- Item 3: 2021 -->
          <div class="timeline-row left">
            <div class="timeline-card">
              <div class="timeline-year-tag">2021</div>
              <div class="timeline-card-title">Back-to-Back Senior OK European Champion</div>
              <div class="timeline-card-desc">Defended title in the premier senior karting category, officially inducted into Mercedes Junior Team.</div>
            </div>
          </div>

          <!-- Item 4: 2022 -->
          <div class="timeline-row right">
            <div class="timeline-card">
              <div class="timeline-year-tag">2022</div>
              <div class="timeline-card-title">Italian F4 & ADAC Formula 4 Champion</div>
              <div class="timeline-card-desc">Record-breaking single-seater debut with Prema Racing: 22 wins, 14 poles, and dual titles.</div>
            </div>
          </div>

          <!-- Item 5: 2023 -->
          <div class="timeline-row left">
            <div class="timeline-card">
              <div class="timeline-year-tag">2023</div>
              <div class="timeline-card-title">Formula Regional European Champion</div>
              <div class="timeline-card-desc">Mastered complex wet-weather races to clinch the FRECA championship with 5 wins and 11 podiums.</div>
            </div>
          </div>

          <!-- Item 6: 2024 -->
          <div class="timeline-row right">
            <div class="timeline-card">
              <div class="timeline-year-tag">2024</div>
              <div class="timeline-card-title">FIA Formula 2 & Mercedes F1 Testing</div>
              <div class="timeline-card-desc">Skip-step promotion direct to F2. Sprint and Feature race victories alongside intensive F1 TPC mileage.</div>
            </div>
          </div>

          <!-- Item 7: 2026 -->
          <div class="timeline-row left">
            <div class="timeline-card">
              <div class="timeline-year-tag">2026</div>
              <div class="timeline-card-title">Mercedes-AMG Petronas F1 Race Driver</div>
              <div class="timeline-card-desc">Promoted to the Formula 1 grid in Silver Arrows #12 alongside George Russell. First podiums and race wins.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div> <!-- End of Sticky Stack Container -->

  <!-- ==========================================================================
       SECTION 4: FROM THE PADDOCK
       ========================================================================== -->
  <section data-paddock id="paddock-section">
    <!-- Chequered dissolve seam (carry="dark") -->
    <canvas class="chequered-dissolve-canvas" id="paddock-dissolve-canvas" aria-hidden="true"></canvas>

    <!-- Procedural Rolling Contour Canvas -->
    <canvas class="paddock-canvas" id="paddock-contour-canvas" aria-hidden="true"></canvas>

    <div class="paddock-content">
      <h2 class="paddock-h2">From the Paddock</h2>

      <div class="paddock-report-grid">
        <div class="paddock-quote">
          "Every lap was on the absolute limit. The high-speed balance in Sector 2 gave us the confidence to commit into the apex and pull the gap."
        </div>
        <div class="paddock-body-col">
          <p>
            Silverstone debrief: Tire delta management across the opening stint unlocked clean air advantage. 
            Telemetry shows consistent apex speed through Copse and Becketts matching race leader telemetry.
          </p>
          <p>
            With Spa-Francorchamps next on the calendar, aerodynamic efficiency and straight-line DRS trim will be critical.
          </p>
          <a href="/journal/belgian-gp-preview" class="chamfered-btn">
            <span>Read full debrief</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- Calendar Strip Band -->
      <div class="paddock-calendar-band">
        <div class="calendar-header">
          <div class="calendar-title">2026 Season Calendar</div>
          <div class="calendar-status">Round 13 / 24 — Live</div>
        </div>

        <div class="calendar-rounds-row">
          <!-- Round 11 -->
          <div class="round-card">
            <div class="round-num">Round 11</div>
            <div class="round-name">British GP</div>
            <div class="round-meta">Silverstone • 05 Jul</div>
            <div class="round-badge">P2 Podium</div>
          </div>

          <!-- Round 12 -->
          <div class="round-card">
            <div class="round-num">Round 12</div>
            <div class="round-name">Hungarian GP</div>
            <div class="round-meta">Hungaroring • 19 Jul</div>
            <div class="round-badge">P1 Victory</div>
          </div>

          <!-- Round 13 (LIVE) -->
          <div class="round-card live">
            <div class="round-num">Round 13</div>
            <div class="round-name">Belgian GP</div>
            <div class="round-meta">Spa-Francorchamps • 27 Jul</div>
            <div class="round-badge live-badge">
              <span class="pulse-dot"></span>
              <span>Live Round</span>
            </div>
          </div>

          <!-- Round 14 -->
          <div class="round-card">
            <div class="round-num">Round 14</div>
            <div class="round-name">Dutch GP</div>
            <div class="round-meta">Zandvoort • 30 Aug</div>
            <div class="round-badge">Upcoming</div>
          </div>

          <!-- Round 15 -->
          <div class="round-card">
            <div class="round-num">Round 15</div>
            <div class="round-name">Italian GP</div>
            <div class="round-meta">Monza • 06 Sep</div>
            <div class="round-badge">Home Race</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SECTION 5: KEEP PUSHING FORWARD (SIGN-OFF & FOOTER)
       ========================================================================== -->
  <footer data-footer id="footer-section">
    <div class="footer-inner-card">
      <!-- White contour field canvas -->
      <canvas class="footer-canvas" id="footer-contour-canvas" aria-hidden="true"></canvas>

      <div class="footer-top">
        <h2 class="footer-headline">Keep Pushing Forward</h2>

        <div class="footer-nav-grid">
          <div>
            <div class="footer-col-title">Navigation</div>
            <div class="footer-col-links">
              <a href="/driver" class="footer-link">01 / Driver</a>
              <a href="/season" class="footer-link">02 / Season</a>
              <a href="/journal" class="footer-link">03 / Journal</a>
              <a href="/next-race" class="footer-link">04 / Next Race</a>
              <a href="/garage" class="footer-link">05 / Garage</a>
            </div>
          </div>

          <div>
            <div class="footer-col-title">Connect</div>
            <div class="footer-col-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-link">X (Twitter)</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-link">YouTube</a>
              <a href="https://mercedesamgf1.com" target="_blank" rel="noopener noreferrer" class="footer-link">Mercedes-AMG F1</a>
            </div>
          </div>

          <div>
            <div class="footer-col-title">Specifications</div>
            <div class="footer-col-links">
              <span class="footer-link">Car: Mercedes-AMG F1 W17</span>
              <span class="footer-link">Engine: Mercedes-AMG V6 Turbo Hybrid</span>
              <span class="footer-link">Driver: Andrea Kimi Antonelli</span>
              <span class="footer-link">Number: 12</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-row">
        <div>© 2026 GRIDO1 RACING SYSTEMS. ALL RIGHTS RESERVED.</div>
        <div>MERCEDES-AMG PETRONAS FORMULA ONE TEAM OFFICIAL PARTNER</div>
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       MAIN JAVASCRIPT ES MODULE
       ========================================================================== -->
  <script type="module">
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
    import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
    import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
    import Lenis from 'lenis';

    // Disable automatic browser scroll restoration
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // ==========================================================================
    // 1. SHARED TICKER & LENIS INITIALIZATION
    // ==========================================================================
    const subscribers = new Set();
    let rafId = null;

    export function subscribe(callback, getFramerate = () => 0) {
      const sub = { callback, getFramerate, last: 0 };
      subscribers.add(sub);
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
      return () => {
        subscribers.delete(sub);
        if (subscribers.size === 0 && rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      };
    }

    function tick(time) {
      rafId = requestAnimationFrame(tick);
      const snapshot = Array.from(subscribers);
      for (const sub of snapshot) {
        const interval = sub.getFramerate();
        if (time - sub.last >= interval) {
          sub.callback(time);
          sub.last = time;
        }
      }
    }

    // Lenis smooth scroll
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis = null;
    if (!isReducedMotion) {
      lenis = new Lenis({ smoothWheel: true });
      subscribe((time) => lenis.raf(time), () => 0);
    }

    // Read design token helper
    function readToken(token) {
      const probe = document.createElement("span");
      probe.style.cssText = \`position:absolute;visibility:hidden;color:var(\${token})\`;
      document.body.appendChild(probe);
      const resolved = getComputedStyle(probe).color;
      probe.remove();
      return resolved;
    }

    // Dynamic root font size above 1920px
    function updateRootFontSize() {
      if (window.innerWidth > 1920) {
        document.documentElement.style.fontSize = \`\${16 * window.innerWidth / 1920}px\`;
      } else {
        document.documentElement.style.fontSize = '';
      }
    }
    window.addEventListener('resize', updateRootFontSize, { passive: true });
    updateRootFontSize();

    // ==========================================================================
    // 2. SPRING SOLVER (REACT-SPRING REPRODUCED)
    // ==========================================================================
    class Spring {
      constructor({
        tension = 170,
        friction = 26,
        mass = 1,
        from = 0,
        to = 0,
        delay = 0,
        restDistance = 0.01,
        restVelocity = 0.01,
        onChange = null
      } = {}) {
        this.tension = tension;
        this.friction = friction;
        this.mass = mass;
        this.value = from;
        this.velocity = 0;
        this.target = to;
        this.delay = delay;
        this.restDistance = restDistance;
        this.restVelocity = restVelocity;
        this.onChange = onChange;
        this.active = false;
        this.elapsed = 0;
      }

      setTarget(to) {
        this.target = to;
        this.active = true;
      }

      update(deltaTime) {
        if (this.delay > 0) {
          this.delay -= deltaTime * 1000;
          return;
        }
        if (!this.active) return;

        const dt = 0.001; // 1ms substeps
        const steps = Math.min(Math.floor((deltaTime * 1000)), 64);
        for (let i = 0; i < steps; i++) {
          const force = -this.tension * (this.value - this.target) - this.friction * this.velocity;
          const accel = force / this.mass;
          this.velocity += accel * dt;
          this.value += this.velocity * dt;
        }

        if (Math.abs(this.velocity) < this.restVelocity && Math.abs(this.target - this.value) < this.restDistance) {
          this.value = this.target;
          this.velocity = 0;
          this.active = false;
        }

        if (this.onChange) this.onChange(this.value);
      }
    }

    // Spring Configs
    const SPRING_CONFIGS = {
      REVEAL: { tension: 90, friction: 26 },
      ITEM: { tension: 170, friction: 24 },
      SHEET: { tension: 190, friction: 26 },
      FIGURE: { tension: 200, friction: 24 },
      TYPE: { tension: 210, friction: 24 },
      YEAR: { tension: 190, friction: 24 },
      COPY: { tension: 110, friction: 26 },
      NAME: { tension: 190, friction: 24 },
      VEIL: { tension: 70, friction: 24 },
      CLEAR: { tension: 140, friction: 26 },
      LABEL: { tension: 110, friction: 26 },
      PROGRESS_WAITING: { tension: 10, friction: 30 },
      PROGRESS_READY: { tension: 170, friction: 26 },
      YEAR_SETTLE: { tension: 32, friction: 26 },
      TRIGGER: { tension: 140, friction: 30 }
    };

    // ==========================================================================
    // 3. TEXT ENGINE (WORD / LETTER REVEALS)
    // ==========================================================================
    class TextReveal {
      constructor(container, { type = 'word', stagger = 110, delayIn = 0, config = SPRING_CONFIGS.REVEAL, mode = 'forward' } = {}) {
        this.container = container;
        this.type = type;
        this.stagger = stagger;
        this.delayIn = delayIn;
        this.mode = mode;
        this.spans = [];
        this.springs = [];
        this.played = false;

        this.init();
      }

      init() {
        const units = this.container.querySelectorAll('.text-reveal-unit');
        units.forEach((unit, i) => {
          this.spans.push(unit);
          const spr = new Spring({
            ...SPRING_CONFIGS.REVEAL,
            from: 0,
            to: 0,
            delay: this.delayIn + i * this.stagger,
            onChange: (val) => {
              unit.style.opacity = val;
              const yEm = (1 - val) * (this.type === 'letter' ? 0.3 : 0.35);
              unit.style.transform = \`translateY(\${yEm}em)\`;
            }
          });
          this.springs.push(spr);
        });
      }

      play() {
        if (this.mode === 'once' && this.played) return;
        this.played = true;
        this.springs.forEach(spr => spr.setTarget(1));
      }

      reverse() {
        if (this.mode === 'once' || this.mode === 'forward') return;
        this.springs.forEach(spr => spr.setTarget(0));
      }

      update(dt) {
        this.springs.forEach(spr => spr.update(dt));
      }
    }

    // Populate Season intro words
    const seasonIntroEl = document.getElementById('season-intro-reveal');
    const seasonWords = "EVERY RACE IS A STEP FORWARD. HERE'S HOW THE SEASON IS SHAPING UP.".split(' ');
    seasonIntroEl.innerHTML = seasonWords.map(w => \`<span class="text-reveal-unit">\${w}</span>\`).join(' ');
    const seasonIntroReveal = new TextReveal(seasonIntroEl, {
      stagger: 34,
      delayIn: 260 + 90,
      config: { tension: 150, friction: 24 }
    });

    // Hero name reveal
    const heroNameReveal = new TextReveal(document.getElementById('hero-name-reveal'), {
      stagger: 110,
      delayIn: 180,
      config: SPRING_CONFIGS.NAME,
      mode: 'once'
    });

    // ==========================================================================
    // 4. STICKY STACK CONTROLLER
    // ==========================================================================
    const heroSection = document.getElementById('hero-section');
    const seasonSection = document.getElementById('season-section');
    const timelineSection = document.getElementById('timeline-section');

    const heroInner = document.getElementById('hero-inner');
    const heroShade = document.getElementById('hero-shade');
    const seasonInner = document.getElementById('season-inner');
    const seasonShade = document.getElementById('season-shade');

    const pinned = [
      { inner: heroInner, shade: heroShade, next: seasonSection },
      { inner: seasonInner, shade: seasonShade, next: timelineSection }
    ];

    const RECEDE_SCALE = 0.9;
    const RECEDE_SHADE = 0.55;
    const phone = window.matchMedia("(max-width: 639px)");

    function applyStickyStack() {
      const view = window.innerHeight || 1;
      const shrink = phone.matches ? 0 : 1 - RECEDE_SCALE;
      for (const { inner, shade, next } of pinned) {
        const p = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / view));
        inner.style.transform = p > 0 && shrink > 0 ? \`scale(\${1 - shrink * p})\` : "";
        inner.style.willChange = p > 0 && shrink > 0 ? "transform" : "";
        shade.style.opacity = \`\${RECEDE_SHADE * p}\`;
        inner.style.visibility = p >= 1 ? "hidden" : "visible";
      }
    }
    window.addEventListener('scroll', applyStickyStack, { passive: true });

    // ==========================================================================
    // 5. CHEQUERED DISSOLVE SEAMS
    // ==========================================================================
    class ChequeredDissolve {
      constructor(canvas, carry = "light") {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.carry = carry;
        this.progress = 0;
        this.resize();
        window.addEventListener('resize', () => this.resize(), { passive: true });
      }

      resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.width = rect.width || window.innerWidth;
        this.height = rect.height || (window.innerHeight * 0.34);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.context.scale(dpr, dpr);
        this.render();
      }

      setProgress(p) {
        this.progress = p;
        this.render();
      }

      render() {
        const { context, width, height, progress } = this;
        context.clearRect(0, 0, width, height);

        const CELL = 24;
        const SOLID_UNTIL = 0.16;
        const LIFT = 2;
        const ACCENT_SHARE = 0.06;

        const noise = (x, y) => {
          let h = Math.imul(x, 374761393) + Math.imul(y, 668265263);
          h = Math.imul(h ^ (h >>> 13), 1274126177);
          return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
        };

        const surface = this.carry === "light" ? readToken("--background") : readToken("--surface-black");
        const accent = readToken("--accent");

        const columns = Math.ceil(width / CELL);
        const rows = Math.ceil(height / CELL);
        const lift = progress * LIFT;

        for (let y = 0; y < rows; y += 1) {
          const depth = y / Math.max(1, rows - 1) + lift;
          if (depth > 1) break;
          const solid = depth <= SOLID_UNTIL;
          const fade = Math.min(1, Math.max(0, 1 - (depth - SOLID_UNTIL) / (1 - SOLID_UNTIL)));
          if (!solid && fade <= 0) break;

          for (let x = 0; x < columns; x += 1) {
            if (!solid) {
              if ((x + y) % 2 !== 0) continue;
              if (noise(x, y) > fade) continue;
            }
            context.fillStyle = !solid && noise(x + 101, y + 57) < ACCENT_SHARE ? accent : surface;
            context.fillRect(x * CELL, y * CELL, CELL, CELL);
          }
        }
      }
    }

    const seasonDissolve = new ChequeredDissolve(document.getElementById('season-dissolve-canvas'), "light");
    const timelineDissolve = new ChequeredDissolve(document.getElementById('timeline-dissolve-canvas'), "light");
    const paddockDissolve = new ChequeredDissolve(document.getElementById('paddock-dissolve-canvas'), "dark");

    // Scroll trigger for dissolves
    function updateDissolves() {
      const vh = window.innerHeight;
      const calcProgress = (el) => {
        const bb = el.getBoundingClientRect();
        const start = bb.top - vh;
        const end = bb.top;
        const length = Math.abs(start - end);
        return Math.min(Math.max(0, 1 - (start + length) / length), 1);
      };

      seasonDissolve.setProgress(calcProgress(seasonSection));
      timelineDissolve.setProgress(calcProgress(timelineSection));
      paddockDissolve.setProgress(calcProgress(document.getElementById('paddock-section')));
    }
    window.addEventListener('scroll', updateDissolves, { passive: true });

    // ==========================================================================
    // 6. HERO WEBGL SCENE
    // ==========================================================================
`;

fs.writeFileSync('index.html', html);
console.log("Written base html structure.");
