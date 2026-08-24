"use client";

import { motion } from "framer-motion";
import {
  Store,
  Cpu,
  Wrench,
  Shirt,
  HeartPulse,
  Coffee,
  Home,
  Dumbbell,
  Sparkle,
  PawPrint,
  BookOpen,
  Gem,
} from "lucide-react";
import Reveal, { staggerParent, staggerChild } from "./Reveal";

const industries = [
  { icon: Store, label: "Retail y distribución", note: "Catálogos amplios, multi-sede" },
  { icon: Cpu, label: "Tecnología", note: "Fichas técnicas y comparadores" },
  { icon: Wrench, label: "Repuestos y autopartes", note: "Búsqueda por compatibilidad" },
  { icon: Shirt, label: "Moda y calzado", note: "Tallas, colores y variantes" },
  { icon: HeartPulse, label: "Salud y bienestar", note: "Suscripciones y recompra" },
  { icon: Coffee, label: "Alimentos y bebidas", note: "Entregas por zona horaria" },
  { icon: Home, label: "Hogar y decoración", note: "Visual, con alto ticket promedio" },
  { icon: Dumbbell, label: "Deporte y fitness", note: "Combos y planes" },
  { icon: Sparkle, label: "Belleza y cosmética", note: "Kits y programas de fidelidad" },
  { icon: PawPrint, label: "Mascotas", note: "Compra recurrente automatizada" },
  { icon: BookOpen, label: "Educación y digital", note: "Productos descargables" },
  { icon: Gem, label: "Joyería y lujo", note: "Personalización a pedido" },
];

const marquee = [
  "Catálogo B2B",
  "Venta mayorista",
  "Multi-moneda",
  "Retiro en tienda",
  "Suscripciones",
  "Marketplace propio",
  "Envíos nacionales",
  "Facturación electrónica",
];

export default function Industries() {
  return (
    <section
      id="alcance"
      className="relative overflow-hidden bg-surface-soft py-24 md:py-32"
    >
      {/* Retícula + halos: profundidad sin ruido */}
      <span
        aria-hidden
        className="grid-pattern-brand pointer-events-none absolute inset-0"
      />
      <span
        aria-hidden
        className="grid-pattern-brand-fine pointer-events-none absolute inset-0 opacity-70"
      />
      {/* Desvanecido de los bordes para que la retícula no corte en seco */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-soft via-surface-soft/80 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-soft via-surface-soft/80 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% -8%, rgba(167,139,250,0.28) 0%, transparent 62%), radial-gradient(45% 45% at 92% 95%, rgba(196,181,253,0.30) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Encabezado ── */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="mt-6 text-[2rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink-title sm:text-4xl md:text-5xl">
              Si vendes un producto,
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-brand">
                podemos digitalizarlo
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-body md:text-lg">
              Trabajamos con negocios que ya venden y quieren llevar esa operación a la web
              con orden, no solo con un catálogo bonito.
            </p>
          </Reveal>
        </div>

        {/* ── Sectores ── */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map(({ icon: Icon, label, note }) => (
            <motion.li
              key={label}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white/80 px-5 py-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lift"
            >
              {/* Filo de luz superior al pasar el cursor */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
              {/* Resplandor interior */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-brand-300/45 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand-100 bg-brand-50 transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:shadow-brand">
                  <Icon
                    strokeWidth={1.75}
                    className="h-[19px] w-[19px] text-brand-600 transition-colors duration-500 group-hover:text-white"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-semibold tracking-[-0.01em] text-ink-title">
                    {label}
                  </span>
                  <span className="block truncate text-xs text-ink-muted">{note}</span>
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* ── Marquesina de capacidades ── */}
        <Reveal delay={0.1} className="mt-14">
          <div className="fade-x overflow-hidden">
            <div className="flex w-max animate-marquee-x gap-3">
              {[...marquee, ...marquee].map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-ink-body shadow-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
