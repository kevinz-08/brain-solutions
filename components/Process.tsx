"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, Code, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Análisis",
    desc: "Mapeamos tus procesos actuales, identificamos cuellos de botella y oportunidades reales de impacto.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Estrategia",
    desc: "Diseñamos una hoja de ruta priorizada con las soluciones de mayor retorno para tu negocio.",
  },
  {
    num: "03",
    icon: Code,
    title: "Desarrollo",
    desc: "Construimos, integramos y desplegamos sistemas robustos con ciclos rápidos y validación constante.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Escalamiento",
    desc: "Optimizamos, medimos y expandimos para que cada solución crezca al ritmo de tu empresa.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title={
            <>
              Un proceso claro,
              <br />
              <span className="text-text-body italic font-light">de la idea al impacto</span>
            </>
          }
          description="Un método probado en cuatro fases para entregar resultados medibles desde la primera semana."
        />

        <div ref={ref} className="mt-20 relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-accent via-accent-glow to-accent-purple"
          />

          <div className="space-y-12 md:space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:grid md:grid-cols-2 md:gap-0 flex items-start gap-6"
              >
                {/* Icon node — absolutely positioned on desktop, inline on mobile */}
                <div className="relative z-10 md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl border border-border bg-bg-secondary flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-xl" />
                    <s.icon className="relative w-5 h-5 text-accent-glow" />
                  </div>
                </div>

                {/* Content — alternating sides on desktop */}
                {i % 2 === 0 ? (
                  <>
                    <div className="md:pr-16 md:text-right flex-1">
                      <div className="text-xs font-mono text-accent-glow mb-2">{s.num}</div>
                      <h3 className="text-2xl font-semibold text-text-title tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-body leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-16 flex-1">
                      <div className="text-xs font-mono text-accent-glow mb-2">{s.num}</div>
                      <h3 className="text-2xl font-semibold text-text-title tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-body leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
