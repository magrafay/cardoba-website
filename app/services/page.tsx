import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { intro, services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Solutions for every stage of" highlight="your business." text={intro} />

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={60}>
              <article
                id={s.slug}
                className="group grid scroll-mt-28 gap-6 rounded-3xl border border-slate-200/70 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-violet-glow group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-slate-400 md:hidden">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="hidden text-sm font-semibold text-slate-400 md:block">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.02em] text-ink">{s.title}</h2>
                  <p className="mt-2 max-w-xl leading-relaxed">{s.summary}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-slate-200 bg-canvas px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title="Need one of these services?" text="Contact us to discuss your requirements and get a customized proposal." />
    </>
  );
}
