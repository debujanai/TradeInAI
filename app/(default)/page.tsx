export const metadata = {
  title: 'TradeIn AI',
  description: 'Intelligent Crypto Trading Solutions',
}

import Hero from '@/components/hero'
import Features from '@/components/features'

import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Again from '@/components/again'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="zigzag">
        <Zigzag />
      </div>      
     
      <div id="again">
        <Again />
      </div>

    </>
  )
}