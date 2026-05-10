# CUhackit 2027

Landing page for CUhackit 2027 — a retro-terminal "coming soon" screen with a layered chromatic CUHACKIT title, color-stripe accents, and a blinking loader bar.

## Stack

- React 19 + TypeScript
- Vite 7
- react-router-dom v7

## Getting started

```bash
npm install
npm run dev
```

Then open the localhost URL Vite prints. Hot-reload is on for both `.tsx` and `.css`.

### Other scripts

- `npm run build` — type-check + production build to `dist/`
- `npm run preview` — serve the built bundle locally
- `npm run lint` — ESLint over the project

## Project layout

```
public/
  fonts/Colo-Pro.otf      # custom display font for the CUHACKIT title
  logo.png                # favicon / tab icon
src/
  App.tsx                 # router + routes
  main.tsx                # entry point
  index.css               # global tokens (--bg, --ink, --pink, --cyan, ...) + @font-face
  components/
    ScrollToTop.tsx       # resets scroll on route change
  pages/
    HomePage.tsx          # the landing screen
    HomePage.css          # all landing-screen styling
index.html                # HTML shell, font preload, favicon link
```

## Editing the landing page

Almost everything visual lives in [`src/pages/HomePage.css`](src/pages/HomePage.css):

- **CUHACKIT / 27 title** — `.title`, `.cuhackit-line`, `.twentyseven`. The font-size on `.title` drives every em-based offset below it.
- **Color stripes** — `.stripe-pink`, `.stripe-cyan`, `.stripe-purple`. Each stripe has a `top` (vertical anchor) and `left` (horizontal start point) tied to a specific letter in CUHACKIT.
- **Terminal header** — `.terminal`, with neon glow via `text-shadow`.
- **Loader bar** — `.loader-bar` and `.block:nth-child(n)`. The 7th block uses the `blink` keyframes.
- **CTA button** — `.cta`. Absolutely positioned in the top-right of the frame; drops above the frame on screens narrower than 940px.
- **Color tokens** — defined in [`src/index.css`](src/index.css) under `:root`.

## Notes

- The page is locked to the viewport (`overflow: hidden` on `html, body`). No scrolling.
- The Colo Pro font is loaded via `@font-face` from `/public/fonts/`. The font file must be served by Vite — opening `index.html` directly will fall back to Bowlby One.
- The CTA button currently has no destination wired up. Replace the `<button>` in [`HomePage.tsx`](src/pages/HomePage.tsx) with `<a href="...">` once the interest-form URL is ready.
