"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FRAGRANCE_NOTES,
  generateFragranceName,
  generateMoodDescription,
  generateCustomPrice,
} from "@/lib/fragranceNotes"
import type { CustomFragrance } from "@/lib/fragranceNotes"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/app/context/CartContext"
import { useToast } from "@/app/context/ToastContext"

export default function FragranceCustomizer() {
  const [step, setStep] = useState<"builder" | "preview">("builder")
  const [fragrance, setFragrance] = useState<CustomFragrance>({
    topNote: "citrus",
    heartNote: "rose",
    baseNote: "vanilla",
  })
  const [generatedName, setGeneratedName] = useState<string | null>(null)
  const [generatedMood, setGeneratedMood] = useState<string | null>(null)
  const [generatedPrice, setGeneratedPrice] = useState<number | null>(null)
  const { addToCart } = useCart()
  const { addToast } = useToast()

  const topNote = FRAGRANCE_NOTES.topNotes.find((n) => n.id === fragrance.topNote)
  const heartNote = FRAGRANCE_NOTES.heartNotes.find((n) => n.id === fragrance.heartNote)
  const baseNote = FRAGRANCE_NOTES.baseNotes.find((n) => n.id === fragrance.baseNote)

  const handleCreateFragrance = () => {
    const name = generateFragranceName(fragrance)
    const mood = generateMoodDescription(fragrance)
    const price = generateCustomPrice(fragrance)

    setGeneratedName(name)
    setGeneratedMood(mood)
    setGeneratedPrice(price)
    setStep("preview")
  }

  const handleAddCustomToCart = () => {
    const customProduct = {
      id: `custom-${Date.now()}`,
      name: generatedName || "Custom Fragrance",
      description: generatedMood || "Your unique fragrance blend",
      basePrice: generatedPrice || 149,
      image: "/luxury-custom-perfume-bottle.jpg",
      sizes: [{ size: "50ml", label: "50ml", stock: 1, price: generatedPrice || 149 }],
    }

    addToCart(customProduct, 1, "50ml")
    addToast(`${generatedName} added to cart! Your custom fragrance awaits.`, "success")
  }

  const handleReset = () => {
    setStep("builder")
    setGeneratedName(null)
    setGeneratedMood(null)
    setGeneratedPrice(null)
    setFragrance({
      topNote: "citrus",
      heartNote: "rose",
      baseNote: "vanilla",
    })
  }

  return (
    <div className="min-h-screen bg-deep-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl font-serif text-shimmering-gold mb-4">Design Your Fragrance</h1>
          <p className="text-beige/70 text-lg max-w-2xl">
            Create a uniquely yours perfume by blending top, heart, and base notes. Experience the art of fragrance
            customization.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === "builder" ? (
            <motion.div
              key="builder"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Top Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-b from-shimmering-gold/10 to-transparent rounded-lg p-6 border border-shimmering-gold/20">
                    <h2 className="text-2xl font-serif text-shimmering-gold mb-4">Top Notes</h2>
                    <p className="text-sm text-beige/60 mb-6">First impression (0-15 minutes)</p>

                    <div className="space-y-3">
                      {FRAGRANCE_NOTES.topNotes.map((note) => (
                        <motion.button
                          key={note.id}
                          onClick={() => setFragrance({ ...fragrance, topNote: note.id })}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                            fragrance.topNote === note.id
                              ? "bg-shimmering-gold text-deep-black border-2 border-amber shadow-lg shadow-shimmering-gold/50"
                              : "bg-deep-black/50 border-2 border-shimmering-gold/30 text-beige hover:border-shimmering-gold/60"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{note.emoji}</span>
                            <div>
                              <p className="font-serif font-bold">{note.name}</p>
                              <p className="text-xs opacity-75">{note.description}</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Heart Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-b from-shimmering-gold/10 to-transparent rounded-lg p-6 border border-shimmering-gold/20">
                    <h2 className="text-2xl font-serif text-shimmering-gold mb-4">Heart Notes</h2>
                    <p className="text-sm text-beige/60 mb-6">Character (15 mins - 3 hours)</p>

                    <div className="space-y-3">
                      {FRAGRANCE_NOTES.heartNotes.map((note) => (
                        <motion.button
                          key={note.id}
                          onClick={() => setFragrance({ ...fragrance, heartNote: note.id })}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                            fragrance.heartNote === note.id
                              ? "bg-shimmering-gold text-deep-black border-2 border-amber shadow-lg shadow-shimmering-gold/50"
                              : "bg-deep-black/50 border-2 border-shimmering-gold/30 text-beige hover:border-shimmering-gold/60"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{note.emoji}</span>
                            <div>
                              <p className="font-serif font-bold">{note.name}</p>
                              <p className="text-xs opacity-75">{note.description}</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Base Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-b from-shimmering-gold/10 to-transparent rounded-lg p-6 border border-shimmering-gold/20">
                    <h2 className="text-2xl font-serif text-shimmering-gold mb-4">Base Notes</h2>
                    <p className="text-sm text-beige/60 mb-6">Longevity (3+ hours)</p>

                    <div className="space-y-3">
                      {FRAGRANCE_NOTES.baseNotes.map((note) => (
                        <motion.button
                          key={note.id}
                          onClick={() => setFragrance({ ...fragrance, baseNote: note.id })}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                            fragrance.baseNote === note.id
                              ? "bg-shimmering-gold text-deep-black border-2 border-amber shadow-lg shadow-shimmering-gold/50"
                              : "bg-deep-black/50 border-2 border-shimmering-gold/30 text-beige hover:border-shimmering-gold/60"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{note.emoji}</span>
                            <div>
                              <p className="font-serif font-bold">{note.name}</p>
                              <p className="text-xs opacity-75">{note.description}</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Live Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-shimmering-gold/10 via-transparent to-shimmering-gold/10 rounded-lg p-8 border border-shimmering-gold/20 mb-8"
              >
                <h3 className="text-xl font-serif text-shimmering-gold mb-6">Your Blend</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-4xl mb-2">{topNote?.emoji}</p>
                    <p className="text-beige/80 font-serif">{topNote?.name}</p>
                    <p className="text-xs text-beige/60">{topNote?.description}</p>
                  </div>
                  <div className="text-center flex flex-col justify-center">
                    <p className="text-3xl text-shimmering-gold mb-2">→</p>
                    <p className="text-beige/60 text-sm">Transitions to</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl mb-2">{heartNote?.emoji}</p>
                    <p className="text-beige/80 font-serif">{heartNote?.name}</p>
                    <p className="text-xs text-beige/60">{heartNote?.description}</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-beige/60 text-sm mb-4">Lingering with</p>
                  <div className="flex justify-center items-center gap-3">
                    <p className="text-4xl">{baseNote?.emoji}</p>
                    <p className="text-beige/80 font-serif">{baseNote?.name}</p>
                  </div>
                  <p className="text-xs text-beige/60 mt-2">{baseNote?.description}</p>
                </div>
              </motion.div>

              <motion.button
                onClick={handleCreateFragrance}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif py-4 rounded-lg text-lg hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300"
              >
                Create My Fragrance
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-gradient-to-b from-shimmering-gold/20 to-deep-black border-2 border-shimmering-gold/30 rounded-lg p-12 text-center space-y-8"
              >
                <div>
                  <p className="text-beige/60 text-sm mb-2">YOUR CUSTOM FRAGRANCE</p>
                  <h2 className="text-5xl font-serif text-shimmering-gold mb-6">{generatedName}</h2>

                  <div className="inline-block bg-deep-black rounded-lg p-8 border border-shimmering-gold/20 mb-8">
                    <div className="flex justify-center gap-6 items-center mb-8">
                      <div className="text-center">
                        <p className="text-5xl mb-2">{topNote?.emoji}</p>
                        <p className="text-beige/80">{topNote?.name}</p>
                      </div>
                      <div className="text-shimmering-gold font-serif text-3xl">+</div>
                      <div className="text-center">
                        <p className="text-5xl mb-2">{heartNote?.emoji}</p>
                        <p className="text-beige/80">{heartNote?.name}</p>
                      </div>
                      <div className="text-shimmering-gold font-serif text-3xl">+</div>
                      <div className="text-center">
                        <p className="text-5xl mb-2">{baseNote?.emoji}</p>
                        <p className="text-beige/80">{baseNote?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-deep-black/50 rounded-lg p-6 border border-shimmering-gold/20">
                  <p className="text-beige/80 text-lg leading-relaxed italic">{generatedMood}</p>
                </div>

                <div className="flex items-center justify-center gap-4 text-3xl">
                  <p className="text-beige/60">50ml Bottle:</p>
                  <p className="font-serif text-shimmering-gold">${generatedPrice}</p>
                </div>

                <div className="space-y-4 pt-8">
                  <motion.button
                    onClick={handleAddCustomToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-shimmering-gold to-amber text-deep-black font-serif py-4 rounded-lg flex items-center justify-center gap-2 text-lg hover:shadow-lg hover:shadow-shimmering-gold/30 transition-all duration-300"
                  >
                    <ShoppingCart size={24} />
                    Add to Cart
                  </motion.button>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-deep-black/50 border-2 border-shimmering-gold/30 text-shimmering-gold font-serif py-4 rounded-lg hover:border-shimmering-gold/60 transition-all duration-300"
                  >
                    Create Another Fragrance
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
