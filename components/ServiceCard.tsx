import Link from "next/link";
import Icon from "@/components/Icon";
import { unsplash, type Service } from "@/data/services";

export default function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/services/#${service.slug}`}
        className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,107,255,0.3)] md:p-8"
      >
        <img
          src={unsplash(service.image, 1200)}
          alt={service.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="relative mt-5 text-3xl font-semibold tracking-tight text-white">{service.title}</h3>
        <p className="relative mt-2 max-w-md leading-relaxed">{service.summary}</p>
        <div className="relative mt-6 flex flex-wrap gap-2">
          {service.points.map((p) => (
            <span key={p} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              {p}
            </span>
          ))}
        </div>
        <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white">
          Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/#${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    >
      <div className="relative h-40 overflow-hidden bg-brand-50">
        <img
          src={unsplash(service.image, 800)}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-500 shadow-sm backdrop-blur">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
          Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
