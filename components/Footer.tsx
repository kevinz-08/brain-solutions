"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Github, Mail, MapPin } from "lucide-react";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

const navGroups = [
  {
    title: "Servicio",
    links: [
      { label: "Qué hacemos", href: "#servicios" },
      { label: "Cómo lo hacemos", href: "#proceso" },
      { label: "A quién ayudamos", href: "#alcance" },
      { label: "Casos de éxito", href: "#casos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Agendar llamada", href: "#agendar" },
    ],
  },
];

const legal = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
  { label: "Política de cookies", href: "/cookies" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  const smoothScroll = useSmoothScroll(72);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-flex transition-opacity hover:opacity-70">
              <Image
                src="/logo.png"
                alt="Brain Solutions"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-body">
              Digitalizamos tiendas con e-commerce web a medida. Diseño, desarrollo
              y acompañamiento para negocios que quieren vender online en serio.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="mailto:hola@brainsolutions.co"
                className="flex items-center gap-2.5 text-sm text-ink-body transition-colors hover:text-brand-700"
              >
                <Mail className="h-4 w-4 text-ink-muted" />
                hola@brainsolutions.co
              </a>
              <p className="flex items-center gap-2.5 text-sm text-ink-body">
                <MapPin className="h-4 w-4 text-ink-muted" />
                Colombia · Trabajo remoto
              </p>
            </div>
          </div>

          {/* Navegación */}
          {navGroups.map((group) => (
            <nav key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-title">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => smoothScroll(e, l.href)}
                      className="text-sm text-ink-body transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-xs text-ink-muted">
              © {year} Brain Solutions. Todos los derechos reservados.
            </p>
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-ink-muted transition-colors hover:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
