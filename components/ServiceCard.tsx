import Link from "next/link";
import Icon from "@/components/Icon";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/#${service.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <span className="mt-4 text-sm font-semibold text-gold-500">Learn more →</span>
    </Link>
  );
}
