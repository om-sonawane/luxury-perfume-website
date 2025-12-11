import type { Product } from "./types"

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Midnight Allure",
    description: "A captivating blend of mysterious notes that dance on the skin like shadows at dusk.",
    price: 189,
    image: "/luxury-perfume-midnight.jpg",
    sizes: [
      { size: "30ml", label: "30ml", stock: 15 },
      { size: "50ml", label: "50ml", stock: 20 },
      { size: "100ml", label: "100ml", stock: 10 },
    ],
  },
  {
    id: "2",
    name: "Golden Opulence",
    description: "Radiant and luxurious, this fragrance embodies the essence of golden hour elegance.",
    price: 219,
    image: "/luxury-perfume-golden.jpg",
    sizes: [
      { size: "30ml", label: "30ml", stock: 12 },
      { size: "50ml", label: "50ml", stock: 18 },
      { size: "100ml", label: "100ml", stock: 8 },
    ],
  },
  {
    id: "3",
    name: "Velvet Dream",
    description: "Soft, sensual, and supremely elegant—a fragrance that whispers rather than shouts.",
    price: 199,
    image: "/luxury-perfume-velvet.jpg",
    sizes: [
      { size: "30ml", label: "30ml", stock: 18 },
      { size: "50ml", label: "50ml", stock: 22 },
      { size: "100ml", label: "100ml", stock: 12 },
    ],
  },
  {
    id: "4",
    name: "Crystal Essence",
    description: "Pure and crystalline, with sparkling top notes that fade into warm, embracing base notes.",
    price: 179,
    image: "/luxury-perfume-crystal.jpg",
    sizes: [
      { size: "30ml", label: "30ml", stock: 14 },
      { size: "50ml", label: "50ml", stock: 16 },
      { size: "100ml", label: "100ml", stock: 9 },
    ],
  },
]
