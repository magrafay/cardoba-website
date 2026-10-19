import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon, { type AnyIcon } from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { photos, unsplash } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us" };

const details: { icon: AnyIcon; label: string; value: string; href?: string }[] = [
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: "Office", value: site.address },
  { icon: "clock", label: "Working hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about"
        highlight="your needs."
        text="Send us a message and our team will get back to you to discuss how we can help."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
        <div className="grid content-start gap-4">
          <Reveal className="relative h-52 overflow-hidden rounded-3xl bg-brand-50">
            <img src={unsplash(photos.lobby, 900)} alt="Modern office reception" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold text-white">
              We&apos;d love to hear about your plans.
            </p>
          </Reveal>
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 70}>
              <div className="glass flex items-center gap-4 rounded-3xl p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-glow text-white">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="font-medium text-ink transition-colors hover:text-brand-500">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-medium text-ink">{d.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
