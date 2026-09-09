import Link from "next/link";
import { site } from "@/lib/site.config";
import { t, categories, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-stone-600">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-black text-stone-900">{site.name}</p>
            <p className="mt-2 text-xs leading-relaxed">{t("disclosureShort", locale)}</p>
          </div>
          <div>
            <p className="mb-2 font-bold text-stone-900">{t("guides", locale)}</p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${locale}/categoria/${cat}`}
                    className="transition hover:text-amber-700"
                  >
                    {t(`cat_${cat}`, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>
                <Link href={`/${locale}/divulgacion`} className="transition hover:text-amber-700">
                  {t("affiliateDisclosure", locale)}
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-amber-700">
                  {t("contact", locale)}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-stone-200 pt-4 text-xs">
          © {new Date().getFullYear()} {site.name}. {site.domain}
        </p>
      </div>
    </footer>
  );
}
