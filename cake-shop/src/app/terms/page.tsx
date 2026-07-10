export const metadata = { title: "Terms of Service — Sweet Layers Cake Studio" };

const sections = [
  { h: "Ordering", p: "All orders placed through this website are provisional until confirmed by our team over WhatsApp." },
  { h: "Payment", p: "Payments are currently collected in person or via bank transfer, arranged directly over WhatsApp." },
  { h: "Cancellations", p: "Custom cake orders may be cancelled up to 48 hours before the collection date." },
  { h: "Reviews", p: "Reviews must reflect genuine experiences with our products. We reserve the right to moderate submissions." },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold">Terms of Service</h1>
      <p className="mt-2 text-sm text-espresso-soft">Last updated July 2026 — placeholder text for demo purposes.</p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-xl font-semibold">{s.h}</h2>
            <p className="mt-2 text-espresso-soft">{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
