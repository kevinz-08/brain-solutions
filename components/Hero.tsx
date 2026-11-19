"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, PlayCircle } from "lucide-react";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { EASE } from "./Reveal";

export default function Hero() {
  const smoothScroll = useSmoothScroll(72);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Silencio garantizado (algunos navegadores ignoran el atributo en hidratación)
  // y respeto por quien pide menos movimiento: el video arranca pausado.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-36 md:pb-28 md:pt-44">
      {/* Halo de acento detrás del titular */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[420px] w-[620px] rounded-full bg-gold-100/50 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[84rem] items-center gap-16 px-6 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-12">
        {/* ── Columna de texto ── */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.035em] text-ink-title sm:text-[2.6rem] md:text-5xl lg:text-[2.5rem] xl:text-[2.75rem]"
          >
            Lleva tu negocio de repuestos a internet desde{" "}
            <span className="text-gradient-brand">$899.990</span> y empieza a recibir
            pedidos esta semana.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-body"
          >
            E-commerce a medida para tiendas de repuestos y accesorios de lujo para
            automóviles en Bucaramanga, Cúcuta, Medellín y Bogotá. Buscador por
            vehículo, inventario real y pagos locales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#agendar"
              onClick={(e) => smoothScroll(e, "#agendar")}
              className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-carbon-950 px-6 py-3.5 text-[15px] font-semibold text-white shadow-brand xl:px-7 xl:text-base transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-carbon-800 hover:shadow-brand-lg active:scale-[0.99]"
            >
              Agenda una Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#proceso"
              onClick={(e) => smoothScroll(e, "#proceso")}
              className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink-title xl:px-7 xl:text-base transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-200 hover:bg-gold-50 hover:text-gold-700"
            >
              <PlayCircle className="h-[18px] w-[18px] text-ink-muted transition-colors duration-300 group-hover:text-gold-700" />
              Ver cómo funciona
            </a>
          </motion.div>
        </div>

        {/* ── Columna visual: panel del dashboard ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          {/* Lienzo reticulado. En móvil enmarca al panel; en escritorio sangra
              hasta el borde derecho y de arriba abajo (lo recorta la sección). */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-10 lg:left-[-1.5rem] lg:right-[-50vw] lg:top-[-70rem] lg:bottom-[-70rem]"
          >
            <div className="absolute inset-0 bg-surface-soft" />
            <div className="absolute inset-0 grid-blueprint" />
            <div className="absolute inset-x-0 top-0 h-px bg-line lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-line lg:hidden" />
            <div className="absolute inset-y-0 left-0 hidden w-px bg-line lg:block" />
          </div>

          {/* Resplandor cromático detrás del borde superior del panel */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 left-4 right-0 h-32 rounded-[100px] bg-[linear-gradient(90deg,#E9D8A8_0%,#D8B866_40%,#C9A24B_70%,#B08A35_100%)] opacity-40 blur-[46px]"
          />

          {/* Panel: alineado al borde derecho del contenedor, simétrico con el texto */}
          <div className="relative mx-auto w-full max-w-[620px] rounded-2xl border border-line bg-white p-2.5 shadow-lift lg:mx-0 lg:max-w-none">
            {/* Barra del navegador */}
            <div className="flex items-center gap-2 px-2 pb-2.5 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <div className="ml-2 flex h-5 flex-1 items-center rounded-full bg-surface-soft px-3">
                <span className="text-[9px] font-medium tracking-wide text-ink-muted">
                  tutiendadeautos.com/admin
                </span>
              </div>
            </div>

            {/* Demo del dashboard: sin audio, en bucle, sin controles nativos */}
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface-soft">
              <video
                ref={videoRef}
                width={1600}
                height={832}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videosDemo/demoDashboard-poster.webp"
                className="block h-auto w-full"
                aria-label="Demostración del panel de administración: inventario, pedidos y clientes en tiempo real"
              >
                {/* WebM primero: quien soporte VP9 descarga el archivo más liviano */}
                <source src="/videosDemo/demoDashboard.webm" type="video/webm" />
                <source src="/videosDemo/demoDashboard.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Píldora flotante: control real de reproducción */}
            <button
              onClick={toggle}
              aria-pressed={!playing}
              className="group absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2.5 rounded-full bg-ink-title px-5 py-3 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-[calc(50%+2px)] hover:scale-[1.03] active:scale-[0.98]"
            >
              {playing ? (
                <Pause className="h-4 w-4 fill-white" />
              ) : (
                <Play className="h-4 w-4 fill-white" />
              )}
              {playing ? "Pausar demo" : "Ver demo"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
