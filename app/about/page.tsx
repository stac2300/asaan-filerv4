import type { Metadata } from "next";
import { CheckCircle2, Eye, Flag, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/animated";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Asaan Filer, our mission, vision, and why we started."
};

export default function AboutPage() {
  return (
    <>
      <section className="container-px bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
              About Asaan Filer
            </p>
            <h1 className="text-4xl font-black text-ink sm:text-5xl">
              Making Tax Filing Simple for Every Pakistani
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Asaan Filer helps individuals, professionals, freelancers, and small business owners in Pakistan become tax filers through a clear NTN Registration and Tax Filing service.
            </p>
          </div>
        </div>
      </section>

      <Section title="Who We Are">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Company Introduction",
              icon: CheckCircle2,
              text: "We are a focused tax assistance service built for people who want simple guidance, transparent pricing, and quick support."
            },
            {
              title: "Mission",
              icon: Flag,
              text: "Our mission is to make NTN Registration and Income Tax Return Filing easier, clearer, and more affordable for Pakistanis."
            },
            {
              title: "Vision",
              icon: Eye,
              text: "Our vision is a Pakistan where every eligible person can become a filer confidently and participate in the tax system."
            }
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-emerald-900/10 bg-white p-6 shadow-card">
                <item.icon className="mb-5 text-brand-green" size={30} />
                <h2 className="text-xl font-black text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section className="container-px bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-green text-white">
            <Lightbulb size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-ink">Why We Started Asaan Filer</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Many people delay becoming filers because the process feels technical, confusing, or expensive. Asaan Filer was started to remove that friction with a direct service, simple checklist, human support, and one clear package price.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
