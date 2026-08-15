import { businessSettings } from "@/lib/mock-data";

export default function About() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-brick md:text-5xl">Why Choose The Magic Oven?</h1>
          <p className="divider-flourish mx-auto mt-4 w-24" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-cream text-8xl md:h-80">
            🍰
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-espresso-soft md:text-4xl">
              Baked with Love, Delivered with Care
            </h2>
            <p className="mt-4 text-sm text-espresso">
              At The Magic Oven, we believe every celebration deserves a special cake. Located in the heart of Ratnapura, 
              we've been crafting delicious, beautiful cakes for families and events across Sri Lanka.
            </p>
            <p className="mt-4 text-sm text-espresso">
              Our commitment to quality means using only the finest ingredients, baking fresh every day, and delivering 
              on time for your special moments.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-display text-lg font-semibold text-brick">Premium Quality</h3>
            <p className="mt-2 text-sm text-espresso">
              Only the finest ingredients for the best taste
            </p>
          </div>

          <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">👨‍🍳</div>
            <h3 className="font-display text-lg font-semibold text-brick">Expert Bakers</h3>
            <p className="mt-2 text-sm text-espresso">
              Skilled artisans with years of experience
            </p>
          </div>

          <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-display text-lg font-semibold text-brick">Custom Designs</h3>
            <p className="mt-2 text-sm text-espresso">
              Personalized cakes for your special occasions
            </p>
          </div>

          <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-display text-lg font-semibold text-brick">Easy Ordering</h3>
            <p className="mt-2 text-sm text-espresso">
              Simple WhatsApp ordering, no account needed
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-pink-deep p-8 md:p-12 text-center text-cream">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Visit Our Bakery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-cream/90">
            Come see us at our shop in Ratnapura. We'd love to show you our cakes in person and help you choose the perfect one for your celebration.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Address</p>
              <p className="mt-2 text-sm text-cream/90">{businessSettings.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Hours</p>
              <p className="mt-2 text-sm text-cream/90">{businessSettings.hours}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Contact</p>
              <p className="mt-2 text-sm text-cream/90">{businessSettings.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}