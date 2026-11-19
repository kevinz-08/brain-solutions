"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Gem,
  Gauge,
  CircleDot,
  Sparkles,
  Volume2,
  Lightbulb,
  Armchair,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Reveal, { staggerParent, staggerChild } from "./Reveal";

const categories = [
  { icon: Wrench, label: "Repuestos y autopartes", note: "Búsqueda por marca, modelo y año" },
  { icon: Gem, label: "Accesorios de lujo", note: "Piezas premium y ediciones limitadas" },
  { icon: Gauge, label: "Performance y tuning", note: "Kits, ECU, escapes y suspensión" },
  { icon: CircleDot, label: "Rines y llantas", note: "Medidas, offsets y compatibilidad" },
  { icon: Sparkles, label: "Detailing y cuidado", note: "Kits, combos y recompra" },
  { icon: Volume2, label: "Audio y multimedia", note: "Equipos por tipo de vehículo" },
  { icon: Lightbulb, label: "Iluminación", note: "LED, xenón y farolas a medida" },
  { icon: Armchair, label: "Interiores y tapicería", note: "Personalización a pedido" },
  { icon: ShieldCheck, label: "Seguridad y GPS", note: "Instalación y garantía incluidas" },
];

const cities = ["Bucaramanga", "Cúcuta", "Medellín", "Bogotá"];

const marquee = [
  "Búsqueda por marca, modelo y año",
  "Pagos con PSE y Nequi",
  "Pago contra entrega",
  "Cotización por WhatsApp",
  "Inventario por sede",
  "Envíos nacionales",
  "Facturación electrónica",
  "Retiro en tienda",
];

export default function Categories() {
  return (
    <section
      id="categorias"
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
            "radial-gradient(70% 55% at 50% -8%, rgba(216,184,102,0.22) 0%, transparent 62%), radial-gradient(45% 45% at 92% 95%, rgba(233,216,168,0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Encabezado ── */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="mt-6 text-[2rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink-title sm:text-4xl md:text-5xl">
              Hechos para quien vende
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-brand">todo lo que mueve un automóvil</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-body md:text-lg">
              Trabajamos con tiendas de repuestos y accesorios de lujo para automóviles que
              ya venden en mostrador y quieren llevar esa operación a la web con orden, no
              solo con un catálogo bonito.
            </p>
          </Reveal>
        </div>

        {/* ── Categorías ── */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map(({ icon: Icon, label, note }) => (
            <motion.li
              key={label}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white/80 px-5 py-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-200 hover:bg-white hover:shadow-lift"
            >
              {/* Filo de luz superior al pasar el cursor */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
              {/* Resplandor interior */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-gold-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-100 bg-gold-50 transition-all duration-500 group-hover:border-transparent group-hover:bg-carbon-950 group-hover:shadow-brand">
                  <Icon
                    strokeWidth={1.75}
                    className="h-[19px] w-[19px] text-gold-700 transition-colors duration-500 group-hover:text-gold-300"
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

        {/* ── Ciudades ── */}
        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
              Atendemos tiendas en
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full bg-carbon-950 px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
                >
                  <MapPin className="h-4 w-4 text-gold-400" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ── Marquesina de capacidades ── */}
        <Reveal delay={0.1} className="mt-10">
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
