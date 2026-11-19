"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal, { EASE } from "./Reveal";
import DeviceShowcase from "./DeviceShowcase";

type Project = {
  domain: string;
  url?: string;
  industry: string;
  headline: string;
  body: string;
  tags: string[];
  desktopSrc?: string;
  mobileSrc?: string;
  status?: string;
};

const projects: Project[] = [
  {
    domain: "tiendah2r.com",
    url: "https://www.tiendah2r.com",
    industry: "Repuestos para motos",
    headline: "De un catálogo con terceros a software propio",
    body: "Su catálogo web dependía de un tercero y los costos de operación pesaban cada mes. Construimos su tienda a medida, con pasarela de pagos integrada y un catálogo amplio por categorías, funcionando las 24 horas.",
    tags: ["Catálogo por categorías", "Operación 24/7"],
    desktopSrc: "/imagesDemo/desktopDemo3.png",
    mobileSrc: "/imagesDemo/mobileDemo3.png",
  },
  {
    domain: "luxtimee.com",
    industry: "Relojería",
    headline: "Del catálogo en PDF a datos que se pueden leer",
    body: "Todo su catálogo vivía en un PDF. Desarrollamos un software a medida con métricas exactas y un manejo del dato ordenado: cada producto, cada venta y cada movimiento en un mismo lugar.",
    tags: ["Métricas exactas", "Gestión de datos"],
    status: "En despliegue",
  },
  {
    domain: "tiendamotek.com",
    url: "https://www.tiendamotek.com",
    industry: "Repuestos para motos",
    headline: "Una tienda nueva, digital desde el primer día",
    body: "Buscaba digitalizar su tienda desde cero. Entregamos la solución completa a la medida: flujo de compra de punta a punta, pasarela de pagos integrada y un catálogo amplio organizado por categorías.",
    tags: ["Flujo de compra completo", "Pasarela integrada"],
    desktopSrc: "/imagesDemo/desktopDemo2.png",
    mobileSrc: "/imagesDemo/mobileDemo2.png",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title={
            <>
              Tiendas que ya
              <br className="hidden sm:block" /> venden en línea con nosotros
            </>
          }
          description="Negocios reales que pasaron de vender por catálogo, mensajes y llamadas a tener una tienda propia funcionando 24/7."
        />

        {/* Carrusel con scroll-snap en móvil, grid en escritorio */}
        <div className="-mx-6 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {projects.map((p, i) => {
            const isLink = Boolean(p.url);
            const Card = (isLink ? motion.a : motion.div) as typeof motion.a;

            return (
              <Card
                key={p.domain}
                {...(isLink
                  ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className={`group flex w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-line bg-white p-5 shadow-soft transition-all duration-500 sm:w-[70vw] md:w-auto md:p-6 ${
                  isLink
                    ? "hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-lift"
                    : "cursor-default"
                }`}
              >
                {/* Escenario de dispositivos */}
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-soft px-4 py-6">
                  <span
                    aria-hidden
                    className="grid-pattern-brand-fine pointer-events-none absolute inset-0 opacity-80"
                  />
                  <DeviceShowcase
                    float={false}
                    alt={p.domain}
                    desktopSrc={p.desktopSrc}
                    mobileSrc={p.mobileSrc}
                    desktopSizes="(max-width: 768px) 55vw, 260px"
                    mobileSizes="(max-width: 768px) 18vw, 90px"
                    className="relative w-full"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-700">
                      {p.industry}
                    </p>
                    <h3 className="mt-1.5 truncate text-xl font-extrabold tracking-[-0.03em] text-ink-title">
                      {p.domain}
                    </h3>
                  </div>

                  {isLink ? (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-all duration-300 group-hover:border-carbon-950 group-hover:bg-carbon-950 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                      <Clock className="h-3 w-3" />
                      {p.status}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-[15px] font-bold leading-snug tracking-[-0.015em] text-ink-title">
                  {p.headline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-body">{p.body}</p>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-ink-body transition-colors duration-300 group-hover:border-gold-100 group-hover:bg-gold-50 group-hover:text-gold-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
