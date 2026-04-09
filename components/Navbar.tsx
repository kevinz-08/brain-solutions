"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Soluciones", href: "#solutions" },
  { label: "Cómo trabajamos", href: "#process" },
  { label: "Casos", href: "#cases" },
  { label: "Nosotros", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-bg/70 border-b border-border"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-purple opacity-80 group-hover:opacity-100 transition" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-purple blur-md opacity-50" />
            <div className="absolute inset-[2px] rounded-[7px] bg-bg flex items-center justify-center">
              <span className="text-sm font-bold text-gradient-accent">B</span>
            </div>
          </div>
          <span className="text-[15px] font-semibold text-text-title tracking-tight">
            Brain<span className="text-text-body font-normal">Solutions</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm text-text-body hover:text-text-title transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/0 via-accent/0 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Agendar consultoría</span>
            <svg className="relative w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L8 3m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-title p-2"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-6 mt-3 rounded-2xl border border-border bg-bg-secondary p-4 flex flex-col gap-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm text-text-body hover:text-text-title rounded-lg hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-2.5 text-sm text-center text-white rounded-lg bg-accent/20 border border-accent/40"
          >
            Agendar consultoría
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
