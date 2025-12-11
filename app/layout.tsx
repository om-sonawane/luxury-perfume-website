import type React from "react"
import "./globals.css"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import { ToastProvider } from "./context/ToastContext"
import ToastContainer from "./components/ToastContainer"
import FloatingParticles from "./components/FloatingParticals"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"] })

export const metadata = {
  title: "Luxe Parfum - Essence of Luxury",
  description: "Experience the epitome of sophistication with our premium fragrances.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} ${cormorantGaramond.variable} bg-deep-black`}>
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <FloatingParticles />
              <div className="relative z-10">{children}</div>
              <ToastContainer />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
