# CATCHY99 — Sneaker & NBA Streetwear E-Commerce

A premium, fully-animated e-commerce storefront for **Catchy99** — a sneaker-first brand (90% sneakers, 10% NBA gear).

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 (App Router) | Framework |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| GSAP + ScrollTrigger | 3.12 | Animations & scroll effects |
| Framer Motion | 11 | Additional motion |
| Lucide React | 0.469 | Icons |

---

## Features

- **Custom animated cursor** — dot + follower, expands on hover
- **Hero section** — character-by-character headline animation, parallax image, entrance timeline
- **Scrolling marquee** — infinite ticker with brand messages
- **Featured drops** — asymmetric grid with scroll-triggered reveals
- **Sneaker catalogue** — filterable by brand, animated grid transitions
- **NBA section** — parallax banner, card grid
- **About section** — clip-path image reveal, stat counters
- **Newsletter CTA** — animated entry
- **Grain texture overlay** — cinematic noise effect
- **Fully responsive** — mobile-first design

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Fonts, custom cursor, animations
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page assembly
├── components/
│   ├── CustomCursor.tsx   # GSAP-powered cursor
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # GSAP entrance + parallax
│   ├── Marquee.tsx        # Infinite scrolling ticker
│   ├── Featured.tsx       # ScrollTrigger card reveals
│   ├── SneakersSection.tsx # Filterable product grid
│   ├── NBASection.tsx     # NBA products
│   ├── About.tsx          # Brand story + stats
│   ├── Newsletter.tsx     # Email CTA
│   ├── ProductCard.tsx    # Reusable product card
│   └── Footer.tsx         # Links + info
└── lib/
    └── data.ts            # All dummy product data
```

---

## Customisation

### Add/Edit Products
Edit `src/lib/data.ts` — add entries to the `products` array.

### Update Images
Images are pulled from Unsplash. Replace any `image` URL in `data.ts` with your own product photos.

### Colors
All brand colors are defined in `tailwind.config.js` under `theme.extend.colors.brand`.

### Fonts
Loaded via Google Fonts in `globals.css`:
- **Bebas Neue** — display/headlines
- **DM Sans** — body text
- **Space Mono** — labels & tags

---

## Animation Overview

| Section | Animation | Trigger |
|---------|-----------|---------|
| Navbar | Fade down | Page load |
| Hero headline | Char-by-char 3D flip | Page load |
| Hero image | Slide in + parallax | Load + scroll |
| Featured cards | Scale + fade stagger | ScrollTrigger |
| Sneaker grid | Y + fade stagger | Brand filter |
| NBA banner | Scale parallax | Scroll scrub |
| About image | clip-path wipe | ScrollTrigger |
| About stats | Y + fade stagger | ScrollTrigger |
| Newsletter | Scale in | ScrollTrigger |

---

## Social

Instagram: [@catchy_99](https://instagram.com/catchy_99)
