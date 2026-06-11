"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calculator, Car, CheckCircle2, Home, Landmark, UserCheck, type LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/button";

const tabs = [
  { id: "income", label: "Income Tax Calculator", icon: Calculator },
  { id: "savings", label: "Filer Savings Calculator", icon: Landmark },
  { id: "eligibility", label: "NTN Eligibility Checker", icon: UserCheck }
] as const;

type TabId = (typeof tabs)[number]["id"];

const currency = new Intl.NumberFormat("en-PK", {
  maximumFractionDigits: 0
});

function formatRs(value: number) {
  return `Rs. ${currency.format(Math.max(0, Math.round(value)))}`;
}

function calculateSalaryTax(annualSalary: number) {
  if (annualSalary <= 600000) return 0;
  if (annualSalary <= 1200000) return (annualSalary - 600000) * 0.01;
  if (annualSalary <= 2200000) return 6000 + (annualSalary - 1200000) * 0.11;
  if (annualSalary <= 3200000) return 116000 + (annualSalary - 2200000) * 0.23;
  if (annualSalary <= 4100000) return 346000 + (annualSalary - 3200000) * 0.30;
  return 616000 + (annualSalary - 4100000) * 0.35;
}

function NumberField({
  label,
  value,
  onChange,
  icon: Icon
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  icon?: LucideIcon;
}) {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <span className="flex min-h-12 items-center gap-3 rounded-md border border-emerald-950/10 bg-white px-4 shadow-sm transition focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green/10">
        {Icon ? <Icon size={18} className="text-brand-green" /> : null}
        <input
          type="number"
          min="0"
          value={inputValue}
          onChange={(event) => {
            const cleaned = event.target.value.replace(/^0+(?=\d)/, "");
            setInputValue(cleaned);
            onChange(cleaned === "" ? 0 : Number(cleaned));
          }}
          onFocus={(event) => event.currentTarget.select()}
          onBlur={() => {
            if (inputValue === "") {
              setInputValue("0");
            }
          }}
          className="w-full bg-transparent py-3 text-base font-semibold text-ink outline-none"
        />
      </span>
    </label>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-emerald-950/10 bg-brand-soft p-4">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-black text-ink">{value}</p>
    </div>
  );
}

function IncomeTaxCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(150000);
  const results = useMemo(() => {
    const annualSalary = monthlySalary * 12;
    const annualTax = calculateSalaryTax(annualSalary);
    return {
      annualSalary,
      annualTax,
      monthlyTax: annualTax / 12,
      netAnnual: annualSalary - annualTax,
      netMonthly: monthlySalary - annualTax / 12,
      effectiveRate: annualSalary > 0 ? (annualTax / annualSalary) * 100 : 0
    };
  }, [monthlySalary]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-card">
        <h3 className="text-2xl font-black text-ink">Pakistan Income Tax Calculator 2025-2026</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Enter your monthly salary to estimate annual tax, monthly tax, and net income for a salaried person.
        </p>
        <div className="mt-6 grid gap-4">
          <NumberField label="Monthly Salary" value={monthlySalary} onChange={setMonthlySalary} icon={Calculator} />
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Tax Year
            <input value="2025-2026" readOnly className="min-h-12 rounded-md border border-emerald-950/10 bg-brand-soft px-4 font-semibold text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Income Type
            <input value="Salaried Person" readOnly className="min-h-12 rounded-md border border-emerald-950/10 bg-brand-soft px-4 font-semibold text-ink" />
          </label>
        </div>
      </div>

      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-premium">
        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard label="Annual Salary" value={formatRs(results.annualSalary)} />
          <ResultCard label="Annual Tax" value={formatRs(results.annualTax)} />
          <ResultCard label="Monthly Tax" value={formatRs(results.monthlyTax)} />
          <ResultCard label="Net Annual Income" value={formatRs(results.netAnnual)} />
          <ResultCard label="Net Monthly Income" value={formatRs(results.netMonthly)} />
          <ResultCard label="Effective Tax Rate" value={`${results.effectiveRate.toFixed(2)}%`} />
        </div>
        <div className="mt-5 rounded-lg bg-brand-dark p-5 text-white">
          <p className="text-lg font-black">Need Help Filing Your Taxes?</p>
          <p className="mt-2 text-sm leading-6 text-white/75">Get NTN Registration and Tax Filing assistance for only Rs. 1,000.</p>
          <ButtonLink href="/contact#apply" variant="white" className="mt-4">
            Apply Now
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function SavingsCalculator() {
  const [vehicle, setVehicle] = useState(5000000);
  const [property, setProperty] = useState(15000000);
  const [banking, setBanking] = useState(2000000);
  const [calculated, setCalculated] = useState(true);

  const results = useMemo(() => {
    const filerTaxes = vehicle * 0.01 + property * 0.02 + banking * 0.001;
    const nonFilerTaxes = vehicle * 0.03 + property * 0.04 + banking * 0.004;
    return {
      filerTaxes,
      nonFilerTaxes,
      savings: nonFilerTaxes - filerTaxes
    };
  }, [vehicle, property, banking]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-card">
        <h3 className="text-2xl font-black text-ink">How Much Can You Save as a Filer?</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Estimate the potential difference between filer and non-filer withholding on common transactions.
        </p>
        <div className="mt-6 grid gap-4">
          <NumberField label="Vehicle Value" value={vehicle} onChange={setVehicle} icon={Car} />
          <NumberField label="Property Value" value={property} onChange={setProperty} icon={Home} />
          <NumberField label="Banking Transactions" value={banking} onChange={setBanking} icon={Landmark} />
          <button
            type="button"
            onClick={() => setCalculated(true)}
            className="focus-ring min-h-12 rounded-md bg-brand-green px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-premium">
        {calculated ? (
          <div className="grid gap-4">
            <ResultCard label="Estimated Filer Taxes" value={formatRs(results.filerTaxes)} />
            <ResultCard label="Estimated Non-Filer Taxes" value={formatRs(results.nonFilerTaxes)} />
            <div className="rounded-lg bg-brand-green p-6 text-white shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">Potential Savings</p>
              <p className="mt-2 text-4xl font-black">{formatRs(results.savings)}</p>
            </div>
            <div className="rounded-lg border border-brand-green/15 bg-brand-soft p-5">
              <p className="font-black text-ink">Become a filer today for only Rs. 1,000.</p>
              <ButtonLink href="/contact#apply" className="mt-4">
                Apply Now
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function EligibilityChecker() {
  const [answers, setAnswers] = useState({
    employed: true,
    freelancer: false,
    business: false,
    bank: true
  });
  const positiveCount = Object.values(answers).filter(Boolean).length;
  const result = positiveCount >= 2 || answers.freelancer || answers.business ? "Tax Filing Recommended" : "NTN Registration Recommended";

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-card">
        <h3 className="text-2xl font-black text-ink">NTN Eligibility Checker</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Answer a few simple questions to see whether NTN registration or full filing support is recommended.
        </p>
        <div className="mt-6 grid gap-3">
          {[
            ["employed", "Are you employed?"],
            ["freelancer", "Are you a freelancer?"],
            ["business", "Do you own a business?"],
            ["bank", "Do you have a bank account?"]
          ].map(([key, label]) => (
            <label
              key={key}
              className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-emerald-950/10 bg-brand-soft p-4 font-bold text-slate-700"
            >
              {label}
              <input
                type="checkbox"
                checked={answers[key as keyof typeof answers]}
                onChange={(event) =>
                  setAnswers((current) => ({
                    ...current,
                    [key]: event.target.checked
                  }))
                }
                className="h-5 w-5 accent-brand-green"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-premium">
        <div className="rounded-lg bg-brand-dark p-7 text-white">
          <CheckCircle2 size={34} />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/70">Result</p>
          <p className="mt-2 text-3xl font-black">{result}</p>
          <p className="mt-3 text-sm leading-6 text-white/75">
            Asaan Filer can help with NTN Registration Pakistan and Income Tax Return Filing for Rs. 1,000 total.
          </p>
          <ButtonLink href="/contact#apply" variant="white" className="mt-5">
            Apply Now
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("income");

  return (
    <div className="rounded-xl border border-emerald-950/10 bg-white/80 p-3 shadow-premium backdrop-blur">
      <div className="grid gap-2 rounded-lg bg-brand-soft p-2 lg:grid-cols-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`focus-ring flex min-h-12 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-black transition ${
              activeTab === tab.id
                ? "bg-white text-brand-dark shadow-card"
                : "text-slate-600 hover:bg-white/70 hover:text-brand-dark"
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-3 sm:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {activeTab === "income" ? <IncomeTaxCalculator /> : null}
            {activeTab === "savings" ? <SavingsCalculator /> : null}
            {activeTab === "eligibility" ? <EligibilityChecker /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
