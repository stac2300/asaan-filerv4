import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contact, contactMethods } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Asaan Filer for NTN Registration and Tax Filing assistance in Pakistan."
};

export default function ContactPage() {
  return (
    <>
      <section className="container-px bg-brand-soft py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
            Contact
          </p>
          <h1 className="text-4xl font-black text-ink sm:text-5xl">Apply or Ask a Question</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Send your details, message us on WhatsApp, or contact our team for NTN Registration and Tax Filing assistance.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-dark"
          >
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </div>
      </section>

      <section className="container-px bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="grid content-start gap-4">
            {contactMethods.map((item) => (
              <div key={item.title} className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-card">
                <item.icon className="mb-4 text-brand-green" size={24} />
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">{item.title}</p>
                <p className="mt-2 font-black text-ink">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
