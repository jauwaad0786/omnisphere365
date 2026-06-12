# OmniSphere 365 — Enterprise Cloud ERP & AI Platform

## Project Overview

**OmniSphere 365** is a premium enterprise SaaS website built with Next.js 14, Tailwind CSS, and Framer Motion — inspired by Microsoft Dynamics 365, Salesforce, Oracle NetSuite, SAP, and Zoho.

---

## Folder Structure

```
omnisphere365/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (Hero, Stats, Services grid, Pricing, Testimonials)
│   ├── layout.tsx                # Root layout (Navbar, Footer, WhatsApp button, SEO metadata)
│   ├── globals.css               # Global styles, CSS variables, custom classes
│   ├── about/
│   │   └── page.tsx              # About Us — Vision, Mission, Team, Why Choose Us
│   ├── careers/
│   │   └── page.tsx              # Careers page — Open positions, culture, internships
│   ├── contact/
│   │   └── page.tsx              # Contact — Form, map, WhatsApp CTA, phone/email
│   ├── demo/
│   │   └── page.tsx              # Demo Request — 8-field form with success state
│   ├── pricing/
│   │   └── page.tsx              # Pricing — School ERP plans, comparison table, FAQ
│   ├── blog/
│   │   └── page.tsx              # Blog/Insights — Article cards, categories, search
│   └── services/
│       ├── page.tsx              # All Services listing — 12 cards with category filter
│       └── [id]/
│           └── page.tsx          # Dynamic Service page — Features, Modules, Plans, Demo CTA
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky navbar with mega menu, mobile menu, CTA buttons
│   │   └── Footer.tsx            # Enterprise footer — links, newsletter, social, legal
│   ├── ui/
│   │   ├── WhatsAppBtn.tsx       # Fixed floating WhatsApp connect button
│   │   ├── Badge.tsx             # Reusable badge/pill component
│   │   └── PricingCard.tsx       # Pricing card with popular highlight
│   └── sections/
│       ├── HeroSection.tsx       # Animated hero — dashboard mockup, floating cards, stats
│       ├── StatsSection.tsx      # Animated counter stats (500+ Institutions, 1.2L+ Students)
│       ├── ServicesGrid.tsx      # 12-service grid with hover effects
│       ├── FeaturesSection.tsx   # Why Choose Us — 9 enterprise feature cards
│       ├── PricingSection.tsx    # School ERP pricing cards (Basic/Pro/Enterprise)
│       ├── TestimonialsSection.tsx # Testimonial carousel with star ratings
│       ├── DashboardPreview.tsx  # Interactive ERP dashboard mockup widget
│       └── CTASection.tsx        # Demo request CTA banner
│
├── lib/
│   └── data.ts                   # All services data, plans, testimonials, stats constants
│
├── public/                       # Static assets (icons, og-image, favicon)
├── package.json                  # Dependencies: next, react, framer-motion, lucide-react
├── tailwind.config.ts            # Custom colors, fonts, animations, shadows
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
| Contact | `/contact` | Form + WhatsApp + map |
| Demo Request | `/demo` | 8-field demo booking form |
| Blog | `/blog` | Articles and insights grid |

---

## Services (12 Total)

| # | Service | Status | Route |
|---|---------|--------|-------|
| 1 | School ERP | ✅ Live | `/services/school-erp` |
| 2 | College ERP | 🔜 Coming Soon | `/services` |
| 3 | HRMS | 🔜 Coming Soon | `/services` |
| 4 | Inventory Management | 🔜 Coming Soon | `/services` |
| 5 | Sales ERP | 🔜 Coming Soon | `/services` |
| 6 | WhatsApp Automation | 🔜 Coming Soon | `/services` |
| 7 | Hospital OPD | 🔜 Coming Soon | `/services` |
| 8 | Dynamic Website Development | 🔜 Coming Soon | `/services` |
| 9 | Digital Transformation | 🔜 Coming Soon | `/services` |
| 10 | Custom Cloud ERP | 🔜 Coming Soon | `/services` |
| 11 | Pay-as-you-go ERP | 🔜 Coming Soon | `/services` |
| 12 | AI Business Automation | 🔜 Coming Soon | `/services` |

---

## School ERP Pricing

| Plan | Price | Students | Admins |
|------|-------|----------|--------|
| Basic | ₹1,799/month | Up to 200 | 1 |
| Professional ⭐ | ₹2,999/month | 200–500 | 3 |
| Enterprise | ₹5,999/month | 500+ | 5 |

---

## Design System

- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#0ea5e9` (Sky Blue)
- **Background**: `#0f0f1a` (Deep Dark)
- **Cards**: `#151528` with glassmorphism
- **Display Font**: Plus Jakarta Sans (700/800)
- **Body Font**: Inter (400/500/600)
- **Style**: Dark theme, glassmorphism, gradient text, floating cards

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion v11
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

