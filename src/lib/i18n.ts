export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

type Dict = Record<string, { es: string; en: string }>;

export const dict: Dict = {
  siteTagline: {
    es: "El equipo que aguanta la obra real",
    en: "Gear that survives a real job site",
  },
  homeHeroTitle: {
    es: "Equipo de trabajo probado en obra, no en teoría",
    en: "Work gear tested on real sites, not in theory",
  },
  homeHeroSub: {
    es: "Comparativas honestas de botas, loncheras, guantes y todo lo que necesitas para aguantar la jornada. Sin humo.",
    en: "Honest comparisons of boots, lunch boxes, gloves and everything you need to survive the shift. No fluff.",
  },
  browseCategories: { es: "Categorías", en: "Categories" },
  latestGuides: { es: "Guías recientes", en: "Latest guides" },
  readMore: { es: "Leer guía", en: "Read guide" },
  seePrice: { es: "Ver precio en Amazon", en: "See price on Amazon" },
  ourVerdict: { es: "Nuestro veredicto", en: "Our verdict" },
  pros: { es: "Pros", en: "Pros" },
  cons: { es: "Contras", en: "Cons" },
  comparisonTable: { es: "Comparación rápida", en: "Quick comparison" },
  product: { es: "Producto", en: "Product" },
  bestFor: { es: "Mejor para", en: "Best for" },
  rating: { es: "Calificación", en: "Rating" },
  updated: { es: "Actualizado", en: "Updated" },
  disclosureShort: {
    es: "Como afiliados de Amazon, ganamos una comisión por compras calificadas. Esto no afecta el precio que pagas.",
    en: "As Amazon affiliates, we earn a commission on qualifying purchases. This doesn't affect the price you pay.",
  },
  about: { es: "Quiénes somos", en: "About us" },
  contact: { es: "Contacto", en: "Contact" },
  affiliateDisclosure: { es: "Divulgación de afiliados", en: "Affiliate disclosure" },
  guides: { es: "Guías", en: "Guides" },
  // Categorías (5 clústeres)
  cat_botas: { es: "Botas de trabajo", en: "Work boots" },
  cat_loncheras: { es: "Loncheras y comida", en: "Lunch boxes & food" },
  cat_ropa: { es: "Ropa y protección", en: "Clothing & protection" },
  cat_accesorios: { es: "Accesorios de obra", en: "Jobsite accessories" },
  cat_cuidado: { es: "Cuidado del equipo", en: "Gear care" },
};

export const categories = [
  "botas",
  "loncheras",
  "ropa",
  "accesorios",
  "cuidado",
] as const;
export type Category = (typeof categories)[number];

export function t(key: string, locale: Locale): string {
  return dict[key]?.[locale] ?? key;
}
