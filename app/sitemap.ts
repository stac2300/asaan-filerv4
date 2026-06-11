import type { MetadataRoute } from "next";
import { blogArticles } from "@/components/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asaanfiler.pk";
  const pages = ["", "/about", "/services", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const posts = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  return [...pages, ...posts];
}
