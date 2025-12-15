"use client"

import { useCart } from "@/app/context/CartContext"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react"
import CartSummary from "@/app/components/CartSummary"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-deep-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-shimmering-gold mb-6">Your Cart</h1>
            <p className="text-beige/70">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-deep-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl font-serif text-shimmering-gold mb-6">Your Cart</h1>
            <p className="text-beige/70 text-lg mb-8">Your cart is empty</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-shimmering-gold text-deep-black px-8 py-3 rounded-lg font-serif hover:bg-amber transition-colors"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-deep-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-shimmering-gold hover:text-amber transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Shopping
          </Link>
          <h1 className="text-4xl font-serif text-shimmering-gold">Your Cart</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <motion.div
                key={`${item.productId}-${item.selectedSize}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-deep-black to-[#1a1a1a] border border-shimmering-gold/20 rounded-lg p-6 flex gap-6 hover:border-shimmering-gold/40 transition-colors"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#141414]">
                  <Image src={item.image || "/placeholder.svg"} alt={item.productName} fill className="object-cover" />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-serif text-shimmering-gold">{item.productName}</h3>
                      <p className="text-sm text-beige/60">Size: {item.sizeLabel}</p>
                    </div>
                    <motion.button
                      onClick={() => removeFromCart(item.productId, item.selectedSize)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-beige/60 hover:text-amber transition-colors"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-deep-black/50 rounded p-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.selectedSize, item.quantity - 1)}
                        className="text-shimmering-gold hover:text-amber transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-beige">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.selectedSize, item.quantity + 1)}
                        className="text-shimmering-gold hover:text-amber transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-beige/60">${item.price} each</p>
                      <p className="text-xl font-serif text-shimmering-gold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  )
}
