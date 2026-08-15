import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-brick md:text-5xl">Contact The Magic Oven</h1>
          <p className="divider-flourish mx-auto mt-4 w-24" />
          <p className="mt-5 max-w-2xl mx-auto text-sm text-espresso">
            Have a question or want to place an order? Reach out to us directly on WhatsApp for the fastest response!
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-cream p-6 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-brick mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-espresso-soft">Phone</p>
                  <p className="text-sm text-espresso">{businessSettings.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-espresso-soft">Email</p>
                  <p className="text-sm text-espresso">{businessSettings.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-espresso-soft">Address</p>
                  <p className="text-sm text-espresso">{businessSettings.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="mt-0.5 shrink-0 text-coral" />
                <div>
                  <p className="text-sm font-semibold text-espresso-soft">WhatsApp</p>
                  <p className="text-sm text-espresso">{businessSettings.whatsapp}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-brick-soft/20">
              <p className="text-sm font-semibold text-espresso-soft mb-2">Business Hours</p>
              <p className="text-sm text-espresso">{businessSettings.hours}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-cream p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-brick mb-6">Send us a Message</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-espresso-soft mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-brick-soft/50 bg-cream px-4 py-2.5 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-espresso-soft mb-1.5">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-brick-soft/50 bg-cream px-4 py-2.5 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-espresso-soft mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-brick-soft/50 bg-cream px-4 py-2.5 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-espresso-soft mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need..."
                  className="w-full resize-none rounded-2xl border border-brick-soft/50 bg-cream px-4 py-3 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg border border-coral bg-coral px-6 py-3 text-sm font-semibold text-cream transition hover:bg-brick"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-pink-deep p-8 md:p-12 text-center text-cream">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Order from The Magic Oven</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-cream/90">
            For the fastest response and easiest ordering, chat with us directly on WhatsApp. 
            Send us a message anytime and we'll get back to you quickly!
          </p>
          <a
            href={whatsappOrderLink("Hi! I'd like to order a cake.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cream bg-cream px-8 py-3 text-sm font-semibold text-brick transition hover:bg-cream/90"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}