// ============================================================
// 🛒 PRODUCT CARD — bloque de producto para artículos MDX
//
// Uso en MDX:
//   <ProductCard
//     name="Timberland PRO Pit Boss"
//     asin="B0007Y08SA"
//     rating={4.5}
//     badge="Mejor overall"
//     bestFor="Obra general todo el día"
//     locale="es"
//   >
//     Reseña honesta del producto aquí...
//   </ProductCard>
// ============================================================
import { amazonUrl } from "@/lib/site.config";
import { t } from "@/lib/i18n";
import StarRating from "./StarRating";

interface Props {
  name: string;
  asin: string; // ⚠️ reemplazar placeholders por ASINs reales
  rating: number;
  badge?: string;
  bestFor?: string;
  image?: string;
  locale: string;
  children?: React.ReactNode;
}

export default function ProductCard({
  name,
  asin,
  rating,
  badge,
  bestFor,
  image,
  locale,
  children,
}: Props) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      {badge && (
        <div className="bg-amber-400 px-4 py-1 text-center text-xs font-black uppercase tracking-wide text-stone-900">
          {badge}
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-stone-900">{name}</h3>
            {bestFor && (
              <p className="mt-1 text-sm font-medium text-stone-500">
                {t("bestFor", locale as never)}: {bestFor}
              </p>
            )}
            <div className="mt-2">
              <StarRating rating={rating} />
            </div>
          </div>
          <a
            href={amazonUrl(asin, locale)}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="rounded-lg bg-amber-400 px-4 py-2.5 text-center text-sm font-black text-stone-900 shadow transition hover:bg-amber-300"
          >
            {t("seePrice", locale as never)}
          </a>
        </div>
        <div className="prose-article mt-4 text-stone-700">{children}</div>
      </div>
    </div>
  );
}
