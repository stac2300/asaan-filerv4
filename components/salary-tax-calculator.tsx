"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calculator, MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/button";

const whatsappLink =
  "https://wa.me/923241434737?text=Assalamualaikum%2C%20I%20want%20NTN%20Registration%20and%20Tax%20Filing%20service.";

const currency = new Intl.NumberFormat("en-PK", {
  maximumFractionDigits: 0
});

function formatPkr(value: number) {
  return `PKR ${currency.format(Math.max(0, Math.round(value)))}`;
}

function calculateSalaryTax(annualSalary: number) {
  if (annualSalary <= 600000) return 0;
  if (annualSalary <= 1200000) return (annualSalary - 600000) * 0.01;
  if (annualSalary <= 2200000) return 6000 + (annualSalary - 1200000) * 0.11;
  if (annualSalary <= 3200000) return 116000 + (annualSalary - 2200000) * 0.23;
  if (annualSalary <= 4100000) return 346000 + (annualSalary - 3200000) * 0.3;
  return 616000 + (annualSalary - 4100000) * 0.35;
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="rounded-xl border border-emerald-950/10 bg-white p-5 shadow-card"
    >
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-ink">{value}</p>
    </motion.div>
  );
}

export function SalaryTaxCalculatorSection() {
  const [salaryInput, setSalaryInput] = useState("150000");

  const monthlySalary = salaryInput === "" ? 0 : Number(salaryInput);
  const isInvalid = salaryInput.trim() === "" || Number.isNaN(monthlySalary) || monthlySalary <= 0;

  const results = useMemo(() => {
    const annualSalary = monthlySalary * 12;
    const annualTax = calculateSalaryTax(annualSalary);
    return {
      annualSalary,
      annualTax,
      monthlyTax: annualTax / 12,
      netAnnualIncome: annualSalary - annualTax,
      netMonthlyIncome: monthlySalary - annualTax / 12,
      effectiveTaxRate: annualSalary > 0 ? (annualTax / annualSalary) * 100 : 0
    };
  }, [monthlySalary]);

  return (
    <section className="container-px bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-emerald-950/10 bg-brand-soft shadow-premium">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-mint px-4 py-2 text-sm font-black text-brand-dark">
              <Calculator size={18} className="text-brand-green" />
              Salary tax estimate
            </div>
            <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              Pakistan Income Tax Calculator 2025-2026
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Enter your monthly salary to estimate your annual tax, monthly tax, and net income.
            </p>

            <label className="mt-8 grid gap-3 text-sm font-black text-slate-700">
              Monthly Salary (PKR)
              <span className="flex min-h-16 items-center gap-4 rounded-xl border border-emerald-950/10 bg-brand-soft px-5 shadow-inner transition focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green/10">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-brand-green shadow-sm">
                  <Calculator size={22} />
                </span>
                <input
                  value={salaryInput}
                  inputMode="numeric"
                  onFocus={(event) => event.currentTarget.select()}
                  onChange={(event) => {
                    const digitsOnly = event.target.value.replace(/\D/g, "");
                    const cleaned = digitsOnly.replace(/^0+(?=\d)/, "");
                    setSalaryInput(cleaned);
                  }}
                  placeholder="Enter monthly salary"
                  className="w-full bg-transparent py-4 text-2xl font-black text-ink outline-none placeholder:text-slate-400"
                />
              </span>
            </label>

            <AnimatePresence>
              {isInvalid ? (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-700"
                >
                  Please enter a valid monthly salary greater than zero.
                </motion.p>
              ) : null}
            </AnimatePresence>

            <div className="mt-7 rounded-xl border border-brand-green/15 bg-brand-mint p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-brand-green" />
                <p className="text-sm leading-6 text-slate-700">
                  This calculator provides an estimate based on Pakistan Tax Year 2025-2026 salary tax rates.
                  Final tax may vary depending on individual circumstances and FBR regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {!isInvalid ? (
                <motion.div
                  key={salaryInput}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <ResultCard label="Annual Salary" value={formatPkr(results.annualSalary)} />
                  <ResultCard label="Estimated Annual Tax" value={formatPkr(results.annualTax)} />
                  <ResultCard label="Estimated Monthly Tax" value={formatPkr(results.monthlyTax)} />
                  <ResultCard label="Net Annual Income" value={formatPkr(results.netAnnualIncome)} />
                  <ResultCard label="Net Monthly Income" value={formatPkr(results.netMonthlyIncome)} />
                  <ResultCard label="Effective Tax Rate" value={`${results.effectiveTaxRate.toFixed(2)}%`} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[320px] items-center justify-center rounded-xl border border-dashed border-emerald-950/15 bg-white/70 p-8 text-center"
                >
                  <div>
                    <Calculator size={42} className="mx-auto text-brand-green" />
                    <p className="mt-4 text-lg font-black text-ink">Enter your salary to see results</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Results will appear instantly with PKR formatting and estimated monthly tax.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-5 rounded-xl bg-brand-dark p-6 text-white shadow-soft">
              <p className="text-2xl font-black">Need help filing your taxes?</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Get NTN Registration and Tax Filing assistance from Asaan Filer for Rs. 1,000 total.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#apply" variant="white" className="gap-2">
                  Apply Now for Rs. 1,000
                  <ArrowRight size={18} />
                </ButtonLink>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-brand-dark"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
