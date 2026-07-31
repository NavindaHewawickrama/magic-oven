"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { discounts as initialDiscounts } from "@/lib/mock-data";

export default function AdminDiscountsPage() {
  const [discounts, setDiscounts] = useState(initialDiscounts.map((d) => ({ ...d })));
  const remove = (id: string) => setDiscounts((d) => d.filter((x) => x.id !== id));

  return (
    <DashboardShell title="Discounts" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/discounts">
      <div className="mb-6 grid gap-3 rounded-2xl border border-line bg-white/80 p-5 sm:grid-cols-5">
        <input placeholder="Title" className="rounded-lg border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick sm:col-span-2" />
        <input placeholder="Code" className="rounded-lg border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
        <input placeholder="%" type="number" className="rounded-lg border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
        <input placeholder="Expiry" type="date" className="rounded-lg border border-line bg-cream-dim px-3 py-2 text-sm outline-none focus:border-brick" />
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brick bg-transparent px-4 py-2 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream sm:col-span-5">
          <Plus size={16} /> Add discount
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {discounts.map((d) => (
          <div key={d.id} className="flex items-start justify-between rounded-2xl border border-line bg-white/80 p-5">
            <div>
              <p className="text-sm font-semibold">{d.title}</p>
              <p className="mt-1 font-display text-xl font-semibold text-brick">{d.percentage}% — {d.code}</p>
              <p className="mt-1 text-xs text-espresso-soft">Expires {d.expiry}</p>
            </div>
            <button onClick={() => remove(d.id)}><Trash2 size={16} className="text-espresso-soft hover:text-brick" /></button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
