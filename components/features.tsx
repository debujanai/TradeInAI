'use client';
import svg from './svg/first.svg'
import svgtwo from './svg/second.svg'
import svgthree from './svg/third.svg'
import svgfour from './svg/forth.svg'
import Image from 'next/image';
import starts from './lottie/starts.json'; 
import Lottie from "lottie-react";
import { useState } from "react";

export default function Features() {
  const [state, setState] = useState("");
  return (
    <section style={{position: 'relative', backgroundColor: '#131726' }}>
      <Lottie
        animationData={starts}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0 // Ensure background animation is behind other content
        }}
        loop={true}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"   style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Pioneering Advancements: Redefining Crypto Experience
</h2>
            <p className="text-l text-white-400 text-center">Step into the future of cryptocurrency with TradeIn AI's pioneering advancements, setting new standards in the industry. Our platform integrates cutting-edge technologies to revolutionize how users interact with digital assets. Explore below to uncover the innovative features that differentiate TradeIn AI and elevate your crypto journey to unprecedented heights.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={svg} alt="Custom SVG" width={64} height={64} className="mb-4" />
              <h4 className="h4 mb-2" style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Security</h4>
              <p className="text-lg text-white-400 text-center ">TradeIn AI employs state-of-the-art encryption protocols to safeguard user data and transactions, ensuring the highest level of security.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={svgfour} alt="Custom SVG" width={64} height={64} className="mb-4" />
              <h4 className="h4 mb-2" style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Efficiency</h4>
              <p className="text-lg text-white-400 text-center">With our optimized infrastructure, TradeIn AI streamlines transaction processing, reducing latency and ensuring swift execution of trades.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={svgtwo} alt="Custom SVG" width={64} height={64} className="mb-4" />
              <h4 className="h4 mb-2" style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>User Experience</h4>
              <p className="text-lg text-white-400 text-center">TradeIn AI boasts an intuitive user interface, designed with user experience in mind. Navigation is seamless, and accessing key features is effortless.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={svgthree} alt="Custom SVG" width={64} height={64} className="mb-4" />
              <h4 className="h4 mb-2" style={{
    background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>Innovation</h4>
              <p className="text-lg text-white-400 text-center">TradeIn AI utilizes advanced technologies to provide users with personalized insights and recommendations, leveraging data analytics to enhance trading strategies.</p>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}
