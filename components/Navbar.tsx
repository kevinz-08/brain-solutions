"use client";

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";
import { EASE } from "./Reveal";

const links = [
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Cómo lo hacemos", href: "#proceso" },
  { label: "Categorías", href: "#categorias" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const smoothScroll = useSmoothScroll(72);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScroll(e, href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-white/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70"
        >
          <Image src="/logo.png" alt="Lumo Ecom" width={120} height={40} className="h-9 w-auto" priority />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-ink-body transition-colors duration-200 hover:text-ink-title"
            >
              {link.label}
              <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* CTA escritorio */}
        <div className="hidden lg:block">
          <a
            href="#agendar"
            onClick={(e) => handleNavClick(e, "#agendar")}
            className="group inline-flex items-center gap-2 rounded-full bg-carbon-950 px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-carbon-800 hover:shadow-brand-lg"
          >
            Agendar llamada
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Toggle móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-ink-title transition-colors hover:bg-surface-muted lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-line bg-white p-4 shadow-lift lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-body transition-colors hover:bg-surface-soft hover:text-ink-title"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={(e) => handleNavClick(e, "#agendar")}
              className="mt-2 rounded-xl bg-carbon-950 px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Agendar llamada
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
