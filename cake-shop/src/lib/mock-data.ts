export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Birthday" | "Wedding" | "Cupcakes" | "Seasonal" | "Custom";
  price: number;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  description: string;
  ingredients: string[];
  flavor: string;
  weight: string;
  featured?: boolean;
  popular?: boolean;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "classic-carrot-cake",
    name: "Classic Carrot Cake",
    category: "Birthday",
    price: 4200,
    rating: 4.8,
    reviewCount: 32,
    thumbnail: "🥕",
    description: "A moist spiced carrot cake layered with tangy cream-cheese frosting and toasted walnuts.",
    ingredients: ["Carrot", "Walnut", "Cream cheese", "Cinnamon", "Free-range eggs"],
    flavor: "Spiced carrot & cream cheese",
    weight: "1.5 kg",
    featured: true,
    popular: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "midnight-chocolate-fudge",
    name: "Midnight Chocolate Fudge",
    category: "Birthday",
    price: 4800,
    rating: 4.9,
    reviewCount: 54,
    thumbnail: "🍫",
    description: "Dark cocoa sponge, whipped ganache and a molten fudge core. Our best-seller, for good reason.",
    ingredients: ["Belgian cocoa", "Dark chocolate", "Butter", "Free-range eggs"],
    flavor: "Dark chocolate fudge",
    weight: "2 kg",
    featured: true,
    popular: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "rose-pistachio-wedding-tier",
    name: "Rose & Pistachio Wedding Tier",
    category: "Wedding",
    price: 18500,
    rating: 5.0,
    reviewCount: 12,
    thumbnail: "🌹",
    description: "A three-tier centerpiece finished in hand-piped buttercream rosettes and crushed pistachio.",
    ingredients: ["Pistachio", "Rosewater", "Almond flour", "Vanilla bean"],
    flavor: "Rose & pistachio",
    weight: "5 kg (serves 60)",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "salted-caramel-cupcakes",
    name: "Salted Caramel Cupcakes (Box of 6)",
    category: "Cupcakes",
    price: 2100,
    rating: 4.7,
    reviewCount: 41,
    thumbnail: "🧁",
    description: "Brown-butter cupcakes filled with salted caramel, topped with a caramel Swiss meringue swirl.",
    ingredients: ["Brown butter", "Sea salt", "Caramel", "Vanilla"],
    flavor: "Salted caramel",
    weight: "6 pcs",
    popular: true,
    inStock: true,
  },
  {
    id: "5",
    slug: "mango-passionfruit-summer-cake",
    name: "Mango Passionfruit Summer Cake",
    category: "Seasonal",
    price: 5200,
    rating: 4.6,
    reviewCount: 19,
    thumbnail: "🥭",
    description: "Light chiffon layers, mango curd, passionfruit cream and fresh seasonal fruit.",
    ingredients: ["Mango", "Passionfruit", "Chiffon sponge", "Fresh cream"],
    flavor: "Mango & passionfruit",
    weight: "1.8 kg",
    inStock: true,
  },
  {
    id: "6",
    slug: "red-velvet-classic",
    name: "Red Velvet Classic",
    category: "Birthday",
    price: 4500,
    rating: 4.8,
    reviewCount: 63,
    thumbnail: "❤️",
    description: "Cocoa-kissed red velvet sponge with silky cream-cheese frosting between every layer.",
    ingredients: ["Cocoa", "Buttermilk", "Cream cheese", "Vanilla"],
    flavor: "Red velvet & cream cheese",
    weight: "1.5 kg",
    popular: true,
    inStock: true,
  },
  {
    id: "7",
    slug: "lemon-elderflower-cake",
    name: "Lemon Elderflower Cake",
    category: "Seasonal",
    price: 4600,
    rating: 4.5,
    reviewCount: 15,
    thumbnail: "🍋",
    description: "Zesty lemon sponge soaked in elderflower syrup with a light mascarpone frosting.",
    ingredients: ["Lemon", "Elderflower cordial", "Mascarpone"],
    flavor: "Lemon & elderflower",
    weight: "1.5 kg",
    inStock: false,
  },
  {
    id: "8",
    slug: "build-your-own",
    name: "Build Your Own Cake",
    category: "Custom",
    price: 0,
    rating: 5.0,
    reviewCount: 88,
    thumbnail: "🎂",
    description: "Design your own cake from scratch in our interactive 3D builder — shape, flavor, colors and all.",
    ingredients: ["Your choice"],
    flavor: "Your choice",
    weight: "Varies",
    inStock: true,
  },
];

export type Review = {
  id: string;
  productSlug: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  approved: boolean;
};

export const reviews: Review[] = [
  { id: "r1", productSlug: "classic-carrot-cake", author: "Nadeesha P.", rating: 5, comment: "This is genuinely the best carrot cake I have had in Ratnapura — not too sweet and beautifully moist.", date: "2026-06-14", approved: true },
  { id: "r2", productSlug: "classic-carrot-cake", author: "Kasun W.", rating: 4, comment: "Loved the walnuts on top, would order again for my mother's birthday.", date: "2026-05-02", approved: true },
  { id: "r3", productSlug: "midnight-chocolate-fudge", author: "Ishara D.", rating: 5, comment: "The fudge core is unreal. Ordered for a work event and everyone asked where it was from.", date: "2026-06-28", approved: true },
  { id: "r4", productSlug: "red-velvet-classic", author: "Tharindu S.", rating: 5, comment: "Classic done right. The cream cheese frosting is perfectly balanced.", date: "2026-04-20", approved: true },
];

export type GeneralFeedback = {
  id: string;
  author: string;
  comment: string;
  reply?: string;
  date: string;
  approved: boolean;
};

export const generalFeedback: GeneralFeedback[] = [
  { id: "g1", author: "Ruwani K.", comment: "This cake house is really good — the online builder made ordering my daughter's birthday cake so easy!", reply: "Thank you so much, Ruwani! We loved building it with you. 💛", date: "2026-06-30", approved: true },
  { id: "g2", author: "Chamara J.", comment: "Great communication over WhatsApp, cake arrived exactly as pictured in the 3D builder.", date: "2026-06-18", approved: true },
  { id: "g3", author: "Sanduni F.", comment: "Would love to see more vegan options in the future!", date: "2026-06-02", approved: true },
];

export const notices = [
  { id: "n1", message: "🎉 Eid special: 10% off all wedding tiers, booked before July 20th.", active: true },
];

export const discounts = [
  { id: "d1", title: "Welcome Discount", code: "WELCOME10", percentage: 10, expiry: "2026-12-31" },
  { id: "d2", title: "Loyalty Reward", code: "SWEET15", percentage: 15, expiry: "2026-09-30" },
];

export const businessSettings = {
  businessName: "Sweet Layers Cake Studio",
  phone: "+94 71 234 5678",
  whatsapp: "+94712345678",
  email: "hello@sweetlayers.lk",
  hours: "Tue – Sun, 9:00 AM – 7:00 PM",
  address: "142 Main Street, Ratnapura, Sri Lanka",
};

export function whatsappOrderLink(text: string) {
  const phone = businessSettings.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
