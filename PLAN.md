# Lumo Ecom — Plan de desarrollo

**Propuesta de valor:** sitios web e-commerce a medida para tiendas de repuestos y accesorios de lujo para automóviles en **Bucaramanga, Cúcuta, Medellín y Bogotá**.

---

## 1. Posicionamiento

| | |
|---|---|
| Cliente objetivo | Dueños de tiendas de repuestos, accesorios, detailing, rines/llantas, audio y performance, con local físico en las 4 ciudades |
| Problema que resolvemos | Catálogo enorme y confuso, clientes que preguntan "¿esto le sirve a mi carro?" por WhatsApp, ventas limitadas al horario del local |
| Diferenciador | Buscador por **marca / modelo / año** (compatibilidad), catálogo a medida, checkout local (PSE, Nequi, contraentrega), inventario sincronizado |
| Tono | Premium, preciso, técnico pero cercano. Menos "digitalizamos tu negocio", más "tu catálogo, encontrado en 3 clics" |

## 2. Fases

### Fase 0 — Rebrand base (hecha en esta rama)
- [x] "Brain Solutions" → "Lumo Ecom" en metadata, navbar, footer, CTA, README, `package.json`, SVG de proceso.
- [x] Dominio `lumoecom.com` y correo `hola@lumoecom.com` (confirmar que el buzón exista).
- [ ] Reemplazar `public/logo.png` (sigue siendo el logo de Brain Solutions) y `app/favicon.ico`. **Bloquea la identidad visual: hoy navbar y footer muestran el logo viejo.**
- [ ] Renombrar la carpeta del proyecto (`brain-solutions` → `lumo-ecom`) y el repositorio remoto, si existe.

### Fase 1 — Sistema de diseño (≈ 1–2 días) ✅ hecha
- [x] Paleta "Carbón y Champán" aplicada en `tailwind.config.js` y `globals.css` (tokens `carbon` y `gold`).
- [x] Eliminados los colores sueltos de los componentes y el degradado multicolor.
- [ ] Tipografía: mantener Inter para texto; evaluar un display más editorial para titulares (p. ej. Sora, Manrope o una serif fina) para dar sensación premium.
- [ ] Revisión visual de toda la página en navegador (escritorio y móvil) tras el cambio de paleta; aún no se ha hecho.
- [ ] Renombrar los tokens/clases legados `brand` (`shadow-brand`, `text-gradient-brand`, `grid-pattern-brand`) a un nombre que no recuerde a la marca anterior.

### Fase 2 — Copy y estructura de la landing (≈ 2–3 días) ✅ primera versión hecha
Reescrita para autopartes/lujo automotriz. Lo implementado:

| Sección | Cambio |
|---|---|
| Hero | ✅ Titular: "Lleva tu negocio de repuestos a internet desde $899.990 y empieza a recibir pedidos esta semana." (el precio se escribe a mano en `Hero.tsx`; debe coincidir con `data/plans.ts`) |
| WhatWeDo | Funcionalidades del nicho: selector marca/modelo/año, fichas técnicas, kits y combos, cotización por WhatsApp, panel de pedidos |
| Industries → **Categorías** | ✅ `Categories.tsx`: 9 categorías de auto, las 4 ciudades y marquesina de capacidades |
| Process | ✅ Copy ajustado; las etapas describen el plan Tienda (4–6 semanas). Pendiente: aclarar el flujo del plan Catálogo (3 días) |
| Cases | ⏳ Se mantienen tiendah2r y tiendamotek (repuestos de moto). **Pendiente decidir** si se quita luxtimee (relojería, fuera del nicho) |
| FAQ | ✅ Alineado con los 3 planes (tiempos, precio, soporte, panel, integraciones); los precios se leen de `data/plans.ts`. Pendiente: preguntas de garantías y envíos |
| CTA/Footer | ✅ Ciudades en el footer y copy ajustado. Pendiente: WhatsApp como canal principal (falta número) |

### Fase 2b — Planes y precios ✅ hecha
- [x] Sección `#planes` ([components/Plans.tsx](components/Plans.tsx)) entre Casos y FAQ, con enlace en el navbar.
- [x] Datos editables en [data/plans.ts](data/plans.ts); marca centralizada en [lib/site.ts](lib/site.ts).
- [x] Tres planes: **Catálogo** desde $899.990 (pago único, 3 días hábiles), **Tienda** desde $3.000.000 (4–6 semanas, recomendado) y **Pro** desde $5.000.000 (8–10 semanas).
- [ ] **IVA:** definir si los precios lo incluyen y escribir el texto en `VAT_NOTE` (`null` = la nota no se muestra).
- [ ] **Validar precios:** Tienda ($3.000.000) y Pro ($5.000.000) parecen bajos frente al alcance prometido (estimación, sin datos de mercado). Opciones: (A) mantener y limitar alcance (p. ej. hasta 1.000 productos, 1 pasarela, 1 transportadora), (B) subir Tienda a $3.500.000–$4.000.000, (C) validar con las primeras 3–5 ventas.
- [ ] Definir el límite de productos de Catálogo (hoy 100; con 50 se empuja más hacia Tienda).
- [ ] Comportamiento de los botones: hoy los tres llevan a `#agendar`. Decidir si abren WhatsApp con el plan preseleccionado o un formulario precargado (el brief quedó sin esa parte).
- [ ] Revisar visualmente las tarjetas (tarjeta destacada, móvil) y el borde entre Planes y FAQ, que comparten fondo.

### Fase 3 — Assets visuales (≈ 2–4 días, en paralelo)
- Logo Lumo (wordmark + isotipo), favicon, imagen Open Graph 1200×630.
- Reemplazar capturas de `public/imagesDemo` y el video de `public/videosDemo` por una demo de tienda automotriz.
- [x] Los 4 SVG de `public/process` recoloreados a la paleta nueva (la página hoy no los usa).
- Fotografía/ilustración de producto de lujo: fondos oscuros, mucho contraste, pocas fuentes de color.

### Fase 4 — SEO local (≈ 3–4 días)
- Páginas por ciudad: `/bucaramanga`, `/cucuta`, `/medellin`, `/bogota` (App Router, `generateStaticParams`), cada una con copy propio, no duplicado.
- Metadata por página, `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`, `ProfessionalService`, `FAQPage`).
- Palabras clave base: "tienda online repuestos para carros [ciudad]", "desarrollo e-commerce autopartes", "página web para tienda de accesorios de carros".
- [x] `locale` `es_CO`, `lang="es-CO"`, `metadataBase` y Open Graph con el dominio.
- [ ] Crear las páginas legales que el footer ya enlaza: `/privacidad`, `/terminos`, `/cookies` (hoy dan 404).

### Fase 5 — Conversión y medición (≈ 2 días)
- Botón flotante de WhatsApp con mensaje prellenado por ciudad.
- Formulario corto de contacto (nombre, ciudad, tipo de tienda) → correo / CRM.
- Reemplazar el enlace genérico `https://cal.com/` por el calendario real.
- Reemplazar los enlaces genéricos de redes del footer (LinkedIn, Instagram, GitHub) por los perfiles de Lumo.
- Analítica (GA4 o Plausible) + eventos: clic WhatsApp, agendar llamada, envío de formulario.

### Fase 6 — QA y lanzamiento (≈ 2 días)
- Lighthouse ≥ 90 en móvil, imágenes `next/image`, video con poster y `preload="none"`.
- Revisión de accesibilidad (contraste del acento sobre blanco y sobre negro, foco, `prefers-reduced-motion`).
- Dominio, HTTPS, redirecciones, despliegue en Vercel, prueba en iOS/Android reales.

**Total estimado:** ~2–3 semanas de trabajo; las Fases 0–2b ya están hechas, el camino crítico ahora es la Fase 3 (logo y demo) y las Fases 4–5.

## 3. Paleta propuesta — "Carbón y Champán"

Idea: negro carbón + blanco cálido + **un solo acento dorado champán**. Es el lenguaje del lujo automotriz (tableros, costuras, detalles cromados) y reduce la página de ~8 colores a 3 familias.

### Neutros (≈ 90 % de la interfaz)
| Token | Hex | Uso |
|---|---|---|
| `carbon-950` | `#0B0D10` | Fondos oscuros (CTA, footer, hero alterno), botón primario |
| `carbon-800` | `#1C2026` | Tarjetas sobre fondo oscuro |
| `ink-title` | `#111418` | Títulos |
| `ink-body` | `#4A5059` | Texto de párrafo |
| `ink-muted` | `#8A9099` | Texto secundario |
| `line` | `#E6E3DC` | Bordes |
| `surface-soft` | `#F6F5F2` | Fondo de secciones alternas (blanco cálido) |
| `surface` | `#FFFFFF` | Fondo base |

### Acento (≈ 10 %): champán / oro
| Token | Hex | Uso |
|---|---|---|
| `gold-100` | `#F4EBD3` | Fondos de chips y resaltados suaves |
| `gold-400` | `#D8B866` | Detalles sobre fondo oscuro, iconos, subrayados |
| `gold-500` | `#C9A24B` | Acento principal |
| `gold-700` | `#8A6A1F` | **Texto/enlaces sobre fondo claro** (contraste ≈ 5:1; el 500 no llega a AA como texto sobre blanco) |

### Semánticos (solo funcionales, nunca decorativos)
`success #15803D` · `error #B91C1C`

### Reglas de uso
1. **Regla 60/30/10:** 60 % blanco/blanco cálido, 30 % carbón, 10 % dorado.
2. **Un solo CTA de color por pantalla.** Botón primario = carbón con texto blanco (sobre claro) o dorado con texto carbón (sobre oscuro).
3. **Sin degradados multicolor.** Si se usa degradado, siempre `gold-400 → gold-500`.
4. **Alternar secciones** claro / oscuro para ritmo, en vez de añadir colores.
5. Ilustraciones y capturas en escala neutra + dorado.

### Alternativas si el dorado no convence
- **Carbón + rojo competición** (`#C8102E`): más deportivo/performance, menos "lujo".
- **Carbón + azul acero** (`#3B6FA0`): más técnico/sobrio, menos cálido.

## 4. Decisiones pendientes
1. ~~Paleta~~ aprobada: Carbón y Champán.
2. ~~Dominio~~ definido: `lumoecom.com`.
3. Logo de Lumo: pendiente (se diseña en la Fase 3).
4. Número de WhatsApp y enlace de calendario reales: pendientes (el cliente aún no los tiene).
5. ~~¿Mostrar precios?~~ Sí: sección de planes con precios "desde".
6. IVA incluido o no en los precios.
7. Ajuste de precios de Tienda/Pro y límites de alcance (ver Fase 2b).
8. Buzón `hola@lumoecom.com`: confirmar que exista.
9. Qué hacer con el caso luxtimee (relojería).
