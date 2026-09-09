import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import CompareTable from "@/components/CompareTable";
import VerdictBox from "@/components/VerdictBox";
import ArticleCard from "@/components/ArticleCard";
import { locales, t, type Locale } from "@/lib/i18n";
import { getArticle, getArticleSlugs, getArticlesByCategory } from "@/lib/content";
import { site } from "@/lib/site.config";

const mdxComponents = {
  ProductCard,
  CompareTable,
  VerdictBox,
  AffiliateDisclosure,
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getArticleSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale as Locale, slug);
  if (!article) return {};
  return {
    title: article.data.title,
    description: article.data.description,
    alternates: {
      canonical: `${site.url}/${locale}/guias/${slug}`,
      languages: {
        es: `${site.url}/es/guias/${slug}`,
        en: `${site.url}/en/guias/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const article = getArticle(locale as Locale, slug);
  if (!article) notFound();

  const related = getArticlesByCategory(
    locale as Locale,
    article.data.category
  ).filter((a) => a.slug !== slug);

  const updated = article.data.updated ?? article.data.date;

  // JSON-LD: Article (rich snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.data.title,
    description: article.data.description,
    datePublished: article.data.date,
    dateModified: updated,
    inLanguage: locale,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/${locale}/guias/${slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-4 text-xs font-medium text-stone-400">
        <a href={`/${locale}`} className="hover:text-amber-700">
          {site.name}
        </a>
        {" / "}
        <a
          href={`/${locale}/categoria/${article.data.category}`}
          className="hover:text-amber-700"
        >
          {t(`cat_${article.data.category}`, locale as never)}
        </a>
      </nav>

      <h1 className="text-3xl font-black leading-tight text-stone-900 sm:text-4xl">
        {article.data.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-stone-600">
        {article.data.description}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-stone-400">
        {t("updated", locale as never)}:{" "}
        {new Date(updated).toLocaleDateString(
          locale === "es" ? "es-MX" : "en-CA",
          { year: "numeric", month: "long", day: "numeric" }
        )}
      </p>

      <AffiliateDisclosure locale={locale} />

      <div className="prose-article mt-6">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm] },
            blockJS: false, // permite props con arrays/objetos (rows, pros, cons)
          }}
        />
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-12 border-t border-stone-200 pt-8">
          <h2 className="mb-4 text-xl font-black text-stone-900">
            {t("latestGuides", locale as never)}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.slice(0, 2).map((a) => (
              <ArticleCard
                key={a.slug}
                article={a}
                locale={locale}
                categoryLabel={t(`cat_${a.data.category}`, locale as never)}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
