import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { BlogThumbnail } from "@/components/blog-thumbnail";
import { contact } from "@/components/site-data";
import { blogArticles, getArticleBySlug, getRelatedArticles } from "@/components/blog-data";

type PageProps = {
  params: any;
};

const practicalGuidance = [
  {
    heading: "Practical Checklist Before You Apply",
    subheading: "Keep the process smooth",
    body: [
      "Before starting any NTN registration or tax filing process, keep your CNIC, active mobile number, email address, income records, bank details, and supporting documents in one place. If you are salaried, salary slips and tax deduction certificates are useful. If you are a freelancer, bank statements and client payment records matter. If you run a business, prepare business information, sales records, and expense details.",
      "A clean checklist helps reduce back-and-forth messages and makes the review faster. It also protects you from filing based on guesses. The more organized your documents are, the easier it is to explain your income position and complete your filing correctly."
    ]
  },
  {
    heading: "How to Use This Guide Responsibly",
    subheading: "Educational guidance, not a substitute for review",
    body: [
      "This article is designed to help Pakistani taxpayers understand the topic in simple language. It is useful for planning, document preparation, and knowing which questions to ask before filing. However, tax rules, rates, and procedures can change, and your final position depends on your income source, records, deductions, and tax already paid.",
      "For best results, treat this guide as a starting point. Use the internal links to compare related topics, then get professional support if you are unsure. Asaan Filer focuses on making the first step easy with NTN Registration and Tax Filing assistance for Rs. 1,000 total."
    ]
  }
];

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

async function getSlug(params: PageProps["params"]) {
  const resolvedParams = await Promise.resolve(params);
  return resolvedParams.slug;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await getSlug(params);
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      url: `/blog/${article.slug}`
    }
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const slug = await getSlug(params);
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const allSections = [...article.sections, ...practicalGuidance];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Asaan Filer"
    },
    publisher: {
      "@type": "Organization",
      name: "Asaan Filer"
    },
    mainEntityOfPage: `/blog/${article.slug}`,
    articleSection: article.category,
    keywords: article.keywords.join(", ")
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <section className="container-px bg-brand-soft py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.42fr]">
            <div>
              <Link href="/blog" className="text-sm font-black text-brand-green hover:text-brand-dark">
                Blog
              </Link>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-brand-green">
                {article.category}
              </p>
              <h1 className="text-balance mt-3 text-4xl font-black leading-tight text-ink sm:text-6xl">
                {article.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{article.metaDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-emerald-950/10 bg-white p-5 shadow-premium">
              <BlogThumbnail article={article} large />
              <div className="mt-5 rounded-lg bg-brand-soft p-4">
                <p className="text-sm font-black text-ink">Need quick help?</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  NTN Registration + Tax Filing assistance for Rs. 1,000 total.
                </p>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-green px-4 py-3 text-sm font-black text-white shadow-soft transition hover:bg-brand-dark"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-px bg-white py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.32fr_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-500">Table of Contents</p>
                <nav className="mt-4 grid gap-3">
                  {allSections.map((section) => (
                    <a
                      key={section.heading}
                      href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm font-bold leading-6 text-slate-600 hover:text-brand-green"
                    >
                      {section.heading}
                    </a>
                  ))}
                  <a href="#faqs" className="text-sm font-bold leading-6 text-slate-600 hover:text-brand-green">
                    FAQs
                  </a>
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="prose-content rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card sm:p-8">
                {article.intro.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-slate-700">
                    {paragraph}
                  </p>
                ))}

                <div className="my-8 rounded-xl border border-brand-green/15 bg-brand-soft p-5">
                  <h2 className="text-2xl font-black text-ink">Recommended Reading</h2>
                  <div className="mt-4 grid gap-3">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="flex items-center justify-between gap-4 rounded-md bg-white px-4 py-3 text-sm font-black text-brand-dark shadow-sm transition hover:bg-brand-mint"
                      >
                        {related.title}
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>

                {allSections.map((section) => (
                  <section
                    key={section.heading}
                    id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="scroll-mt-28 border-t border-emerald-950/10 pt-8"
                  >
                    <h2 className="text-3xl font-black text-ink">{section.heading}</h2>
                    <h3 className="mt-3 text-xl font-black text-brand-dark">{section.subheading}</h3>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}

                <section id="faqs" className="scroll-mt-28 border-t border-emerald-950/10 pt-8">
                  <h2 className="text-3xl font-black text-ink">FAQs</h2>
                  <div className="mt-5 grid gap-4">
                    {article.faqs.map((faq) => (
                      <div key={faq.question} className="rounded-lg bg-brand-soft p-5">
                        <h3 className="text-lg font-black text-ink">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-8 rounded-xl bg-brand-dark p-6 text-white sm:p-8">
                  <CheckCircle2 size={34} />
                  <h2 className="mt-4 text-3xl font-black">
                    Need NTN Registration or Tax Filing Assistance?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-white/80">
                    Contact Asaan Filer on WhatsApp. Get NTN Registration and Tax Filing assistance for only Rs. 1,000.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-brand-dark transition hover:bg-brand-mint"
                    >
                      <MessageCircle size={18} />
                      Contact on WhatsApp
                    </a>
                    <ButtonLink href="/contact#apply" className="bg-brand-green hover:bg-white hover:text-brand-dark">
                      Apply Now
                    </ButtonLink>
                  </div>
                </section>
              </div>

              <section className="mt-8">
                <h2 className="text-2xl font-black text-ink">Related Articles</h2>
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-premium"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-green">
                        {related.category}
                      </p>
                      <h3 className="mt-3 text-lg font-black leading-snug text-ink">{related.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{related.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
