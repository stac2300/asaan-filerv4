"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="apply"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-card sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Full Name
          <input
            required
            className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone Number
          <input
            required
            className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal"
            placeholder="+92..."
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Email Address
          <input
            type="email"
            className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Occupation
          <input
            className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal"
            placeholder="Salaried, freelancer, business owner"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea
          rows={5}
          className="focus-ring rounded-md border border-slate-200 px-4 py-3 font-normal"
          placeholder="Tell us what you need help with"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-dark"
      >
        <Send size={18} />
        Submit Request
      </button>
      {sent ? (
        <p className="mt-4 rounded-md bg-brand-mint px-4 py-3 text-sm font-semibold text-brand-dark">
          Thanks. Your request has been noted. For fastest support, message us on WhatsApp too.
        </p>
      ) : null}
    </form>
  );
}
