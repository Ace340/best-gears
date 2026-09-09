// ============================================================
// ⚠️ DIVULGACIÓN DE AFILIADOS — requerida por Amazon ToS
// Se muestra al inicio de cada guía con links
// ============================================================
import { t } from "@/lib/i18n";

export default function AffiliateDisclosure({ locale }: { locale: string }) {
  return (
    <p className="my-6 rounded-lg border border-stone-200 bg-stone-100 px-4 py-2.5 text-xs leading-relaxed text-stone-500">
      ⓘ {t("disclosureShort", locale as never)}
    </p>
  );
}
