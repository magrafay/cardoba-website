import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Icon, { type AnyIcon } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { photos, unsplash } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

const values: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "check", title: "Professionalism", text: "We bring expertise, care and accountability to every engagement." },
  { icon: "shield", title: "Transparency", text: "Honest advice and clear communication at every stage." },
  { icon: "chart", title: "Quality", text: "High standards in everything we deliver, big or small." },
  { icon: "briefcase", title: "Customization", text: "Solutions shaped around your goals, not a one-size-fits-all template." },
];

const audiences: { icon: AnyIcon; title: string; text: string }[] = [
  {
    icon: "briefcase",
    title: "Businesses",
    text: "From start-ups to established companies, we help simplify operations, manage risk and support growth.",
  },
  {
    icon: "building",
    title: "Investors",
    text: "We provide real estate insight, local representation and risk advice to help protect and grow your investments.",
  },
  {
    icon: "document",
    title: "Individuals",
    text: "We take care of documentation, property matters and events so you can focus on what matters most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="One partner for"
        highlight="every business need."
        text={`${site.name} is a professional services company supporting businesses, investors, and individuals with reliable, efficient, and customized solutions.`}
      />

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <Reveal className="relative h-64 overflow-hidden rounded-[2rem] bg-brand-50 md:h-[420px]">
          <img src={unsplash(photos.city, 1600)} alt="Modern city office towers" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="glass absolute bottom-5 left-5 right-5 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl py-4 md:left-auto md:right-8 md:bottom-8 md:w-[420px]">
            {[
              ["10+", "Services"],
              ["3", "Client groups"],
              ["1", "Partner"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold text-ink">{n}</p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white">
          <div className="h-56 overflow-hidden bg-brand-50">
            <img src={unsplash(photos.meeting, 1200)} alt="Team meeting around a whiteboard" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-sm font-semibold text-brand-500">Our story</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-ink">Expertise under one roof</h2>
            <p className="mt-4 leading-relaxed">
              We bring together expertise across consultancy, real estate, technology, facilities and events under one
              roof. Instead of juggling multiple providers, our clients work with a single trusted partner who
              understands their needs and delivers end to end.
            </p>
            <p className="mt-4 leading-relaxed">
              Our services range from e-commerce and IT consultancy to risk management, document preparation and event
              organizing. Whatever the task, our focus stays the same: simplify business operations, support growth,
              manage risks, and create value.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={80} className="relative overflow-hidden rounded-3xl bg-ink p-8 text-slate-300">
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-brand-500 opacity-40 blur-3xl" />
            <h3 className="relative text-xl font-semibold text-white">Our Mission</h3>
            <p className="relative mt-3 text-sm leading-relaxed">
              To provide reliable, efficient, and customized solutions that simplify business operations, support
              growth, manage risks, and create value for our clients.
            </p>
          </Reveal>
          <Reveal
            delay={160}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff4dc] to-[#eef1ff] p-8"
          >
            <h3 className="text-xl font-semibold text-ink">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              To be the trusted partner of choice for businesses, investors, and individuals seeking professional
              services delivered with transparency and quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand-500">Our values</p>
          <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-ink">What we stand for</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 70}
              className="rounded-3xl border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <Icon name={v.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand-500">Who we serve</p>
          <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-ink">Built for every kind of client</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} className="glass rounded-3xl p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-glow text-white">
                <Icon name={a.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 leading-relaxed">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA title="Let's work together." />
    </>
  );
}
