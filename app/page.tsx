import Link from "next/link";
import CTA from "@/components/CTA";
import Icon, { type AnyIcon } from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import { intro, services } from "@/data/services";

const values: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "check", title: "Reliable", text: "Dependable service you can count on, every step of the way." },
  { icon: "clock", title: "Efficient", text: "Streamlined processes that save you time and effort." },
  { icon: "shield", title: "Transparent", text: "Clear communication and honest advice, with no surprises." },
  { icon: "chart", title: "Quality-driven", text: "Customized solutions that create lasting value." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #c9a227 0, transparent 40%), radial-gradient(circle at 10% 90%, #1d3d6b 0, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Business · Real Estate · Technology · Events
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Professional services that simplify business and support growth
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We support businesses, investors, and individuals with reliable, efficient, and customized solutions,
            delivered with professionalism, transparency, and quality service.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/"
              className="rounded-md bg-gold-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact/"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">What we do</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">A comprehensive range of services</h2>
          <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">Why choose us</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">Built on trust and results</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-500">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
