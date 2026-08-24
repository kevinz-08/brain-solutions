"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import Reveal, { EASE } from "./Reveal";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Estrategia",
    duration: "Semana 1",
    body: "Entendemos tu catálogo, tus márgenes y a quién le vendes. Definimos objetivos de conversión, alcance y prioridades antes de dibujar una sola pantalla.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Diseño UI/UX",
    duration: "Semanas 2-3",
    body: "Diseñamos el recorrido completo de compra: home, categoría, ficha de producto y checkout. Prototipo navegable para que lo valides antes de programar.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollo",
    duration: "Semanas 4-7",
    body: "Frontend en Next.js y backend con tu catálogo, pagos, envíos e inventario. Entregas semanales en un entorno de pruebas para revisar avances reales.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento",
    duration: "Semana 8",
    body: "Migración, pruebas de carga, SEO técnico y puesta en producción. Capacitamos a tu equipo y acompañamos las primeras semanas de venta real.",
  },
];

export default function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // La línea de progreso se dibuja a medida que el recorrido cruza el viewport
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // El paso que cruza la banda central del viewport pasa a estar activo
  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goToStep = (i: number) => {
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="proceso" className="relative bg-white py-24 md:py-32">
      {/* Halo de marca muy tenue, ancla la composición sin ensuciarla */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          {/* ── Columna fija: encabezado + índice del recorrido ── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink-title sm:text-[2.5rem]">
                Un proceso claro,
                <br className="hidden sm:block" /> sin sorpresas a mitad de camino
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-body">
                Ocho semanas promedio desde la primera reunión hasta la primera venta. Sabes
                en qué etapa estás y qué recibes en cada una.
              </p>
            </Reveal>

            {/* Índice: marca en qué punto del recorrido va el usuario */}
            <Reveal delay={0.12}>
              <nav aria-label="Etapas del proceso" className="mt-10 hidden lg:block">
                <ul className="space-y-1">
                  {steps.map(({ step, title }, i) => {
                    const isActive = active === i;
                    return (
                      <li key={step}>
                        <button
                          type="button"
                          onClick={() => goToStep(i)}
                          className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 ${
                            isActive ? "bg-brand-50" : "hover:bg-surface-soft"
                          }`}
                        >
                          <span className="relative h-px w-8 overflow-hidden bg-line">
                            <motion.span
                              className="absolute inset-0 origin-left bg-brand-600"
                              initial={false}
                              animate={{ scaleX: isActive ? 1 : 0 }}
                              transition={{ duration: 0.45, ease: EASE }}
                            />
                          </span>
                          <span
                            className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
                              isActive ? "text-brand-600" : "text-ink-muted"
                            }`}
                          >
                            {step}
                          </span>
                          <span
                            className={`text-sm font-semibold transition-colors duration-300 ${
                              isActive ? "text-ink-title" : "text-ink-body"
                            }`}
                          >
                            {title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-line bg-surface-soft p-5">
                <p className="text-sm leading-relaxed text-ink-body">
                  ¿Tu proyecto es más grande o más urgente?{" "}
                  <span className="font-semibold text-brand-700">
                    Ajustamos el plan en la primera llamada.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Recorrido de pasos ── */}
          <ol ref={trackRef} className="relative">
            {/* Riel y progreso */}
            <div className="absolute left-[27px] top-3 hidden h-[calc(100%-3rem)] w-px bg-line sm:block" />
            <motion.div
              style={{ scaleY: progress }}
              className="absolute left-[27px] top-3 hidden h-[calc(100%-3rem)] w-px origin-top bg-gradient-to-b from-brand-500 to-brand-700 sm:block"
            />

            {steps.map(({ icon: Icon, step, title, duration, body }, i) => {
              const isActive = active === i;

              return (
                <motion.li
                  key={step}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative pb-12 last:pb-0 sm:pl-24 md:pb-16"
                >
                  {/* Nodo del riel: se enciende cuando el paso está activo */}
                  <span
                    className={`relative mb-5 grid h-12 w-12 place-items-center rounded-2xl transition-all duration-500 sm:absolute sm:left-0 sm:top-0 sm:mb-0 sm:h-14 sm:w-14 ${
                      isActive
                        ? "bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-brand ring-1 ring-inset ring-white/25"
                        : "border border-line bg-white shadow-soft"
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-2 top-1 h-1/3 rounded-full bg-white/25 blur-[5px]"
                      />
                    )}
                    <Icon
                      strokeWidth={1.9}
                      className={`relative h-5 w-5 transition-colors duration-500 sm:h-6 sm:w-6 ${
                        isActive ? "text-white" : "text-brand-600"
                      }`}
                    />
                  </span>

                  {/* Número fantasma: da escala sin añadir ruido */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 text-6xl font-black leading-none tracking-tighter text-ink-title/[0.05] md:text-8xl"
                  >
                    {step}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-wider text-brand-600">
                      {step}
                    </span>
                    <span className="h-px w-5 bg-line" />
                    <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      {duration}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[1.75rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink-title md:text-[2.25rem]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-ink-body">
                    {body}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
