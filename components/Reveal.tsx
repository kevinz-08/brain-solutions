"use client";

import { motion, type Variants } from "framer-motion";

/** Curva de easing única para toda la página (expo-out). */
export const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Contenedor de revelado al hacer scroll: fade-in + desplazamiento hacia arriba.
 * `delay` permite escalonar elementos hermanos (stagger manual).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Variants para listas: el padre escalona a los hijos automáticamente. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};
