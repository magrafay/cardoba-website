import Link from "next/link";
import Icon from "@/components/Icon";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <Link
      href={`/services/#${service.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-transparent bg-ink text-slate-300 hover:shadow-[0_20px_50px_rgba(79,107,255,0.3)]"
          : "border-slate-200/70 bg-white hover:border-brand-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
      }`}
    >
      {featured && <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-500 opacity-40 blur-3xl" />}
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
          featured
            ? "bg-white/10 text-white"
            : "bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white"
        }`}
      >
        <Icon name={service.icon} className="h-5 w-5" />
      </span>
      <h3
        className={`relative mt-6 font-semibold tracking-tight ${featured ? "text-3xl text-white" : "text-lg text-ink"}`}
      >
        {service.title}
      </h3>
      <p className={`relative mt-2 flex-1 leading-relaxed ${featured ? "max-w-sm" : "text-sm"}`}>{service.summary}</p>
      {featured && (
        <div className="relative mt-8 flex flex-wrap gap-2">
          {service.points.map((p) => (
            <span key={p} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white">
              {p}
            </span>
          ))}
        </div>
      )}
      <span
        className={`relative mt-6 inline-flex items-center gap-1 text-sm font-semibold ${
          featured ? "text-white" : "text-brand-500"
        }`}
      >
        Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
