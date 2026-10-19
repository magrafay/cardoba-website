import Link from "next/link";
import CTA from "@/components/CTA";
import Icon, { type AnyIcon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { photos, services, unsplash } from "@/data/services";

// Bento layout: 4 columns on large screens, 2 on tablets. Spans add up to full rows with no gaps.
const spans = [
  "md:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
  "",
  "md:col-span-2 lg:col-span-1",
];

const stats = [
  ["10+", "Service lines"],
  ["1", "Point of contact"],
  ["100%", "Tailored solutions"],
];

const values: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "check", title: "Reliable", text: "Dependable service you can count on, every step of the way." },
  { icon: "clock", title: "Efficient", text: "Streamlined processes that save you time and effort." },
  { icon: "shield", title: "Transparent", text: "Clear communication and honest advice, with no surprises." },
  { icon: "chart", title: "Quality-driven", text: "Customized solutions that create lasting value." },
];

export default function Home() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div className="glow -left-40 -top-40 h-[520px] w-[520px] bg-[#7c9cff] opacity-40" />
        <div className="glow -right-32 top-20 h-[460px] w-[460px] bg-gold-300 opacity-50" />
        <div className="glow -bottom-52 left-1/3 h-[420px] w-[420px] bg-[#b9a5ff] opacity-40" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> 10 services · one trusted partner
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-5xl font-bold leading-[1.04] tracking-[-0.035em] text-ink md:text-7xl lg:text-[68px]">
                Run your business. <span className="text-gradient">We handle the rest.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed lg:mx-0">
                Consultancy, real estate, technology, facilities and events, delivered with professionalism,
                transparency and quality for businesses, investors and individuals.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/services/"
                className="rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(79,107,255,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Explore services →
              </Link>
              <Link
                href="/contact/"
                className="glass rounded-full px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
              >
                Talk to an expert
              </Link>
            </Reveal>
            <Reveal
              delay={320}
              className="glass mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-slate-200 rounded-2xl py-5 lg:mx-0"
            >
              {stats.map(([n, l]) => (
                <div key={l} className="px-2 text-center">
                  <p className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{n}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Photo collage */}
          <Reveal delay={200} className="relative mx-auto h-[440px] w-full max-w-lg sm:h-[520px]">
            <div className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[2rem] bg-brand-50 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
              <img src={unsplash(photos.team, 900)} alt="Team collaborating in an open office" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 h-[52%] w-[54%] overflow-hidden rounded-[2rem] border-[6px] border-canvas bg-brand-50 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
              <img src={unsplash(photos.city, 700)} alt="Modern city office towers" className="h-full w-full object-cover" />
            </div>
            <div className="glass absolute left-2 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg sm:left-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-glow text-white">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Trusted partner</p>
                <p className="text-xs text-slate-500">Businesses · Investors · Individuals</p>
              </div>
            </div>
            <div className="glass absolute bottom-8 right-2 rounded-2xl px-4 py-3 shadow-lg sm:right-0">
              <p className="text-2xl font-bold text-ink">10+</p>
              <p className="text-xs text-slate-500">Professional services</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-500">What we do</p>
            <h2 className="mt-2 max-w-xl text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
              Everything your business needs, under one roof.
            </h2>
          </div>
          <p className="max-w-sm">Pick one service or combine several. We tailor every engagement to your goals.</p>
        </Reveal>
        <div className="mt-12 grid grid-flow-dense gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70} className={spans[i]}>
              <ServiceCard service={s} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand-500">Why choose us</p>
          <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">Built on trust and results</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 70}
              className="rounded-3xl border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-glow text-white">
                <Icon name={v.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
