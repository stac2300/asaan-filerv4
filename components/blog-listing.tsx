"use client";

import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { type BlogArticle, categories } from "@/components/blog-data";
import { BlogThumbnail } from "@/components/blog-thumbnail";

export function BlogListing({ articles }: { articles: BlogArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.title, article.excerpt, article.category, ...article.keywords]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 rounded-xl border border-emerald-950/10 bg-white p-4 shadow-card">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="flex min-h-12 items-center gap-3 rounded-md border border-emerald-950/10 bg-brand-soft px-4">
            <Search size={19} className="text-brand-green" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search NTN, filer benefits, freelancers, tax slabs..."
              className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`focus-ring min-h-11 rounded-md px-4 py-2 text-sm font-black transition ${
                  category === item
                    ? "bg-brand-green text-white shadow-soft"
                    : "bg-brand-soft text-slate-600 hover:bg-brand-mint hover:text-brand-dark"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-xl border border-emerald-950/10 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-premium"
          >
            <BlogThumbnail article={post} />
            <div className="p-6">
              <p className="text-sm font-black text-brand-green">{post.category}</p>
              <h3 className="mt-3 text-xl font-black leading-snug text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.keywords.slice(0, 2).map((keyword) => (
                  <span key={keyword} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-slate-600">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-black text-brand-dark transition group-hover:gap-3"
              >
                Read Article
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="rounded-xl border border-emerald-950/10 bg-white p-8 text-center shadow-card">
          <p className="font-black text-ink">No articles found</p>
          <p className="mt-2 text-sm text-slate-600">Try another keyword or category.</p>
        </div>
      ) : null}
    </div>
  );
}
