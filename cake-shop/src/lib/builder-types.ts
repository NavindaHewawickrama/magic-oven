export type Shape = "Round" | "Square" | "Heart";
export type Decoration = "None" | "Drip" | "Flowers" | "Pearls";
export type Topping = "None" | "Candles" | "Fresh Fruit" | "Macarons";

export type CakeConfig = {
  shape: Shape;
  levels: number; // number of stacked tiers
  layers: number; // sponge layers per tier (visual banding)
  flavor: string;
  cream: string;
  color: string;
  decoration: Decoration;
  topping: Topping;
};

export const defaultConfig: CakeConfig = {
  shape: "Round",
  levels: 2,
  layers: 3,
  flavor: "Vanilla Bean",
  cream: "Buttercream",
  color: "#F4D9C6",
  decoration: "Drip",
  topping: "Candles",
};

export const shapes: Shape[] = ["Round", "Square", "Heart"];
export const flavors = ["Vanilla Bean", "Chocolate Fudge", "Red Velvet", "Lemon", "Carrot", "Pistachio"];
export const creams = ["Buttercream", "Cream Cheese", "Ganache", "Whipped Cream"];
export const decorations: Decoration[] = ["None", "Drip", "Flowers", "Pearls"];
export const toppings: Topping[] = ["None", "Candles", "Fresh Fruit", "Macarons"];
export const colorPalette = [
  "#F4D9C6", "#F7C6CF", "#C9E4CA", "#B7D3F2", "#E9D5FF", "#FFFFFF", "#5B3A29", "#F2E1B0",
];
