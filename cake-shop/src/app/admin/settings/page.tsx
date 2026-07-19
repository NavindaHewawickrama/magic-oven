import { Upload } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { businessSettings } from "@/lib/mock-data";

export const metadata = { title: "Settings — Admin" };

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">{label}</label>
        <input defaultValue={value} className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
    </div>
  );
}

export default function SettingsPage() {
  return (
    <DashboardShell title="Settings" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/settings">
      <div className="space-y-8">
        <div className="rounded-2xl border border-line bg-white/80 p-6">
          <p className="font-display text-lg font-semibold text-espresso-soft">Site logo</p>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cream-dim text-4xl">🍰</div>
            <button className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-espresso hover:border-peach-dark hover:text-peach-dark">
              <Upload size={15} /> Replace logo
            </button>
          </div>
          <p className="mt-2 text-xs text-espresso">Used in the navbar, footer, and favicon. Recommended: square PNG or SVG, transparent background.</p>
        </div>

        <div className="rounded-2xl border border-line bg-white/80 p-6">
          <p className="font-display text-lg font-semibold text-espresso-soft">Business details</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Business name" value={businessSettings.businessName} />
            <Field label="Phone" value={businessSettings.phone} />
            <Field label="WhatsApp number" value={businessSettings.whatsapp} />
            <Field label="Email" value={businessSettings.email} />
            <Field label="Opening hours" value={businessSettings.hours} />
            <Field label="Address" value={businessSettings.address} />
          </div>
        </div>

        <button className="rounded-full bg-brick px-6 py-2.5 text-sm font-semibold text-cream">Save settings</button>
      </div>
    </DashboardShell>
  );
}
