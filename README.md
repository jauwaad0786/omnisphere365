# OmniSphere 365 — Enterprise Cloud ERP & AI Platform

## Project Overview

**OmniSphere 365** is "The Business Operating System for Modern Organizations" — a premium enterprise SaaS website built with Next.js 14, Tailwind CSS, and Framer Motion, in a light enterprise visual language inspired by Microsoft Dynamics 365, Salesforce, Oracle NetSuite, and Stripe.

---

## Folder Structure

```
omnisphere365/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (Hero, Services grid, Features, Pricing, Testimonials, CTA)
│   ├── layout.tsx                # Root layout (Navbar, Footer, WhatsApp button, SEO metadata)
│   ├── globals.css               # Design tokens, light theme utility classes
│   ├── about/page.tsx            # About Us — Vision, Mission, Team, Why Choose Us
│   ├── careers/page.tsx          # Careers page — Open positions, culture, internships
│   ├── contact/page.tsx          # Contact — Form, WhatsApp CTA, phone/email
│   ├── demo/page.tsx             # Demo Request — multi-field form with success state
│   ├── pricing/page.tsx          # Pricing — School ERP plans, comparison table, custom ERP CTA
│   ├── blog/page.tsx             # Blog/Insights — Article cards, categories, newsletter
│   └── services/
│       ├── page.tsx              # All Services listing — 12 cards grouped by category
│       └── [id]/page.tsx         # Dynamic Service page — Features, Modules, Plans, Demo CTA
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky white navbar with mega menu, mobile menu, CTA buttons
│   │   └── Footer.tsx            # Dark navy footer band with a lifted light CTA card
│   ├── ui/
│   │   └── WhatsAppBtn.tsx       # Fixed floating WhatsApp connect button
│   └── sections/
│       ├── HeroSection.tsx       # Interactive tabbed dashboard preview (School/HRMS/Sales/AI)
│       ├── ServicesGrid.tsx      # 12-service grid with hover effects
│       ├── FeaturesSection.tsx   # Why Choose Us — 9 enterprise feature cards
│       ├── PricingSection.tsx    # School ERP pricing cards (Basic/Pro/Enterprise)
│       ├── TestimonialsSection.tsx # Testimonial cards + trusted-by logos row
│       └── CTASection.tsx        # Bold blue/azure gradient demo-request banner
│
├── lib/
│   └── data.ts                   # All services data, plans, testimonials, stats constants
│
├── public/                       # Static assets (icons, og-image, favicon)
├── package.json                  # Dependencies: next, react, framer-motion, lucide-react
├── tailwind.config.ts            # Design tokens — colors, fonts, animations, shadows
├── tsconfig.json                 # TypeScript config with @/* path alias
├── next.config.mjs               # Next.js config
└── postcss.config.mjs            # PostCSS for Tailwind
```

---

## Pages Summary

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero + dashboard mockup + all sections |
| Services | `/services` | All 12 services with category filter |
| Service Detail | `/services/school-erp` | Dynamic page per service — features, modules, pricing |
| Pricing | `/pricing` | School ERP plans + comparison table |
| About | `/about` | Company story, vision, mission, team |
| Careers | `/careers` | Job openings, culture, internships |
| Contact | `/contact` | Form + WhatsApp + direct contact info |
| Demo Request | `/demo` | 8-field demo booking form |
| Blog | `/blog` | Articles and insights grid |

---

## Services (12 Total)

All 12 modules now have a full detail page (`/services/[id]`) — no module is gated behind a "Coming Soon" wall. Modules without a published price plan show a "Custom Pricing Available" card with a Talk to Sales CTA instead.

| # | Service | Route |
|---|---------|-------|
| 1 | School ERP | `/services/school-erp` |
| 2 | College ERP | `/services/college-erp` |
| 3 | HRMS | `/services/hrms` |
| 4 | Inventory Management | `/services/inventory` |
| 5 | Sales ERP | `/services/sales-erp` |
| 6 | WhatsApp Automation | `/services/whatsapp-automation` |
| 7 | Hospital OPD | `/services/hospital-opd` |
| 8 | Dynamic Website Development | `/services/website-development` |
| 9 | Digital Transformation | `/services/digital-transformation` |
| 10 | Custom Cloud ERP | `/services/custom-cloud-erp` |
| 11 | Pay-as-you-go ERP | `/services/payg-erp` |
| 12 | AI Business Automation | `/services/ai-automation` |

---

## School ERP Pricing

| Plan | Price | Students | Admins |
|------|-------|----------|--------|
| Basic | ₹1,799/month | Up to 200 | 1 |
| Professional ⭐ | ₹2,999/month | 200–500 | 3 |
| Enterprise | ₹5,999/month | 500+ | 5 |

---

## Design System

- **Primary (Microsoft Blue)**: `#2563eb`
- **Secondary (Azure Blue)**: `#0ea5e9`
- **Accent (Subtle Purple)**: `#8b5cf6` — used sparingly for AI/automation cues
- **Success**: `#16a34a` · **Warning**: `#f59e0b` / `#ea580c`
- **Background**: `#ffffff` with `#f8fafc` alternating section panels
- **Cards**: white, `1px solid #e2e8f0`, soft elevation shadows (no glassmorphism)
- **Footer**: deep navy `#0b1220` — the one deliberate dark band, Microsoft/Stripe convention
- **Display Font**: Plus Jakarta Sans (700/800)
- **Body Font**: Inter (400/500/600)
- **Style**: Light enterprise theme, soft low-opacity glows, interactive tabbed dashboard preview in the hero

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 (custom design tokens in `tailwind.config.ts`)
- **Animations**: Framer Motion v11 (hero tab transitions, scroll reveals)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (Plus Jakarta Sans + Inter)

---

## Setup & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Contact Details (Configured in site)

- **Email**: shaikhjauwaad@gmail.com
- **Phone**: 6207947958
- **Location**: Delhi, India
- **WhatsApp**: Quick connect button on all pages

---

## Deployment

Deploy to **Vercel** (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel dashboard for auto-deploy.

