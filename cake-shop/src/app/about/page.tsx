export const metadata = { title: "About Us — Sweet Layers Cake Studio" };

const milestones = [
  { year: "2019", text: "Started baking birthday cakes from a home kitchen for friends and neighbors." },
  { year: "2021", text: "Word-of-mouth orders outgrew Facebook Messenger — moved fully to WhatsApp ordering." },
  { year: "2024", text: "Began offering fully custom wedding tiers and seasonal collections." },
  { year: "2026", text: "Launched Sweet Layers online, with a 3D builder so you can design before you order." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="eyebrow">Our story</p>
      <h1 className="mt-1 font-display text-4xl font-semibold text-espresso-soft">About Sweet Layers</h1>
      <p className="mt-5 text-espresso">
        Sweet Layers Cake Studio is a small, family-run bakery in Ratnapura. We believe a cake
        should look exactly the way you imagined it before it ever leaves our kitchen — which is
        why we built a way for you to design it with us, not just describe it to us.
      </p>

      <div className="mt-12 flex items-center justify-center rounded-3xl bg-cream-dim py-16 text-7xl">
        👩‍🍳🎂
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-espresso-soft">Our journey</h2>
        <div className="mt-6 space-y-6 border-l-2 border-line pl-6">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-peach-dark" />
              <p className="text-xs font-semibold uppercase tracking-wide text-peach-dark">{m.year}</p>
              <p className="mt-1 text-espresso">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {[
          { label: "Cakes baked", value: "3,200+" },
          { label: "Average rating", value: "4.8 / 5" },
          { label: "Years baking", value: "7" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-white/80 p-6 text-center">
            <p className="font-display text-3xl font-semibold text-peach-dark">{s.value}</p>
            <p className="mt-1 text-sm text-espresso">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
