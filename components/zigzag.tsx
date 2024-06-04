"use client";
import Lottie from "lottie-react";
import { useState } from "react";
import animation from './lottie/animation-4.json'
import animationtwo from './lottie/animation-3.json'
import animationthree from './lottie/portfolio-2.json'
import animationfour from './lottie/trending.json'
import animationfive from './lottie/cross-platform.json'
import animationsix from './lottie/autotrading.json'
import animationseven from './lottie/signals-3.json'
import animationeight from './lottie/portfolio.json'
import animationnine from './lottie/supported.json'




export default function Zigzag() {
  const [state, setState] = useState("");
  return (
    <section style={{ backgroundColor: '#1c1b36' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            
            <h1 className="h2 mb-4"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>DApp Features</h1>
            <p className="text-xl text-white-400 text-justify">Uncover the capabilities that set TradeIn AI's decentralized application (DApp) apart. Explore seamless crypto trading, insightful market analytics, and more, all designed to enhance your crypto journey.</p>
          </div>

          {/* Items */}
         

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie
        animationData={animation}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Crypto Trading:

</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify"> Seamlessly buy and sell various cryptocurrencies directly within the DApp.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify"> Experience the thrill of crypto trading with our user-friendly platform, offering a seamless interface for buying, selling, and managing digital assets.</p>
    
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order1" data-aos="fade-up">
              <Lottie
        animationData={animationtwo}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Market Insights:</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify"> Gain access to detailed insights into market trends, news, and analysis.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify"> Empower yourself with comprehensive market data and analytics to make informed decisions. Stay ahead of the curve in the dynamic cryptocurrency market, identifying opportunities and managing risks effectively.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie
        animationData={animationthree}
        style={{ width: '400px', height: '400px' , marginLeft:'150px'}} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Chart Viewing:</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify">Visualize comprehensive charts and analytics for various cryptocurrencies.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify">Enhance your ability to analyze price movements, track historical data, and identify patterns. With easy access to visual representations of cryptocurrency performance, make informed trading decisions with confidence.</p>
                </div>
              </div>
            </div>
                      
                        {/* 4th item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order1" data-aos="fade-up">
              <Lottie
        animationData={animationfour}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Trending Coins:</h3>                  
                  <p className="text-xl text-white-400 mb-4 text-justify"> Stay updated on the cryptocurrency market's pulse with our DApp's feature, revealing trending coins in real-time. Instant insights empower informed decisions for both seasoned investors and newcomers alike.</p>
                </div>
              </div>
            </div>

            
            {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie
        animationData={animationfive}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Cross Platform:</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify">Unlock seamless interoperability with our cross-platform transaction feature, enabling users to effortlessly transfer assets between different blockchain networks. </p>
                  <p className="text-xl text-white-400 mb-4 text-justify">Experience frictionless transactions regardless of the platform, enhancing accessibility and convenience for all users.</p>
                </div>
              </div>
            </div>
                      
                        {/* 6th item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order1" data-aos="fade-up">

              <Lottie
        animationData={animationsix}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Auto Trading:</h3>                  
                  <p className="text-xl text-white-400 mb-4 text-justify">Automate your trading strategies with our auto-trading feature, letting you execute trades automatically based on predefined criteria.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify">Maximize efficiency and capitalize on market opportunities without constant manual supervision.</p>
                </div>
              </div>
            </div>


            {/* 7th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Lottie
        animationData={animationseven}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>AI buy sell signals</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify">Empower your trading decisions with AI-driven buy and sell signals, leveraging cutting-edge algorithms to analyze market trends and provide actionable insights.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify">Stay ahead of the curve and optimize your investment strategies with precision.</p>
                </div>
              </div>
            </div>


                                    {/* 8th item */}
                                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order1" data-aos="fade-up">
              <Lottie
        animationData={animationnine}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Supported Wallets</h3>
                  <p className="text-xl text-white-400 mb-4 text-justify">Easily integrate with a variety of supported wallets, offering flexibility and convenience for managing your digital assets.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify">Seamlessly connect your preferred wallet to our platform and enjoy secure and convenient transactions with peace of mind.</p>
                </div>
              </div>
            </div>
                     

                      
                        {/* 9th item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">

              <Lottie
        animationData={animationeight}
        style={{ width: '400px', height: '400px' }} // Set your desired width and height here
      />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Assets Portfolio:</h3>                  
                  <p className="text-xl text-white-400 mb-4 text-justify"> Effortlessly manage your assets portfolio with our intuitive platform, allowing you to track and optimize your investments across various digital assets.</p>
                  <p className="text-xl text-white-400 mb-4 text-justify"> Gain comprehensive insights into your portfolio performance and make informed decisions to achieve your financial goals.</p>
                </div>
              </div>
            </div>





         
        </div>
      </div>
    </section>
  )
}
