import { MessageCircle } from "lucide-react";

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
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-cream transition hover:brightness-110 ${
        full ? "w-full" : ""
      }`}
    >
      <MessageCircle size={16} />
      {label}
    </a>
  );
}
