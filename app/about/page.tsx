import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Icon, { type AnyIcon } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

const values: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "check", title: "Professionalism", text: "We bring expertise, care and accountability to every engagement." },
  { icon: "shield", title: "Transparency", text: "Honest advice and clear communication at every stage." },
  { icon: "chart", title: "Quality", text: "High standards in everything we deliver, big or small." },
  { icon: "briefcase", title: "Customization", text: "Solutions shaped around your goals, not a one-size-fits-all template." },
];

const audiences = [
  {
    title: "Businesses",
    text: "From start-ups to established companies, we help simplify operations, manage risk and support growth.",
  },
  {
    title: "Investors",
    text: "We provide real estate insight, local representation and risk advice to help protect and grow your investments.",
  },
  {
    title: "Individuals",
    text: "We take care of documentation, property matters and events so you can focus on what matters most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Who we are`}
        text={`${site.name} is a professional services company supporting businesses, investors, and individuals with reliable, efficient, and customized solutions.`}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-navy-900">Our story</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We bring together expertise across consultancy, real estate, technology, facilities and events under one
            roof. Instead of juggling multiple providers, our clients work with a single trusted partner who
            understands their needs and delivers end to end.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our services range from e-commerce and IT consultancy to risk management, document preparation and event
            organizing. Whatever the task, our focus stays the same: simplify business operations, support growth,
            manage risks, and create value.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-navy-900 p-8 text-white">
            <h3 className="text-xl font-semibold text-gold-400">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              To provide reliable, efficient, and customized solutions that simplify business operations, support
              growth, manage risks, and create value for our clients.
            </p>
          </div>
          <div className="rounded-xl bg-gold-100 p-8">
            <h3 className="text-xl font-semibold text-navy-900">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              To be the trusted partner of choice for businesses, investors, and individuals seeking professional
              services delivered with transparency and quality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy-900">Our values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <Icon name={v.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-900">Who we serve</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="border-l-4 border-gold-500 pl-5">
              <h3 className="text-xl font-semibold text-navy-900">{a.title}</h3>
              <p className="mt-2 text-slate-600">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Let's work together" />
    </>
  );
}
