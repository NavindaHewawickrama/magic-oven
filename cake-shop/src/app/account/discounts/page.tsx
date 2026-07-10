import { LayoutGrid, MessageSquare, Tag, Copy } from "lucide-react";
import DashboardShell, { NavItem } from "@/components/dashboard-shell";
import { discounts } from "@/lib/mock-data";

const nav: NavItem[] = [
  { href: "/account", label: "Dashboard", icon: LayoutGrid },
  { href: "/account/feedback", label: "My Feedback", icon: MessageSquare },
  { href: "/account/discounts", label: "My Discounts", icon: Tag },
];

export const metadata = { title: "My Discounts — Sweet Layers Cake Studio" };

export default function MyDiscountsPage() {
  return (
    <DashboardShell title="My Discounts" subtitle="Customer dashboard" nav={nav} activeHref="/account/discounts">
      <p className="mb-5 text-sm text-espresso-soft">
        These codes are exclusive to logged-in customers. Mention the code when you order on WhatsApp.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {discounts.map((d) => (
          <div key={d.id} className="rounded-2xl border border-dashed border-brick/40 bg-white/70 p-5">
            <p className="text-sm font-semibold">{d.title}</p>
            <p className="mt-1 font-display text-2xl font-semibold text-brick">{d.percentage}% off</p>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-cream-dim px-3 py-2">
              <span className="font-mono text-sm">{d.code}</span>
              <Copy size={14} className="text-espresso-soft" />
            </div>
            <p className="mt-2 text-xs text-espresso-soft">Expires {d.expiry}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
