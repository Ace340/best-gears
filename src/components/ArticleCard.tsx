import Link from "next/link";
import type { Article } from "@/lib/content";

export default function ArticleCard({
  article,
  locale,
  categoryLabel,
}: {
  article: Article;
  locale: string;
  categoryLabel?: string;
}) {
  const d = article.data;
  const dateStr = new Date(d.updated ?? d.date).toLocaleDateString(
    locale === "es" ? "es-MX" : "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );
  return (
    <Link
      href={`/${locale}/guias/${article.slug}`}
      className="group flex flex-col rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
        <span className="rounded bg-stone-900 px-2 py-0.5 text-amber-400">
          {categoryLabel ?? d.category}
        </span>
        <span className="text-stone-400">{dateStr}</span>
      </div>
      <h3 className="text-lg font-extrabold leading-snug text-stone-900 group-hover:text-amber-700">
        {d.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">
        {d.description}
      </p>
    </Link>
  );
}
