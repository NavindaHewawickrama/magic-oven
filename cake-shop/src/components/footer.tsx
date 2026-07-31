import Link from "next/link";
import { businessSettings } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-section text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-xl italic font-semibold text-espresso-soft">Sweet</span>
            <span className="font-display text-xl font-semibold">Cake</span>
          </div>
          <p className="mt-3 text-sm text-cream/90">
            Handmade cakes, designed with you — from our kitchen in Ratnapura to your table.
          </p>
          <div className="mt-4 flex gap-3 text-lg text-cream/95">
            <span aria-label="Instagram">📷</span>
            <span aria-label="Twitter">🐦</span>
            <span aria-label="Facebook">👍</span>
            <MessageCircle size={18} />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li><Link href="/products">New</Link></li>
            <li><Link href="/about">Why Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/login">SignIn</Link></li>
            <li><Link href="/register">SignUp</Link></li>
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
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">Account</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/90">
            <li><Link href="/account">My dashboard</Link></li>
            <li><Link href="/login">Log in</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20 px-5 py-4 text-center text-xs text-cream/80">
        © {new Date().getFullYear()} Sweet Cake Studio. All orders are confirmed over WhatsApp.
      </div>
    </footer>
  );
}
