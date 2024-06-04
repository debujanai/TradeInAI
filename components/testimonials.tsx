"use client";
import Image from 'next/image';
import Lottie from "lottie-react";
import { useState } from "react";
import animation from './lottie/supply.json';
import svg from './lottie/tax.svg';
import utility from './lottie/utility.json';
import revenue from './lottie/revenue.json';
export default function Testimonials() {
  const [state, setState] = useState("");

  return (
    <section style={{ backgroundColor: '#1c1b36' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 "  style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Tokenomics</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 border border-gray-400" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4">
                <Lottie animationData={animation} loop={false}  width={240} height={240}/>
              </div>
              <h3 className="text-2xl text-center text-white-400 mb-4">Supply</h3>
              <blockquote className="text-lg text-white-400 text-center grow ">Total supply of 10,000,000 tokens ensuring scarcity and value appreciation.</blockquote>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 border border-gray-400" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center mb-4">
                <Image src={svg} alt="Icon 2" width={240} height={240} />
              </div>
              <h3 className="text-2xl text-center text-white-400 mb-4">Tax</h3>
              <blockquote className="text-lg text-white-400 text-center grow">A 5% tax on transactions, fostering liquidity and community rewards.</blockquote>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 border border-gray-400" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center justify-center mb-4">
              <Lottie animationData={utility}   />
              </div>
              <div style={{ marginTop: '45px' }}></div>
              <h3 className="text-2xl text-center text-white-400 mb-4">Utility</h3>
              <blockquote className="text-lg text-white-400 text-center grow">A third of transaction fees allocated to ecosystem growth and development</blockquote>
            </div>

             {/* 4th testimonial */}
             <div className="flex flex-col h-full p-6 border border-gray-400" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center justify-center mb-4">
              <Lottie animationData={revenue}  width={240} height={240} loop={false}  />
              </div>
              <h3 className="text-2xl text-center text-white-400 mb-4">Revenue Sharing </h3>
              <blockquote className="text-lg text-white-400 text-center grow">Revenue will be shared with Top Holders</blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
