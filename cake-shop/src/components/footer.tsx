import Link from "next/link";
import { businessSettings } from "@/lib/mock-data";
import { InstagramIcon, Facebook02Icon, WhatsappIcon } from "hugeicons-react";

export default function Footer() {
  return (
    <footer className="bg-pink-section text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-xl italic font-semibold text-espresso-soft">The Magic</span>
            <span className="font-display text-xl font-semibold">Oven</span>
          </div>
          <p className="mt-3 text-sm text-cream/90">
            Handmade cakes, designed with love — from our kitchen in Ratnapura to your table.
          </p>
          <div className="mt-4 flex gap-3 text-lg text-cream/95">
            <a href="https://www.instagram.com/_magic_oven_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-coral transition">
              <InstagramIcon size={24} />
            </a>
            <a href="https://web.facebook.com/magicoven96/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-coral transition">
              <Facebook02Icon size={24} />
            </a>
            <a href="https://wa.me/0772896424" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-coral transition">
              <WhatsappIcon size={24} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Our Cakes</Link></li>
            <li><Link href="/about">Why Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Information</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li>{businessSettings.email}</li>
            <li>{businessSettings.phone}</li>
            <li>{businessSettings.address}</li>
            <li>{businessSettings.hours}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Order Info</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li>Order via WhatsApp</li>
            <li>No account needed</li>
            <li>Fast response guaranteed</li>
          </ul>
        </div>
      </div>
        <div className="border-t border-cream/20 px-5 py-4 text-center text-xs text-cream/80">
          © {new Date().getFullYear()} The Magic Oven. All orders are confirmed over WhatsApp.
        </div>
    </footer>
  );
}
