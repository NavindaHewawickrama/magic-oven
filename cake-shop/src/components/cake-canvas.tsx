"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { CakeConfig, PlacedSticker } from "@/lib/builder-types";
import StickerArt from "./sticker-art";

export const VIEW_W = 240;
export const VIEW_H = 300;
const CENTER_X = VIEW_W / 2;
const TIER_HEIGHT = 42;
const BASE_HALF_WIDTH = 76;
const ICING_HEIGHT = 15;

// --- color helpers (hex <-> hsl, no external deps) ---
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r: h = ((g - b) / d) % 6; break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Lighten (positive) or darken (negative) a hex color by a delta in [-1, 1]. */
function shade(hex: string, delta: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.min(1, Math.max(0, l + delta)));
}

function heartTierPath(cx: number, topY: number, halfWidth: number, height: number) {
  const w = halfWidth;
  const midY = topY + height * 0.22;
  const bottomY = topY + height;
  return `M ${cx} ${midY}
    C ${cx - w} ${topY - height * 0.15}, ${cx - w * 1.3} ${topY + height * 0.55}, ${cx} ${bottomY}
    C ${cx + w * 1.3} ${topY + height * 0.55}, ${cx + w} ${topY - height * 0.15}, ${cx} ${midY} Z`;
}

function dripBlobPath(cx: number, topY: number, length: number, width: number) {
  const bottomY = topY + length;
  return `M ${cx - width} ${topY}
    C ${cx - width} ${topY + length * 0.5}, ${cx - width * 0.3} ${bottomY}, ${cx} ${bottomY}
    C ${cx + width * 0.3} ${bottomY}, ${cx + width} ${topY + length * 0.5}, ${cx + width} ${topY} Z`;
}

type Tier = { halfWidth: number; topY: number; height: number };

/** Turns a hex color into a safe, stable SVG id fragment. */
function colorId(hex: string) {
  return hex.replace("#", "");
}

function BodyGradient({ color }: { color: string }) {
  return (
    <linearGradient id={`body-grad-${colorId(color)}`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor={shade(color, -0.14)} />
      <stop offset="42%" stopColor={color} />
      <stop offset="62%" stopColor={shade(color, 0.09)} />
      <stop offset="100%" stopColor={shade(color, -0.08)} />
    </linearGradient>
  );
}

function TierShape({
  shape, cx, topY, halfWidth, height, color, isTopMost,
}: {
  shape: CakeConfig["shape"];
  cx: number;
  topY: number;
  halfWidth: number;
  height: number;
  color: string;
  isTopMost: boolean;
}) {
  const fill = `url(#body-grad-${colorId(color)})`;
  const edge = shade(color, -0.2);

  if (shape === "Round") {
    const ry = halfWidth * 0.2;
    return (
      <>
        <ellipse cx={cx} cy={topY + height} rx={halfWidth} ry={ry} fill={shade(color, -0.12)} />
        <rect x={cx - halfWidth} y={topY} width={halfWidth * 2} height={height} fill={fill} />
        {!isTopMost && (
          <ellipse cx={cx} cy={topY} rx={halfWidth} ry={ry} fill={shade(color, -0.05)} opacity={0.5} />
        )}
        <ellipse cx={cx} cy={topY} rx={halfWidth} ry={ry} fill={shade(color, 0.09)} />
        <ellipse cx={cx} cy={topY} rx={halfWidth} ry={ry} fill="none" stroke={edge} strokeWidth={0.6} opacity={0.35} />
      </>
    );
  }
  if (shape === "Square") {
    return (
      <>
        <rect x={cx - halfWidth} y={topY} width={halfWidth * 2} height={height} rx={12} fill={fill} stroke={edge} strokeWidth={0.6} strokeOpacity={0.25} />
        <rect x={cx - halfWidth + 3} y={topY + 2} width={halfWidth * 2 - 6} height={Math.min(8, height * 0.3)} rx={8} fill={shade(color, 0.14)} opacity={0.45} />
        {!isTopMost && (
          <rect x={cx - halfWidth} y={topY + height - 4} width={halfWidth * 2} height={4} rx={2} fill={shade(color, -0.1)} opacity={0.4} />
        )}
      </>
    );
  }
  return (
    <path
      d={heartTierPath(cx, topY, halfWidth, height)}
      fill={fill}
      stroke={edge}
      strokeWidth={0.7}
      strokeOpacity={0.3}
    />
  );
}

function CakeBody({ config }: { config: CakeConfig }) {
  const { shape, levels, color } = config;

  const tiers: Tier[] = [];
  const boardY = levels * TIER_HEIGHT + 26;
  for (let i = 0; i < levels; i++) {
    const halfWidth = BASE_HALF_WIDTH - i * (BASE_HALF_WIDTH / (levels + 1.6));
    const topY = boardY - (i + 1) * TIER_HEIGHT;
    tiers.push({ halfWidth, topY, height: TIER_HEIGHT });
  }

  const top = tiers[tiers.length - 1];
  const icingColor = "#FBF3E4";
  const boardHalfWidth = tiers[0].halfWidth + 22;

  return (
    <g>
      <defs>
        <BodyGradient color={color} />
        <BodyGradient color={icingColor} />
        <radialGradient id="board-sheen" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="100%" stopColor="#EFE3CB" />
        </radialGradient>
        <filter id="cake-soft-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx={CENTER_X} cy={boardY + 10} rx={boardHalfWidth + 6} ry={9} fill="#4a2b25" opacity={0.16} filter="url(#cake-soft-shadow)" />
      {/* cake board */}
      <ellipse cx={CENTER_X} cy={boardY} rx={boardHalfWidth} ry={11} fill="#EFE3CB" stroke="#E1D3B8" strokeWidth={1} />
      <ellipse cx={CENTER_X} cy={boardY - 3} rx={boardHalfWidth} ry={11} fill="url(#board-sheen)" />

      {tiers.map((t, i) => (
        <TierShape
          key={i}
          shape={shape}
          cx={CENTER_X}
          topY={t.topY}
          halfWidth={t.halfWidth}
          height={t.height}
          color={color}
          isTopMost={i === tiers.length - 1}
        />
      ))}

      {/* icing cap + drips on the top tier only */}
      {top && (
        <>
          <TierShape
            shape={shape}
            cx={CENTER_X}
            topY={top.topY - ICING_HEIGHT}
            halfWidth={top.halfWidth}
            height={ICING_HEIGHT}
            color={icingColor}
            isTopMost
          />
          {Array.from({ length: 9 }).map((_, i) => {
            const x = CENTER_X - top.halfWidth * 0.85 + (i / 8) * top.halfWidth * 1.7;
            const len = 10 + ((i * 37) % 15);
            return (
              <path
                key={i}
                d={dripBlobPath(x, top.topY, len, 6.5)}
                fill={icingColor}
                stroke={shade(icingColor, -0.08)}
                strokeWidth={0.4}
                strokeOpacity={0.4}
              />
            );
          })}
        </>
      )}
    </g>
  );
}

function clientToSvgPoint(svg: SVGSVGElement, clientX: number, clientY: number) {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const transformed = pt.matrixTransform(ctm.inverse());
  return { x: transformed.x, y: transformed.y };
}

function DraggableSticker({
  sticker, svgRef, selected, onSelect, onMove, onDelete,
}: {
  sticker: PlacedSticker;
  svgRef: React.RefObject<SVGSVGElement | null>;
  selected: boolean;
  onSelect: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onDelete: (id: string) => void;
}) {
  const dragOffset = useRef({ dx: 0, dy: 0 });
  const dragging = useRef(false);

  function handlePointerDown(e: React.PointerEvent<SVGGElement>) {
    e.stopPropagation();
    const svg = svgRef.current;
    if (!svg) return;
    const p = clientToSvgPoint(svg, e.clientX, e.clientY);
    dragOffset.current = { dx: p.x - sticker.x, dy: p.y - sticker.y };
    dragging.current = true;
    onSelect(sticker.id);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<SVGGElement>) {
    if (!dragging.current) return;
    const svg = svgRef.current;
    if (!svg) return;
    const p = clientToSvgPoint(svg, e.clientX, e.clientY);
    const x = Math.min(VIEW_W - 4, Math.max(4, p.x - dragOffset.current.dx));
    const y = Math.min(VIEW_H - 4, Math.max(4, p.y - dragOffset.current.dy));
    onMove(sticker.id, x, y);
  }

  function handlePointerUp() {
    dragging.current = false;
  }

  return (
    <g
      transform={`translate(${sticker.x} ${sticker.y}) scale(${sticker.scale})`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      <StickerArt kind={sticker.kind} />
      {selected && (
        <>
          <circle r={18} fill="none" stroke="#EF5F80" strokeDasharray="3 3" strokeWidth={1} />
          <g
            transform="translate(14, -14)"
            onPointerDown={(e) => {
              e.stopPropagation();
              onDelete(sticker.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <circle r={7} fill="#EF5F80" />
            <line x1={-3} y1={-3} x2={3} y2={3} stroke="#fff" strokeWidth={1.4} strokeLinecap="round" />
            <line x1={3} y1={-3} x2={-3} y2={3} stroke="#fff" strokeWidth={1.4} strokeLinecap="round" />
          </g>
        </>
      )}
    </g>
  );
}

export type CakeCanvasHandle = { getSvg: () => SVGSVGElement | null };

const CakeCanvas = forwardRef<CakeCanvasHandle, {
  config: CakeConfig;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onStickerMove: (id: string, x: number, y: number) => void;
  onStickerDelete: (id: string) => void;
}>(function CakeCanvas({ config, selectedId, onSelect, onStickerMove, onStickerDelete }, ref) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useImperativeHandle(ref, () => ({ getSvg: () => svgRef.current }));

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="h-full w-full"
      role="img"
      aria-label="Cake preview"
      onPointerDown={() => onSelect(null)}
    >
      <CakeBody config={config} />
      {config.stickers.map((s) => (
        <DraggableSticker
          key={s.id}
          sticker={s}
          svgRef={svgRef}
          selected={selectedId === s.id}
          onSelect={onSelect}
          onMove={onStickerMove}
          onDelete={onStickerDelete}
        />
      ))}
    </svg>
  );
});

export default CakeCanvas;
