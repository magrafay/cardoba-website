"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const inputClass =
  "mt-1 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30";

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
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-navy-900">Send us a message</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-900">
          Full name
          <input name="name" required className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Email
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Phone
          <input name="phone" type="tel" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
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
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          Message
          <textarea name="message" rows={5} required className={inputClass} />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700 sm:w-auto"
      >
        Send Message
      </button>
      {sent && (
        <p className="mt-4 text-sm text-slate-600">
          Your email app should open with the message ready to send. If it doesn&apos;t, email us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-gold-500">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
