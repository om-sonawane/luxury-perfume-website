import ProductCarousel from './components/ProductCarousel'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Ingredients from './components/Ingredients'
import Footer from './components/Footer'
import Features from './components/Features'
import Header from './components/Header'

export default function Home() {
  return (
    <main>
      
      <Header />
      <Hero />
      <Features />
      <ProductCarousel />
      <Ingredients />
      <BrandStory />
      <Footer />
    </main>
  )
}

