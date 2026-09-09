// ============================================================
// 📊 TABLA COMPARATIVA — resumen rápido de productos
//
// Uso en MDX:
//   <CompareTable locale="es"
//     rows={[
//       { name: "Producto A", asin: "B0XXXX", bestFor: "Obra general", rating: 4.5 },
//       ...
//     ]}
//   />
// ============================================================
import { amazonUrl } from "@/lib/site.config";
import { t } from "@/lib/i18n";
import StarRating from "./StarRating";

interface Row {
  name: string;
  asin: string;
  bestFor: string;
  rating: number;
}

export default function CompareTable({
  rows,
  locale,
}: {
  rows: Row[];
  locale: string;
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
      <div className="border-b border-stone-200 bg-stone-100 px-4 py-2 text-sm font-black uppercase tracking-wide text-stone-700">
        {t("comparisonTable", locale as never)}
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 text-xs uppercase tracking-wide text-stone-500">
            <th className="px-4 py-3">{t("product", locale as never)}</th>
            <th className="px-4 py-3">{t("bestFor", locale as never)}</th>
            <th className="px-4 py-3">{t("rating", locale as never)}</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.asin} className="border-b border-stone-100 last:border-0">
              <td className="px-4 py-3 font-bold text-stone-900">{r.name}</td>
              <td className="px-4 py-3 text-stone-600">{r.bestFor}</td>
              <td className="px-4 py-3">
                <StarRating rating={r.rating} />
              </td>
              <td className="px-4 py-3 text-right">
                <a
                  href={amazonUrl(r.asin, locale)}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="whitespace-nowrap rounded-md bg-stone-900 px-3 py-1.5 text-xs font-bold text-amber-400 transition hover:bg-stone-700"
                >
                  {locale === "es" ? "Ver en Amazon →" : "See on Amazon →"}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
