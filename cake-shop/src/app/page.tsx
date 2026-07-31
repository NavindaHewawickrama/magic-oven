import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, notices, generalFeedback } from "@/lib/mock-data";
import ProductCard from "@/components/product-card";
import FeedbackForm from "@/components/feedback-form";
import ContactBlock from "@/components/contact-block";

const categories = [
  { emoji: "🍰", label: "Slice of cake" },
  { emoji: "🧁", label: "Cupcake" },
  { emoji: "🌀", label: "Cake Roll" },
  { emoji: "🥞", label: "Pan Cake" },
  { emoji: "🎂", label: "Cake" },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const popular = products.filter((p) => p.popular);

  return (
    <div>
      {/* Notices */}
      {notices.filter((n) => n.active).map((n) => (
        <div key={n.id} className="bg-coral px-5 py-2.5 text-center text-sm font-medium text-cream">
          {n.message}
        </div>
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="relative flex h-72 items-center justify-center text-[9rem] md:h-96">
            🎂
          </div>
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-brick md:text-6xl">
              Do u like cake?
            </h1>
            <p className="mt-5 max-w-md text-espresso">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-coral bg-transparent px-8 py-3 text-sm font-semibold text-coral transition hover:bg-coral hover:text-cream"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="bg-cream-dim/70 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-8 px-5">
          {categories.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-3xl">
                {c.emoji}
              </div>
              <p className="text-xs font-medium text-espresso-soft">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's New */}
      <section className="bg-pink-section py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] md:items-start">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight text-cream">
                What&apos;s<br />New
              </h2>
              <div className="divider-flourish mt-4 w-24" />
              <p className="mt-5 text-sm text-cream/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="scrollbar-thin flex snap-x gap-6 overflow-x-auto pb-4">
              {featured.map((p) => (
                <div key={p.id} className="snap-start">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cake */}
      <section className="bg-pink-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-cream text-8xl md:h-80">
              🍋🍰
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
                Why Choose Our Cake?
              </h2>
              <p className="mt-4 max-w-md text-sm text-cream/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ol className="mt-6 space-y-4">
                {[1, 2, 3].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-cream">
                      {n}
                    </span>
                    <span className="text-sm text-cream/90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-dim/70 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">What our customers say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {generalFeedback.map((f) => (
              <div key={f.id} className="rounded-2xl bg-cream p-6 shadow-sm">
                <p className="text-sm text-espresso">&quot;{f.comment}&quot;</p>
                <p className="mt-4 text-sm font-semibold text-espresso-soft">— {f.author}</p>
                {f.reply && (
                  <p className="mt-3 rounded-xl bg-mint px-3 py-2 text-xs text-espresso">
                    <span className="font-semibold text-brick">Sweet Cake: </span>{f.reply}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="bg-gradient-to-b from-pink-deep to-cream py-16 text-center">
        <p className="font-display text-xl italic text-espresso-soft md:text-2xl">
          Crafted with Love, Tasted with Joy
        </p>
        <div className="divider-flourish mx-auto mt-4 w-40" />
      </section>

      {/* Popular carousel */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Customer favorites</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">Most popular this month</h2>
          <div className="scrollbar-thin mt-8 flex snap-x gap-6 overflow-x-auto pb-4">
            {popular.map((p) => (
              <div key={p.id} className="snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build your own CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-espresso-soft px-8 py-14 text-center text-cream md:px-16">
          <p className="eyebrow text-peach">The Cake Builder</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Not seeing exactly what you want? Design it yourself in 3D.
          </h2>
          <p className="max-w-lg text-cream/80">
            Pick a shape, stack your layers, choose flavors, colors, decorations and toppings —
            rotate, zoom, and send us a screenshot the moment it looks right.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-lg border border-coral bg-transparent px-6 py-3 text-sm font-semibold text-coral transition hover:bg-coral hover:text-cream"
          >
            Open the Cake Builder <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* General feedback form */}
      <section className="mx-auto max-w-3xl px-5 py-16" id="feedback">
        <p className="eyebrow text-center">Tell us what you think</p>
        <h2 className="mt-1 text-center font-display text-3xl font-semibold text-espresso-soft">Leave general feedback</h2>
        <p className="mt-2 text-center text-sm text-espresso">
          Feedback about the shop overall (not a specific cake) goes here. You&apos;ll need to be
          logged in — this keeps reviews genuine.
        </p>
        <div className="mt-8">
          <FeedbackForm />
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-5 pb-20" id="contact">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">Contact Sweet Cake</h2>
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </div>
  );
}
