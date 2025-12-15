"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export default function CustomizeSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-shimmering-gold/5 via-transparent to-amber/5 border-y border-shimmering-gold/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-shimmering-gold/10 px-4 py-2 rounded-full border border-shimmering-gold/30">
            <Sparkles size={18} className="text-shimmering-gold" />
            <span className="text-shimmering-gold font-serif text-sm">Exclusive Feature</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-shimmering-gold mb-6">Design Your Signature Scent</h2>
          <p className="text-beige/80 text-lg mb-8 leading-relaxed">
            Create a uniquely yours perfume by blending top, heart, and base notes. Our AI-powered fragrance customizer
            generates a unique name, mood description, and price for your creation. This is not just shopping—it's an
            art form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-deep-black/50 border border-shimmering-gold/20 rounded-lg p-6"
            >
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-serif text-shimmering-gold mb-2">Blend Notes</h3>
              <p className="text-sm text-beige/70">Choose from premium top, heart, and base notes</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-deep-black/50 border border-shimmering-gold/20 rounded-lg p-6"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-serif text-shimmering-gold mb-2">Get Inspired</h3>
              <p className="text-sm text-beige/70">AI generates unique names and mood descriptions</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-deep-black/50 border border-shimmering-gold/20 rounded-lg p-6"
            >
              <div className="text-3xl mb-3">🛍</div>
              <h3 className="font-serif text-shimmering-gold mb-2">Own It</h3>
              <p className="text-sm text-beige/70">Add your custom fragrance to cart and checkout</p>
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/customize"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif px-10 py-4 rounded-lg hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300 text-lg"
            >
              Start Customizing
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
