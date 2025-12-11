"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/app/context/CartContext"
import { useToast } from "@/app/context/ToastContext"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart, getCartCount } = useCart()
  const { addToast } = useToast()
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-deep-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl font-serif text-shimmering-gold mb-6">Checkout</h1>
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

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-deep-black pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-shimmering-gold rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check size={32} className="text-deep-black" />
          </motion.div>
          <h1 className="text-4xl font-serif text-shimmering-gold mb-4">Order Confirmed!</h1>
          <p className="text-beige/70 mb-8">
            Thank you for your purchase. Your order has been received and will be processed shortly.
          </p>
          <div className="bg-gradient-to-r from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-6 mb-8 space-y-3">
            <p className="text-beige/70">
              <span className="text-beige">Order Total:</span> ${getCartTotal().toFixed(2)}
            </p>
            <p className="text-beige/70">
              <span className="text-beige">Items:</span> {getCartCount()}
            </p>
            <p className="text-beige/70">
              <span className="text-beige">Name:</span> {formData.fullName}
            </p>
            <p className="text-beige/70">
              <span className="text-beige">Address:</span> {formData.address}, {formData.city}
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-shimmering-gold text-deep-black px-8 py-3 rounded-lg font-serif hover:bg-amber transition-colors"
          >
            <ArrowLeft size={20} />
            Back Home
          </Link>
        </motion.div>
      </div>
    )
  }

  const subtotal = getCartTotal()
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode ||
      !formData.country
    ) {
      addToast("Please fill in all fields", "error")
      return
    }

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setOrderComplete(true)
      clearCart()
      addToast("Order placed successfully!", "success")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-deep-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-shimmering-gold hover:text-amber transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-serif text-shimmering-gold">Checkout</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-b from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-serif text-shimmering-gold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-beige/80 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-beige/80 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-beige/80 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                    placeholder="123 Luxury Street"
                  />
                </div>

                {/* City and Postal Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-beige/80 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-beige/80 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-beige/80 mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-deep-black/50 border border-shimmering-gold/20 rounded-lg px-4 py-3 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                    placeholder="United States"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-b from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-serif text-shimmering-gold mb-6">Order Items</h2>
              <div className="space-y-4 mb-6 max-h-48 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.selectedSize}`} className="flex justify-between text-beige/80">
                    <span>
                      {item.productName} - {item.selectedSize} x{item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isProcessing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg font-serif transition-all duration-300 ${
                isProcessing
                  ? "bg-beige/50 text-deep-black/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-shimmering-gold to-amber text-deep-black hover:shadow-lg hover:shadow-shimmering-gold/30"
              }`}
            >
              {isProcessing ? "Processing Order..." : "Place Order"}
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-32 bg-gradient-to-b from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-8 h-fit"
          >
            <h2 className="text-2xl font-serif text-shimmering-gold mb-6">Order Summary</h2>
            <div className="space-y-4 border-b border-shimmering-gold/20 pb-6">
              <div className="flex justify-between text-beige/80">
                <span>Subtotal</span>
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
            <div className="flex justify-between items-center mt-6 pt-6">
              <span className="text-lg font-serif text-beige">Total</span>
              <span className="text-3xl font-serif text-shimmering-gold">${total.toFixed(2)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
