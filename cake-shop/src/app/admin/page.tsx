import { Cake, MessageSquare, Users, TrendingUp } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { products, generalFeedback, reviews } from "@/lib/mock-data";

export const metadata = { title: "Admin Dashboard — Sweet Layers Cake Studio" };

const stats = [
  { label: "Live products", value: products.filter((p) => p.inStock).length, icon: Cake },
  { label: "Pending feedback", value: generalFeedback.filter((f) => !f.approved).length + reviews.filter((r) => !r.approved).length, icon: MessageSquare },
  { label: "Registered customers", value: 148, icon: Users },
  { label: "Avg. rating", value: "4.8", icon: TrendingUp },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell title="Overview" subtitle="Admin CMS" nav={adminNav} activeHref="/admin">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-white/80 p-5">
            <s.icon className="text-peach-dark" size={18} />
            <p className="mt-3 font-display text-2xl font-semibold">{s.value}</p>
            <p className="text-sm text-espresso-soft">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-white/80 p-6">
        <p className="font-display text-lg font-semibold">Quick actions</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/admin/products" className="rounded-full bg-brick px-4 py-2 text-sm font-semibold text-cream">+ Add a product</a>
          <a href="/admin/notices" className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-espresso-soft">Post a notice</a>
          <a href="/admin/feedback" className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-espresso-soft">Review feedback</a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-line bg-cream-dim/70 p-5 text-sm text-espresso">
        Analytics (Google Analytics / Search Console / Microsoft Clarity) will be embedded here
        once connected — see Section 12 & 26 of the architecture documentation.
      </div>
    </DashboardShell>
  );
}
