import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Timer
} from "lucide-react";
import { FadeIn, PopIn } from "@/components/animated";
import { ButtonLink } from "@/components/button";
import { CalculatorTabs } from "@/components/calculators";
import { SalaryTaxCalculatorSection } from "@/components/salary-tax-calculator";
import {
  benefits,
  contact,
  documentGroups,
  faqs,
  filerBenefits,
  steps,
  testimonials
} from "@/components/site-data";
import { Section } from "@/components/section";

const trustBadges = [
  "NTN Registration",
  "Income Tax Filing",
  "WhatsApp Support",
  "Secure Process",
  "Expert Assistance"
];

const trustCounters = [
  { label: "Online Process", value: "100%", icon: Sparkles },
  { label: "Affordable Package", value: "Rs. 1,000", icon: CircleDollarSign },
  { label: "Fast Support", value: "Quick", icon: Timer },
  { label: "Secure Data Handling", value: "Private", icon: LockKeyhole }
];

export default function HomePage() {
  return (
    <>
      <section className="grid-bg overflow-hidden bg-brand-soft">
        <div className="container-px mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:py-14">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white px-4 py-2 text-sm font-black text-brand-dark shadow-card">
                <ShieldCheck size={18} className="text-brand-green" />
                Making Tax Filing Simple for Every Pakistani
              </div>
              <h1 className="text-balance text-4xl font-black leading-[1.03] text-ink sm:text-5xl lg:text-7xl">
                Pakistan&apos;s Simplest Tax Filing Service
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Get NTN Registration and Tax Filing Assistance for only Rs. 1,000. Fast, secure, and hassle-free.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {trustBadges.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 size={15} className="text-brand-green" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#apply" className="gap-2 px-6">
                  Apply Now
                  <ArrowRight size={18} />
                </ButtonLink>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand-green/25 bg-white px-6 py-3 text-sm font-black text-brand-dark shadow-card transition hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-mint"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trustCounters.map((item) => (
                  <div key={item.label} className="premium-card rounded-lg p-4">
                    <item.icon className="mb-3 text-brand-green" size={22} />
                    <p className="text-xl font-black text-ink">{item.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <PopIn delay={0.1} className="relative">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-3 top-6 z-10 rounded-lg bg-white p-4 shadow-premium">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Total Price</p>
                <p className="text-2xl font-black text-brand-dark">Rs. 1,000</p>
              </div>
              <Image
                src="/hero-asaan-filer.png"
                alt="Professional tax filing assistance illustration"
                width={1100}
                height={850}
                priority
                className="h-auto w-full rounded-xl border border-emerald-950/10 bg-white shadow-premium"
              />
              <div className="absolute -bottom-4 right-3 rounded-lg bg-brand-dark p-4 text-white shadow-soft sm:right-8">
                <p className="text-sm font-black">Ready to become a filer</p>
                <p className="mt-1 flex items-center gap-2 text-xs text-white/80">
                  <BadgeCheck size={16} /> NTN + Income Tax Filing
                </p>
              </div>
            </div>
          </PopIn>
        </div>
      </section>

      <SalaryTaxCalculatorSection />

      <Section
        eyebrow="Why choose us"
        title="Why Choose Asaan Filer"
        description="Premium support, clear pricing, and a simple process built for first-time filers in Pakistan."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <div className="group h-full rounded-xl border border-emerald-950/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-premium">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-mint text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                  <item.icon size={25} />
                </div>
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Simple process"
        title="How It Works"
        className="bg-brand-soft"
        description="A guided timeline that takes you from basic information to filer status."
      >
        <div className="relative grid gap-4 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent lg:block" />
          {steps.map((step, index) => (
            <PopIn key={step.title} delay={index * 0.04}>
              <div className="relative h-full rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green text-white shadow-soft">
                  <step.icon size={24} />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-black text-ink">{step.title}</h3>
              </div>
            </PopIn>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Documents"
        title="Documents Required"
        description="Prepare the right documents before applying so your NTN registration and tax filing request can move faster."
        className="bg-white"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {documentGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-emerald-950/10 bg-white p-6 shadow-card">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-mint text-brand-green">
                <group.icon size={25} />
              </div>
              <h3 className="text-xl font-black text-ink">{group.title}</h3>
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

      <Section
        eyebrow="Filer benefits"
        title="Why Become a Tax Filer?"
        description="Being a tax filer can help reduce withholding taxes and provide financial benefits during major transactions."
        className="bg-brand-soft"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filerBenefits.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-emerald-950/10 bg-white p-4 font-bold text-slate-700 shadow-card">
              <CheckCircle2 size={20} className="shrink-0 text-brand-green" />
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Calculators"
        title="Tax and Filer Calculators"
        description="Estimate salary tax, potential filer savings, and NTN eligibility with simple tools built for Pakistan."
        className="bg-white"
      >
        <CalculatorTabs />
      </Section>

      <Section eyebrow="Pricing" title="One Clear Package" className="bg-brand-soft">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-xl border border-brand-green/20 bg-white p-5 shadow-premium lg:grid-cols-[0.9fr_1.1fr] lg:p-7">
          <div className="rounded-lg bg-brand-dark p-7 text-white">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-white/70">Package</p>
            <h3 className="mt-3 text-3xl font-black">NTN Registration + Tax Filing</h3>
            <p className="mt-5 text-6xl font-black">Rs. 1,000</p>
            <p className="mt-2 text-sm font-bold text-white/70">No hidden charges</p>
          </div>
          <div className="grid content-center gap-3">
            {["NTN Registration", "Tax Filing", "WhatsApp Support", "Document Guidance", "No Hidden Charges"].map((item) => (
              <p key={item} className="flex items-center gap-3 rounded-md bg-brand-soft px-4 py-3 font-bold text-slate-700">
                <CheckCircle2 size={20} className="text-brand-green" />
                {item}
              </p>
            ))}
            <ButtonLink href="/contact#apply" className="mt-3 w-full gap-2">
              Apply Now
              <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by New Filers" className="bg-white">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={`${item.role}-${index}`} delay={index * 0.05}>
              <article className="h-full rounded-xl border border-emerald-950/10 bg-white p-6 shadow-card">
                <div className="mb-5 flex gap-1 text-brand-green">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-600">&quot;{item.quote}&quot;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-emerald-950/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-mint text-brand-green">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <p className="font-black text-ink">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common Questions" className="bg-brand-soft">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card transition open:border-brand-green/25 open:shadow-premium"
            >
              <summary className="cursor-pointer list-none text-base font-black text-ink">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-brand-green transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="container-px bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl rounded-xl bg-brand-green px-6 py-12 text-center text-white shadow-premium sm:px-10">
          <h2 className="text-balance text-3xl font-black sm:text-5xl">Start Your Tax Filing Journey Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Become a filer with NTN Registration and Tax Filing assistance for only Rs. 1,000.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact#apply" variant="white">
              Apply Now
            </ButtonLink>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-brand-dark"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
