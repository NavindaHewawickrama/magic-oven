import {
  LayoutGrid, Cake, Image as ImageIcon, Megaphone, Tag, MessageSquare,
  Users, Settings, Images, Search,
} from "lucide-react";
import { NavItem } from "@/components/dashboard-shell";

export const adminNav: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutGrid },
  { href: "/admin/products", label: "Products", icon: Cake },
  { href: "/admin/hero-banner", label: "Hero Banner", icon: ImageIcon },
  { href: "/admin/notices", label: "Notices", icon: Megaphone },
  { href: "/admin/discounts", label: "Discounts", icon: Tag },
  { href: "/admin/feedback", label: "Feedback", icon: MessageSquare },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/media-library", label: "Media Library", icon: Images },
  { href: "/admin/seo", label: "SEO", icon: Search },
  { href: "/admin/settings", label: "Settings & Logo", icon: Settings },
];
