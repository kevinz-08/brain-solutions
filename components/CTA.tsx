"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const CALENDLY_URL = "https://calendly.com/kevingadev/30min";

const DAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DAY_NAMES_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CTA() {
  const [calendlyReady, setCalendlyReady] = useState(false);

  // Today + view state
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-11
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Load Calendly script + stylesheet once
  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existing = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      setCalendlyReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
  }, []);

  const openCalendly = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (window.Calendly && calendlyReady) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  // ---- Calendar math ----
  // Days in current view month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Day of week of the 1st (0=Sunday). Convert so Monday = 0.
  const firstDayRaw = new Date(viewYear, viewMonth, 1).getDay();
  const firstDayOffset = (firstDayRaw + 6) % 7; // Mon=0 ... Sun=6

  // Build 42-cell grid (6 weeks)
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length < 42) cells.push(null);

  // Today comparison helpers
  const isViewingCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();
  const todayDate = today.getDate();

  // Determine if a day is "available" — weekdays from today onwards
  const isDayAvailable = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const dow = date.getDay(); // 0=Sun
    const isWeekday = dow >= 1 && dow <= 5;

    // Compare against today (zero out time)
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isFutureOrToday = date >= todayMidnight;

    return isWeekday && isFutureOrToday;
  };

  const isPast = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayMidnight;
  };

  // Auto-select first available day on mount / month change
  useEffect(() => {
    if (selectedDate === null) {
      for (let d = 1; d <= daysInMonth; d++) {
        if (isDayAvailable(d)) {
          setSelectedDate(d);
          break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation
  const goToPrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMonth = viewMonth - 1;
    if (newMonth < 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(newMonth);
    }
    setSelectedDate(null);
  };

  const goToNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMonth = viewMonth + 1;
    if (newMonth > 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(newMonth);
    }
    setSelectedDate(null);
  };

  // Selected date display label
  const selectedLabel = useMemo(() => {
    if (selectedDate === null) return "Selecciona un día";
    const d = new Date(viewYear, viewMonth, selectedDate);
    return `${DAY_NAMES_SHORT[d.getDay()]} ${selectedDate} ${MONTHS[viewMonth].slice(0, 3)}`;
  }, [selectedDate, viewMonth, viewYear]);

  // Disable prev button if we're at current month (no past navigation)
  const canGoPrev = !isViewingCurrentMonth;

  return (
    <section id="cta" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[600px] bg-gradient-to-r from-accent/20 via-accent-purple/15 to-accent/20 blur-[140px] rounded-full" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl border border-border bg-gradient-to-b from-bg-secondary to-bg-secondary/30 overflow-hidden">
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
                <span className="text-gradient-accent italic font-light">
                  transformar
                </span>{" "}
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
                <button
                  onClick={openCalendly}
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-b from-accent to-accent-purple" />
                  <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
                  <span className="absolute -inset-2 bg-gradient-to-r from-accent via-accent-glow to-accent-purple opacity-60 blur-2xl group-hover:opacity-100 transition-opacity" />
                  <Calendar className="relative w-4 h-4" />
                  <span className="relative">Agendar consultoría</span>
                  <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            </div>

            {/* Right: dynamic calendar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/15 blur-3xl rounded-full" />

                <div
                  onClick={openCalendly}
                  className="relative rounded-2xl border border-border bg-bg/80 backdrop-blur-xl p-5 shadow-2xl hover:border-accent/40 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.5)] transition-all duration-500 group cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">
                        Selecciona
                      </div>
                      <div className="text-sm font-semibold text-text-title">
                        {MONTHS[viewMonth]} {viewYear}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={goToPrevMonth}
                        disabled={!canGoPrev}
                        className={`w-7 h-7 rounded-md border border-border flex items-center justify-center transition-colors ${
                          canGoPrev
                            ? "text-text-body hover:text-text-title hover:border-border-bright"
                            : "text-text-muted/40 cursor-not-allowed"
                        }`}
                        aria-label="Mes anterior"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextMonth}
                        className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-text-body hover:text-text-title hover:border-border-bright transition-colors"
                        aria-label="Mes siguiente"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Days header */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((d, i) => (
                      <div
                        key={i}
                        className="text-center text-[10px] text-text-muted py-1"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Dates grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {cells.map((day, i) => {
                      if (day === null) {
                        return <div key={i} className="aspect-square" />;
                      }

                      const isToday = isViewingCurrentMonth && day === todayDate;
                      const isSelected = day === selectedDate;
                      const available = isDayAvailable(day);
                      const past = isPast(day);

                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={!available}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (available) setSelectedDate(day);
                          }}
                          className={`aspect-square rounded-md text-xs flex items-center justify-center transition-all relative ${
                            isSelected
                              ? "bg-gradient-to-b from-accent to-accent-purple text-white font-semibold shadow-lg shadow-accent/40"
                              : isToday
                              ? "border border-accent/60 text-accent-glow font-semibold bg-accent/5"
                              : available
                              ? "text-text-title border border-border hover:border-accent/40 hover:bg-white/5"
                              : past
                              ? "text-text-muted/30 line-through decoration-text-muted/20"
                              : "text-text-muted"
                          }`}
                        >
                          {day}
                          {available && !isSelected && !isToday && (
                            <div className="absolute bottom-1 w-1 h-1 rounded-full bg-accent-glow" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time slots */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-2">
                      Horarios disponibles · {selectedLabel}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["09:00", "11:30", "14:00", "15:30", "17:00", "18:30"].map(
                        (t, i) => (
                          <div
                            key={t}
                            className={`py-1.5 rounded-md text-[11px] border text-center ${
                              i === 2
                                ? "border-accent/50 bg-accent/15 text-accent-glow"
                                : "border-border text-text-body"
                            }`}
                          >
                            {t}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Hover hint */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[11px] text-text-muted group-hover:text-accent-glow transition-colors">
                    <span>Click para ver disponibilidad real</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
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