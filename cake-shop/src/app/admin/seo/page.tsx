import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";

export const metadata = { title: "SEO Settings — Admin" };

function Field({ label, placeholder, textarea }: { label: string; placeholder: string; textarea?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">{label}</label>
      {textarea ? (
        <textarea rows={3} placeholder={placeholder} className="mt-1.5 w-full resize-none rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
      ) : (
        <input placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
      )}
    </div>
  );
}

export default function SeoPage() {
  return (
    <DashboardShell title="SEO Settings" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/seo">
      <div className="space-y-8">
        <div className="rounded-2xl border border-line bg-white/80 p-6">
          <p className="font-display text-lg font-semibold text-espresso-soft">Homepage metadata</p>
          <div className="mt-4 space-y-4">
            <Field label="Page title" placeholder="Sweet Layers Cake Studio — Custom Cakes in Ratnapura" />
            <Field label="Meta description" placeholder="Browse our cake catalog or design your own custom cake in 3D..." textarea />
            <Field label="Keywords" placeholder="custom cakes, birthday cake Ratnapura, wedding cakes Sri Lanka" />
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white/80 p-6">
          <p className="font-display text-lg font-semibold text-espresso-soft">Open Graph & Twitter Card</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="OG Title" placeholder="Sweet Layers Cake Studio" />
            <Field label="OG Image URL" placeholder="https://.../og-image.jpg" />
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white/80 p-6">
          <p className="font-display text-lg font-semibold text-espresso-soft">Indexing</p>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Allow search engines to index this site</label>
            <span className="text-espresso-soft">sitemap.xml: <span className="text-sage">auto-generated ✓</span></span>
          </div>
        </div>

        <button className="rounded-lg border border-brick bg-transparent px-6 py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">Save SEO settings</button>
      </div>
    </DashboardShell>
  );
}
