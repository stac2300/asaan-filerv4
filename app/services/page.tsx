import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { documentGroups, steps } from "@/components/site-data";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Services",
  description: "NTN Registration and Tax Filing service in Pakistan for Rs. 1,000."
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-px bg-brand-soft py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
              Services
            </p>
            <h1 className="text-4xl font-black text-ink sm:text-5xl">
              NTN Registration + Tax Filing
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              One professional package for becoming a filer in Pakistan with guided documentation and submission support.
            </p>
          </div>
          <div className="rounded-xl border border-brand-green/20 bg-white p-7 shadow-premium">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-green">Price</p>
            <p className="mt-3 text-5xl font-black text-brand-dark">Rs. 1,000</p>
            <p className="mt-2 text-sm font-bold text-slate-500">Total package price</p>
            <ButtonLink href="/contact#apply" className="mt-7 w-full">
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section title="What Is Included">
        <div className="grid gap-5 md:grid-cols-2">
          {["NTN Registration assistance", "Income Tax Return Filing assistance", "Document checklist guidance", "Step-by-step support"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-emerald-900/10 bg-white p-5 shadow-card">
              <CheckCircle2 className="text-brand-green" size={22} />
              <p className="font-bold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Required Documents" className="bg-brand-soft">
        <div className="grid gap-5 lg:grid-cols-3">
          {documentGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-emerald-900/10 bg-white p-6 shadow-card">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-mint text-brand-green">
                <group.icon size={25} />
              </div>
              <h2 className="text-lg font-black text-ink">{group.title}</h2>
              <div className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-md bg-brand-soft px-4 py-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-green" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Processing Steps">
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-card">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-brand-mint text-brand-green">
                <step.icon size={22} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Step {index + 1}</p>
              <h2 className="mt-2 text-base font-black text-ink">{step.title}</h2>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
