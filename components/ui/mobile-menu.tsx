'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Scroll from '@/components/scroll';
import './button.css'; 
export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-800 px-4 py-2">
        <li>
              <Scroll to="about" >
                  <div className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">About</div>
                </Scroll>
              </li>
              <li>
                <Scroll to="testimonials" >
                  <div className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Tokenomics</div>
                </Scroll>
              </li>
              <li>
              <Scroll to="features" >
                  <div className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Features</div>
                </Scroll>
              </li>
              {/* Anchor links */}
              <li>
                <Scroll to="zigzag" >
                  <div className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Dapp Features</div>
                </Scroll>
              </li>
 
              <li>
                <Scroll to="again">
                  <div className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Roadmap</div>
                </Scroll>
              </li>

              <li>
              <a className="uiverse"  href="/comingsoon" target="_blank" rel="noopener noreferrer">Open DApp</a>

              </li>
          <li>
              <a className="uiverse" style={{marginTop:"10px"}} href="https://tradeinai.gitbook.io/tradein-ai" target="_blank" rel="noopener noreferrer">WhitePaper</a>

              </li>

        </ul>
      </nav>
    </div>
  )
}
