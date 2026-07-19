"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, ShieldCheck } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Cakes" },
  { href: "/builder", label: "Build Your Cake" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍰</span>
          <span className="font-display text-xl font-semibold tracking-tight text-espresso-soft">
            Sweet Layers
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-espresso-soft transition hover:text-brick"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-sm font-medium text-espresso-soft hover:text-brick"
          >
            <User size={16} /> Login
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-espresso-soft hover:border-brick hover:text-brick"
          >
            <ShieldCheck size={14} /> Admin
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-5 md:hidden">
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
            <Link href="/login" className="text-sm font-medium text-espresso-soft">
              Login / Register
            </Link>
            <Link href="/admin" className="text-sm font-medium text-brick">
              Admin dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
