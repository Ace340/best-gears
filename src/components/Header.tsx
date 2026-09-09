import Link from "next/link";
import { site } from "@/lib/site.config";
import { t, categories, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const other: Locale = locale === "es" ? "en" : "es";
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-900 text-stone-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href={`/${locale}`} className="text-lg font-black tracking-tight">
          {site.name}
          <span className="ml-2 hidden text-xs font-medium text-amber-400 sm:inline">
            {t("siteTagline", locale)}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {categories.slice(0, 3).map((cat) => (
            <Link
              key={cat}
              href={`/${locale}/categoria/${cat}`}
              className="hidden text-stone-300 transition hover:text-amber-400 md:inline"
            >
              {t(`cat_${cat}`, locale)}
            </Link>
          ))}
          <Link
            href={`/${other}`}
            className="rounded-md border border-stone-600 px-2.5 py-1 text-xs font-bold uppercase text-stone-200 transition hover:border-amber-400 hover:text-amber-400"
            hrefLang={other}
          >
            {other}
          </Link>
        </nav>
      </div>
    </header>
  );
}
