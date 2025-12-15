"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartContextType, CartItem } from "@/lib/types"

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, mounted])

  const addToCart = (product: any, quantity: number, size: string) => {
    // Fetch the size data to get correct price
    const sizeData = product.sizes.find((s: any) => s.size === size)
    const sizeLabel = sizeData?.label || size
    const priceForSize = sizeData?.price || product.basePrice

    const existingItem = cartItems.find((item) => item.productId === product.id && item.selectedSize === size)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      )
    } else {
      const newItem: CartItem = {
        productId: product.id,
        productName: product.name,
        price: priceForSize,
        quantity,
        selectedSize: size,
        sizeLabel,
        image: product.image,
      }
      setCartItems([...cartItems, newItem])
    }
  }

  const removeFromCart = (productId: string, size: string) => {
    setCartItems(cartItems.filter((item) => !(item.productId === productId && item.selectedSize === size)))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.productId === productId && item.selectedSize === size ? { ...item, quantity } : item,
        ),
      )
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
