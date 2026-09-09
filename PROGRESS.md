# 📋 Progreso y Roadmap — Best Gears (Amazon Afiliados)

*Actualizado: 9 de septiembre, 2026*

---

## ✅ Lo que hemos hecho

### Fase estrategia (8 sept)
- [x] Análisis de 5 nichos candidatos → ganador: **workgear/construcción** (competencia baja, tickets altos, recompra, comunidad latina GTA desatendida)
- [x] Lista de 30 keywords en 5 clústeres: botas, loncheras, ropa/protección, accesorios, cuidado *(ver `keywords-workgear.md` en el repo de investigación)*
- [x] Decisión de arquitectura: **sitio de nicho bilingüe ES/EN** (español primero = victorias rápidas; inglés = volumen largo plazo)
- [x] Evaluación del método "web IA + Hostinger Horizons" (Skilio) → descartado copiarlo; mejor sitio propio + IA como asistente

### Fase desarrollo (8-9 sept)
- [x] Sitio completo scaffoldeado: **Next.js 16 + TypeScript + Tailwind 4**
- [x] Bilingüe real: `/es` y `/en` con hreflang, redirección por idioma del navegador
- [x] Pipeline de contenido: artículos en **MDX** con componentes afiliados (`ProductCard`, `CompareTable`, `VerdictBox`)
- [x] SEO técnico: sitemap.xml, robots.txt, JSON-LD (Article), canonicals, metadata por página, breadcrumb
- [x] Cumplimiento Amazon: divulgación de afiliados (ToS), links con `rel="sponsored nofollow noopener"`
- [x] 21 páginas estáticas (SSG) = Core Web Vitals perfectos
- [x] Repo GitHub privado: `github.com/Ace340/best-gears`
- [x] **Deploy en Vercel**: `https://best-gears.vercel.app`

### Fase monetización (9 sept)
- [x] Tag de Associates integrado: `acestore079-20` (programa **amazon.ca**)
- [x] **Primer artículo completo y en producción** (ES + EN): *"Las Mejores Botas de Seguridad Baratas que SÍ Aguantan la Obra (2026)"*
  - 4 botas con links reales:
    | Producto | ASIN | Posición |
    |---|---|---|
    | KPR M706 ASTM Impermeable | `B0FBWNMDD5` | 🥇 Mejor overall barata |
    | KPR Thinsulate Full-Grain | `B08X2V5KFR` | ❄️ Mejor para invierno |
    | KELODON Anti-Punción | `B0CFHMP1FJ` | 📌 Mejor anti-clavos |
    | MooseLog Chelsea | `B0H1K2T1YX` | 🦶 Más práctica sin cordones |
- [x] **Google Search Console verificado** ✅ (etiqueta HTML)
- [x] Sitemap disponible en `/sitemap.xml`

---

## 🚀 Siguientes pasos (en orden de prioridad)

### Esta semana
1. **Enviar sitemap en GSC** — Sitemaps → `sitemap.xml` → Enviar *(2 min)*
2. **Confirmar tracking de clicks** — dar clic a un botón de Amazon desde el sitio y verificar mañana en Associates Central → Reports *(5 min)*
3. **Artículo #2** — "Lonchera térmica para trabajo" (temporada fría acercándose 🍂) o "Botas más cómodas para estar de pie todo el día"
4. **Bing Webmaster Tools** — importa todo desde GSC con un clic *(3 min, tráfico extra gratis)*

### Este mes
5. **Decidir marca final** → comprar dominio (.com ~$12/año) → apuntar en Vercel → cambiar `site.url` en config
6. Artículos #3-#5 (siguiendo el orden de `keywords-workgear.md`: botas → loncheras → cuidado)
7. Compartir con moderación: grupos FB de obreros/construcción en Canadá, Reddit (r/Construction, r/BIENES_TANGIBLES?) — **siempre compartir el artículo, nunca links directos de Amazon**
8. Destapando el Arte (Fase 0 del plan): registrar `afiliados.amazon.com.mx` para la audiencia mexicana + links de libros/arte en descripciones → asegura las 3 ventas en 180 días

### Mes 2-3
9. 15-20 artículos publicados total (ES), empezar espejo EN de los mejores
10. TikTok/Shorts: demos de producto ("día con estas botas en obra")
11. Captura de emails (newsletter de ofertas dentro del nicho — vía sitio, nunca directo a Amazon)

---

## 📌 Decisiones pendientes
- **Marca y dominio** — candidatos verificados libres (8 sept): `geardeobra.com`, `equipodeobra.com`, `obragear.com` — Juan quiere darle más vueltas
- Nombre actual en el sitio: **ObraGear** (provisional, config-driven: `src/lib/site.config.ts`)

## 🔧 Notas técnicas importantes
- **Cambiar la marca**: solo editar `src/lib/site.config.ts` (una línea)
- **Al comprar dominio**: cambiar `site.url` en el mismo archivo + registrar NUEVA propiedad "Dominio" en GSC (con DNS)
- **next-mdx-remote v6**: usa `blockJS: false` (necesario para props con arrays en MDX) — no revertir
- **Plantilla para artículos**: copiar cualquiera de los 2 existentes (`content/es/`, `content/en/`)

## 🔗 Links clave
- Sitio: <https://best-gears.vercel.app>
- Repo: <https://github.com/Ace340/best-gears>
- Associates Central: <https://associates.amazon.ca>
- Search Console: <https://search.google.com/search-console>
- Vercel: <https://vercel.com> (deploy automático en cada push a `main`)
