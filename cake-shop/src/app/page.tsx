"use client";
import { useState } from "react";
import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import { Message01Icon } from "hugeicons-react";
import { CafeIcon, User02Icon, StarAward01Icon, BirthdayCakeIcon, Call02Icon, MapPinIcon } from "hugeicons-react";

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

const cakeData = [
  {
    src: "/images/image1.jpg",
    alt: "Delicious cake 1",
    description: "Classic vanilla sponge with buttercream"
  },
  {
    src: "/images/image2.jpg",
    alt: "Delicious cake 2",
    description: "Rich chocolate ganache delight"
  },
  {
    src: "/images/image3.jpg",
    alt: "Delicious cake 4",
    description: "Strawberry dream with fresh cream"
  },
  {
    src: "/images/image4.jpg",
    alt: "Delicious cake 4",
    description: "Strawberry dream with fresh cream"
  },
  {
    src: "/images/image5.jpg",
    alt: "Delicious cake 5",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image6.jpg",
    alt: "Delicious cake 6",
    description: "Caramel crunch with nuts"
  },
  {
    src: "/images/image7.jpg",
    alt: "Delicious cake 7",
    description: "Lemon drizzle with zest"
  },
  {
    src: "/images/image8.jpg",
    alt: "Delicious cake 8",
    description: "Red velvet with cream cheese"
  },
  {
    src: "/images/image10.jpg",
    alt: "Delicious cake 10",
    description: "Coffee walnut treat"
  },
  {
    src: "/images/image11.jpg",
    alt: "Delicious cake 11",
    description: "Blueberry cheesecake"
  },
  {
    src: "/images/image12.jpg",
    alt: "Delicious cake 12",
    description: "Mango passionfruit mousse"
  },
  {
    src: "/images/image13.jpg",
    alt: "Delicious cake 13",
    description: "Tiramisu layered cake"
  },
  {
    src: "/images/image14.jpg",
    alt: "Delicious cake 14",
    description: "Coconut & lime delight"
  },
  {
    src: "/images/image15.jpg",
    alt: "Delicious cake 15",
    description: "Peanut butter chocolate"
  },
  {
    src: "/images/image16.jpg",
    alt: "Delicious cake 16",
    description: "Pistachio rosewater cake"
  },
  {
    src: "/images/image17.jpg",
    alt: "Delicious cake 17",
    description: "Banana walnut bread"
  },
  {
    src: "/images/image18.jpg",
    alt: "Delicious cake 18",
    description: "Cinnamon swirl coffee cake"
  },
  {
    src: "/images/image19.jpg",
    alt: "Delicious cake 19",
    description: "Black forest gateau"
  },
  {
    src: "/images/image20.jpg",
    alt: "Delicious cake 20",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/immage3.jpg",
    alt: "Delicious cake 3",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/immage5.jpg",
    alt: "Delicious cake 5",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image21.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image22.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image23.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image24.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image25.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image26.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image27.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image28.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image29.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
  {
    src: "/images/image30.jpg",
    alt: "Delicious cake 21",
    description: "Vanilla rainbow sprinkle"
  },
];


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cakeData.length - 22 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cakeData.length - 22 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

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
                <Message01Icon size={18} />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cake Gallery with Carousel */}
      <section className="bg-pink-section py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold leading-tight text-cream">
              Our Cake Collection
            </h2>
            <div className="divider-flourish mx-auto mt-4 w-24" />
            <p className="mx-auto mt-5 max-w-2xl text-sm text-cream/90">
              Explore our wide range of delicious cakes. Each one is made with the finest ingredients and lots of love.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mt-12 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cakeData.map((cake, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="group relative aspect-square overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:shadow-xl hover:shadow-brick/15 hover:-translate-y-1">
                    <img
                      src={cake.src}
                      alt={cake.alt}
                      width={300}
                      height={300}
                      className=" h-auto object-cover transition group-hover:scale-110"
                    />
                    {/* Description overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
                      <p className="text-sm font-medium text-cream/90 line-clamp-2">
                        {cake.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-brick shadow-md transition hover:bg-cream hover:scale-110 focus:outline-none"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-brick shadow-md transition hover:bg-cream hover:scale-110 focus:outline-none"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          {/* <div className="mt-6 flex justify-center gap-2">
            {cakeData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === currentIndex ? "bg-cream" : "bg-cream/40"
                  }`}
                aria-label={`Go to slide ${index}`}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-pink-deep py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-cream text-8xl md:h-80">
              <BirthdayCakeIcon size={120} className="text-brick" />
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
              <div className="text-4xl mb-4"><User02Icon size={48} /></div>
              <h3 className="font-display text-xl font-semibold text-brick">User Accounts</h3>
              <p className="mt-2 text-sm text-espresso">
                Create an account to save your favorite cakes and track orders. Coming soon!
              </p>
              <span className="mt-4 inline-block rounded-full bg-coral/10 px-4 py-1 text-xs font-semibold text-coral">
                Coming Soon
              </span>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <div className="text-4xl mb-4"><StarAward01Icon size={48} /></div>
              <h3 className="font-display text-xl font-semibold text-brick">Reviews & Ratings</h3>
              <p className="mt-2 text-sm text-espresso">
                Share your experience and read reviews from other cake lovers. Coming soon!
              </p>
              <span className="mt-4 inline-block rounded-full bg-coral/10 px-4 py-1 text-xs font-semibold text-coral">
                Coming Soon
              </span>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm">
              <div className="text-4xl mb-4"><BirthdayCakeIcon size={48} /></div>
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
              <div className="text-3xl mb-2"><Call02Icon size={48} /></div>
              <p className="text-sm font-semibold text-espresso-soft">Call Us</p>
              <p className="mt-1 text-sm text-espresso">{businessSettings.phone}</p>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
              <div className="text-3xl mb-2"><Message01Icon size={48} /></div>
              <p className="text-sm font-semibold text-espresso-soft">Email Us</p>
              <p className="mt-1 text-sm text-espresso">{businessSettings.email}</p>
            </div>

            <div className="rounded-2xl bg-cream p-6 shadow-sm text-center">
              <div className="text-3xl mb-2"><MapPinIcon size={48} /></div>
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
            <Message01Icon size={18} />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="p-20 text-center">
        <p className="font-display text-xl italic text-espresso-soft md:text-2xl">
          Crafted with Love, Tasted with Joy
        </p>
      </section>
    </div>
  );
}