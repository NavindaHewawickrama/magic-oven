"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { RotateCw, Camera, ArrowRight } from "lucide-react";
import {
  CakeConfig, defaultConfig, shapes, flavors, creams, decorations, toppings, colorPalette,
} from "@/lib/builder-types";
import { whatsappOrderLink } from "@/lib/mock-data";
import WhatsAppButton from "@/components/whatsapp-button";

const CakeScene = dynamic(() => import("@/components/cake-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-espresso-soft">
      Loading 3D preview…
    </div>
  ),
});

// Wrapper component to forward ref to the dynamically imported CakeScene
function CakeSceneWithRef({ config, ref }: { config: CakeConfig; ref: React.Ref<HTMLCanvasElement> }) {
  return <CakeScene config={config} ref={ref} />;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Pills<T extends string>({
  options, value, onChange,
}: { options: T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            value === opt ? "border-brick bg-brick text-cream" : "border-line text-espresso-soft hover:border-brick"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function BuilderPage() {
  const [config, setConfig] = useState<CakeConfig>(defaultConfig);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const update = <K extends keyof CakeConfig>(key: K, value: CakeConfig[K]) =>
    setConfig((c) => ({ ...c, [key]: value }));

  const takeScreenshot = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setScreenshot(dataUrl);
    // In production: upload `dataUrl` to Supabase Storage here and use the
    // returned public URL in the WhatsApp message instead of the raw data URL.
  };

  const message = [
    "Hello, I would like this custom cake:",
    "",
    `Shape: ${config.shape}`,
    `Levels (tiers): ${config.levels}`,
    `Layers per tier: ${config.layers}`,
    `Flavor: ${config.flavor}`,
    `Cream: ${config.cream}`,
    `Decoration: ${config.decoration}`,
    `Topping: ${config.topping}`,
    "",
    screenshot ? "Screenshot URL: [attach the downloaded image]" : "(No screenshot attached yet)",
    "",
    "Name:",
    "Phone:",
  ].join("\n");

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="eyebrow">Cake Builder</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Design your own cake</h1>
      <p className="mt-3 max-w-xl text-espresso-soft">
        Choose your options below — the preview updates instantly. Rotate and zoom with your
        mouse or finger, then screenshot it and send it straight to us on WhatsApp.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* 3D canvas */}
        <div className="order-2 lg:order-1">
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-cream-dim to-white/90 md:h-[560px]">
            <CakeSceneWithRef config={config} ref={canvasRef} />
            <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-espresso/80 px-3 py-1.5 text-xs text-cream">
              <RotateCw size={12} /> Drag to rotate · scroll to zoom
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={takeScreenshot}
              className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-5 py-2.5 text-sm font-semibold text-espresso hover:border-peach-dark hover:text-peach-dark"
            >
              <Camera size={16} /> Take screenshot
            </button>
            {screenshot && (
              <span className="text-xs text-sage">Screenshot captured ✓ ready to send</span>
            )}
          </div>

          {screenshot && (
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={screenshot} alt="Your custom cake screenshot" className="h-24 w-24 rounded-xl border border-line object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Looks great!</p>
                <p className="text-xs text-espresso-soft">
                  Download this image, then attach it in WhatsApp along with the message we've prefilled for you.
                </p>
              </div>
              <a
                href={screenshot}
                download="my-custom-cake.png"
                className="rounded-full bg-espresso px-4 py-2 text-xs font-semibold text-cream"
              >
                Download
              </a>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="order-1 space-y-6 lg:order-2">
          <Field label="1. Shape"><Pills options={shapes} value={config.shape} onChange={(v) => update("shape", v)} /></Field>

          <Field label="2. Levels (tiers)">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => update("levels", n)}
                  className={`h-9 w-9 rounded-full border text-sm font-semibold transition ${
                    config.levels === n ? "border-brick bg-brick text-cream" : "border-line text-espresso-soft hover:border-brick"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </Field>

          <Field label="3. Layers per tier">
            <div className="flex gap-2">
              {[2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => update("layers", n)}
                  className={`h-9 w-9 rounded-full border text-sm font-semibold transition ${
                    config.layers === n ? "border-brick bg-brick text-cream" : "border-line text-espresso-soft hover:border-brick"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </Field>

          <Field label="4. Flavor"><Pills options={flavors} value={config.flavor} onChange={(v) => update("flavor", v)} /></Field>
          <Field label="5. Cream"><Pills options={creams} value={config.cream} onChange={(v) => update("cream", v)} /></Field>

          <Field label="6. Color">
            <div className="flex flex-wrap gap-2">
              {colorPalette.map((c) => (
                <button
                  key={c}
                  onClick={() => update("color", c)}
                  aria-label={`Color ${c}`}
                  className={`h-8 w-8 rounded-full border-2 transition ${config.color === c ? "border-brick" : "border-white"}`}
                  style={{ backgroundColor: c, boxShadow: "0 0 0 1px #E1D3B8" }}
                />
              ))}
            </div>
          </Field>

          <Field label="7. Decorations"><Pills options={decorations} value={config.decoration} onChange={(v) => update("decoration", v)} /></Field>
          <Field label="8. Toppings"><Pills options={toppings} value={config.topping} onChange={(v) => update("topping", v)} /></Field>

          <div className="rounded-2xl border border-line bg-white/80 p-4">
            <WhatsAppButton href={whatsappOrderLink(message)} label="Send this cake to WhatsApp" full />
            <p className="mt-2 flex items-center gap-1 text-center text-xs text-espresso-soft">
              <ArrowRight size={12} /> Take a screenshot first so you can attach it in the chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
