import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import WhatsAppButton from "./whatsapp-button";

const rows = [
  { icon: Phone, label: "Phone", value: businessSettings.phone },
  { icon: Mail, label: "Email", value: businessSettings.email },
  { icon: Clock, label: "Hours", value: businessSettings.hours },
  { icon: MapPin, label: "Address", value: businessSettings.address },
];

export default function ContactBlock() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white/80 p-6">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3">
            <r.icon size={18} className="mt-0.5 shrink-0 text-brick" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">{r.label}</p>
              <p className="text-sm text-espresso">{r.value}</p>
            </div>
          </div>
        ))}
        <WhatsAppButton
          href={whatsappOrderLink("Hello! I have a question about your cakes.")}
          label="Chat with us on WhatsApp"
          full
        />
      </div>
      <div className="flex h-full min-h-56 items-center justify-center rounded-2xl bg-cream-dim text-sm text-espresso-soft">
        📍 Map placeholder — embed Google Maps here
      </div>
    </div>
  );
}
