import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site.config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Divulgación de afiliados" : "Affiliate disclosure",
    robots: { index: false },
  };
}

export default async function DisclosurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-black text-stone-900">
        {locale === "es" ? "Divulgación de afiliados" : "Affiliate Disclosure"}
      </h1>
      <div className="prose-article mt-6">
        {locale === "es" ? (
          <>
            <p>
              {site.name} participa en el Programa de Afiliados de Amazon. Como
              afiliados, ganamos una comisión por las compras calificadas
              realizadas a través de los links en este sitio. Esto no tiene
              ningún costo adicional para ti.
            </p>
            <p>
              Los precios y la disponibilidad de los productos pueden cambiar.
              El precio mostrado en Amazon al momento de la compra es el que
              aplica. Siempre haz clic en el producto para ver el precio
              actual.
            </p>
            <p>
              Nuestras reseñas reflejan opiniones honestas basadas en
              investigación y experiencia. Las recomendaciones son nuestras y
              el programa de afiliados no influye en nuestras evaluaciones.
            </p>
          </>
        ) : (
          <>
            <p>
              {site.name} participates in the Amazon Associates Program. As
              affiliates, we earn a commission on qualifying purchases made
              through links on this site. This comes at no additional cost to
              you.
            </p>
            <p>
              Product prices and availability may change. The price shown on
              Amazon at the time of purchase is the one that applies. Always
              click through to see the current price.
            </p>
            <p>
              Our reviews reflect honest opinions based on research and
              experience. Recommendations are our own and the affiliate
              program does not influence our assessments.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
