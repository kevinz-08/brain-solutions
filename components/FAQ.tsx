"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal, { EASE } from "./Reveal";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista mi tienda?",
    a: "Una tienda estándar toma entre 6 y 8 semanas desde la primera reunión hasta el lanzamiento. Catálogos muy grandes, integraciones con ERP o operaciones B2B pueden extenderlo a 10-12 semanas. En la llamada inicial te damos un rango concreto según tu caso, no una estimación genérica.",
  },
  {
    q: "¿Cuánto cuesta un e-commerce a medida?",
    a: "Trabajamos por proyecto cerrado: defines el alcance y el precio antes de empezar, sin costos que aparecen a mitad de camino. El rango depende del tamaño del catálogo y de las integraciones que necesites. Si tu presupuesto no da para el alcance completo, proponemos una primera fase que ya venda y que crezca después.",
  },
  {
    q: "¿Por qué no simplemente usar Shopify o WooCommerce?",
    a: "Si vendes pocos productos y tu operación es simple, una plataforma genérica puede ser suficiente y te lo diremos. El e-commerce a medida tiene sentido cuando tu forma de vender no cabe en el molde: precios por tipo de cliente, compatibilidades, inventario en varias sedes, o cuando las comisiones por venta ya te cuestan más que el desarrollo.",
  },
  {
    q: "¿Quién es dueño del código y de los datos?",
    a: "Tu empresa. Al cerrar el proyecto entregamos el repositorio, los accesos a la infraestructura y la documentación. No hay dependencia obligatoria con nosotros: si mañana quieres cambiar de proveedor, puedes hacerlo sin perder nada.",
  },
  {
    q: "¿Ofrecen mantenimiento después del lanzamiento?",
    a: "Sí. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento para ajustes y correcciones. Después puedes contratar un plan mensual que cubre monitoreo, actualizaciones de seguridad, respaldos y una bolsa de horas para mejoras continuas.",
  },
  {
    q: "¿Puedo administrar la tienda sin saber programar?",
    a: "Ese es el objetivo. Entregamos un panel de administración pensado para tu equipo: cargar productos, cambiar precios, gestionar pedidos y publicar promociones sin tocar código. Incluye capacitación en vivo y material de consulta.",
  },
  {
    q: "¿Se integra con mis sistemas actuales?",
    a: "En la mayoría de casos sí. Conectamos pasarelas de pago, facturación electrónica, transportadoras, ERPs y CRMs. Si el sistema tiene API o webhooks, lo integramos; si no, buscamos una alternativa como sincronización por archivos o procesos programados.",
  },
  {
    q: "¿Qué pasa si ya tengo una tienda y quiero migrar?",
    a: "Es un escenario frecuente. Migramos productos, clientes, historial de pedidos y URLs con redirecciones para no perder el posicionamiento que ya ganaste. Planificamos el cambio para que el corte de servicio sea mínimo y fuera de tus horas pico de venta.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const smoothScroll = useSmoothScroll(72);

  return (
    <section id="faq" className="relative bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Lo que todos preguntan antes de empezar"
          description="Tiempos, costos, propiedad y mantenimiento. Sin letra pequeña."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={Math.min(i, 4) * 0.05} y={16}>
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 hover:bg-brand-50/40 md:px-8 md:py-6"
                    >
                      <span
                        className={`text-base font-medium transition-colors duration-200 md:text-[17px] ${
                          isOpen ? "text-brand-700" : "text-ink-title"
                        }`}
                      >
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-line text-ink-muted"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pr-16 text-sm leading-relaxed text-ink-body md:px-8 md:pb-7 md:pr-20">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-ink-body">
              ¿Tu pregunta no está aquí?{" "}
              <a
                href="#agendar"
                onClick={(e) => smoothScroll(e, "#agendar")}
                className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 transition-colors hover:decoration-brand-600"
              >
                Resolvámosla en una llamada
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
