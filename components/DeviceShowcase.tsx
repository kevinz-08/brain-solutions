"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";

/**
 * Escenario de dispositivos: portátil (MacBook) + móvil (iPhone) construidos
 * en CSS, con capturas reales de una tienda dentro de la pantalla.
 * Si un proyecto todavía no tiene capturas, las pantallas caen a un marcador
 * de posición con el mismo lenguaje visual.
 */

/** Pantalla vacía: se usa cuando aún no hay captura del proyecto. */
function ScreenFallback({ compact = false }: { compact?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#1C2026] via-[#12151A] to-[#0B0D10]">
      <span
        aria-hidden
        className="grid-pattern-brand-fine absolute inset-0 opacity-40 mix-blend-screen"
      />
      <span className="relative flex flex-col items-center gap-1.5 text-center">
        <MonitorSmartphone
          strokeWidth={1.6}
          className={compact ? "h-4 w-4 text-gold-300" : "h-6 w-6 text-gold-300"}
        />
        {!compact && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-200">
            Próximamente
          </span>
        )}
      </span>
    </div>
  );
}

function Laptop({ src, alt, sizes }: { src?: string; alt: string; sizes: string }) {
  return (
    <div className="w-full">
      {/* Tapa + pantalla */}
      <div className="relative rounded-[11px] bg-gradient-to-b from-[#4b5563] via-[#374151] to-[#1f2937] p-[5px] shadow-[0_22px_44px_-20px_rgba(17,20,24,0.6)]">
        <span
          aria-hidden
          className="absolute left-1/2 top-[1.5px] h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-white/40"
        />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-black">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top"
            />
          ) : (
            <ScreenFallback />
          )}
          {/* Brillo diagonal del cristal */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20"
          />
        </div>
      </div>

      {/* Base / bisagra: algo más ancha que la tapa */}
      <div className="relative left-1/2 h-[10px] w-[114%] -translate-x-1/2 rounded-b-[9px] bg-gradient-to-b from-[#dfe3e8] via-[#c3c9d1] to-[#9aa1aa] shadow-[0_10px_18px_-12px_rgba(17,20,24,0.6)]">
        <span
          aria-hidden
          className="absolute left-1/2 top-0 h-[3px] w-[15%] -translate-x-1/2 rounded-b-full bg-[#8b929b]"
        />
      </div>
    </div>
  );
}

function Phone({ src, alt, sizes }: { src?: string; alt: string; sizes: string }) {
  return (
    <div className="relative w-full">
      <div className="rounded-[26px] bg-gradient-to-b from-[#4b5563] via-[#374151] to-[#1f2937] p-[3px] shadow-[0_20px_36px_-16px_rgba(17,20,24,0.65)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[23px] bg-black">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top"
            />
          ) : (
            <ScreenFallback compact />
          )}
          {/* Dynamic island */}
          <span
            aria-hidden
            className="absolute left-1/2 top-[5px] h-[7px] w-[32%] -translate-x-1/2 rounded-full bg-black"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20"
          />
        </div>
      </div>

      {/* Botones laterales */}
      <span
        aria-hidden
        className="absolute -left-[1.5px] top-[24%] h-[8%] w-[2px] rounded-l-sm bg-[#374151]"
      />
      <span
        aria-hidden
        className="absolute -right-[1.5px] top-[28%] h-[13%] w-[2px] rounded-r-sm bg-[#374151]"
      />
    </div>
  );
}

export default function DeviceShowcase({
  className = "",
  desktopSrc = "/imagesDemo/desktopDemo1.png",
  mobileSrc = "/imagesDemo/mobileDemo1.png",
  alt = "Tienda a medida",
  desktopSizes = "(max-width: 1024px) 70vw, 440px",
  mobileSizes = "(max-width: 1024px) 24vw, 150px",
  float: enableFloat = true,
}: {
  className?: string;
  /** Ruta de la captura de escritorio. `undefined` → marcador de posición. */
  desktopSrc?: string;
  /** Ruta de la captura móvil. `undefined` → marcador de posición. */
  mobileSrc?: string;
  alt?: string;
  desktopSizes?: string;
  mobileSizes?: string;
  float?: boolean;
}) {
  const reduced = useReducedMotion();

  const floatProps = (delay: number) =>
    reduced || !enableFloat
      ? {}
      : {
          animate: { y: [0, -7, 0] },
          transition: {
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div className={`relative flex items-end justify-center gap-4 sm:gap-6 ${className}`}>
      {/* Halo de marca detrás del conjunto */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-2 bottom-0 top-2 rounded-[48px] bg-gold-400/25 blur-3xl"
      />

      <motion.div {...floatProps(0)} className="relative w-[74%] max-w-[460px]">
        <Laptop src={desktopSrc} alt={`${alt} en escritorio`} sizes={desktopSizes} />
      </motion.div>

      <motion.div {...floatProps(0.9)} className="relative mb-1 w-[23%] max-w-[150px]">
        <Phone src={mobileSrc} alt={`${alt} en móvil`} sizes={mobileSizes} />
      </motion.div>
    </div>
  );
}
