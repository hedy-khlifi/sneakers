export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: "sneakers" | "nba";
  tag?: "NEW" | "HOT" | "SALE" | "LIMITED";
  image: string;
  colorway: string;
  sizes: number[];
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ── Sneakers (90%) ──────────────────────────────
  {
    id: "sn-001",
    name: "Air Max 97 Silver Bullet",
    brand: "Nike",
    price: 189,
    category: "sneakers",
    tag: "HOT",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    colorway: "Metallic Silver / University Red",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description:
      "Inspired by the Japanese bullet train, full-length visible Air cushioning and metallic ripple detailing.",
    featured: true,
  },
  {
    id: "sn-002",
    name: "Ultra Boost 22",
    brand: "Adidas",
    price: 165,
    originalPrice: 220,
    category: "sneakers",
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    colorway: "Core Black / Cloud White",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description:
      "The ultimate running shoe reborn. Boost midsole returns energy with every step.",
    featured: true,
  },
  {
    id: "sn-003",
    name: "Jordan 1 Retro High OG",
    brand: "Jordan",
    price: 220,
    category: "sneakers",
    tag: "LIMITED",
    image: "https://images.pexels.com/photos/6664300/pexels-photo-6664300.png",
    colorway: "Chicago / Bred",
    sizes: [41, 42, 43, 44, 45],
    description:
      "The shoe that started it all. Original colorway, timeless silhouette.",
    featured: true,
  },
  {
    id: "sn-004",
    name: "New Balance 550",
    brand: "New Balance",
    price: 130,
    category: "sneakers",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    colorway: "White / Green",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    description:
      "Basketball heritage meets modern street style. Clean, crisp, essential.",
    featured: false,
  },
  {
    id: "sn-005",
    name: "Dunk Low Panda",
    brand: "Nike",
    price: 145,
    category: "sneakers",
    tag: "HOT",
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    colorway: "White / Black",
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    description:
      "The most sought-after colorway. Black and white never looked so clean.",
    featured: false,
  },
  {
    id: "sn-006",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 240,
    originalPrice: 280,
    category: "sneakers",
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80",
    colorway: "Zebra",
    sizes: [40, 41, 42, 43, 44, 45],
    description:
      "Primeknit upper, Boost cushioning, iconic Zebra pattern. A grail turned essential.",
    featured: false,
  },
  {
    id: "sn-007",
    name: "Air Force 1 Low",
    brand: "Nike",
    price: 110,
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    colorway: "Triple White",
    sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
    description:
      "The legend. Pure white leather, timeless design. A sneaker culture staple.",
    featured: false,
  },
  {
    id: "sn-008",
    name: "Gel-Kayano 14",
    brand: "Asics",
    price: 155,
    category: "sneakers",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    colorway: "Cream / Sage",
    sizes: [40, 41, 42, 43, 44, 45],
    description:
      "Y2K runner aesthetic revived. Chunky, techy, and surprisingly versatile.",
    featured: false,
  },
  {
    id: "sn-009",
    name: "Chuck 70 High Top",
    brand: "Converse",
    price: 95,
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2h1Y2slMjA3MCUyMGhpZ2glMjB0b3B8ZW58MHwwfDB8fHwy",
    colorway: "Vintage Canvas Black",
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    description:
      "Premium canvas, heritage construction. The Chuck 70 elevates an icon.",
    featured: false,
  },

  // ── NBA Shirts (10%) ────────────────────────────
  {
    id: "nb-001",
    name: "Lakers Icon Jersey",
    brand: "Nike NBA",
    price: 85,
    category: "nba",
    tag: "HOT",
    image:
      "https://images.pexels.com/photos/16053896/pexels-photo-16053896.jpeg",
    colorway: "Gold / Purple",
    sizes: [40, 41, 42, 43, 44],
    description:
      "Authentic Lakers Icon Edition jersey. Swingman cut, moisture-wicking fabric.",
    featured: false,
  },
  {
    id: "nb-002",
    name: "Bulls Classic Tee",
    brand: "Mitchell & Ness",
    price: 65,
    originalPrice: 80,
    category: "nba",
    tag: "SALE",
    image:
      "https://images.pexels.com/photos/34270097/pexels-photo-34270097.jpeg",
    colorway: "Red / Black",
    sizes: [40, 41, 42, 43, 44, 45],
    description:
      "Vintage Mitchell & Ness Bulls tee. Championship dynasty energy.",
    featured: false,
  },
  {
    id: "nb-03",
    name: "Warriors Statement Jersey",
    brand: "Nike NBA",
    price: 90,
    category: "nba",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1615920120387-b0fe9254526c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FycmlvcnMlMjBTdGF0ZW1lbnQlMjBKZXJzZXl8ZW58MHwwfDB8fHwy",
    colorway: "Royal Blue / Gold",
    sizes: [40, 41, 42, 43, 44, 45],
    description:
      "Dub Nation Statement Edition. Show your Warriors pride in style.",
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const sneakers = products.filter((p) => p.category === "sneakers");
export const nbaItems = products.filter((p) => p.category === "nba");

export const brands = [
  "All",
  "Nike",
  "Adidas",
  "Jordan",
  "New Balance",
  "Asics",
  "Converse",
  "Nike NBA",
  "Mitchell & Ness",
];
