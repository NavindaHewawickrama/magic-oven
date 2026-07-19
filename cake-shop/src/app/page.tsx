import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products, notices, generalFeedback, businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import ProductCard from "@/components/product-card";
import StarRating from "@/components/star-rating";
import FeedbackForm from "@/components/feedback-form";
import ContactBlock from "@/components/contact-block";

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const popular = products.filter((p) => p.popular);

  return (
    <div>
      {/* Notices */}
      {notices.filter((n) => n.active).map((n) => (
        <div key={n.id} className="bg-brick px-5 py-2.5 text-center text-sm font-medium text-cream">
          {n.message}
        </div>
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles size={14} /> Handmade in Ratnapura
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-espresso-soft md:text-6xl">
              Cakes designed the way <span className="italic text-brick">you</span> imagine them.
            </h1>
            <p className="mt-5 max-w-md text-espresso">
              Browse our catalog, or step into our 3D cake builder to design your own tiers,
              flavors and colors — then send it straight to us on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/builder"
                className="inline-flex items-center gap-2 rounded-full bg-brick px-6 py-3 text-sm font-semibold text-cream transition hover:brightness-110"
              >
                Build your cake <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-6 py-3 text-sm font-semibold text-espresso transition hover:border-brick hover:text-brick"
              >
                Browse the catalog
              </Link>
            </div>
          </div>
          <div className="relative flex h-72 items-center justify-center rounded-3xl bg-cream-dim text-[9rem] md:h-96">
            🎂
            <div className="absolute -left-4 top-6 rounded-2xl bg-white px-4 py-2 shadow-md">
              <StarRating rating={4.9} count={214} />
            </div>
            <div className="absolute -right-2 bottom-8 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-espresso-soft shadow-md">
              🍫 Midnight Fudge<br />
              <span className="font-normal text-espresso-soft">just ordered</span>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals / featured */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">New & featured</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">This season's arrivals</h2>
          </div>
          <Link href="/products" className="hidden text-sm font-semibold text-brick md:block">
            View all cakes →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Popular carousel */}
      <section className="border-y border-line bg-cream-dim/70 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Customer favorites</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">Most popular this month</h2>
          <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4">
            {popular.map((p) => (
              <div key={p.id} className="w-72 snap-start">
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
            className="inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-espresso transition hover:brightness-105"
          >
            Open the Cake Builder <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-16" id="about">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex h-64 items-center justify-center rounded-3xl bg-cream-dim text-7xl">
            👩‍🍳
          </div>
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">
              A neighborhood bakery, now online.
            </h2>
            <p className="mt-4 text-espresso">
              Sweet Layers started as a home kitchen in Ratnapura, baking birthday cakes for
              neighbors and word-of-mouth orders. Today we still hand-finish every cake — we've
              simply given you a better way to tell us what you're dreaming of, and an easier way
              to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-line bg-cream-dim/70 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">What our customers say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {generalFeedback.map((f) => (
              <div key={f.id} className="rounded-2xl border border-line bg-white/80 p-6">
                <p className="text-sm text-espresso">"{f.comment}"</p>
                <p className="mt-4 text-sm font-semibold text-espresso-soft">— {f.author}</p>
                {f.reply && (
                  <p className="mt-3 rounded-xl bg-cream-dim px-3 py-2 text-xs text-espresso">
                    <span className="font-semibold text-brick">Sweet Layers: </span>{f.reply}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General feedback form */}
      <section className="mx-auto max-w-3xl px-5 py-16" id="feedback">
        <p className="eyebrow text-center">Tell us what you think</p>
        <h2 className="mt-1 text-center font-display text-3xl font-semibold text-espresso-soft">Leave general feedback</h2>
        <p className="mt-2 text-center text-sm text-espresso">
          Feedback about the shop overall (not a specific cake) goes here. You'll need to be
          logged in — this keeps reviews genuine.
        </p>
        <div className="mt-8">
          <FeedbackForm />
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-5 pb-20" id="contact">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">Contact Sweet Layers</h2>
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </div>
  );
}
