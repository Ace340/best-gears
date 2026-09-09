import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { locales, categories, t, type Locale } from "@/lib/i18n";
import { getArticlesByCategory } from "@/lib/content";
import { site } from "@/lib/site.config";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((cat) => ({ locale, cat }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; cat: string }>;
}): Promise<Metadata> {
  const { locale, cat } = await params;
  const label = t(`cat_${cat}`, locale as never);
  return {
    title: label,
    description:
      locale === "es"
        ? `Guías de ${label.toLowerCase()} probadas en obra real — ${site.name}`
        : `${label} guides tested on real job sites — ${site.name}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; cat: string }>;
}) {
  const { locale, cat } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  if (!categories.includes(cat as (typeof categories)[number])) notFound();

  const articles = getArticlesByCategory(locale as Locale, cat);
  const label = t(`cat_${cat}`, locale as never);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black text-stone-900">{label}</h1>
      <p className="mt-2 text-stone-600">
        {articles.length}{" "}
        {locale === "es"
          ? articles.length === 1
            ? "guía"
            : "guías"
          : articles.length === 1
            ? "guide"
            : "guides"}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard
            key={a.slug}
            article={a}
            locale={locale}
            categoryLabel={label}
          />
        ))}
      </div>
    </div>
  );
}
