import { LayoutDashboard, MessageSquare, Percent, Heart, Package } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";

const nav = [
  { href: "/account", label: "Dashboard", icon: LayoutDashboard },
  { href: "/account/feedback", label: "My Feedback", icon: MessageSquare },
  { href: "/account/discounts", label: "My Discounts", icon: Percent },
  { href: "/account/wishlist", label: "Wishlist (soon)", icon: Heart },
  { href: "/account/orders", label: "My Orders (soon)", icon: Package },
];

export default function WishlistPage() {
  return (
    <DashboardShell title="Wishlist" subtitle="Customer dashboard" nav={nav} activeHref="/account/wishlist">
      <div className="rounded-2xl border border-dashed border-line bg-white/60 p-10 text-center text-sm text-espresso-soft">
        💛 Wishlists are coming in a future update — save your favorite cakes here for next time.
      </div>
    </DashboardShell>
  );
}
