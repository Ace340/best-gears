import type { MetadataRoute } from "next";
import { locales, categories } from "@/lib/i18n";
import { getArticleSlugs } from "@/lib/content";
import { site } from "@/lib/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${site.url}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const cat of categories) {
      entries.push({
        url: `${site.url}/${locale}/categoria/${cat}`,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
    for (const slug of getArticleSlugs(locale)) {
      entries.push({
        url: `${site.url}/${locale}/guias/${slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
