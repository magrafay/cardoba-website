export default function PageHero({
  eyebrow,
  title,
  highlight,
  text,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text: string;
}) {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      <div className="glow -left-40 -top-40 h-[480px] w-[480px] bg-[#7c9cff] opacity-40" />
      <div className="glow -right-32 top-10 h-[420px] w-[420px] bg-gold-300 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-20 text-center sm:px-6 md:pb-20 md:pt-28">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-brand-500" /> {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-6xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
