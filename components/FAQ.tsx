"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Depende del alcance, pero la mayoría de proyectos entregan valor medible en 2-4 semanas. Trabajamos con sprints cortos para que veas avances continuos.",
  },
  {
    q: "¿Trabajan con empresas pequeñas?",
    a: "Sí. Diseñamos soluciones a la medida del tamaño y presupuesto de cada empresa. Lo importante es que haya un proceso real que se pueda automatizar u optimizar.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Stack moderno y probado: Next.js, TypeScript, Python, n8n, modelos de OpenAI/Anthropic, bases de datos como Postgres y Supabase. Elegimos según el problema.",
  },
  {
    q: "¿Ofrecen mantenimiento posterior?",
    a: "Sí. Ofrecemos planes de soporte y evolución continua para que tus sistemas crezcan con tu negocio sin sorpresas técnicas.",
  },
  {
    q: "¿Cómo cobran sus servicios?",
    a: "Trabajamos por proyecto cerrado o por retainer mensual, según lo que mejor se ajuste a tu necesidad. Siempre con alcance y precio definidos antes de empezar.",
  },
  {
    q: "¿Pueden integrarse con nuestras herramientas actuales?",
    a: "Casi siempre sí. Trabajamos con CRMs, ERPs, herramientas de marketing y APIs personalizadas. Si tiene API o webhooks, lo conectamos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Lo que sueles
              <br />
              <span className="text-text-body italic font-light">querer saber</span>
            </>
          }
        />

        <div className="mt-16 space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-bg-secondary/30 hover:bg-bg-secondary/60 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-[15px] font-medium text-text-title">{f.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center"
                  >
                    <Plus className="w-3.5 h-3.5 text-text-body" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-text-body leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
