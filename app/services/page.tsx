import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { intro, services, unsplash } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Solutions for every stage of" highlight="your business." text={intro} />

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-8 md:gap-10">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="group grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-4 transition hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:grid-cols-2 md:gap-10 md:p-5"
              >
                <div className={`relative h-64 overflow-hidden rounded-3xl bg-brand-50 md:h-[340px] ${i % 2 ? "md:order-2" : ""}`}>
                  <img
                    src={unsplash(s.image, 1000)}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>
                <div className={`px-2 pb-4 md:px-6 md:pb-0 ${i % 2 ? "md:order-1" : ""}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-glow text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed">{s.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 transition hover:gap-2"
                  >
                    Enquire about this service →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title="Need one of these services?" text="Contact us to discuss your requirements and get a customized proposal." />
    </>
  );
}
