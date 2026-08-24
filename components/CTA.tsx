"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import Reveal, { EASE } from "./Reveal";

const bullets = [
  "30 minutos, sin costo y sin compromiso",
  "Revisamos tu catálogo y tu operación actual",
  "Sales con un alcance y un rango de precio claros",
];

export default function CTA() {
  return (
    <section id="agendar" className="relative bg-white px-6 py-20 md:py-28">
      <Reveal y={32}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-brand-900 px-6 py-16 md:px-16 md:py-24">
          {/* Textura y halos */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-brand-500/30 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-[340px] w-[340px] rounded-full bg-brand-600/25 blur-[110px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
                className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl"
              >
                Hablemos de la tienda
                <br />
                que tu negocio necesita.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
                className="mt-5 max-w-lg text-base leading-relaxed text-brand-100/80 md:text-lg"
              >
                Cuéntanos qué vendes y cómo lo vendes hoy. Salimos de la llamada
                con un diagnóstico honesto: incluso si lo que necesitas no es un
                desarrollo a medida, te lo diremos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.26 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="https://cal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_18px_40px_-12px_rgba(255,255,255,0.4)] active:scale-[0.99]"
                >
                  Agendar llamada
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:hola@brainsolutions.co"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Escribir por correo
                </a>
              </motion.div>
            </div>

            {/* Tarjeta de qué incluye la llamada */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="rounded-3xl border border-white/15 bg-white/[0.07] p-8 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-white">Qué incluye la llamada</p>
              <ul className="mt-6 space-y-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-400/25">
                      <Check className="h-3 w-3 text-brand-100" />
                    </span>
                    <span className="text-sm leading-relaxed text-brand-100/85">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs text-brand-200/70">
                  Respondemos en menos de 24 horas hábiles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
