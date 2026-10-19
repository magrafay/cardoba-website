"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const inputClass =
  "mt-1.5 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15";

// The site is static, so the form opens the visitor's email app with the message filled in.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const service = data.get("service") || "General enquiry";
    const subject = `Website enquiry: ${service}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Service: ${service}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-10"
    >
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Send us a message</h2>
      <p className="mt-1 text-sm">We usually reply within one business day.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Full name
          <input name="name" required placeholder="Jane Smith" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone
          <input name="phone" type="tel" placeholder="Optional" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Service
          <select name="service" className={inputClass} defaultValue="">
            <option value="">General enquiry</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea name="message" rows={5} required placeholder="Tell us a little about what you need" className={inputClass} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(79,107,255,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
      >
        Send message →
      </button>
      {sent && (
        <p className="mt-4 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-slate-700">
          Your email app should open with the message ready to send. If it doesn&apos;t, email us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-500">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
