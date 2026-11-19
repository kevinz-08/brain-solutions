/**
 * Datos de la sección "Planes". Edita este archivo para cambiar precios,
 * textos o características sin tocar el componente.
 */

export type Plan = {
  id: string;
  name: string;
  /** Para quién es el plan. */
  audience: string;
  /** Precio base en COP (número entero, sin formato). */
  price: number;
  /** Texto previo al precio, p. ej. "Desde". */
  pricePrefix: string;
  /** Texto bajo el precio, p. ej. "pago único". Opcional. */
  priceNote?: string;
  /** Primera línea de la lista cuando el plan hereda del anterior. */
  includesFrom?: string;
  features: string[];
  /** Lo que el plan NO incluye (se muestra en gris). */
  excluded?: string[];
  /** Tiempo de entrega. */
  timeline: string;
  /** Facilidades de pago (texto pequeño, borra el campo para quitarlo). */
  paymentNote?: string;
  cta: { label: string; href: string };
  /** Destaca la tarjeta como recomendada. */
  highlighted?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    id: "catalogo",
    name: "Catálogo",
    audience:
      "Para negocios que hoy venden por WhatsApp y quieren verse profesionales en internet.",
    price: 899990,
    pricePrefix: "Desde",
    priceNote: "pago único",
    features: [
      "Catálogo con hasta 100 productos cargados",
      "Búsqueda y filtros por marca, modelo y año",
      "Botón de pedido por WhatsApp en cada producto",
      "Diseño base con tu logo y colores, adaptado a celular",
      "SEO básico (títulos y descripciones de producto)",
      "Una ronda de correcciones",
    ],
    excluded: [
      "Pagos en línea",
      "Carrito",
      "Inventario",
      "Panel de administración",
    ],
    timeline: "Entrega en 3 días hábiles desde que entregas tus materiales.",
    cta: { label: "Quiero mi catálogo", href: "#agendar" },
  },
  {
    id: "tienda",
    name: "Tienda",
    audience:
      "Para negocios que quieren vender y cobrar en línea de forma ordenada.",
    price: 3000000,
    pricePrefix: "Desde",
    includesFrom: "Todo lo del plan Catálogo, más:",
    features: [
      "Carrito, checkout y pasarela de pagos colombiana (tarjeta, PSE, etc.)",
      "Gestión y cálculo de envíos con integración a una plataforma de envíos",
      "Panel de administración: productos, pedidos e inventario",
      "Carga masiva de productos desde Excel",
      "Compatibilidad por moto o carro estructurada en cada producto",
      "Analítica configurada (visitas, carritos, compras)",
      "SEO técnico: URLs limpias, mapa del sitio, datos estructurados de producto y Google Merchant Center",
      "1 hora de capacitación y 30 días de soporte tras el lanzamiento",
    ],
    timeline: "Entrega estimada de 4 a 6 semanas.",
    paymentNote: "Paga en cuotas: 50 % de anticipo y el saldo a la entrega.",
    cta: { label: "Quiero mi tienda", href: "#agendar" },
    highlighted: true,
    badge: "Recomendado",
  },
  {
    id: "pro",
    name: "Pro",
    audience:
      "Para negocios que ya venden y quieren crecer y automatizar.",
    price: 5000000,
    pricePrefix: "Desde",
    includesFrom: "Todo lo del plan Tienda, más:",
    features: [
      "Módulo para clientes mayoristas: precios por cliente y pedidos mínimos",
      "Cuentas de cliente con historial de pedidos y recompra rápida",
      "\"Mi garaje\": el cliente guarda su vehículo y solo ve repuestos compatibles",
      "Facturación electrónica integrada con un proveedor autorizado",
      "Sincronización de inventario con el sistema que ya uses",
      "Recuperación de carritos abandonados por WhatsApp o correo",
      "Páginas por marca y modelo optimizadas para Google",
      "3 meses de acompañamiento: reportes mensuales, ajustes del embudo y calendario de contenido",
    ],
    timeline: "Entrega estimada de 8 a 10 semanas.",
    cta: { label: "Hablemos de mi proyecto", href: "#agendar" },
  },
];

/** Encabezado de la sección. */
export const plansHeader = {
  title: "Elige el plan para tu negocio de repuestos",
  description:
    "Empieza con un catálogo en 3 días o lanza tu tienda completa. Precios claros, sin letra pequeña.",
};

/**
 * Notas bajo las tarjetas.
 * TODO: confirmar si los precios incluyen IVA y escribir el texto en
 * `VAT_NOTE` (p. ej. "Los precios incluyen IVA."). Mientras sea `null`
 * la nota no se muestra.
 */
export const VAT_NOTE: string | null = null;

export const plansNotes: string[] = [
  "Los costos de pasarela de pagos, hosting y dominio no están incluidos y se pagan directamente por el cliente.",
  "Los tiempos cuentan desde que se reciben todos los materiales (logo, fotos, lista de productos).",
  ...(VAT_NOTE ? [VAT_NOTE] : []),
];

/** Formatea COP con separador de miles ("$3.000.000"), igual en servidor y cliente. */
export function formatCOP(value: number): string {
  return `$${Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}
