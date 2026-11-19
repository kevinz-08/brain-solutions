# Lumo Ecom — Landing Page

Landing page de **Lumo Ecom**: sitios web e-commerce a medida para tiendas de repuestos y accesorios de lujo para automóviles en Bucaramanga, Cúcuta, Medellín y Bogotá.

Hoja de ruta, posicionamiento y paleta de color: ver [PLAN.md](PLAN.md).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animaciones
- **Lucide React** para iconos

## Setup

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```text
├── app/
│   ├── globals.css      # Tokens de diseño, utilidades, scrollbar
│   ├── layout.tsx       # Layout raíz con fuente Inter y metadata
│   └── page.tsx         # Composición de la página
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── DeviceShowcase.tsx
│   ├── WhatWeDo.tsx
│   ├── Process.tsx
│   ├── Categories.tsx
│   ├── Cases.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx
│   └── SectionHeader.tsx
├── lib/hooks/           # useSmoothScroll
└── public/              # logo, demos y SVG del proceso
```

Los tokens de color viven en `tailwind.config.js` (paleta "Carbón y Champán": neutros cálidos, `carbon` y un único acento `gold`; ver PLAN.md).
