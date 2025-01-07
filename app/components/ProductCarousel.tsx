'use client'

import React from 'react';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'  

const products = [
  { name: 'Midnight Allure', image: '/new/image3.jpg' },
  { name: 'Golden Opulence', image: '/new/golden.jpg' },
  { name: 'Velvet Dream', image: '/new/velvet.jpg' },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section className="py-20 bg-deep-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-shimmering-gold mb-12">Our Collection</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                width={300}
                height={400}
                className="rounded-lg shadow-2xl mb-6"
              />
              <h3 className="text-2xl font-serif text-amber">{products[currentIndex].name}</h3>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-shimmering-gold text-deep-black p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-shimmering-gold text-deep-black p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

