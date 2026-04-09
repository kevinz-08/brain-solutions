"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Check } from "lucide-react";

const days = ["L", "M", "M", "J", "V", "S", "D"];
const dates = Array.from({ length: 35 }, (_, i) => i - 2);

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[600px] bg-gradient-to-r from-accent/20 via-accent-purple/15 to-accent/20 blur-[140px] rounded-full" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl border border-border bg-gradient-to-b from-bg-secondary to-bg-secondary/30 overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/30 blur-3xl -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-8 md:p-14 lg:p-16">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
                <span className="text-[11px] font-medium text-accent-glow uppercase tracking-wider">
                  Disponible esta semana
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.02] text-text-title"
              >
                ¿Listo para
                <br />
                <span className="text-gradient-accent italic font-light">transformar</span>{" "}
                tu negocio?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-text-body leading-relaxed max-w-lg"
              >
                Agenda una consultoría gratuita de 30 minutos. Analizamos tu caso
                y te proponemos un camino claro — sin compromiso.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 space-y-3"
              >
                {[
                  "Diagnóstico gratuito de tus procesos",
                  "Propuesta personalizada en 48h",
                  "Sin compromiso de contratación",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-text-body">
                    <div className="w-5 h-5 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-glow" />
                    </div>
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-b from-accent to-accent-purple" />
                  <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
                  <span className="absolute -inset-2 bg-gradient-to-r from-accent via-accent-glow to-accent-purple opacity-60 blur-2xl group-hover:opacity-100 transition-opacity" />
                  <Calendar className="relative w-4 h-4" />
                  <span className="relative">Agendar consultoría</span>
                  <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </div>

            {/* Right: calendar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/15 blur-3xl rounded-full" />

                <div className="relative rounded-2xl border border-border bg-bg/80 backdrop-blur-xl p-5 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">Selecciona</div>
                      <div className="text-sm font-semibold text-text-title">Abril 2026</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-text-body hover:text-text-title">
                        <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </button>
                      <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-text-body hover:text-text-title">
                        <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </button>
                    </div>
                  </div>

                  {/* Days header */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {days.map((d, i) => (
                      <div key={i} className="text-center text-[10px] text-text-muted py-1">{d}</div>
                    ))}
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-7 gap-1">
                    {dates.map((date, i) => {
                      const isValid = date > 0 && date <= 30;
                      const isSelected = date === 16;
                      const isAvailable = isValid && [9, 11, 14, 16, 18, 21, 23].includes(date);
                      return (
                        <button
                          key={i}
                          disabled={!isValid}
                          className={`aspect-square rounded-md text-xs flex items-center justify-center transition-all relative ${
                            isSelected
                              ? "bg-gradient-to-b from-accent to-accent-purple text-white font-semibold shadow-lg shadow-accent/40"
                              : isAvailable
                              ? "text-text-title hover:bg-white/5 border border-border"
                              : isValid
                              ? "text-text-muted hover:bg-white/5"
                              : "text-transparent"
                          }`}
                        >
                          {isValid ? date : ""}
                          {isAvailable && !isSelected && (
                            <div className="absolute bottom-1 w-1 h-1 rounded-full bg-accent-glow" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time slots */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-2">
                      Horarios disponibles · Jue 16 Abr
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["09:00", "11:30", "14:00", "15:30", "17:00", "18:30"].map((t, i) => (
                        <button
                          key={t}
                          className={`py-1.5 rounded-md text-[11px] border transition-all ${
                            i === 2
                              ? "border-accent/50 bg-accent/15 text-accent-glow"
                              : "border-border text-text-body hover:border-border-bright hover:text-text-title"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
