"use client";

import { useRef, useState } from "react";
import { Camera01Icon, ArrowRight01Icon, Refresh01Icon, SparklesIcon } from "hugeicons-react";
import {
  CakeConfig, defaultConfig, shapes, flavors, creams, colorPalette, stickerCatalog, PlacedSticker, StickerKind,
} from "@/lib/builder-types";
import { whatsappOrderLink } from "@/lib/mock-data";
import WhatsAppButton from "@/components/whatsapp-button";
import CakeCanvas, { CakeCanvasHandle, VIEW_W } from "@/components/cake-canvas";
import StickerArt from "@/components/sticker-art";

function Field({ step, label, children }: { step: number; label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-espresso-soft">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-cream">
          {step}
        </span>
        {label}
      </p>
      <div className="mt-2.5 pl-7">{children}</div>
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
          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
            value === opt ? "border-brick bg-brick text-cream" : "border-line bg-cream text-espresso-soft hover:border-brick"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// Rasterizes the live SVG cake canvas into a PNG data URL for download / WhatsApp.
async function svgToPngDataUrl(svg: SVGSVGElement): Promise<string> {
  const { width, height } = svg.getBoundingClientRect();
  const w = Math.round(width) || 320;
  const h = Math.round(height) || 380;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("width", String(w));
  clone.setAttribute("height", String(h));

  const svgData = new XMLSerializer().serializeToString(clone);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = w * 2;
    canvas.height = h * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported");
    ctx.scale(2, 2);
    ctx.fillStyle = "#fdf1e0";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL("image/png");
  } finally {
    URL.revokeObjectURL(url);
  }
}

export default function BuilderPage() {
  const [config, setConfig] = useState<CakeConfig>(defaultConfig);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const canvasHandle = useRef<CakeCanvasHandle | null>(null);
  const stickerSeq = useRef(0);

  const update = <K extends keyof CakeConfig>(key: K, value: CakeConfig[K]) =>
    setConfig((c) => ({ ...c, [key]: value }));

  const addSticker = (kind: StickerKind) => {
    stickerSeq.current += 1;
    const seq = stickerSeq.current;
    const jitter = (seq % 5) * 8 - 16;
    const sticker: PlacedSticker = {
      id: `s-${seq}`,
      kind,
      x: VIEW_W / 2 + jitter,
      y: 90,
      scale: 1,
    };
    setConfig((c) => ({ ...c, stickers: [...c.stickers, sticker] }));
    setSelectedId(sticker.id);
  };

  const moveSticker = (id: string, x: number, y: number) => {
    setConfig((c) => ({
      ...c,
      stickers: c.stickers.map((s) => (s.id === id ? { ...s, x, y } : s)),
    }));
  };

  const deleteSticker = (id: string) => {
    setConfig((c) => ({ ...c, stickers: c.stickers.filter((s) => s.id !== id) }));
    setSelectedId(null);
  };

  const reset = () => {
    setConfig(defaultConfig);
    setSelectedId(null);
    setScreenshot(null);
  };

  const takeScreenshot = async () => {
    const svg = canvasHandle.current?.getSvg();
    if (!svg) return;
    // In production: upload the PNG to Supabase Storage here and use the
    // returned public URL in the WhatsApp message instead of the raw data URL.
    setSelectedId(null);
    const dataUrl = await svgToPngDataUrl(svg);
    setScreenshot(dataUrl);
  };

  const stickerCounts = config.stickers.reduce<Record<string, number>>((acc, s) => {
    acc[s.kind] = (acc[s.kind] ?? 0) + 1;
    return acc;
  }, {});

  const message = [
    "Hello, I would like this custom cake:",
    "",
    `Shape: ${config.shape}`,
    `Levels (tiers): ${config.levels}`,
    `Flavor: ${config.flavor}`,
    `Cream: ${config.cream}`,
    `Decorations: ${
      Object.entries(stickerCounts).map(([kind, n]) => `${n}x ${kind}`).join(", ") || "None"
    }`,
    "",
    screenshot ? "Screenshot URL: [attach the downloaded image]" : "(No screenshot attached yet)",
    "",
    "Name:",
    "Phone:",
  ].join("\n");

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="eyebrow">Cake Builder</p>
      <h1 className="mt-1 font-display text-4xl font-semibold text-espresso-soft">Design your own cake</h1>
      <p className="mt-3 max-w-xl text-espresso">
        Pick a shape, color and decorations below, then drag them straight onto the cake to
        arrange them exactly how you like. Screenshot it and send it to us on WhatsApp.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Cake preview */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-cream-dim to-white shadow-sm sm:h-[440px] md:h-[480px]">
            <div className="h-full w-full max-w-xs">
              <CakeCanvas
                ref={canvasHandle}
                config={config}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onStickerMove={moveSticker}
                onStickerDelete={deleteSticker}
              />
            </div>
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-medium text-espresso-soft shadow-sm">
              <SparklesIcon size={12} className="text-brick" /> Drag decorations to arrange
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={takeScreenshot}
              className="inline-flex items-center gap-2 rounded-lg border border-brick bg-transparent px-5 py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream"
            >
                <Camera01Icon size={16} /> Take screenshot
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-transparent px-4 py-2.5 text-sm font-semibold text-espresso-soft transition hover:border-brick hover:text-brick"
            >
                <Refresh01Icon size={14} /> Reset
            </button>
            {screenshot && (
              <span className="text-xs font-medium text-sage">Screenshot captured ✓ ready to send</span>
            )}
          </div>

          {screenshot && (
            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-cream p-4 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={screenshot} alt="Your custom cake screenshot" className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-espresso-soft">Looks great!</p>
                <p className="text-xs text-espresso">
                  Download this image, then attach it in WhatsApp along with the message we&apos;ve prefilled for you.
                </p>
              </div>
              <a
                href={screenshot}
                download="my-custom-cake.png"
                className="rounded-lg border border-espresso bg-transparent px-4 py-2 text-xs font-semibold text-espresso transition hover:bg-espresso hover:text-cream"
              >
                Download
              </a>
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-6 rounded-3xl bg-cream p-5 shadow-sm sm:p-6">
          <Field step={1} label="Shape"><Pills options={shapes} value={config.shape} onChange={(v) => update("shape", v)} /></Field>

          <Field step={2} label="Levels (tiers)">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => update("levels", n)}
                  className={`h-9 w-9 rounded-lg border text-sm font-semibold transition ${
                    config.levels === n ? "border-brick bg-brick text-cream" : "border-line bg-white text-espresso-soft hover:border-brick"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </Field>

          <Field step={3} label="Flavor"><Pills options={flavors} value={config.flavor} onChange={(v) => update("flavor", v)} /></Field>
          <Field step={4} label="Cream"><Pills options={creams} value={config.cream} onChange={(v) => update("cream", v)} /></Field>

          <Field step={5} label="Color">
            <div className="flex flex-wrap gap-2.5">
              {colorPalette.map((c) => (
                <button
                  key={c}
                  onClick={() => update("color", c)}
                  aria-label={`Color ${c}`}
                  className={`h-8 w-8 rounded-full border-2 transition ${config.color === c ? "border-brick scale-110" : "border-white"}`}
                  style={{ backgroundColor: c, boxShadow: "0 0 0 1px #E1D3B8" }}
                />
              ))}
            </div>
          </Field>

          <Field step={6} label="Decorations — tap to add, then drag on the cake">
            <div className="flex flex-wrap gap-2.5">
              {stickerCatalog.map((s) => (
                <button
                  key={s.kind}
                  onClick={() => addSticker(s.kind)}
                  aria-label={`Add ${s.label}`}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white transition hover:border-brick hover:bg-cream-dim/40"
                >
                  <svg viewBox="-16 -16 32 32" className="h-8 w-8">
                    <StickerArt kind={s.kind} />
                  </svg>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-espresso-soft">
              Tap a decoration to place it, then drag it into position. Select a placed piece and tap the × to remove it.
            </p>
          </Field>

          <div className="rounded-2xl bg-mint p-4">
            <WhatsAppButton href={whatsappOrderLink(message)} label="Send this cake to WhatsApp" full />
            <p className="mt-2 flex items-center justify-center gap-1 text-center text-xs text-espresso-soft">
                <ArrowRight01Icon size={12} /> Take a screenshot first so you can attach it in the chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
