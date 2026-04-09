# Brain Solutions — Landing Page

Premium SaaS landing page built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Inspired by Framer.com aesthetics.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Lucide React** for icons

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
brain-solutions/
├── app/
│   ├── globals.css      # Design tokens, utilities, custom scrollbar
│   ├── layout.tsx       # Root layout with Inter font
│   └── page.tsx         # Page composition
├── components/
│   ├── Navbar.tsx       # Sticky nav with scroll blur
│   ├── Hero.tsx         # Hero + dashboard mockup
│   ├── Problem.tsx      # Problem cards
│   ├── Solution.tsx     # Solution cards
│   ├── Process.tsx      # Scroll-driven timeline
│   ├── Cases.tsx        # Case studies
│   ├── About.tsx        # About + geometric visual
│   ├── FAQ.tsx          # Accordion
│   ├── CTA.tsx          # Final CTA + calendar UI
│   ├── Footer.tsx
│   └── SectionHeader.tsx
└── ...config files
```

## Design Tokens

| Token        | Value     |
|--------------|-----------|
| bg           | `#0B0B0C` |
| bg-secondary | `#111113` |
| border       | `#1F1F23` |
| text-title   | `#E4E4E7` |
| text-body    | `#A1A1AA` |
| accent       | `#6366F1` |
| accent-purple| `#8B5CF6` |

All animations use the easing curve `[0.16, 1, 0.3, 1]` for that Framer-like feel.
