"use client";

import { motion } from "framer-motion";
import { Code2, Workflow, Brain, Plug } from "lucide-react";
import SectionHeader from "./SectionHeader";

const solutions = [
  {
    icon: Code2,
    title: "Desarrollo web",
    desc: "Plataformas, dashboards y aplicaciones web a medida con tecnología moderna y rendimiento de élite.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Workflow,
    title: "Automatizaciones",
    desc: "Workflows que conectan tus herramientas y ejecutan tareas repetitivas mientras tú creces.",
    tags: ["n8n", "Zapier", "APIs"],
  },
  {
    icon: Brain,
    title: "IA integrada",
    desc: "Agentes y modelos de lenguaje aplicados a procesos reales de tu negocio para decisiones más rápidas.",
    tags: ["LLMs", "Agentes", "RAG"],
  },
  {
    icon: Plug,
    title: "Integraciones",
    desc: "Conectamos tus sistemas — CRMs, ERPs, bases de datos — en un ecosistema unificado y confiable.",
    tags: ["CRM", "ERP", "Webhooks"],
  },
];

export default function Solution() {
  return (
    <section id="solutions" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.07] blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="La solución"
          title={
            <>
              Diseñamos sistemas digitales que
              <br />
              <span className="text-gradient-accent">automatizan y optimizan</span>{" "}
              tus procesos
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl border border-border bg-gradient-to-b from-bg-secondary to-bg-secondary/30 p-7 overflow-hidden hover:border-accent/30 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Accent glow on hover */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl border border-border bg-bg flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500">
                    <s.icon className="w-[18px] h-[18px] text-text-body group-hover:text-accent-glow transition-colors" />
                    <div className="absolute w-11 h-11 rounded-xl bg-accent/0 group-hover:bg-accent/20 blur-xl transition-all duration-500 -z-10" />
                  </div>
                  <div className="flex gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-border text-text-muted bg-bg/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-title tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-body leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
