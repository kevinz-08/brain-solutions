"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const cases = [
  {
    industry: "E-commerce",
    title: "Automatización de fulfillment",
    problem: "Procesamiento manual de 800+ órdenes diarias generaba retrasos y errores en envíos.",
    solution: "Sistema integrado entre Shopify, ERP y operadores logísticos con validación automática.",
    metrics: [
      { value: "94%", label: "menos errores" },
      { value: "6h", label: "ahorradas/día" },
      { value: "3x", label: "más capacidad" },
    ],
    featured: true,
  },
  {
    industry: "Servicios B2B",
    title: "Agente de IA para soporte",
    problem: "Equipo desbordado por consultas repetitivas y tiempos de respuesta crecientes.",
    solution: "Agente conversacional con base de conocimiento propia y handoff inteligente.",
    metrics: [
      { value: "72%", label: "tickets resueltos" },
      { value: "2min", label: "respuesta promedio" },
    ],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Casos de éxito"
          title={
            <>
              Resultados reales,
              <br />
              <span className="text-text-body italic font-light">no promesas</span>
            </>
          }
          description="Algunos proyectos donde transformamos operaciones y desbloqueamos crecimiento."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative rounded-2xl border border-border bg-bg-secondary/40 overflow-hidden hover:border-border-bright transition-all duration-500 hover:-translate-y-1 ${
                c.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Featured background visual */}
              {c.featured && (
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/10 via-accent-purple/5 to-transparent" />
                  <svg className="absolute top-0 right-0 w-2/3 h-full opacity-30" viewBox="0 0 400 400" fill="none">
                    <circle cx="350" cy="200" r="120" stroke="url(#cg)" strokeWidth="0.5" />
                    <circle cx="350" cy="200" r="80" stroke="url(#cg)" strokeWidth="0.5" />
                    <circle cx="350" cy="200" r="40" stroke="url(#cg)" strokeWidth="0.5" />
                    <defs>
                      <linearGradient id="cg" x1="0" y1="0" x2="400" y2="400">
                        <stop stopColor="#6366F1" />
                        <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              <div className={`relative p-7 ${c.featured ? "lg:p-10 lg:max-w-[60%]" : ""}`}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] uppercase tracking-wider text-accent-glow font-medium">
                    {c.industry}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-text-title group-hover:rotate-45 transition-all duration-500" />
                </div>

                <h3 className={`font-semibold text-text-title tracking-tight ${c.featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                  {c.title}
                </h3>

                <div className="mt-5 space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Problema</div>
                    <p className="text-sm text-text-body leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Solución</div>
                    <p className="text-sm text-text-body leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-semibold text-gradient-accent">{m.value}</div>
                      <div className="text-[11px] text-text-muted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
