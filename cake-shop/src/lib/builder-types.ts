export type Shape = "Round" | "Square" | "Heart";

export type StickerKind =
  | "heart"
  | "flower"
  | "macaron"
  | "strawberry"
  | "candle"
  | "pearls"
  | "sprinkles";

export type PlacedSticker = {
  id: string;
  kind: StickerKind;
  x: number; // position in the cake canvas's SVG coordinate space
  y: number;
  scale: number;
};

export type CakeConfig = {
  shape: Shape;
  levels: number; // number of stacked tiers
  flavor: string;
  cream: string;
  color: string;
  stickers: PlacedSticker[];
};

export const shapes: Shape[] = ["Round", "Square", "Heart"];
export const flavors = ["Vanilla Bean", "Chocolate Fudge", "Red Velvet", "Lemon", "Carrot", "Pistachio"];
export const creams = ["Buttercream", "Cream Cheese", "Ganache", "Whipped Cream"];
export const colorPalette = [
  "#F4A6B5", "#F7C6CF", "#F2A65A", "#C9E4CA", "#B7D3F2", "#E9D5FF", "#FFFFFF", "#5B3A29",
];

export const stickerCatalog: { kind: StickerKind; label: string }[] = [
  { kind: "heart", label: "Heart" },
  { kind: "flower", label: "Flower" },
  { kind: "macaron", label: "Macaron" },
  { kind: "strawberry", label: "Strawberry" },
  { kind: "candle", label: "Candle" },
  { kind: "pearls", label: "Pearls" },
  { kind: "sprinkles", label: "Sprinkles" },
];

export const defaultConfig: CakeConfig = {
  shape: "Round",
  levels: 1,
  flavor: "Vanilla Bean",
  cream: "Buttercream",
  color: "#F4A6B5",
  stickers: [
    { id: "s1", kind: "heart", x: 118, y: 92, scale: 1.1 },
    { id: "s2", kind: "macaron", x: 90, y: 120, scale: 1 },
    { id: "s3", kind: "macaron", x: 130, y: 128, scale: 0.9 },
    { id: "s4", kind: "strawberry", x: 168, y: 118, scale: 1 },
  ],
};
