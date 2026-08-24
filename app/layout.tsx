import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brain Solutions — E-commerce web a medida para tu tienda",
  description:
    "Digitalizamos tiendas con e-commerce web a medida: diseño propio, checkout optimizado e integración con pagos, inventario y envíos. Agenda una llamada.",
  keywords: [
    "e-commerce a medida",
    "desarrollo tienda online",
    "digitalizar tienda",
    "Next.js e-commerce",
    "agencia e-commerce",
  ],
  openGraph: {
    title: "Brain Solutions — E-commerce web a medida",
    description:
      "Tu tienda merece algo mejor que una plantilla genérica. Diseñamos y desarrollamos e-commerce a medida para negocios que quieren vender online en serio.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-white font-sans text-ink-title antialiased">
        {children}
      </body>
    </html>
  );
}
