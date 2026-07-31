import { StickerKind } from "@/lib/builder-types";

// Math.cos/Math.sin can differ in their last float bit between server and
// client JS engines; rounding keeps SSR and client markup identical.
function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function heartPath(size: number) {
  const w = size;
  return `M 0 ${size * 0.35}
    C ${-w} ${-size * 0.5}, ${-w * 1.05} ${size * 0.55}, 0 ${size * 1.15}
    C ${w * 1.05} ${size * 0.55}, ${w} ${-size * 0.5}, 0 ${size * 0.35} Z`;
}

/** Centered flat-illustration icon for a single sticker kind, ~28x28 units. */
export default function StickerArt({ kind }: { kind: StickerKind }) {
  switch (kind) {
    case "heart":
      return (
        <g transform="translate(0, -8)">
          <path d={heartPath(12)} fill="#E8607A" stroke="#C94360" strokeWidth={1} />
        </g>
      );

    case "flower":
      return (
        <g>
          {Array.from({ length: 5 }).map((_, p) => {
            const angle = (p / 5) * Math.PI * 2;
            const cx = round(Math.cos(angle) * 7);
            const cy = round(Math.sin(angle) * 7);
            const deg = round((angle * 180) / Math.PI);
            return (
              <ellipse
                key={p}
                cx={cx}
                cy={cy}
                rx={6.5}
                ry={4.2}
                transform={`rotate(${deg} ${cx} ${cy})`}
                fill={p % 2 === 0 ? "#EE8FA6" : "#F7C6D6"}
                stroke="#D97891"
                strokeWidth={0.5}
              />
            );
          })}
          <circle r={4.2} fill="#F2C25C" stroke="#D9A73E" strokeWidth={0.5} />
        </g>
      );

    case "macaron":
      return (
        <g>
          <ellipse cy={-4} rx={11} ry={6} fill="#EBB8D3" stroke="#D896BC" strokeWidth={0.7} />
          <rect x={-11} y={-4} width={22} height={4} fill="#F7EAC8" />
          <ellipse cy={4} rx={11} ry={6} fill="#EBB8D3" stroke="#D896BC" strokeWidth={0.7} />
        </g>
      );

    case "strawberry":
      return (
        <g>
          <path
            d="M 0 -3 C 8 -3 11 6 6 12 C 3 16 -3 16 -6 12 C -11 6 -8 -3 0 -3 Z"
            fill="#D8483F"
            stroke="#B23A32"
            strokeWidth={0.7}
          />
          {[-3, 0, 3].map((dx, i) => (
            <circle key={i} cx={dx} cy={4 + (i % 2)} r={0.8} fill="#F7D9C4" />
          ))}
          <path d="M -5 -3 L 0 -8 L 5 -3 L 0 -5 Z" fill="#6FAE6A" />
        </g>
      );

    case "candle":
      return (
        <g>
          <rect x={-2.4} y={-2} width={4.8} height={16} rx={1.4} fill="#F2E1B0" stroke="#D9C48B" strokeWidth={0.5} />
          <rect x={-2.4} y={2} width={4.8} height={3} fill="#E8607A" opacity={0.5} />
          <ellipse cx={0} cy={-7} rx={3.4} ry={5} fill="#F2A65A" />
          <ellipse cx={0} cy={-6} rx={1.6} ry={2.6} fill="#FCE0A8" />
        </g>
      );

    case "pearls":
      return (
        <g>
          {[-8, 0, 8].map((dx, i) => (
            <circle key={i} cx={dx} cy={0} r={4} fill="#FFFFFF" stroke="#E7D9C4" strokeWidth={0.6} />
          ))}
        </g>
      );

    case "sprinkles":
    default:
      return (
        <g>
          {[
            { x: -8, y: -6, r: 30, c: "#E8607A" },
            { x: -2, y: 6, r: -20, c: "#5FB894" },
            { x: 6, y: -4, r: 60, c: "#F2C25C" },
            { x: 2, y: -8, r: -50, c: "#7BA7E0" },
            { x: -6, y: 5, r: 10, c: "#D896BC" },
          ].map((s, i) => (
            <rect
              key={i}
              x={s.x - 4}
              y={s.y - 1.2}
              width={8}
              height={2.4}
              rx={1.2}
              fill={s.c}
              transform={`rotate(${s.r} ${s.x} ${s.y})`}
            />
          ))}
        </g>
      );
  }
}
