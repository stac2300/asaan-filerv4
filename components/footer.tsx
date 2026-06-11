import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { contact, navItems } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-[#053821] text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-lg font-black text-brand-green">
              AF
            </span>
            <div>
              <p className="text-lg font-black">Asaan Filer</p>
              <p className="text-sm text-white/70">Making Tax Filing Simple for Every Pakistani</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Asaan Filer is a professional NTN Registration and Tax Filing Pakistan service built to help individuals become filers with clear pricing, secure document handling, and WhatsApp support.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/60">Pages</h3>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/60">Services</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <p>NTN Registration</p>
            <p>Tax Filing</p>
            <p>Income Tax Return Filing</p>
            <p>Document Guidance</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/60">Contact</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <MessageCircle size={16} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            <p className="leading-6">{contact.address}</p>
          </div>
          <ButtonLink href="/contact#apply" variant="white" className="mt-5">
            Apply Now
          </ButtonLink>
        </div>
      </div>
      <div className="container-px border-t border-white/10 py-5">
        <p className="mx-auto max-w-7xl text-xs text-white/55">
          Copyright 2026 Asaan Filer. Professional tax assistance website.
        </p>
      </div>
    </footer>
  );
}
