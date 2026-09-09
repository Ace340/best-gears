// ============================================================
// ⚖️ VEREDICTO — caja de conclusión del artículo
//
// Uso en MDX:
//   <VerdictBox locale="es" title="Mejor bota overall">
//     La Timberland PRO por X razones...
//   </VerdictBox>
// ============================================================
import { t } from "@/lib/i18n";

export default function VerdictBox({
  title,
  children,
  locale,
}: {
  title?: string;
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <div className="my-8 rounded-xl border-2 border-amber-400 bg-amber-50 p-5">
      <p className="mb-2 text-xs font-black uppercase tracking-widest text-amber-700">
        ⚖️ {t("ourVerdict", locale as never)}
      </p>
      {title && <h3 className="mb-2 text-lg font-extrabold text-stone-900">{title}</h3>}
      <div className="prose-article text-stone-800">{children}</div>
    </div>
  );
}
