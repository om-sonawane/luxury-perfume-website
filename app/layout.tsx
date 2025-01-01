import './globals.css'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata = {
  title: 'Luxe Parfum - Essence of Luxury',
  description: 'Experience the epitome of sophistication with our premium fragrances.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} ${cormorantGaramond.variable} bg-deep-black`}>
        {children}
      </body>
    </html>
  )
}
