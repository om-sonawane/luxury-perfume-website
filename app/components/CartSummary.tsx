"use client"

import { useCart } from "@/app/context/CartContext"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CartSummary() {
  const { cartItems, getCartTotal, getCartCount } = useCart()
  const router = useRouter()

  const subtotal = getCartTotal()
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="sticky top-32 bg-gradient-to-b from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-8 space-y-6 h-fit"
    >
      <div>
        <h2 className="text-2xl font-serif text-shimmering-gold mb-6">Order Summary</h2>

        <div className="space-y-4 border-b border-shimmering-gold/20 pb-4">
          <div className="flex justify-between text-beige/80">
            <span>Items ({getCartCount()})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-beige/80">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-beige/80">
            <span>Shipping</span>
            <span className="text-shimmering-gold">Free</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4">
          <span className="text-lg font-serif text-beige">Total</span>
          <span className="text-3xl font-serif text-shimmering-gold">${total.toFixed(2)}</span>
        </div>
      </div>

      <motion.button
        onClick={() => router.push("/checkout")}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif py-4 rounded-lg hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300"
      >
        Proceed to Checkout
      </motion.button>

      <Link href="/" className="block text-center text-shimmering-gold hover:text-amber transition-colors text-sm">
        Continue Shopping
      </Link>
    </motion.div>
  )
}
