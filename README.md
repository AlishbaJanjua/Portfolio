# Alishba Arshad — Portfolio

A premium, dark-mode portfolio for **Alishba Arshad** — Business Data Analyst transitioning into AI Automation Strategist.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide** and **Simple Icons**.

## Features

- Floating glass navigation dock (desktop right rail + mobile bottom pill) with scroll-spy via Intersection Observer
- Hero with looping type-and-delete role animation
- Sections: Hero, About, Education, Experience, Skills, Projects, Contact
- Categorized skill ecosystem with group filtering, official brand logos and hover descriptions
- Project grid with dedicated premium detail pages (`/projects/[slug]`)
- Subtle animated grid + accent glow background, scroll-reveal animations
- Fully responsive (1920 / 1440 / 768 / 375), SEO metadata, reduced-motion support

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Customizing content

All content is data-driven — no need to touch component markup:

- `src/data/site.ts` — name, email, GitHub, LinkedIn, roles, tagline, nav items
- `src/data/skills.ts` — skill categories, core skills, tools and hover descriptions
- `src/data/projects.ts` — projects list + detail-page content (overview, problem, solution, workflow, tech stack, GitHub link)

### Profile image

Drop a square image at `public/profile.png` (recommended ~560×560). If it's missing, the hero shows an initials placeholder automatically.

### Icons

Skill/tool icons are resolved in `src/lib/icons.tsx`. Brand logos come from `simple-icons`; conceptual skills and brands not available in Simple Icons fall back to Lucide icons.

## Design system

Defined in `src/app/globals.css` (Tailwind v4 `@theme`):

- Background `#080808`, surfaces `#111111` / `#151515`
- Text `#FFFFFF` / muted `#A1A1AA`
- Single accent `#8B5CF6`
- Fonts: Inter (body) + Plus Jakarta Sans (headings)
