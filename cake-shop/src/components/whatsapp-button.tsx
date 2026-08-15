import { Message01Icon } from "hugeicons-react";

export default function WhatsAppButton({
  href,
  label = "Order on WhatsApp",
  full = false,
}: {
  href: string;
  label?: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-peach-dark bg-transparent px-5 py-2.5 text-sm font-semibold text-peach-dark transition hover:bg-peach hover:text-espresso ${
        full ? "w-full" : ""
      }`}
    >
      <Message01Icon size={16} />
      {label}
    </a>
  );
}
