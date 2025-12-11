"use client"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"
import { PRODUCTS } from "@/lib/products"

export default function ProductGallery() {
  return (
    <section className="py-24 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-shimmering-gold mb-4">Our Collection</h2>
          <p className="text-beige/70 text-lg max-w-2xl mx-auto">
            Discover our exquisite selection of luxury fragrances, each carefully crafted to define your elegance
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
