import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1.4fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-7 w-7" />
            <span className="text-lg font-bold tracking-tight text-ink">
              cardoba<span className="text-brand-500">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}.</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/#${s.slug}`} className="transition-colors hover:text-brand-500">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="font-medium text-brand-500">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand-500">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-brand-500">
                {site.phone}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/80">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
