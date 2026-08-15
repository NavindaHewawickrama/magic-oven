"use client";

import { Mail01Icon, Globe02Icon, TelephoneIcon, MapPinIcon } from "hugeicons-react";
import { businessSettings, whatsappOrderLink } from "@/lib/mock-data";
import WhatsAppButton from "./whatsapp-button";

const infoRows = [
  { icon: Mail01Icon, label: "Email Us", value: businessSettings.email },
  { icon: Globe02Icon, label: "Our Website", value: "sweetlayers.lk" },
  { icon: TelephoneIcon, label: "Call Us", value: businessSettings.phone },
  { icon: MapPinIcon, label: "Our Location", value: businessSettings.address },
];

const fields = [
  { name: "name", label: "Name", placeholder: "Input your name", type: "text" },
  { name: "email", label: "Email", placeholder: "Input your email address", type: "email" },
  { name: "subject", label: "Subject", placeholder: "Input your subject", type: "text" },
];

export default function ContactBlock() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="eyebrow">{f.label}</span>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="mt-1.5 w-full rounded-lg border border-brick-soft/50 bg-cream px-4 py-2.5 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
            />
          </label>
        ))}
        <label className="block">
          <span className="eyebrow">Message</span>
          <textarea
            rows={4}
            placeholder="Input your message"
            className="mt-1.5 w-full resize-none rounded-2xl border border-brick-soft/50 bg-cream px-4 py-3 text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-brick"
          />
        </label>
        <button
          type="submit"
          className="self-start rounded-lg border border-brick bg-transparent px-6 py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream"
        >
          Send message
        </button>
      </form>

      <div>
        <p className="eyebrow">Contact Us</p>
        <h3 className="mt-1 font-display text-3xl font-semibold text-brick">Get in Touch</h3>
        <p className="mt-3 max-w-sm text-sm text-espresso">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
          {infoRows.map((r) => (
            <div key={r.label} className="flex items-start gap-2.5">
              <r.icon size={18} className="mt-0.5 shrink-0 text-brick" />
              <div>
                <p className="text-sm font-semibold text-espresso-soft">{r.label}</p>
                <p className="text-xs text-espresso">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-espresso-soft">Our social media</p>
        <div className="mt-2 flex gap-2.5">
          {["📷", "🐦", "👍", "✕"].map((emoji, i) => (
            <span
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brick text-sm text-cream"
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <WhatsAppButton
            href={whatsappOrderLink("Hello! I have a question about your cakes.")}
            label="Chat with us on WhatsApp"
          />
        </div>
      </div>
    </div>
  );
}
