export interface Product {
  id: string
  name: string
  price: number
  priceLabel: string
  category: "prop-rentals" | "grab-and-go" | "popular-picks" | "add-ons"
  image: string
  description?: string
}

export const products: Product[] = [
  // Prop Rentals
  {
    id: "arch-backdrop",
    name: "Arch Backdrop",
    price: 55,
    priceLabel: "$55+",
    category: "prop-rentals",
    image: "/images/products/arch-backdrop.jpg",
    description: "Elegant arch backdrop perfect for photo opportunities and event focal points.",
  },
  {
    id: "gold-ring",
    name: "Gold Ring",
    price: 75,
    priceLabel: "$75+",
    category: "prop-rentals",
    image: "/images/products/gold-ring.jpg",
    description: "Stunning gold ring frame for a modern, romantic display.",
  },
  {
    id: "gold-square",
    name: "Gold Square",
    price: 75,
    priceLabel: "$75+",
    category: "prop-rentals",
    image: "/images/products/gold-square.jpg",
    description: "Geometric gold square frame with glamorous shimmer backdrop.",
  },
  {
    id: "grid-wall",
    name: "Grid Wall",
    price: 75,
    priceLabel: "$75+",
    category: "prop-rentals",
    image: "/images/products/grid-wall.jpg",
    description: "Versatile grid wall for creative balloon arrangements and signage.",
  },
  
  // Grab & Go
  {
    id: "grab-n-go-garland",
    name: "Grab N' Go Garland",
    price: 80,
    priceLabel: "Starting at $80+",
    category: "grab-and-go",
    image: "/images/products/grab-n-go-garland.jpg",
    description: "Pre-made balloon garland ready for pickup - perfect for DIY decorating.",
  },
  {
    id: "helium-balloons",
    name: "Helium Balloons",
    price: 45,
    priceLabel: "Starting at $45",
    category: "grab-and-go",
    image: "/images/products/helium-balloons.jpg",
    description: "Classic helium-filled balloons in your choice of colors.",
  },
  {
    id: "custom-jumbo-balloon",
    name: "Custom Jumbo Balloon",
    price: 80,
    priceLabel: "$80",
    category: "grab-and-go",
    image: "/images/products/custom-jumbo-balloon.jpg",
    description: "Oversized custom balloon with personalized vinyl lettering.",
  },
  {
    id: "standard-pipe-drape",
    name: "Standard Pipe & Drape",
    price: 100,
    priceLabel: "Starting at $100",
    category: "grab-and-go",
    image: "/images/products/standard-pipe-drape.jpg",
    description: "Professional pipe and drape backdrop system with balloon accents.",
  },
  
  // Popular Picks
  {
    id: "balloon-garland",
    name: "Balloon Garland",
    price: 300,
    priceLabel: "Starting at $300+delivery",
    category: "popular-picks",
    image: "/images/products/balloon-garland.jpg",
    description: "Full-service custom balloon garland installation in your chosen colors.",
  },
  {
    id: "jumbo-helium",
    name: "Jumbo Helium",
    price: 80,
    priceLabel: "Starting at $80",
    category: "popular-picks",
    image: "/images/products/jumbo-helium.jpg",
    description: "Large helium balloon arrangement with custom messaging.",
  },
  {
    id: "balloon-towers",
    name: "Balloon Towers",
    price: 125,
    priceLabel: "Starting at $125",
    category: "popular-picks",
    image: "/images/products/balloon-towers.jpg",
    description: "Eye-catching balloon tower columns for grand entrances.",
  },
  {
    id: "balloon-arch",
    name: "Balloon Arch",
    price: 900,
    priceLabel: "Starting at $900",
    category: "popular-picks",
    image: "/images/products/balloon-arch.jpg",
    description: "Stunning full balloon arch installation for dramatic impact.",
  },
  
  // Add-ons
  {
    id: "foil-accessories",
    name: "Foil Accessories",
    price: 50,
    priceLabel: "Starting at $50",
    category: "add-ons",
    image: "/images/products/foil-accessories.jpg",
    description: "Decorative foil accents - stylist will recommend the perfect amount.",
  },
  {
    id: "tissue-tassels",
    name: "Tissue Tassels",
    price: 15,
    priceLabel: "$15/set of 3",
    category: "add-ons",
    image: "/images/products/tissue-tassels.jpg",
    description: "Elegant tissue tassels to add movement and texture.",
  },
  {
    id: "vinyl-customization",
    name: "Vinyl Customization",
    price: 10,
    priceLabel: "Starting at $10",
    category: "add-ons",
    image: "/images/products/vinyl-customization.jpg",
    description: "Custom vinyl lettering for personalized balloon displays.",
  },
]

export const categories = [
  { id: "prop-rentals", name: "Prop Rentals", note: "Final rental price is based on event location" },
  { id: "grab-and-go", name: "Grab & Go", note: null },
  { id: "popular-picks", name: "Popular Picks", note: null },
  { id: "add-ons", name: "Garland Add-ons", note: null },
] as const

export function getProductsByCategory(category: Product["category"]) {
  return products.filter((product) => product.category === category)
}
