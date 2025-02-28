'use client'
import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#products' },
  { name: 'Story', href: '#BrandStory' },
  { name: 'Contact', href: '#footer' },
];

export default function Header() {
  return (
    <motion.header 
      className="fixed w-full z-50 bg-deep-black bg-opacity-80 backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-shimmering-gold font-serif text-2xl">
          OMAKAR
        </Link>
        <ul className="flex space-x-6">
          {navigationItems.map((item) => (
            <motion.li 
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href} 
                className="text-beige hover:text-shimmering-gold transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

