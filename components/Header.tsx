"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-6 pr-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" className="h-7 w-7" />
          <span className="text-lg font-bold tracking-tight text-ink">
            cardoba<span className="text-brand-500">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? "bg-white text-ink shadow-sm" : "text-slate-600 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500 md:inline-block"
        >
          Book a call
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                isActive(link.href) ? "bg-white text-ink" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-brand-500 px-4 py-3 text-center font-semibold text-white"
          >
            Book a call
          </Link>
        </nav>
      )}
    </header>
  );
}
