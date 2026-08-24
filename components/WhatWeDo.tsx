"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  Gauge,
  Plug,
  BarChart3,
  Lock,
  Sparkles,
  Check,
  X,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal, { EASE } from "./Reveal";
import DeviceShowcase from "./DeviceShowcase";

/**
 * Cada item lleva su propia paleta: el icono es una pieza "3D" (gradiente +
 * luz superior + sombra tintada) en lugar de un glifo plano monocromo.
 */
const items = [
  {
    icon: Palette,
    title: "Identidad propia, no una plantilla",
    body: "Cada tienda se diseña desde cero sobre tu marca: tu tipografía, tu color, tu forma de vender. Nada de temas reciclados que se ven igual que la competencia.",
    from: "#F472B6",
    to: "#DB2777",
    glow: "rgba(219,39,119,0.45)",
  },
  {
    icon: Gauge,
    title: "Velocidad que se traduce en ventas",
    body: "Construimos sobre Next.js con renderizado optimizado. Menos segundos de carga significan menos carritos abandonados y mejor posicionamiento.",
    from: "#FBBF24",
    to: "#EA580C",
    glow: "rgba(234,88,12,0.45)",
  },
  {
    icon: Plug,
    title: "Integrado con tu operación real",
    body: "Conectamos pasarelas de pago, facturación, inventario y transportadoras para que la tienda hable con los sistemas que ya usas a diario.",
    from: "#38BDF8",
    to: "#2563EB",
    glow: "rgba(37,99,235,0.45)",
  },
  {
    icon: BarChart3,
    title: "Datos que sí puedes usar",
    body: "Analítica y eventos de conversión configurados desde el día uno, para que sepas qué producto vende, qué canal trae clientes y dónde se pierde la venta.",
    from: "#34D399",
    to: "#059669",
    glow: "rgba(5,150,105,0.45)",
  },
  {
    icon: Lock,
    title: "Tuyo, sin rentas eternas",
    body: "El código y los datos son de tu empresa. Sin comisiones por venta ni funciones bloqueadas detrás de un plan más caro cada año.",
    from: "#A78BFA",
    to: "#6D28D9",
    glow: "rgba(109,40,217,0.45)",
  },
  {
    icon: Sparkles,
    title: "Preparado para crecer",
    body: "Arquitectura pensada para sumar catálogo, idiomas, sedes o marketplaces sin tener que rehacer la tienda dentro de dos años.",
    from: "#22D3EE",
    to: "#0D9488",
    glow: "rgba(13,148,136,0.45)",
  },
];

const comparison = {
  generic: [
    "Diseño idéntico al de miles de tiendas",
    "Comisión por cada venta que haces",
    "Funciones clave detrás de apps de pago",
    "Rendimiento limitado por el tema",
  ],
  custom: [
    "Diseño único alineado a tu marca",
    "Cero comisiones sobre tus ventas",
    "Cada función hecha para tu operación",
    "Optimizada al detalle, carga en < 2s",
  ],
};

/** Icono volumétrico con flotación + halo pulsante infinitos. */
function LiveIcon({
  icon: Icon,
  from,
  to,
  glow,
  index,
}: {
  icon: typeof Palette;
  from: string;
  to: string;
  glow: string;
  index: number;
}) {
  const reduced = useReducedMotion();

  const float = reduced
    ? {}
    : {
        animate: { y: [0, -9, 0], rotate: [-2.5, 2.5, -2.5] },
        transition: {
          duration: 5 + index * 0.35,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const pulse = reduced
    ? {}
    : {
        animate: { scale: [1, 1.22, 1], opacity: [0.5, 0.85, 0.5] },
        transition: {
          duration: 3.6 + index * 0.25,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <div className="relative inline-flex">
      {/* Halo de color que respira detrás de la pieza */}
      <motion.span
        aria-hidden
        {...pulse}
        className="absolute -inset-3 rounded-[32px] opacity-50 blur-2xl"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      />

      <motion.span
        {...float}
        className="relative grid h-[68px] w-[68px] place-items-center rounded-[22px] md:h-[76px] md:w-[76px]"
        style={{
          backgroundImage: `linear-gradient(150deg, ${from} 0%, ${to} 100%)`,
          boxShadow: `0 18px 34px -12px ${glow}, inset 0 1px 1px rgba(255,255,255,0.55), inset 0 -6px 14px -6px rgba(0,0,0,0.35)`,
        }}
      >
        {/* Reflejo superior: da el volumen tipo "3D glass" */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-2 top-1.5 h-1/3 rounded-full bg-white/40 blur-[6px]"
        />
        <Icon
          strokeWidth={2.1}
          className="relative h-8 w-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.28)] md:h-9 md:w-9"
        />
      </motion.span>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="servicios" className="relative bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title={
            <>
              Construimos la tienda que
              <br className="hidden sm:block" /> tu negocio realmente necesita
            </>
          }
          description="Una solución genérica te acomoda a su molde. Un e-commerce a medida se construye alrededor de cómo vendes tú."
        />

        {/* Recorrido escalonado: izquierda / derecha alternadas con desfase */}
        <ul className="mt-12 flex flex-col gap-4 md:mt-20 md:gap-8 lg:gap-0">
          {items.map(({ icon, title, body, from, to, glow }, i) => {
            const isRight = i % 2 === 1;

            return (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 40, x: isRight ? 32 : -32 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: EASE }}
                className={[
                  "group relative w-full hover:z-10 lg:w-[47%]",
                  isRight ? "lg:self-end" : "lg:self-start",
                  i > 0 ? "lg:-mt-20" : "",
                ].join(" ")}
              >
                <div className="relative overflow-hidden rounded-[20px] border border-line bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift sm:rounded-[24px] sm:p-7 md:rounded-[28px] md:p-10">
                  {/* Tinte de color que aparece al pasar el cursor */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                  />

                  {/* Índice del recorrido */}
                  <span className="pointer-events-none absolute right-5 top-4 text-3xl font-black leading-none tracking-tighter text-ink-title/[0.06] sm:right-7 sm:top-6 sm:text-5xl md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* En movil el icono se oculta: la lectura va directa a titulo + texto */}
                  <div className="hidden md:block">
                    <LiveIcon icon={icon} from={from} to={to} glow={glow} index={i} />
                  </div>

                  <h3 className="relative pr-10 text-[1.15rem] font-extrabold leading-[1.2] tracking-[-0.03em] text-ink-title sm:pr-14 sm:text-[1.5rem] sm:leading-[1.12] md:mt-7 md:pr-0 md:text-[2rem] md:tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p className="relative mt-2 max-w-[46ch] text-[13.5px] leading-relaxed text-ink-body sm:mt-3 sm:text-[15px] md:mt-4 md:text-base">
                    {body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Comparativa genérico vs. a medida */}
        <Reveal delay={0.1} className="mt-16">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-soft lg:grid-cols-[0.85fr_1.7fr_0.85fr]">
            <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Plataforma genérica
              </p>
              <ul className="mt-6 space-y-4">
                {comparison.generic.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-muted">
                      <X className="h-3 w-3 text-ink-muted" />
                    </span>
                    <span className="text-sm text-ink-body">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Escenario de dispositivos: separa y conecta ambas columnas */}
            <div className="relative flex items-center justify-center border-b border-line bg-surface-soft px-5 py-12 sm:px-8 lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 grid-blueprint-fine opacity-70"
              />
              <DeviceShowcase className="relative w-full max-w-[560px]" />
            </div>

            <div className="relative bg-brand-50/50 p-8 md:p-10 lg:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                E-commerce a medida
              </p>
              <ul className="mt-6 space-y-4">
                {comparison.custom.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-sm font-medium text-ink-title">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
