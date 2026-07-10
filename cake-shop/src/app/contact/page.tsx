import ContactBlock from "@/components/contact-block";

export const metadata = { title: "Contact — Sweet Layers Cake Studio" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">We'd love to hear from you</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Contact Sweet Layers</h1>
      <p className="mt-4 max-w-lg text-espresso-soft">
        Questions about an order, a custom design, or just want to say hello? Reach us any of the
        ways below — WhatsApp is fastest.
      </p>
      <div className="mt-10">
        <ContactBlock />
      </div>
    </div>
  );
}
