'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ingredients = [
  { name: 'Jasmine', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Sandalwood', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Bergamot', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Vanilla', image: '/placeholder.svg?height=200&width=200' },
]

export default function Ingredients() {
  return (
    <section className="py-20 bg-deep-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center text-shimmering-gold mb-12">Premium Ingredients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div 
              key={ingredient.name}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-serif text-amber">{ingredient.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

