"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";

const values = [
  { icon: Zap, label: "Velocidad", desc: "Ciclos cortos, entregas constantes." },
  { icon: Shield, label: "Confianza", desc: "Sistemas robustos y auditables." },
  { icon: Target, label: "Resultados", desc: "Métricas claras desde el día uno." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary/50"
            >
              <div className="w-1 h-1 rounded-full bg-accent-glow" />
              <span className="text-[11px] font-medium text-text-body uppercase tracking-wider">
                Sobre nosotros
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-text-title"
            >
              Impulsamos empresas a través de{" "}
              <span className="text-gradient-accent italic font-light">soluciones digitales estratégicas</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 space-y-4 text-text-body leading-relaxed"
            >
              <p>
                Brain Solutions nace con una idea simple: la tecnología debe servir
                al negocio, no al revés. Combinamos desarrollo de software, automatización
                e inteligencia artificial para construir sistemas que generan impacto medible.
              </p>
              <p>
                Trabajamos con equipos pequeños y enfocados, ciclos rápidos y una obsesión
                por entregar valor desde la primera semana. Sin promesas vacías, sin
                deliverables inflados — solo soluciones que funcionan.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg border border-border bg-bg-secondary flex items-center justify-center mb-3">
                    <v.icon className="w-4 h-4 text-accent-glow" />
                  </div>
                  <div className="text-sm font-medium text-text-title">{v.label}</div>
                  <div className="text-xs text-text-body mt-0.5">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />

            <div className="relative aspect-square rounded-3xl border border-border bg-gradient-to-br from-bg-secondary to-bg overflow-hidden">
              {/* Geometric pattern */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <defs>
                  <radialGradient id="ag" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ag2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Concentric circles */}
                {[80, 120, 160, 200].map((r, i) => (
                  <circle
                    key={r}
                    cx="200"
                    cy="200"
                    r={r}
                    stroke="url(#ag2)"
                    strokeWidth="0.5"
                    opacity={0.6 - i * 0.1}
                  />
                ))}

                {/* Radial dots */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 200 + Math.cos(angle) * 160;
                  const y = 200 + Math.sin(angle) * 160;
                  return <circle key={i} cx={x} cy={y} r="2" fill="#818CF8" opacity="0.6" />;
                })}

                {/* Center glow */}
                <circle cx="200" cy="200" r="60" fill="url(#ag)" />
                <circle cx="200" cy="200" r="6" fill="#E4E4E7" />

                {/* Connecting lines */}
                <line x1="200" y1="200" x2="360" y2="200" stroke="#818CF8" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="40" y2="200" stroke="#818CF8" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="200" y2="40" stroke="#818CF8" strokeWidth="0.5" opacity="0.4" />
                <line x1="200" y1="200" x2="200" y2="360" stroke="#818CF8" strokeWidth="0.5" opacity="0.4" />
              </svg>

              {/* Stat overlays */}
              <div className="absolute top-6 left-6 px-3 py-2 rounded-xl border border-border bg-bg/80 backdrop-blur-md">
                <div className="text-[10px] text-text-muted">Proyectos</div>
                <div className="text-lg font-semibold text-text-title">+10</div>
              </div>
              <div className="absolute bottom-6 right-6 px-3 py-2 rounded-xl border border-border bg-bg/80 backdrop-blur-md">
                <div className="text-[10px] text-text-muted">Satisfacción</div>
                <div className="text-lg font-semibold text-text-title">98%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
