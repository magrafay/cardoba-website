import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon, { type AnyIcon } from "@/components/Icon";
import PageHero from "@/components/PageHero";
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
        title="Let's talk about your needs"
        text="Send us a message and our team will get back to you to discuss how we can help."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Get in touch</h2>
          <ul className="mt-8 space-y-6">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <Icon name={d.icon} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-slate-600 hover:text-gold-500">
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-slate-600">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
