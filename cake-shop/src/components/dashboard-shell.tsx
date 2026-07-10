import Link from "next/link";
import { LucideIcon } from "lucide-react";

export type NavItem = { href: string; label: string; icon: LucideIcon };

export default function DashboardShell({
  title, subtitle, nav, activeHref, children,
}: {
  title: string;
  subtitle: string;
  nav: NavItem[];
  activeHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div>
        <p className="eyebrow">{subtitle}</p>
        <h1 className="mt-1 font-display text-3xl font-semibold">{title}</h1>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
          {nav.map((item) => {
            const active = item.href === activeHref;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active ? "bg-brick text-cream" : "text-espresso-soft hover:bg-cream-dim"
                }`}
              >
                <Icon size={16} /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
