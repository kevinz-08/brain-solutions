import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumoecom.com"),
  title: "Lumo Ecom — E-commerce a medida para repuestos y lujo automotriz",
  description:
    "Creamos tiendas online a medida para repuestos y accesorios de lujo para automóviles en Bucaramanga, Cúcuta, Medellín y Bogotá. Búsqueda por vehículo, pagos locales e inventario real.",
  keywords: [
    "tienda online repuestos para carros",
    "e-commerce autopartes",
    "página web accesorios para carros",
    "desarrollo e-commerce Bucaramanga",
    "desarrollo e-commerce Cúcuta",
    "desarrollo e-commerce Medellín",
    "desarrollo e-commerce Bogotá",
    "Next.js e-commerce",
  ],
  openGraph: {
    title: "Lumo Ecom — E-commerce a medida para repuestos y lujo automotriz",
    description:
      "Tu tienda de repuestos o accesorios de lujo merece algo mejor que una plantilla genérica. Diseñamos e-commerce a medida en Bucaramanga, Cúcuta, Medellín y Bogotá.",
    type: "website",
    locale: "es_CO",
    siteName: "Lumo Ecom",
    url: "https://lumoecom.com",
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
    <html lang="es-CO" className={inter.variable}>
      <body className="bg-white font-sans text-ink-title antialiased">
        {children}
      </body>
    </html>
  );
}
