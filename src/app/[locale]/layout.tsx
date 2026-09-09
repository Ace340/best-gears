import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { locales, t, type Locale } from "@/lib/i18n";
import { site, googleSiteVerification } from "@/lib/site.config";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const es = locale === "es";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${es ? site.descriptionEs.slice(0, 60) : site.descriptionEn.slice(0, 60)}`,
      template: `%s | ${site.name}`,
    },
    description: es ? site.descriptionEs : site.descriptionEn,
    verification: {
      google: googleSiteVerification || undefined,
    },
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        es: `${site.url}/es`,
        en: `${site.url}/en`,
      },
    },
    openGraph: {
      siteName: site.name,
      locale: es ? "es_MX" : "en_CA",
      alternateLocale: es ? "en_CA" : "es_MX",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900 antialiased">
        <Header locale={locale as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} />
        <Analytics />
      </body>
    </html>
  );
}
