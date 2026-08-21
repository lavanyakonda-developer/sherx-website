# Team SHERX Website

A marketing landing page for Team SHERX — a group of fitness trainers who train
clients on-site at gated-community gyms (they go to the society, not the other
way around).

## Stack

- React + Vite, plain CSS (no Tailwind/UI kit), no backend
- Single scrolling page with an anchored nav (`#programs`, `#why-us`, `#contact`)
- Run it: `npm install && npm run dev` (defaults to `http://localhost:5173`)
- Build it: `npm run build` (outputs to `dist/`)

## Source material

The site design is based on three assets originally in
`~/Desktop/shrex_documents/` (copies live in `src/assets/`):
- `logo.png` — circular badge logo (resized to 400×400 in `src/assets/logo.png`
  for web weight; the original 1254×1254 is untouched in `shrex_documents/`)
- `flyer.jpeg` — the team's print flyer; source of the color palette, section
  copy ("What We Provide" cards, "Why Choose Us" strip, contact info), and
  overall tone
- `programs_offered.jpeg` — full 11-item programs list used in the "Programs
  We Offer" grid

## Design decisions already made (don't relitigate unless asked)

- **Colors**: cream/off-white bg (`#f2eee2`), near-black text (`#17170e`),
  dark olive band (`#34350f`), olive-gold accent (`#7c7c34`) — all defined as
  CSS variables in `src/index.css`
- **Fonts**: Anton (headline/display) + Poppins (body/UI), loaded via Google
  Fonts `@import` in `src/index.css`. These are an *approximation* of the
  flyer's condensed display font, not the real font file — if the client ever
  gets the actual flyer font, swap it in `--font-display`
- **WhatsApp CTA**: every "Contact Us" button/link opens
  `https://wa.me/919866917160?text=...` with a pre-filled greeting, in a new
  tab. Single source of truth: `src/whatsapp.js` (`WHATSAPP_LINK`,
  `PHONE_DISPLAY`, `EMAIL`) — change the number/message there once, it
  propagates everywhere
- **No real photos yet** — hero/sections use the logo + hand-drawn inline SVG
  icons (`src/components/Icons.jsx`) instead of cropping the flyer's photo
  (which has text baked into it). If real trainer/client photos show up later,
  they'd slot into `Hero.jsx`'s `.hero__visual` panel and/or a new gallery
  section
- **Responsive**: built mobile + desktop from the start (not desktop-only) —
  header collapses to a hamburger menu under 860px, grids stack down to 1
  column on small screens

## Component map

```
src/
  whatsapp.js              WhatsApp link + contact info (single source of truth)
  index.css                CSS variables, fonts, resets, shared .btn/.section classes
  App.jsx                  Page assembly — section order lives here
  components/
    Icons.jsx              All inline SVG icons used across the site
    Header.jsx / .css       Sticky nav, mobile hamburger menu
    Hero.jsx / .css         Headline, quick strip, CTA buttons, visual panel
    QuickStrip.jsx / .css   Training/Nutrition/Assessment/Progress row (used inside Hero)
    WhatWeProvide.jsx / .css   8-card "what we provide" grid
    ProgramsGrid.jsx / .css    11-item full programs list (icon tiles)
    WhyChooseUs.jsx / .css     Dark olive 5-item band
    Contact.jsx / .css         Contact details + WhatsApp CTA card
    Footer.jsx / .css          Logo, tagline, copyright
    FloatingWhatsApp.jsx / .css   Fixed bottom-right WhatsApp button
```

## Verified so far

- `npm run build` succeeds with no errors
- Checked visually with Playwright screenshots at desktop (1440px) and mobile
  (390px) widths — layout, fonts, images all render, mobile hamburger menu
  opens/closes correctly, zero console errors

## Not done yet / ideas for next steps

- No deployment target chosen yet (Netlify/Vercel/GitHub Pages would all work
  for this static site)
- No real trainer/client photography
- No analytics/SEO beyond the basic `<meta description>` in `index.html`
- No favicon beyond a downsized copy of the logo (`public/favicon.png`)
- Domain name not discussed
