'use client'

import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  return (
    <section className="py-20 bg-gradient-radial from-deep-black to-amber/10">
      <section id='story'>...</section>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/new/image4.jpg"
              alt="Brand story"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif text-shimmering-gold mb-6">Our Story</h2>
            <p className="font-body text-beige mb-4">
              Born from a passion for luxury and refinement, our journey began in the heart of Paris. 
              Our master perfumers have dedicated their lives to crafting scents that evoke emotions and memories.
            </p>
            <p className="font-body text-beige">
              Each bottle is a work of art, a testament to our commitment to quality and elegance. 
              We invite you to become part of our story and experience the essence of true luxury. -omkar
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

