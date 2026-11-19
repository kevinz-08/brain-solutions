"use client";

import { ArrowRight, Check, Clock, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { siteConfig } from "@/lib/site";
import { plans, plansHeader, plansNotes, formatCOP, type Plan } from "@/data/plans";

function PlanCard({ plan }: { plan: Plan }) {
  const smoothScroll = useSmoothScroll(72);
  const dark = Boolean(plan.highlighted);

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-7 md:p-8 ${
        dark
          ? "bg-carbon-950 text-white shadow-lift ring-1 ring-gold-500/60 lg:-my-4 lg:py-12"
          : "border border-line bg-white shadow-soft"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-carbon-950">
          {plan.badge}
        </span>
      )}

      <h3
        className={`text-2xl font-extrabold tracking-[-0.03em] ${
          dark ? "text-white" : "text-ink-title"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 min-h-[3.75rem] text-sm leading-relaxed ${
          dark ? "text-white/70" : "text-ink-body"
        }`}
      >
        {plan.audience}
      </p>

      {/* Precio */}
      <div className="mt-6">
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className={`text-sm font-medium ${dark ? "text-white/60" : "text-ink-muted"}`}>
            {plan.pricePrefix}
          </span>
          <span
            className={`text-4xl font-extrabold tracking-[-0.04em] ${
              dark ? "text-gold-300" : "text-ink-title"
            }`}
          >
            {formatCOP(plan.price)}
          </span>
          <span className={`text-sm ${dark ? "text-white/60" : "text-ink-muted"}`}>COP</span>
        </p>
        {plan.priceNote && (
          <p className={`mt-1 text-xs ${dark ? "text-white/60" : "text-ink-muted"}`}>
            {plan.priceNote}
          </p>
        )}
      </div>

      {/* Tiempo */}
      <p
        className={`mt-5 flex items-start gap-2 rounded-xl px-3.5 py-3 text-[13px] leading-snug ${
          dark ? "bg-white/[0.07] text-white/80" : "bg-surface-soft text-ink-body"
        }`}
      >
        <Clock className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-gold-400" : "text-gold-700"}`} />
        {plan.timeline}
      </p>

      {/* Incluye */}
      <div className="mt-6 flex-1">
        {plan.includesFrom && (
          <p className={`mb-4 text-sm font-semibold ${dark ? "text-white" : "text-ink-title"}`}>
            {plan.includesFrom}
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                  dark ? "bg-gold-400/20" : "bg-carbon-950"
                }`}
              >
                <Check className="h-3 w-3 text-gold-300" />
              </span>
              <span
                className={`text-sm leading-relaxed ${dark ? "text-white/85" : "text-ink-title"}`}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {plan.excluded && plan.excluded.length > 0 && (
          <div className="mt-6 border-t border-line pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              No incluye
            </p>
            <ul className="space-y-2.5">
              {plan.excluded.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-muted">
                    <X className="h-3 w-3 text-ink-muted" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Facilidades de pago */}
      {plan.paymentNote && (
        <p className="mt-6 text-xs leading-relaxed text-white/60">{plan.paymentNote}</p>
      )}

      {/* CTA */}
      <a
        href={plan.cta.href}
        onClick={(e) => smoothScroll(e, plan.cta.href)}
        className={`group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] ${
          dark
            ? "bg-gold-400 text-carbon-950 hover:bg-gold-300 hover:shadow-[0_18px_40px_-12px_rgba(216,184,102,0.45)]"
            : "bg-carbon-950 text-white shadow-brand hover:bg-carbon-800 hover:shadow-brand-lg"
        }`}
      >
        {plan.cta.label}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function Plans() {
  return (
    <section
      id="planes"
      aria-label={`Planes y precios de ${siteConfig.name}`}
      className="relative border-b border-line bg-surface-soft py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title={plansHeader.title} description={plansHeader.description} />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {plansNotes.length > 0 && (
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
            <ul className="space-y-1.5 text-center text-xs leading-relaxed text-ink-muted">
              {plansNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
