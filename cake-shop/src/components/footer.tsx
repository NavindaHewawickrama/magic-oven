import Link from "next/link";
import { businessSettings } from "@/lib/mock-data";
import { MessageCircle } from "lucide-react";

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
            <a href="https://www.instagram.com/themagicoven/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-coral transition">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://web.facebook.com/magicoven96/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-coral transition">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://wa.me/0772896424" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-coral transition">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.53 1.31 5.02L2.5 22l5.13-1.34C8.76 21.73 10.34 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.29 0-2.54-.21-3.7-.6l-.53-.17-3.23.85.87-3.15-.18-.54C5.56 14.63 5.2 13.24 5.2 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.5-6.3c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.56.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.38.11-.51.12-.12.25-.31.37-.47.12-.16.17-.27.25-.45.09-.17.04-.33-.02-.47-.06-.14-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.6.2 1.14.17 1.57.1.48-.08 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28z" fill="currentColor"/>
              </svg>
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
