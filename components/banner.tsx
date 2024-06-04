'use client'

import { useState } from 'react'
import './button.css'; 

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          
          <a className="uiverse" onClick={scrollToTop} >Back to Top</a>           

          </div>
        
      )}
    </>
  )
}
