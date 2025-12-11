"use client"

import { useWishlist } from "@/app/context/WishlistContext"
import { useCart } from "@/app/context/CartContext"
import { useToast } from "@/app/context/ToastContext"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart, cartItems } = useCart()
  const { addToast } = useToast()
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({})

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-deep-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl font-serif text-shimmering-gold mb-6">Your Wishlist</h1>
            <p className="text-beige/70 text-lg mb-8">Your wishlist is empty</p>
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

  const handleAddToCart = (productId: string, productName: string, price: number, image: string) => {
    const size = selectedSize[productId] || "50ml"

    if (!size) {
      addToast("Please select a size", "error")
      return
    }

    const product = {
      id: productId,
      name: productName,
      description: "",
      price,
      image,
      sizes: [
        { size: "30ml", label: "30ml", stock: 10 },
        { size: "50ml", label: "50ml", stock: 10 },
        { size: "100ml", label: "100ml", stock: 10 },
      ],
    }

    addToCart(product, 1, size)
    addToast(`${productName} added to cart!`, "success")
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
          <h1 className="text-4xl font-serif text-shimmering-gold">Your Wishlist</h1>
          <p className="text-beige/70 mt-2">{wishlistItems.length} item(s)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.productId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-deep-black to-[#1a1a1a] border border-shimmering-gold/20 rounded-lg overflow-hidden hover:border-shimmering-gold/40 transition-colors duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-[#141414]">
                <Image src={item.image || "/placeholder.svg"} alt={item.productName} fill className="object-cover" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-shimmering-gold mb-2">{item.productName}</h3>
                  <p className="text-2xl font-serif text-shimmering-gold">${item.price}</p>
                </div>

                <div>
                  <label className="text-sm text-beige/80">Select Size:</label>
                  <select
                    value={selectedSize[item.productId] || "50ml"}
                    onChange={(e) => setSelectedSize({ ...selectedSize, [item.productId]: e.target.value })}
                    className="w-full mt-2 bg-deep-black/50 border border-shimmering-gold/30 rounded px-3 py-2 text-beige focus:outline-none focus:border-shimmering-gold/60 transition-colors"
                  >
                    <option value="30ml">30ml</option>
                    <option value="50ml">50ml</option>
                    <option value="100ml">100ml</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <motion.button
                    onClick={() => handleAddToCart(item.productId, item.productName, item.price, item.image)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      removeFromWishlist(item.productId)
                      addToast("Removed from wishlist", "info")
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-deep-black/50 border border-beige/30 text-beige font-serif py-2 rounded-lg flex items-center justify-center gap-2 hover:border-beige/60 transition-all duration-300"
                  >
                    <Trash2 size={18} />
                    Remove
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
