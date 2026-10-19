import Link from "next/link";

export default function CTA({
  title = "Ready to simplify your operations?",
  text = "Tell us what you need and our team will get back to you with a tailored solution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gold-100">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-slate-700">{text}</p>
        </div>
        <Link
          href="/contact/"
          className="shrink-0 rounded-md bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
