export const FRAGRANCE_NOTES = {
  topNotes: [
    { id: "citrus", name: "Citrus", emoji: "🍋", description: "Fresh and zesty" },
    { id: "bergamot", name: "Bergamot", emoji: "🌟", description: "Bright and energetic" },
    { id: "lemon", name: "Lemon", emoji: "✨", description: "Crisp and clean" },
    { id: "grapefruit", name: "Grapefruit", emoji: "🌅", description: "Tangy and vibrant" },
    { id: "black-pepper", name: "Black Pepper", emoji: "🔥", description: "Spicy and warm" },
  ],
  heartNotes: [
    { id: "rose", name: "Rose", emoji: "🌹", description: "Romantic and elegant" },
    { id: "jasmine", name: "Jasmine", emoji: "🌸", description: "Floral and sensual" },
    { id: "peony", name: "Peony", emoji: "🌺", description: "Soft and delicate" },
    { id: "iris", name: "Iris", emoji: "💜", description: "Powdery and sophisticated" },
    { id: "lavender", name: "Lavender", emoji: "💙", description: "Calming and herbaceous" },
  ],
  baseNotes: [
    { id: "vanilla", name: "Vanilla", emoji: "🍦", description: "Warm and comforting" },
    { id: "musk", name: "Musk", emoji: "☁️", description: "Soft and sensual" },
    { id: "amber", name: "Amber", emoji: "🟡", description: "Rich and golden" },
    { id: "sandalwood", name: "Sandalwood", emoji: "🎋", description: "Woody and creamy" },
    { id: "patchouli", name: "Patchouli", emoji: "🍂", description: "Earthy and deep" },
  ],
}

export interface CustomFragrance {
  topNote: string
  heartNote: string
  baseNote: string
}

export function generateFragranceName(fragrance: CustomFragrance): string {
  const topNote = FRAGRANCE_NOTES.topNotes.find((n) => n.id === fragrance.topNote)?.name || "Mystery"
  const heartNote = FRAGRANCE_NOTES.heartNotes.find((n) => n.id === fragrance.heartNote)?.name || "Dreams"
  const baseNote = FRAGRANCE_NOTES.baseNotes.find((n) => n.id === fragrance.baseNote)?.name || "Essence"

  const adjectives = ["Enchanted", "Ethereal", "Luxe", "Divine", "Silken", "Opulent", "Mystical", "Radiant"]
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]

  return `${randomAdj} ${topNote} ${heartNote}`
}

export function generateMoodDescription(fragrance: CustomFragrance): string {
  const topNote = FRAGRANCE_NOTES.topNotes.find((n) => n.id === fragrance.topNote)
  const heartNote = FRAGRANCE_NOTES.heartNotes.find((n) => n.id === fragrance.heartNote)
  const baseNote = FRAGRANCE_NOTES.baseNotes.find((n) => n.id === fragrance.baseNote)

  const moods = [
    `Start your day with ${topNote?.description}. The ${heartNote?.description} heart reveals your true elegance. Finish with ${baseNote?.description} warmth.`,
    `Inspired by ${topNote?.description} freshness, blended with ${heartNote?.description} charm, and grounded in ${baseNote?.description} luxury.`,
    `A journey that begins ${topNote?.description}, unfolds with ${heartNote?.description} grace, and lingers with ${baseNote?.description} sophistication.`,
    `Transform your presence with ${topNote?.description} opening, ${heartNote?.description} middle notes, and ${baseNote?.description} finale.`,
  ]

  return moods[Math.floor(Math.random() * moods.length)]
}

export function generateCustomPrice(fragrance: CustomFragrance): number {
  // Base price for 50ml
  const basePrice = 149
  const variance = Math.floor(Math.random() * 80) - 40 // -40 to +40
  return Math.max(119, basePrice + variance)
}
