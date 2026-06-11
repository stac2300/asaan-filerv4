import type { Metadata } from "next";
import { BlogListing } from "@/components/blog-listing";
import { blogArticles } from "@/components/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Professional Pakistan tax filing guides, NTN registration guides, freelancer taxation articles, filer benefits, and FBR updates from Asaan Filer.",
  openGraph: {
    title: "Asaan Filer Blog",
    description:
      "Tax Filing Pakistan, NTN Registration Pakistan, Income Tax Calculator Pakistan, and filer education guides."
  }
};

export default function BlogPage() {
  return (
    <>
      <section className="container-px bg-brand-soft py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
            Blog
          </p>
          <h1 className="text-balance text-4xl font-black text-ink sm:text-6xl">
            Tax Filing Guides for Pakistan
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn NTN Registration Pakistan, Income Tax Return Filing, filer vs non-filer rules,
            freelancer taxation, salary tax estimates, and practical FBR tax filing basics.
          </p>
        </div>
      </section>

      <section className="container-px bg-white py-14 sm:py-16">
        <BlogListing articles={blogArticles} />
      </section>
    </>
  );
}
