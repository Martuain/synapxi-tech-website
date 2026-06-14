# Synapxi Tech — Website

Premium advisory website for Synapxi Tech — a boutique innovation advisory firm specializing in AI strategy, Web3 & tokenization, product innovation, and digital transformation.

## Stack

- **Next.js 15** — App Router, TypeScript
- **Tailwind CSS** — Utility-first styling with custom brand tokens
- **Framer Motion** — Animations (neural network hero, scroll reveals, count-ups)
- **MDX** — Content for Insights articles
- **Formspree** — Lead qualification form
- **Calendly** — Discovery call booking (revealed after form submission)
- **Vercel** — Recommended deployment platform

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Midnight Blue | `#001B4E` | Background, primary |
| Synapse Blue | `#28A9E1` | Accents, CTAs, highlights |
| Graphite | `#1E293B` | Card backgrounds |
| Surface | `#F8FAFC` | Light surfaces |
| White | `#FFFFFF` | Text on dark |

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration Required Before Launch

### 1. Formspree (Contact Form)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint (e.g. `https://formspree.io/f/xabcdefg`)
4. Replace `YOUR_FORM_ID` in `app/contact/page.tsx`:

```tsx
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

### 2. Calendly (Discovery Call Booking)

1. Set up your Calendly account and event type at [calendly.com](https://calendly.com)
2. Copy your booking URL
3. Replace in `app/contact/page.tsx`:

```tsx
const CALENDLY_URL = 'https://calendly.com/your-username/discovery-call'
```

### 3. Substack (optional)

Update the Substack links in `app/insights/page.tsx` if your handle differs from `@synapxitech`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, expertise strip, services, featured case study, why Synapxi Tech, insights, CTA |
| `/services` | Five service lines with challenge, approach, deliverables, and expected outcomes |
| `/case-studies` | Seven case studies (DaMap + 6 anonymous) with full structure |
| `/about` | Company-focused: why we exist, mission, vision, approach, expertise, industries, geography, why choose us |
| `/insights` | Article index with featured article, category filter, Substack CTA |
| `/insights/[slug]` | Individual article pages |
| `/contact` | Lead qualification form (Formspree) + Calendly reveal on success |

## Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo directly in the Vercel dashboard for automatic deployments on push.

## Project Structure

```
synapxi-tech/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + brand tokens
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   ├── case-studies/
│   ├── contact/
│   ├── insights/
│   └── services/
├── components/
│   ├── CountUp.tsx         # Animated metric count-up
│   ├── Footer.tsx
│   ├── Navbar.tsx          # Responsive navbar with mobile menu
│   ├── NeuralNetwork.tsx   # Canvas-based animated neural network
│   └── ScrollReveal.tsx    # Framer Motion scroll fade-up
├── public/
│   └── favicon.svg
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Performance Targets (per spec)

- Lighthouse Performance > 90
- Lighthouse SEO > 95
- Lighthouse Accessibility > 95
- Lighthouse Best Practices > 95

## License

Private — Synapxi Tech. All rights reserved.
