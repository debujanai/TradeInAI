"use client";
import Lottie from "lottie-react";
import { useState } from "react";
import animation from './lottie/animation-5.json';
import laptop from './lottie/laptop.json';

export default function About() {
  const [state, setState] = useState("");
  return (
    <section style={{ position: 'relative', backgroundColor: '#131726' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* 1st item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Heading */}
            <div className="md:col-span-12 text-center mb-8">
              <div className="h1 font-space-grotesk"
                style={{
                  background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Who are we</div>
              <div style={{ marginTop: '50px' }}></div>
            </div>

            {/* Content */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <h3 className="h4 font-space-grotesk mb-3">Shaping the Future of Finance</h3>
                <p className="text-xl text-white-400 mb-4 font-space-grotesk text-justify">
                  TradeIn AI is at the forefront of cryptocurrency solutions, driven by innovation and a commitment to reshaping the future of finance. With our team of passionate experts, we're dedicated to pushing boundaries and delivering cutting-edge solutions that empower users and drive positive change in the industry.
                </p>
              </div>
            </div>
                        {/* Image */}
                        <div className="col-span-12 md:col-span-5 lg:col-span-6 mb-8 md:mb-0 flex justify-center" data-aos="fade-up">
              <Lottie animationData={animation} style={{ width: '100%', maxWidth: '600px', height: '300px' }} />
            </div>
          </div>

          {/* 2nd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center" style={{ marginTop: '100px' }}>
            {/* Heading */}
            <div className="md:col-span-12 text-center mb-8">
              <div className="h1 font-space-grotesk"
                style={{
                  background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Why Us</div>
              <div style={{ marginTop: '50px' }}></div>
            </div>
            {/* Content */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 order-2 md:order-1" data-aos="fade-right">
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <p className="text-xl text-white-400 mb-4 font-space-grotesk text-justify">
                  In the rapidly evolving world of cryptocurrency, timing is crucial. TradeIn AI leverages cutting-edge technology and innovative strategies to ensure you're not just keeping up with the market, but leading it. Now is the perfect moment to join us, as we are positioned to capitalize on emerging trends and opportunities that others might miss. Our advanced AI-driven insights and dedicated team provide you with the tools and knowledge needed to make informed decisions and achieve unprecedented success.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 mb-8 md:mb-0 order-1 md:order-2 flex justify-center" data-aos="fade-up">
              <Lottie animationData={laptop} style={{ width: '100%', maxWidth: '600px', height: '300px' }} />
            </div>
          </div>

          {/* 3rd item */}
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            <div style={{ marginTop: '100px' }}></div>
            {/* Heading */}
            <div className="md:col-span-12 text-center mb-8">
              <div className="h1 font-space-grotesk"
                style={{
                  background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Revenue</div>
              <div style={{ marginTop: '50px' }}></div>
            </div>
            {/* Subscriptions and Advertisements */}
            <div className="col-span-12" data-aos="fade-right">
              <div className="md:pl-4 lg:pl-12 xl:pl-16 flex flex-wrap justify-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="h3 font-space-grotesk mb-3 mt-10 md:mt-0 text-center" style={{
                  background: 'linear-gradient(to left, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Subscriptions</h3>
                  <p className="text-xl text-white-400 mb-4 font-space-grotesk text-justify">
                    Our financial strategy is multifaceted, primarily driven by a robust subscription model. Subscribers gain exclusive access to advanced tools, personalized insights, and premium features that enhance their trading experience and maximize their potential for success. This consistent revenue stream allows us to continuously innovate and improve our offerings.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="h3 font-space-grotesk mb-3 mt-10 md:mt-0 text-center" style={{
                  background: 'linear-gradient(to left, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Advertisements</h3>
                  <p className="text-xl text-white-400 mb-4 font-space-grotesk text-justify">
                    In addition to subscriptions, our platform also benefits from strategically placed advertisements. These ads are carefully selected to ensure they are relevant and valuable to our users, providing an additional revenue stream that supports our mission to deliver cutting-edge solutions in the cryptocurrency space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
