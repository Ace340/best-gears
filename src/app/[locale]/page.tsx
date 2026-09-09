import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { locales, categories, t, type Locale } from "@/lib/i18n";
import { getAllArticles } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const catMeta: Record<string, { emoji: string; subEs: string; subEn: string }> = {
  botas: { emoji: "🥾", subEs: "Seguridad, confort y aguante", subEn: "Safety, comfort, durability" },
  loncheras: { emoji: "🍱", subEs: "Comida caliente a las 12", subEn: "Hot food at noon" },
  ropa: { emoji: "🧤", subEs: "Frio, lluvia y protección", subEn: "Cold, rain, protection" },
  accesorios: { emoji: "🔦", subEs: "Lo que hace la jornada más fácil", subEn: "Makes the shift easier" },
  cuidado: { emoji: "🧴", subEs: "Que tu equipo dure años", subEn: "Make your gear last years" },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const articles = getAllArticles(locale as Locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-2xl bg-stone-900 px-6 py-12 text-center text-stone-50 sm:px-12">
        <p className="text-xs font-black uppercase tracking-widest text-amber-400">
          {t("siteTagline", locale as never)}
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
          {t("homeHeroTitle", locale as never)}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-300">
          {t("homeHeroSub", locale as never)}
        </p>
      </section>

      {/* CATEGORÍAS */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-black text-stone-900">
          {t("browseCategories", locale as never)}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {categories.map((cat) => {
            const meta = catMeta[cat];
            return (
              <Link
                key={cat}
                href={`/${locale}/categoria/${cat}`}
                className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm transition hover:border-amber-400 hover:shadow-md"
              >
                <span className="text-3xl">{meta.emoji}</span>
                <p className="mt-2 text-sm font-extrabold text-stone-900">
                  {t(`cat_${cat}`, locale as never)}
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  {locale === "es" ? meta.subEs : meta.subEn}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* GUÍAS */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-black text-stone-900">
          {t("latestGuides", locale as never)}
        </h2>
        {articles.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-sm text-stone-400">
            {locale === "es"
              ? "Las guías están en camino. 🛠️"
              : "Guides coming soon. 🛠️"}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard
                key={a.slug}
                article={a}
                locale={locale}
                categoryLabel={t(`cat_${a.data.category}`, locale as never)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
