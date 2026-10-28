"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

const inputClass =
  "mt-1.5 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

// The site is static, so enquiries are emailed to the client through Web3Forms.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    const service = String(data.get("service") || "General enquiry");
    const name = String(data.get("name"));
    const email = String(data.get("email"));

    setStatus("sending");
    try {
      if (!accessKey) throw new Error("Missing Web3Forms access key");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New website enquiry: ${service}`,
          from_name: `${site.name} Website`,
          replyto: email,
          Name: name,
          Email: email,
          Phone: String(data.get("phone") || "-"),
          Service: service,
          Message: String(data.get("message")),
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-10"
    >
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Send us a message</h2>
      <p className="mt-1 text-sm">We usually reply within one business day.</p>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
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
        disabled={status === "sending"}
        className="mt-8 w-full rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(79,107,255,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "sent" && (
        <p role="status" className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thank you, your message has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">
          Sorry, your message couldn&apos;t be sent. Please email us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium underline">
            {site.email}
          </a>{" "}
          or call{" "}
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium underline">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
