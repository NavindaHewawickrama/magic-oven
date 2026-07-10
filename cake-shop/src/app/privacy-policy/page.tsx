export const metadata = { title: "Privacy Policy — Sweet Layers Cake Studio" };

const sections = [
  { h: "Information we collect", p: "Name, phone number or email, and password for registered accounts. We do not collect payment details — all orders are finalized over WhatsApp." },
  { h: "How we use it", p: "To manage your account, respond to feedback, and apply discounts you're eligible for." },
  { h: "Cake builder images", p: "Screenshots generated in the Cake Builder are stored only to fulfill your order and may be deleted on request." },
  { h: "Third parties", p: "We use Supabase for data storage and Google Analytics for anonymized traffic insights." },
  { h: "Your rights", p: "You may request access to, correction of, or deletion of your personal data at any time by contacting us." },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
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
