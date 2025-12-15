"use client"

import React from "react"
import Link from "next/link"
import { useWishlist } from "@/app/context/WishlistContext"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()

  return (
    <div className="min-h-screen bg-deep-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-shimmering-gold mb-6">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-beige/70">
            <p>Your wishlist is empty.</p>
            <Link href="/" className="text-shimmering-gold hover:text-amber">Continue shopping</Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {wishlistItems.map((item) => (
              <li key={item.productId} className="flex items-center justify-between bg-gradient-to-b from-[#1a1a1a] to-deep-black border border-shimmering-gold/20 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.productName} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="text-shimmering-gold font-serif">{item.productName}</p>
                    <p className="text-beige/70 text-sm">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => removeFromWishlist(item.productId)} className="text-sm text-amber">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
