// ============================================================
// CONFIGURACIÓN CENTRAL DE MARCA — cambiar la marca aquí TODO
// El nombre/dominio están PENDIENTES de decisión final.
// ============================================================

export const site = {
  name: "ObraGear", // ⬅️ cambiar cuando Juan decida marca final
  domain: "obragear.com", // ⬅️ dominio pendiente de compra
  // ⚠️ URL en vivo: cambiar a https://obragear.com cuando se compre el dominio
  url: "https://best-gears.vercel.app",
  email: "hola@obragear.com", // ⬅️ crear al comprar dominio
  descriptionEs:
    "Guías honestas de equipo de trabajo: botas, loncheras, guantes y todo el gear que aguanta la obra real. Para trabajadores en Canadá y Norteamérica.",
  descriptionEn:
    "Honest work gear guides: boots, lunch boxes, gloves and everything that survives a real job site. For workers in Canada and North America.",
};

// ============================================================
// AMAZON AFFILIATES
// ⚠️ REEMPLAZAR por el tag real de Juan (Associates Central)
// ============================================================
export const amazonTag = "acestore079-20";

// ============================================================
// GOOGLE SEARCH CONSOLE — código de verificación (meta tag)
// Se genera al registrar la propiedad en GSC. Formato: "abc123..."
// ============================================================
export const googleSiteVerification = ""; // ⬅️ pegar código de GSC aquí

// Tienda de Amazon por idioma (ambos apuntan a .ca por ahora:
// audiencia principal = trabajadores en Canadá)
export const amazonStore: Record<string, string> = {
  es: "https://www.amazon.ca",
  en: "https://www.amazon.ca",
};

export function amazonUrl(asin: string, locale: string): string {
  return `${amazonStore[locale] ?? amazonStore.es}/dp/${asin}?tag=${amazonTag}`;
}
