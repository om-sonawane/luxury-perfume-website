import type { Product } from "./types"

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Midnight Allure",
    description: "A captivating blend of mysterious notes that dance on the skin like shadows at dusk.",
    basePrice: 189,
    image: "/images/image3.jpg",
    sizes: [
      { size: "30ml", label: "30ml - $89", stock: 15, price: 89 }, 
      { size: "50ml", label: "50ml - $129", stock: 20, price: 129 },
      { size: "100ml", label: "100ml - $189", stock: 10, price: 189 },
    ],
  },
  {
    id: "2",
    name: "Golden Opulence",
    description: "Radiant and luxurious, this fragrance embodies the essence of golden hour elegance.",
    basePrice: 219,
    image: "/images/golden.jpg",
    sizes: [
      { size: "30ml", label: "30ml - $99", stock: 12, price: 99 },
      { size: "50ml", label: "50ml - $149", stock: 18, price: 149 },
      { size: "100ml", label: "100ml - $219", stock: 8, price: 219 },
    ],
  },
  {
    id: "3",
    name: "Velvet Dream",
    description: "Soft, sensual, and supremely elegant—a fragrance that whispers rather than shouts.",
    basePrice: 199,
    image: "/images/velvet.jpg",
    sizes: [
      { size: "30ml", label: "30ml - $79", stock: 18, price: 79 },
      { size: "50ml", label: "50ml - $139", stock: 22, price: 139 },
      { size: "100ml", label: "100ml - $199", stock: 12, price: 199 },
    ],
  },
  {
    id: "4",
    name: "Crystal Essence",
    description: "Pure and crystalline, with sparkling top notes that fade into warm, embracing base notes.",
    basePrice: 179,
    image: "/images/image1.jpg",
    sizes: [
      { size: "30ml", label: "30ml - $84", stock: 14, price: 84 },
      { size: "50ml", label: "50ml - $129", stock: 16, price: 129 },
      { size: "100ml", label: "100ml - $179", stock: 9, price: 179 },
    ],
  },
]
