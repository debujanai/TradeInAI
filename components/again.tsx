"use client";
import { useState } from "react";
import Lottie from 'lottie-react';
import animation from './lottie/launch.json';
import telegramanimation from './lottie/telegram-animation.json';
import animationtwo from './lottie/launch-2.json';
import animationthree from './lottie/checking.json';

export default function Zigzag() {
  const [currentQuarter, setCurrentQuarter] = useState(2);

  const roadmapItems = [
    {
      quarter: 1,
      title: "TradeIn AI Q1 Update: Website Launch",
      description: [
        "Exciting times ahead in Q1 as we launch our website, gear up with prelaunch marketing, accelerate DApp development, and foster our community!",
        "Key activities this quarter include:",
        "-Unveil our new platform to the world with the Website Launch!",
        "-Ignite excitement and anticipation through Prelaunch Marketing!",
        "-Fast-track the development of our decentralized application with DApp Development!",
        "-Strengthen our community presence and engagement through Community Building!"
      ],
      image: <Lottie animationData={animation} />,
      locked: currentQuarter < 1,
    },
    {
      quarter: 2,
      title: "TradeIn AI Q2 Update: Coin Launch and DApp Release",
      description: [
        "In Q2, we're taking our project to the next level with our official launch on Uniswap, the release of our DApp, and strategic marketing campaigns to drive adoption and engagement!",
        "Key activities this quarter include:",
        "-Official launch on Uniswap!",
        "-Release of our DApp!",
        "-Implementation of subscription and ad revenue generation!",
        "-Execute strategic marketing campaigns!"
      ],
      image: <Lottie animationData={animationtwo} />,
      locked: currentQuarter < 2,
    },
    {
      quarter: 3,
      title: "TradeIn AI Q3 Update: Telegram Bots Release",
      description: [
      "Q3 represents a crucial phase for us as we prepare to launch Telegram bots, alongside our efforts to expand our community, implement revenue sharing, and secure listings on CoinMarketCap and CoinGecko!",
      "Key activities this quarter include:",
      "-Introducing Telegram bots for streamlined communication!",
      "-Introducing Buy and Sell signals using AI",
      "-Expansion of our community!",
      "-Implementation of Revenue Sharing to Holders!",
      "-Listing on CoinMarketCap (CMC) and CoinGecko (CG)!"
    ],
      image: <Lottie animationData={telegramanimation} />,
      locked: currentQuarter < 3,
    },
    {
      quarter: 4,
      title: "TradeIn AI Q4 Update:",
      description: [
        "Phase 04 holds exciting developments that will be announced soon!",
        "Stay tuned for more updates as we continue to innovate and grow!"
      ]
  ,
      image: <Lottie animationData={animationthree} />,
      locked: currentQuarter < 4,
    },
  ];

  return (
    <section style={{ backgroundColor: '#131726' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Roadmap: Trailblazing the Future of Crypto Solutions</h1>
            <p className="text-l text-white-40 text-justify">Embark on a journey with TradeIn AI as we unveil our roadmap, charting a course towards pioneering advancements in the crypto landscape. Our commitment to innovation drives us to continually push the boundaries, introducing groundbreaking features and technologies that redefine the crypto experience. Stay tuned as we pave the way for a brighter future in cryptocurrency.</p>
          </div>

          {/* Roadmap Items */}
          <div className="grid gap-20 relative">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`md:grid md:grid-cols-12 md:gap-6 items-center ${item.locked ? 'opacity-50' : ''}`}>
               {/* Vertical Line and Dots */}
{index === 0 ? (
  <div className="absolute w-6 h-6 bg-gray-500 rounded-full z-10 hidden md:block" style={{ top: `${index * 25 + 5}%`, left: "50%", transform: "translateX(-50%)" }}></div>
) : index === 1 ? (
  <div className="absolute w-6 h-6 bg-purple-600 rounded-full z-20 hidden md:block" style={{ top: `${index * 25 + 5}%`, left: "50%", transform: "translateX(-50%)", opacity: 1 }}></div>
) : (
  <div className="absolute w-6 h-6 bg-gray-500 rounded-full z-20 hidden md:block" style={{ top: `${index * 25 + 5}%`, left: "50%", transform: "translateX(-50%)", opacity: 1 }}></div>
)}

{index === 0 && (
  <div className="absolute top-20 left-1/2 w-0.5 bg-gray-500 hidden md:block" style={{ transform: "translateX(-50%)", marginTop: "40px", height: `calc(${(roadmapItems.length - 1) * 25}% + 10px)`, zIndex: "1" }}></div>
)}

{/* Content */}
<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" >
  <div className="md:pr-4 lg:pr-12 xl:pr-16">
    <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
    <h3 className="h3 mb-3" style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>{item.title}</h3>
    <ul className="text-xl text-white-400 mb-4 text-justify">
      {item.description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
    {item.locked && <p className="text-lg text-red-500 text-justify">Coming Soon</p>}
  </div>
</div>

                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
  {item.image}
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
