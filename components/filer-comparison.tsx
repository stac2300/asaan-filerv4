import {
  Banknote,
  Building2,
  Car,
  CheckCircle2,
  Home,
  Landmark,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  XCircle
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { contact } from "@/components/site-data";

const comparisons = [
  {
    transaction: "Property Purchase",
    filer: "Lower advance tax",
    nonFiler: "Higher advance tax",
    icon: Home
  },
  {
    transaction: "Vehicle Registration",
    filer: "Normal token tax",
    nonFiler: "Higher token tax",
    icon: Car
  },
  {
    transaction: "Banking Transactions",
    filer: "Reduced withholding impact",
    nonFiler: "Higher withholding deductions",
    icon: Landmark
  },
  {
    transaction: "Profit and Investments",
    filer: "Better tax treatment",
    nonFiler: "Higher deduction risk",
    icon: Banknote
  }
];

const affectedGroups = [
  { label: "Salaried People", icon: UserCheck },
  { label: "Freelancers", icon: ShieldCheck },
  { label: "Property Buyers", icon: Home },
  { label: "Vehicle Buyers", icon: Car },
  { label: "Business Owners", icon: Building2 }
];

export function FilerComparisonSection() {
  return (
    <section className="container-px bg-brand-soft py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-brand-green">
              Filer vs Non-Filer
            </p>
            <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-5xl">
              Why becoming a filer can save you money
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              In Pakistan, a filer is generally a person whose name appears on the FBR Active
              Taxpayer List after filing an income tax return. Non-filers can face higher
              withholding taxes and more friction on major financial transactions.
            </p>

            <div className="mt-6 rounded-xl border border-brand-green/15 bg-white p-5 shadow-card">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-brand-green" size={24} />
                <div>
                  <h3 className="text-lg font-black text-ink">ATL status matters</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    After your return is filed, your filer status should be checked on the FBR
                    Active Taxpayer List. Status updates may take time, so it is better to file
                    before a major transaction becomes urgent.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {affectedGroups.map((group) => (
                <span
                  key={group.label}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-950/10 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm"
                >
                  <group.icon size={15} className="text-brand-green" />
                  {group.label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-premium">
            <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] bg-brand-dark px-4 py-4 text-sm font-black text-white sm:px-5">
              <div>Transaction</div>
              <div>Filer</div>
              <div>Non-Filer</div>
            </div>

            <div className="divide-y divide-emerald-950/10">
              {comparisons.map((item) => (
                <div
                  key={item.transaction}
                  className="grid grid-cols-1 gap-3 px-4 py-5 sm:grid-cols-[1.1fr_0.95fr_0.95fr] sm:px-5"
                >
                  <div className="flex items-center gap-3 font-black text-ink">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-mint text-brand-green">
                      <item.icon size={20} />
                    </span>
                    {item.transaction}
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-brand-mint px-3 py-2 text-sm font-bold text-brand-dark sm:bg-transparent sm:px-0">
                    <CheckCircle2 size={18} className="text-brand-green" />
                    {item.filer}
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-red-700 sm:bg-transparent sm:px-0">
                    <XCircle size={18} />
                    {item.nonFiler}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-emerald-950/10 bg-brand-soft p-5">
              <h3 className="text-2xl font-black text-ink">Become a filer today for Rs. 1,000</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Asaan Filer helps with NTN Registration and Tax Filing assistance in one simple
                package.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#apply">Apply Now</ButtonLink>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand-green/25 bg-white px-5 py-3 text-sm font-black text-brand-dark shadow-card transition hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-mint"
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
