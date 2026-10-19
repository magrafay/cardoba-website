export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{text}</p>
      </div>
    </section>
  );
}
