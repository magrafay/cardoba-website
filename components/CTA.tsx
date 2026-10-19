import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA({
  title = "Let's build something that lasts.",
  text = "Tell us what you need. We'll reply with a tailored plan, no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center md:px-16 md:py-20">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-brand-500 opacity-40 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-gold-500 opacity-30 blur-3xl" />
        <h2 className="relative text-3xl font-bold tracking-[-0.02em] text-white md:text-5xl">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-300">{text}</p>
        <Link
          href="/contact/"
          className="relative mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
        >
          Get in touch →
        </Link>
      </Reveal>
    </section>
  );
}
