import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { intro, services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Solutions for every stage of your business" text={intro} />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid gap-6 rounded-xl border border-slate-200 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Icon name={s.icon} className="h-8 w-8" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{s.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 md:min-w-56">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTA title="Need one of these services?" text="Contact us to discuss your requirements and get a customized proposal." />
    </>
  );
}
