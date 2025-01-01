import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Ingredients from './components/Ingredients'
import BrandStory from './components/BrandStory'
import ProductCarousel from './components/ProductCarousel'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-deep-black text-beige min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Ingredients />
      <BrandStory />
      <ProductCarousel />
      <Footer />
    </main>
  )
}

