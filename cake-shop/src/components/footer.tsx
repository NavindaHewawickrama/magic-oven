import Link from "next/link";
import { businessSettings } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-espresso-soft text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍰</span>
            <span className="font-display text-lg font-semibold">Sweet Layers</span>
          </div>
          <p className="mt-3 text-sm text-cream/80">
            Handmade cakes, designed with you — from our kitchen in Ratnapura to your table.
          </p>
          <div className="mt-4 flex gap-3 text-lg text-cream/90">
            <span aria-label="Instagram">📷</span>
            <span aria-label="Facebook">👍</span>
            <MessageCircle size={18} />
          </div>
        </div>

        <div>
          <p className="eyebrow text-peach">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li><Link href="/products">Cake catalog</Link></li>
            <li><Link href="/builder">Build your cake</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-peach">Account</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/account">My dashboard</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-peach">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>{businessSettings.address}</li>
            <li>{businessSettings.hours}</li>
            <li>{businessSettings.phone}</li>
            <li>{businessSettings.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 px-5 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Sweet Layers Cake Studio. All orders are confirmed over WhatsApp.
      </div>
    </footer>
  );
}
