import { LayoutGrid, MessageSquare, Tag, Heart, ShoppingBag } from "lucide-react";
import DashboardShell, { NavItem } from "@/components/dashboard-shell";
import { generalFeedback, discounts } from "@/lib/mock-data";

const nav: NavItem[] = [
  { href: "/account", label: "Dashboard", icon: LayoutGrid },
  { href: "/account/feedback", label: "My Feedback", icon: MessageSquare },
  { href: "/account/discounts", label: "My Discounts", icon: Tag },
];

export const metadata = { title: "My Account — Sweet Layers Cake Studio" };

export default function AccountPage() {
  return (
    <DashboardShell title="Welcome back, Amaya" subtitle="Customer dashboard" nav={nav} activeHref="/account">
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white/80 p-5">
          <MessageSquare className="text-brick" size={18} />
          <p className="mt-3 font-display text-2xl font-semibold">{generalFeedback.length}</p>
          <p className="text-sm text-espresso-soft">Feedback submitted</p>
        </div>
        <div className="rounded-2xl border border-line bg-white/80 p-5">
          <Tag className="text-brick" size={18} />
          <p className="mt-3 font-display text-2xl font-semibold">{discounts.length}</p>
          <p className="text-sm text-espresso-soft">Discounts available</p>
        </div>
        <div className="rounded-2xl border border-line bg-white/80 p-5 opacity-60">
          <ShoppingBag className="text-brick" size={18} />
          <p className="mt-3 font-display text-2xl font-semibold">Soon</p>
          <p className="text-sm text-espresso-soft">Order history (future)</p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-line bg-cream-dim/70 p-5 text-sm text-espresso">
        <Heart className="text-brick shrink-0" size={18} />
        A wishlist and order-tracking view are planned for a future release — see the roadmap in
        the project documentation.
      </div>
    </DashboardShell>
  );
}
