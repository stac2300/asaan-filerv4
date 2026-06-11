import {
  Banknote,
  Building2,
  Calculator,
  Car,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Home,
  Landmark,
  ReceiptText,
  ShieldCheck,
  UserCheck,
  WalletCards,
  type LucideIcon
} from "lucide-react";
import type { BlogArticle } from "@/components/blog-data";

const thumbnailThemes: Record<
  string,
  {
    kicker: string;
    icons: [LucideIcon, LucideIcon, LucideIcon];
    pattern: "grid" | "rings" | "dots" | "waves";
    accent: string;
  }
> = {
  "how-to-become-tax-filer-pakistan-2026": {
    kicker: "Complete Guide",
    icons: [UserCheck, FileCheck2, ShieldCheck],
    pattern: "grid",
    accent: "#9AF0C1"
  },
  "step-by-step-ntn-registration-process-pakistan": {
    kicker: "NTN Registration",
    icons: [FileText, CheckCircle2, UserCheck],
    pattern: "rings",
    accent: "#B7F7D0"
  },
  "what-is-ntn-number-pakistan": {
    kicker: "National Tax Number",
    icons: [ReceiptText, ShieldCheck, FileText],
    pattern: "dots",
    accent: "#A7F3D0"
  },
  "difference-between-filer-and-non-filer-pakistan": {
    kicker: "Filer vs Non-Filer",
    icons: [CheckCircle2, CircleDollarSign, FileCheck2],
    pattern: "waves",
    accent: "#BBF7D0"
  },
  "benefits-of-becoming-tax-filer-pakistan": {
    kicker: "Filer Benefits",
    icons: [Banknote, ShieldCheck, Landmark],
    pattern: "grid",
    accent: "#86EFAC"
  },
  "how-to-file-income-tax-return-pakistan": {
    kicker: "Tax Filing",
    icons: [FileCheck2, ReceiptText, Calculator],
    pattern: "rings",
    accent: "#A7F3D0"
  },
  "pakistan-income-tax-slabs-2025-2026-explained": {
    kicker: "2025-2026 Slabs",
    icons: [Calculator, ReceiptText, Banknote],
    pattern: "dots",
    accent: "#C7F9D4"
  },
  "income-tax-calculator-pakistan-how-tax-calculated": {
    kicker: "Tax Calculator",
    icons: [Calculator, CircleDollarSign, WalletCards],
    pattern: "waves",
    accent: "#9AF0C1"
  },
  "common-tax-filing-mistakes-pakistan": {
    kicker: "Avoid Errors",
    icons: [ShieldCheck, FileText, CheckCircle2],
    pattern: "grid",
    accent: "#BBF7D0"
  },
  "tax-filing-checklist-salaried-individuals": {
    kicker: "Salary Checklist",
    icons: [ReceiptText, FileCheck2, Banknote],
    pattern: "rings",
    accent: "#A7F3D0"
  },
  "how-freelancers-register-ntn-pakistan": {
    kicker: "Freelancer NTN",
    icons: [UserCheck, FileText, Landmark],
    pattern: "dots",
    accent: "#B7F7D0"
  },
  "tax-filing-guide-freelancers-pakistan": {
    kicker: "Freelancer Tax",
    icons: [FileCheck2, Calculator, WalletCards],
    pattern: "waves",
    accent: "#86EFAC"
  },
  "do-freelancers-need-pay-income-tax-pakistan": {
    kicker: "Freelance Income",
    icons: [CircleDollarSign, Landmark, ReceiptText],
    pattern: "grid",
    accent: "#A7F3D0"
  },
  "tax-filing-small-business-owners-pakistan": {
    kicker: "Business Filing",
    icons: [Building2, FileText, Banknote],
    pattern: "rings",
    accent: "#9AF0C1"
  },
  "how-much-save-becoming-filer-pakistan": {
    kicker: "Filer Savings",
    icons: [Car, Home, Landmark],
    pattern: "dots",
    accent: "#C7F9D4"
  }
};

function Pattern({ type, id }: { type: "grid" | "rings" | "dots" | "waves"; id: string }) {
  if (type === "rings") {
    return (
      <>
        <circle cx="324" cy="24" r="96" fill={`url(#${id}-soft)`} opacity="0.35" />
        <circle cx="315" cy="50" r="55" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
        <circle cx="38" cy="184" r="70" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      </>
    );
  }

  if (type === "dots") {
    return (
      <g opacity="0.22">
        {Array.from({ length: 9 }).map((_, x) =>
          Array.from({ length: 5 }).map((__, y) => (
            <circle key={`${x}-${y}`} cx={225 + x * 18} cy={28 + y * 18} r="2.4" fill="white" />
          ))
        )}
      </g>
    );
  }

  if (type === "waves") {
    return (
      <path
        d="M-20 156 C70 104 124 210 218 154 C302 104 336 134 420 86"
        fill="none"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="18"
        strokeLinecap="round"
      />
    );
  }

  return (
    <g opacity="0.13">
      {Array.from({ length: 9 }).map((_, index) => (
        <path key={index} d={`M${index * 48} 0 V240`} stroke="white" />
      ))}
      {Array.from({ length: 6 }).map((_, index) => (
        <path key={index} d={`M0 ${index * 48} H420`} stroke="white" />
      ))}
    </g>
  );
}

export function BlogThumbnail({ article, large = false }: { article: BlogArticle; large?: boolean }) {
  const theme = thumbnailThemes[article.slug] ?? thumbnailThemes["how-to-become-tax-filer-pakistan-2026"];
  const [PrimaryIcon, SecondaryIcon, TertiaryIcon] = theme.icons;
  const gradientId = `thumb-${article.slug}`;
  const title = article.title;

  return (
    <div className={`relative overflow-hidden rounded-lg bg-brand-dark ${large ? "aspect-[4/3]" : "h-44"}`}>
      <svg viewBox="0 0 420 240" role="img" aria-label={`${article.title} thumbnail`} className="h-full w-full">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#066A39" />
            <stop offset="52%" stopColor="#0A8F4D" />
            <stop offset="100%" stopColor="#043A24" />
          </linearGradient>
          <radialGradient id={`${gradientId}-soft`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={theme.accent} />
            <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
          </radialGradient>
          <filter id={`${gradientId}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#043A24" floodOpacity="0.28" />
          </filter>
        </defs>

        <rect width="420" height="240" fill={`url(#${gradientId})`} />
        <Pattern type={theme.pattern} id={gradientId} />
        <circle cx="354" cy="188" r="94" fill={`url(#${gradientId}-soft)`} opacity="0.45" />

        <rect x="24" y="24" width="96" height="30" rx="15" fill="white" fillOpacity="0.16" />
        <text x="72" y="43" fill="white" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="1.5">
          ASAAN FILER
        </text>

        <foreignObject x="26" y="66" width="238" height="112">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "white", fontFamily: "Inter, Arial, sans-serif" }}>
            <div style={{ fontSize: large ? 12 : 11, fontWeight: 900, letterSpacing: 1.4, opacity: 0.78, textTransform: "uppercase" }}>
              {theme.kicker}
            </div>
            <div style={{ marginTop: 7, fontSize: large ? 23 : 20, lineHeight: 1.08, fontWeight: 900, letterSpacing: 0, maxHeight: 92, overflow: "hidden" }}>
              {title}
            </div>
          </div>
        </foreignObject>

        <g filter={`url(#${gradientId}-shadow)`}>
          <rect x="278" y="58" width="92" height="92" rx="20" fill="white" fillOpacity="0.96" />
          <foreignObject x="298" y="78" width="52" height="52">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "#0A8F4D" }}>
              <PrimaryIcon size={52} strokeWidth={1.8} />
            </div>
          </foreignObject>
          <rect x="238" y="148" width="58" height="58" rx="16" fill="white" fillOpacity="0.18" />
          <foreignObject x="253" y="163" width="28" height="28">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "white" }}>
              <SecondaryIcon size={28} strokeWidth={2} />
            </div>
          </foreignObject>
          <rect x="318" y="164" width="54" height="54" rx="15" fill="white" fillOpacity="0.18" />
          <foreignObject x="332" y="178" width="26" height="26">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "white" }}>
              <TertiaryIcon size={26} strokeWidth={2} />
            </div>
          </foreignObject>
        </g>

        <rect x="26" y="184" width="168" height="34" rx="17" fill="white" fillOpacity="0.14" />
        <text x="44" y="206" fill="white" fontSize="13" fontWeight="800">
          NTN + Tax Filing
        </text>
        <circle cx="178" cy="201" r="6" fill={theme.accent} />
      </svg>
    </div>
  );
}
