import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// NOTE: this build environment has no access to fonts.googleapis.com, so
// next/font/google is not wired up here. Locally, you can swap in
// `Fraunces` and `Work_Sans` from next/font/google (see globals.css, which
// already references --font-fraunces / --font-worksans) for the real
// display + body typefaces; the fallback stack below looks close enough
// to preview the design in the meantime.

export const metadata: Metadata = {
  title: "Magic Oven",
  description:
    "Browse our cake catalog or design your own custom cake in 3D. Order directly on WhatsApp — no account needed to order.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
