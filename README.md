# Workgear Site — Sitio de afiliados Amazon (bilingüe ES/EN)

Sitio de comparativas de equipo de trabajo (obreros/construcción). Marca PENDIENTE — todo se cambia en un solo archivo.

## ⚙️ Stack
- Next.js 16 (App Router, SSG puro — 21 páginas estáticas)
- TypeScript + Tailwind CSS 4
- MDX con `next-mdx-remote` v6 + `remark-gfm`

## 🚀 Desarrollo
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## 🔑 Configuración clave

### 1. Marca y dominio (PENDIENTE de decisión de Juan)
`src/lib/site.config.ts` → nombre, dominio, descripciones. Cambiar ahí actualiza TODO el sitio.

### 2. Tag de Amazon Associates
`src/lib/site.config.ts` → `amazonTag = "TU_TAG_AQUI-20"` ← **REEMPLAZAR antes de lanzar**

### 3. ⚠️ Importante: next-mdx-remote v6
Por defecto bloquea expresiones JS en MDX (`blockJS: true`). Ya está desactivado
en `guias/[slug]/page.tsx` para permitir props con arrays (`rows={[...]}`). No volver a activar.

## 📝 Escribir artículos
Crear archivo en `content/es/{slug}.mdx` (y espejo en `content/en/`):

```mdx
---
title: "..."
description: "..."
category: "botas"   # botas | loncheras | ropa | accesorios | cuidado
lang: "es"
date: "2026-09-09"
---

Texto libre con componentes:

<CompareTable locale="es" rows={[{ name: "...", asin: "B0XXX", bestFor: "...", rating: 4.5 }]} />

<ProductCard name="..." asin="B0XXX" rating={4.5} badge="Mejor overall" bestFor="..." locale="es">
  Reseña... **Pros:** ... **Contras:** ...
</ProductCard>

<VerdictBox locale="es" title="...">Conclusión...</VerdictBox>
```

Links de Amazon: generar automáticamente via componente (usa `amazonUrl()` con el tag configurado). Todos llevan `rel="sponsored nofollow noopener"` (cumplimiento Google + Amazon).

## 🗺️ Rutas
- `/{locale}` — home (hero + categorías + guías)
- `/{locale}/guias/{slug}` — artículo
- `/{locale}/categoria/{cat}` — categoría
- `/{locale}/divulgacion` — divulgación de afiliados (Amazon ToS)
- `/sitemap.xml`, `/robots.txt` — automáticos
- `/` redirige según idioma del navegador (proxy.ts)

## ✅ SEO incluido
- hreflang ES/EN en cada página (alternates)
- JSON-LD Article en guías
- Sitemap + robots generados dinámicamente
- SSG = Core Web Vitals perfectos

## 📋 TODO
- [ ] Decidir marca final → actualizar `site.config.ts`
- [ ] Comprar dominio
- [ ] Reemplazar `amazonTag` por el real
- [ ] Reemplazar ASINs placeholder (B0PLACEHOLDER1-4) del artículo de muestra
- [ ] Deploy a Vercel
- [ ] Google Search Console + Bing Webmaster
- [ ] Siguiente artículo: "botas más cómodas para estar de pie todo el día"

## 📌 Contexto
- Análisis de nicho: `../amazon-affiliate/niche-analysis-2026-09.md`
- Keywords: `../amazon-affiliate/keywords-workgear.md`
