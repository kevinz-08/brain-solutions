"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, EyeOff, TrendingDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const problems = [
  {
    icon: Clock,
    title: "Pierdes tiempo en tareas repetitivas",
    desc: "Equipos atrapados en operaciones manuales que deberían ejecutarse solas.",
  },
  {
    icon: AlertTriangle,
    title: "Errores constantes",
    desc: "Procesos frágiles donde cada error cuesta tiempo, dinero y reputación.",
  },
  {
    icon: EyeOff,
    title: "Falta de control y visibilidad",
    desc: "Decisiones tomadas a ciegas porque la información vive en silos.",
  },
  {
    icon: TrendingDown,
    title: "Crecimiento limitado",
    desc: "No puedes escalar lo que no está sistematizado ni medido.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="El problema"
          title={
            <>
              Tu empresa depende de procesos
              <br />
              <span className="text-text-body italic font-light">manuales, lentos y desorganizados</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl border border-border bg-bg-secondary/40 p-6 hover:border-border-bright hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl border border-border bg-bg flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
                  <p.icon className="w-4 h-4 text-text-body group-hover:text-text-title transition-colors" />
                </div>
                <h3 className="text-[15px] font-medium text-text-title leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-text-body leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
