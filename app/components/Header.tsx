"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/app/context/CartContext"
import { useWishlist } from "@/app/context/WishlistContext"

export default function Header() {
  const { getCartCount } = useCart()
  const { wishlistItems } = useWishlist()

  return (
    <motion.header
      className="fixed w-full z-50 bg-deep-black bg-opacity-80 backdrop-blur-md border-b border-shimmering-gold/10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-shimmering-gold font-serif text-2xl hover:text-amber transition-colors duration-300"
        >
          OMKAR
        </Link>

        <ul className="flex space-x-6 items-center">
          {["Home", "Products", "Story", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-beige hover:text-shimmering-gold transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/wishlist"
              className="relative text-beige hover:text-shimmering-gold transition-colors duration-300 inline-flex"
            >
              <Heart size={24} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-shimmering-gold text-deep-black text-xs font-serif rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/cart"
              className="relative text-beige hover:text-shimmering-gold transition-colors duration-300 inline-flex"
            >
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-shimmering-gold text-deep-black text-xs font-serif rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}
