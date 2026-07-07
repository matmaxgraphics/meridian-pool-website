# Meridian Pools — Next.js

A next-generation pool service platform landing page. Built with Next.js 14
(App Router), React 18 and plain CSS — no UI libraries.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.jsx          Root layout, fonts, metadata
  page.jsx            Homepage — assembles all sections in order
  globals.css         Full design system (tokens in :root at the top)
components/
  Nav.jsx             Fixed glass navbar (client)
  Hero.jsx            Animated water hero: caustics canvas, bubbles, chem ticker (client)
  Stats.jsx           Trusted-by strip with animated counters
  Services.jsx        10 service cards (data-driven)
  PricingCalculator.jsx  Interactive instant-quote calculator (client)
  Memberships.jsx     Essential / Premium / Elite plans (data-driven)
  BeforeAfter.jsx     Draggable before/after comparison slider (client)
  PortalPreview.jsx   Customer dashboard mock
  WhyUs.jsx           Six differentiators (data-driven)
  Testimonials.jsx    Reviews + Google rating chip (data-driven)
  ServiceArea.jsx     Interactive Austin map synced with zone list (client)
  Faq.jsx             Accordion (native <details>, no JS)
  Cta.jsx             Final call to action
  Footer.jsx
  RevealObserver.jsx  Global scroll-reveal + counter animations (client)
data/
  services.js         All editable content: services, plans, FAQs, areas,
                      testimonials, why-us items
```

## Editing content

Most copy lives in `data/services.js` — edit services, membership plans,
FAQs, testimonials and service areas there without touching components.

Design tokens (colors, radii, fonts, max-width) live at the top of
`app/globals.css` in `:root`.

Pricing logic (rates per pool size, visit frequencies, extras) is at the top
of `components/PricingCalculator.jsx`.

## Notes

- All pool imagery is inline SVG so the project runs with zero assets.
  Swap in real photography/video by replacing the SVGs in `BeforeAfter.jsx`
  and the hero background in `globals.css` (`.hero`).
- `prefers-reduced-motion` is respected across all animations.
- The chem ticker, portal preview and counters use static demo data — wire
  them to your API when productizing.
# meridian-pool-website
