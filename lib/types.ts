export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  sizes: ProductSize[]
}

export interface ProductSize {
  size: string
  label: string
  stock: number
}

export interface CartItem {
  productId: string
  productName: string
  price: number
  quantity: number
  selectedSize: string
  image: string
}

export interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity: number, size: string) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  getCartTotal: () => number
  getCartCount: () => number
  clearCart: () => void
}

export interface WishlistItem {
  productId: string
  productName: string
  image: string
  price: number
}
