import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brain Solutions — Soluciones digitales inteligentes",
  description:
    "Transformamos procesos complejos en soluciones digitales que generan resultados reales. Desarrollo, automatización e IA para tu empresa.",
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
      <body className="bg-bg text-text-title font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
