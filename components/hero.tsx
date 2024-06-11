"use client";
import Lottie from "lottie-react";
import { useState } from "react";
import animation from './lottie/animation-1.json';
import backgroundAnimation from './lottie/checkagain.json'; // Import the background animation JSON file
import './button.css'; 

export default function Hero() {
  const [state, setState] = useState("");
  return (
    <section style={{ position: 'relative', backgroundColor: '#1c1b36' }}>
      {/* Add Lottie component for background animation */}
      <Lottie
        animationData={backgroundAnimation}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%' // Ensure background animation is behind other content
        }}
        loop={false}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 
  className="h1 mb-4" 
  data-aos="fade-up" 
  style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}
>
  TradeIn AI: Intelligent Crypto Trading Solutions
</h1>

            <p className="text-xl text-white-400 mb-8" data-aos="fade-up" data-aos-delay="200">A functional, modern and automated approach to trading on-chain. Millions of data points working for you in a matter of seconds.</p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
              
              <div className="flex justify-center items-center">
      <div style={{
          position: 'relative',
          zIndex: 1
        }} className="border border-purple-600 rounded-lg p-4">
        <p>Contract Address: <span id="contract-address">0xC9557B7CFADd025295c675abCa65f7713f6a413E</span></p>
      </div>
    </div>
    <div style={{
          position: 'relative',
          zIndex: 1
        }} className="flex justify-center mt-4">
      <li>
      <a 
      className="uiverse" 
      href="https://app.uniswap.org/swap?outputCurrency=0xC9557B7CFADd025295c675abCa65f7713f6a413E" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Buy here!
    </a>

    </li>
    </div>
          <div className="flex justify-center mt-4">
                <Lottie
                  animationData={animation}
                  style={{ width: '400px', height: '400px' }} // Set your desired width and height here
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
