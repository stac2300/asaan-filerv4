"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/button";
import { navItems } from "@/components/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/90 backdrop-blur">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-green text-lg font-black text-white">
            AF
          </span>
          <span>
            <span className="block text-lg font-black text-brand-dark">Asaan Filer</span>
            <span className="block text-xs font-semibold text-slate-500">Simple tax filing</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold transition ${
                pathname === item.href
                  ? "bg-brand-mint text-brand-dark"
                  : "text-slate-600 hover:bg-brand-soft hover:text-brand-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="secondary">
            Contact Us
          </ButtonLink>
          <ButtonLink href="/contact#apply">Apply Now</ButtonLink>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-emerald-900/10 text-brand-dark lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="container-px border-t border-emerald-900/10 bg-white pb-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-4 py-3 text-sm font-bold text-slate-700 hover:bg-brand-mint"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact#apply" onClick={() => setOpen(false)} className="mt-2">
              Apply Now
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
