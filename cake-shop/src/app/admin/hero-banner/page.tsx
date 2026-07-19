"use client";

import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";

export default function AdminHeroBannerPage() {
  return (
    <DashboardShell title="Hero Banner" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/hero-banner">
      <div className="grid gap-8 lg:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-line bg-white/80 p-6">
          <div>
            <label className="text-xs font-semibold uppercase text-espresso-soft">Title</label>
            <input defaultValue="Cakes designed the way you imagine them." className="mt-1 w-full rounded-xl border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-espresso-soft">Subtitle</label>
            <textarea rows={3} defaultValue="Browse our catalog, or step into our 3D cake builder to design your own tiers, flavors and colors." className="mt-1 w-full resize-none rounded-xl border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold uppercase text-espresso-soft">Button text</label>
              <input defaultValue="Build your cake" className="mt-1 w-full rounded-xl border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-espresso-soft">Button link</label>
              <input defaultValue="/builder" className="mt-1 w-full rounded-xl border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-espresso-soft">Background image</label>
            <div className="mt-1 flex h-24 items-center justify-center rounded-xl border border-dashed border-line text-xs text-espresso-soft">
              Drop image here or click to upload
            </div>
          </div>
          <button type="submit" className="rounded-full bg-brick px-6 py-2.5 text-sm font-semibold text-cream">
            Save & publish
          </button>
        </form>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-espresso-soft">Live preview</p>
          <div className="rounded-2xl border border-line bg-cream-dim p-8">
            <p className="eyebrow">Handmade in Ratnapura</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-espresso-soft">Cakes designed the way you imagine them.</h2>
            <p className="mt-2 text-sm text-espresso">Browse our catalog, or step into our 3D cake builder to design your own tiers, flavors and colors.</p>
            <button className="mt-4 rounded-full bg-brick px-4 py-2 text-xs font-semibold text-cream">Build your cake</button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
