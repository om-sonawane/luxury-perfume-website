"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src="/images/image2.jpg"
          alt="Elegant perfume bottle"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      <div className="absolute inset-0 z-1 bg-deep-black/30"></div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="font-serif text-6xl md:text-8xl text-shimmering-gold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Essence of Luxury
        </motion.h1>
        <motion.p
          className="font-body text-xl md:text-2xl text-beige mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Indulge in the epitome of sophistication
        </motion.p>
        <motion.button
          className="bg-shimmering-gold text-deep-black font-serif py-3 px-8 rounded-full text-lg hover:bg-amber transition-colors duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover Now
        </motion.button>
      </div>
    </section>
  )
}
