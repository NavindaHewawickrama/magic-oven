"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu02Icon, CancelCircleIcon } from "hugeicons-react";
import { WhatsappIcon } from "hugeicons-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Cakes" },
  { href: "/about", label: "Why Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-2xl italic font-semibold tracking-tight text-brick">
            The Magic
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-espresso-soft">
            Oven
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-brick ${
                pathname === l.href ? "text-brick" : "text-espresso-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/94712345678?text=Hi! I'd like to order a cake."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-coral bg-coral px-4 py-2 text-sm font-semibold text-cream transition hover:bg-brick"
          >
            <WhatsappIcon size={16} />
            Order Now
          </a>
        </div>

        <button
          className="text-espresso-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CancelCircleIcon size={24} /> : <Menu02Icon size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-espresso-soft"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <hr className="border-line" />
            <a
              href="https://wa.me/94712345678?text=Hi! I'd like to order a cake."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-coral bg-coral px-4 py-2 text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              <WhatsappIcon size={16} />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}