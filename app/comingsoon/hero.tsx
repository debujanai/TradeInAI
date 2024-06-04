"use client";

import { useState } from "react";
export default function Hero() {
  const [state, setState] = useState("");
  return (
    <section style={{ position: 'relative', backgroundColor: '#1c1b36' }}>
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
Coming Soon!
</h1>
          </div>
        
      
    </section>
  )
}
