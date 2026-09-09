import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  lang: string;
  date: string;
  updated?: string;
  image?: string;
  featured?: boolean;
}

export interface Article {
  slug: string;
  locale: string;
  data: ArticleFrontmatter;
  content: string;
}

export function getArticleSlugs(locale: Locale): string[] {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticle(locale: Locale, slug: string): Article | null {
  const fullPath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    locale,
    data: data as ArticleFrontmatter,
    content,
  };
}

export function getAllArticles(locale: Locale): Article[] {
  return getArticleSlugs(locale)
    .map((slug) => getArticle(locale, slug))
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) =>
        new Date(b.data.updated ?? b.data.date).getTime() -
        new Date(a.data.updated ?? a.data.date).getTime()
    );
}

export function getArticlesByCategory(locale: Locale, category: string): Article[] {
  return getAllArticles(locale).filter((a) => a.data.category === category);
}
