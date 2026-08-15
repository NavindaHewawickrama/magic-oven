import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

const cakeImages = [
  { src: "/images/image1.jpg", alt: "Delicious cake 1" },
  { src: "/images/image2.jpg", alt: "Delicious cake 2" },
  { src: "/images/image4.jpg", alt: "Delicious cake 4" },
  { src: "/images/image6.jpg", alt: "Delicious cake 6" },
  { src: "/images/image7.jpg", alt: "Delicious cake 7" },
  { src: "/images/image8.jpg", alt: "Delicious cake 8" },
  { src: "/images/image10.jpg", alt: "Delicious cake 10" },
  { src: "/images/image11.jpg", alt: "Delicious cake 11" },
  { src: "/images/image12.jpg", alt: "Delicious cake 12" },
  { src: "/images/image13.jpg", alt: "Delicious cake 13" },
  { src: "/images/image14.jpg", alt: "Delicious cake 14" },
  { src: "/images/image15.jpg", alt: "Delicious cake 15" },
  { src: "/images/image16.jpg", alt: "Delicious cake 16" },
  { src: "/images/image17.jpg", alt: "Delicious cake 17" },
  { src: "/images/image18.jpg", alt: "Delicious cake 18" },
  { src: "/images/immage3.jpg", alt: "Delicious cake 3" },
  { src: "/images/immage5.jpg", alt: "Delicious cake 5" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="relative flex h-72 items-center justify-center md:h-96">
            <img
              src="/images/image1.jpg"
              width={400}
              height={400}
              alt="Hero Cake"
              className="rounded-4xl pt-2.5 shadow-2xl"
            />
          </div>
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-brick md:text-6xl">
              Welcome to The Magic Oven
            </h1>
            <p className="mt-5 max-w-md text-espresso">
              Handmade with love, baked to perfection. From our kitchen in Ratnapura to your special moments.
            </p>
            <div className="mt-8">
              <a
                href={whatsappOrderLink("Hi! I'd like to order a cake.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-coral bg-coral px-8 py-3 text-sm font-semibold text-cream transition hover:bg-brick"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cake Gallery */}
      <section className="bg-pink-section py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-cream">
            Our Cake Collection
          </h2>
            <p className="divider-flourish mx-auto mt-4 w-24" />
            <p className="mt-5 max-w-2xl mx-auto text-sm text-cream/90">
              Explore our wide range of delicious cakes. Each one is made with the finest ingredients and lots of love.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {cakeImages.map((cake, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:shadow-xl hover:shadow-brick/15 hover:-translate-y-1"
              >
                <img
                  src={cake.src}
                  alt={cake.alt}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-pink-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-cream text-8xl md:h-80">
              🍰
            </div>
            <div>
          <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
            Why Choose The Magic Oven?
          </h2>
              <p className="mt-4 max-w-md text-sm text-cream/90">
                We believe in creating memorable moments through our delicious, handcrafted cakes.
              </p>
              <ol className="mt-6 space-y-4">
                {[
                  "Premium quality ingredients",
                  "Freshly baked every day",
                  "Custom designs available",
                  "Fast WhatsApp ordering"
                ].map((feature, n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-xs font-bold text-cream">
                      {n + 1}
                    </span>
                    <span className="text-sm text-cream/90">{feature}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="bg-cream-dim/70 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-espresso-soft">Coming Soon</h2>
            <p className="divider-flourish mx-auto mt-4 w-24" />
            <p className="mt-5 max-w-2xl mx-auto text-sm text-espresso">
              We're working on exciting new features to enhance your cake ordering experience.
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-display text-xl font-semibold text-brick">User Accounts</h3>
              <p className="mt-2 text-sm text-espresso">
                Create an account to save your favorite cakes and track orders. Coming soon!
              </p>
              <span className="mt-4 inline-block rounded-full bg-coral/10 px-4 py-1 text-xs font-semibold text-coral">
                Coming Soon
              </span>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-display text-xl font-semibold text-brick">Reviews & Ratings</h3>
              <p className="mt-2 text-sm text-espresso">
                Share your experience and read reviews from other cake lovers. Coming soon!
              </p>
              <span className="mt-4 inline-block rounded-full bg-coral/10 px-4 py-1 text-xs font-semibold text-coral">
                Coming Soon
              </span>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="font-display text-xl font-semibold text-brick">3D Cake Builder</h3>
              <p className="mt-2 text-sm text-espresso">
                Design your dream cake in 3D before ordering. Coming soon!
              </p>
              <span className="mt-4 inline-block rounded-full bg-coral/10 px-4 py-1 text-xs font-semibold text-coral">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-5 py-16" id="contact">
        <div className="text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-espresso-soft">Contact The Magic Oven</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-espresso">
            Have a question or want to place an order? Reach out to us directly on WhatsApp for the fastest response!
          </p>
        </div>
        
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">📞</div>
              <p className="text-sm font-semibold text-espresso-soft">Call Us</p>
              <p className="mt-1 text-sm text-espresso">{businessSettings.phone}</p>
            </div>
            
            <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">📧</div>
              <p className="text-sm font-semibold text-espresso-soft">Email Us</p>
              <p className="mt-1 text-sm text-espresso">{businessSettings.email}</p>
            </div>
            
            <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">📍</div>
              <p className="text-sm font-semibold text-espresso-soft">Visit Us</p>
              <p className="mt-1 text-sm text-espresso">{businessSettings.address}</p>
            </div>
          </div>

          <a
            href={whatsappOrderLink("Hi! I have a question about your cakes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-coral bg-coral px-8 py-3 text-sm font-semibold text-cream transition hover:bg-brick"
          >
            <MessageCircle size={18} />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-gradient-to-b from-pink-deep to-cream py-16 text-center">
        <p className="font-display text-xl italic text-espresso-soft md:text-2xl">
          Crafted with Love, Tasted with Joy
        </p>
      </section>
    </div>
  );
}