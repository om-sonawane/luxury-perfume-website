"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/app/context/CartContext"
import { useWishlist } from "@/app/context/WishlistContext"
import { useToast } from "@/app/context/ToastContext"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].size)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToast } = useToast()
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize)
    addToast(`${product.name} (${selectedSize}) added to cart!`, "success")
    setQuantity(1)
  }

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      addToast(`Removed from wishlist`, "info")
    } else {
      addToWishlist({
        productId: product.id,
        productName: product.name,
        image: product.image,
        price: selectedSizeData?.price || product.basePrice,
      })
      addToast(`Added to wishlist`, "success")
    }
  }

  const selectedSizeData = product.sizes.find((s) => s.size === selectedSize)
  const displayPrice = selectedSizeData?.price || product.basePrice

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-deep-black to-[#1a1a1a] border border-shimmering-gold/20 rounded-lg overflow-hidden hover:border-shimmering-gold/40 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-[#141414]">
        <Image
          src={product.image || "./golden.jpg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            isInWishlist(product.id)
              ? "bg-shimmering-gold/80 text-deep-black"
              : "bg-deep-black/50 text-shimmering-gold hover:bg-deep-black/70"
          }`}
        >
          <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif text-shimmering-gold mb-2">{product.name}</h3>
          <p className="text-sm text-beige/70 line-clamp-2">{product.description}</p>
        </div>

        <p className="text-2xl font-serif text-shimmering-gold">${displayPrice}</p>

        <div className="space-y-2">
          <label className="text-sm text-beige/80">Select Size:</label>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size.size)}
                className={`flex-1 py-2 px-3 rounded text-sm font-body transition-all duration-200 ${
                  selectedSize === size.size
                    ? "bg-shimmering-gold text-deep-black"
                    : "bg-deep-black/50 text-beige border border-shimmering-gold/30 hover:border-shimmering-gold/60"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-beige/80">Quantity:</label>
          <div className="flex items-center gap-3 bg-deep-black/50 rounded p-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-shimmering-gold hover:text-amber transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="flex-1 text-center text-beige font-body">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-shimmering-gold hover:text-amber transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>
          <p className="text-xs text-beige/60">{selectedSizeData?.stock || 0} in stock</p>
        </div>

        <motion.button
          onClick={handleAddToCart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}
