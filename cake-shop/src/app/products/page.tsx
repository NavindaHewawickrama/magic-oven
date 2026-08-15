import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import { BirthdayCakeIcon, Message01Icon } from "hugeicons-react";

export default function Products() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-brick md:text-5xl">Our Cake Collection</h1>
          <p className="divider-flourish mx-auto mt-4 w-24" />
          <p className="mt-5 max-w-2xl mx-auto text-sm text-espresso">
            Browse our selection of delicious handmade cakes. Contact us on WhatsApp to place your order!
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-cream p-8 md:p-12 text-center">
          <div className="text-6xl mb-4 flex items-center justify-center"><BirthdayCakeIcon size={96} className="text-brick" /></div>
          <h2 className="font-display text-2xl font-semibold text-brick">Coming Soon</h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-espresso">
            We're preparing a beautiful catalog of our cake collection with detailed images, descriptions, and pricing.
          </p>
          <p className="mt-4 text-sm text-espresso-soft">
            For now, browse our cake gallery on the <a href="/" className="text-brick underline">homepage</a> or contact us directly on WhatsApp to see our full range!
          </p>
          <a
            href={whatsappOrderLink("Hi! I'd like to see your cake catalog.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-coral bg-coral px-6 py-3 text-sm font-semibold text-cream transition hover:bg-brick"
          >
            <Message01Icon size={18} />
            View Cakes on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}