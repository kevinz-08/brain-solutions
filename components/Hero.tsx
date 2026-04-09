"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[120px] opacity-50 animate-pulse-glow" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-accent-purple/15 rounded-full blur-[100px]" />

      {/* Top fade line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex justify-center mb-8"
        >
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="text-center text-[42px] sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.02] max-w-4xl mx-auto"
        >
          <span className="text-gradient">Impulsamos el crecimiento</span>
          <br />
          <span className="text-text-title">de tu empresa con</span>{" "}
          <span className="relative inline-block">
            <span className="text-gradient-accent italic font-light">soluciones</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C50 4 150 1 298 6" stroke="url(#g)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#6366F1" stopOpacity="0"/>
                  <stop offset="0.5" stopColor="#818CF8"/>
                  <stop offset="1" stopColor="#8B5CF6" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          <span className="text-text-title">inteligentes</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mt-8 text-center text-lg md:text-xl text-text-body max-w-2xl mx-auto leading-relaxed"
        >
          Con Brain Solutions transformamos procesos complejos en
          soluciones digitales que generan resultados reales.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-accent to-accent-purple" />
            <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            <span className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-glow to-accent-purple opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
            <span className="relative">Agenda una cita</span>
            <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-text-title border border-border hover:border-border-bright bg-bg-secondary/30 hover:bg-bg-secondary/60 backdrop-blur-sm transition-all"
          >
            Ver casos de éxito
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.6 }}
          className="mt-20 relative"
        >
          {/* Glow under */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent-purple/20 to-accent/20 blur-3xl opacity-60" />

          <div className="relative rounded-2xl border border-border bg-gradient-to-b from-bg-secondary to-bg overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/80">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-0.5 rounded-md bg-bg/50 text-[10px] text-text-muted border border-border">
                  app.brainsolutions.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 space-y-2">
                <div className="text-[10px] text-text-muted uppercase tracking-wider mb-3">Workspace</div>
                {["Overview", "Automatizaciones", "IA Workflows", "Integraciones", "Reportes"].map((item, i) => (
                  <div
                    key={item}
                    className={`px-2.5 py-1.5 rounded-md text-[11px] flex items-center gap-2 ${
                      i === 1 ? "bg-accent/15 text-accent-glow border border-accent/20" : "text-text-body"
                    }`}
                  >
                    <div className={`w-1 h-1 rounded-full ${i === 1 ? "bg-accent-glow" : "bg-text-muted"}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="col-span-9 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Procesos automatizados", value: "847", change: "+24%" },
                    { label: "Horas ahorradas/mes", value: "1,240", change: "+38%" },
                    { label: "Tasa de éxito", value: "99.2%", change: "+1.4%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
                      className="rounded-xl border border-border bg-bg/40 p-3"
                    >
                      <div className="text-[10px] text-text-muted">{stat.label}</div>
                      <div className="mt-1 text-xl font-semibold text-text-title">{stat.value}</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">{stat.change}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="rounded-xl border border-border bg-bg/40 p-4 h-44 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[11px] text-text-body">Rendimiento últimos 30 días</div>
                    <div className="flex gap-1">
                      <div className="px-2 py-0.5 rounded text-[9px] bg-accent/15 text-accent-glow">30D</div>
                    </div>
                  </div>
                  <svg className="w-full h-28" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
                      d="M0,80 C40,70 60,60 100,55 S160,40 200,35 S280,25 320,18 S380,8 400,5"
                      stroke="#818CF8"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 0.8 }}
                      d="M0,80 C40,70 60,60 100,55 S160,40 200,35 S280,25 320,18 S380,8 400,5 L400,100 L0,100 Z"
                      fill="url(#chartg)"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
