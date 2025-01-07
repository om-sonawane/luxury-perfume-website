'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { Droplet, Feather, Heart } from 'lucide-react'

const features = [
  { icon: Droplet, title: 'Long-lasting', description: 'Enduring fragrance that lasts all day' },
  { icon: Feather, title: 'Light & Fresh', description: 'A delicate balance of notes for a refreshing experience' },
  { icon: Heart, title: 'Alluring', description: 'Captivating scent that draws attention' },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-radial from-deep-black to-amber/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-shimmering-gold mb-12">Exquisite Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-shimmering-gold" />
              <h3 className="text-2xl font-serif text-amber mb-2">{feature.title}</h3>
              <p className="font-body text-beige">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

