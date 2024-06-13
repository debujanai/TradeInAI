import Link from 'next/link';
import MobileMenu from './mobile-menu';
import React from 'react';
import Scroll from '@/components/scroll';
import logo from '@/components/svg/logo.png'
import Image from 'next/image';
import './button.css'; 

export default function Header() {
  return (
    <header style={{ position: 'fixed', width: '100%', zIndex: 30 }} className="bg-black bg-opacity-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-20">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="w-110 h-110" src={logo} alt="Description of image" width={90} height={90} />
            </Link>
          </div>

          {/* Middle navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Middle sign in links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Scroll to="about" >
                  <div className="font-medium text-white-600 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">About</div>
                </Scroll>
              </li>
              <li>
                <Scroll to="testimonials" >
                  <div className="font-medium text-white-600 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Tokenomics</div>
                </Scroll>
              </li>
              <li>
                <Scroll to="features" >
                  <div className="font-medium text-white-600 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Features</div>
                </Scroll>
              </li>
              {/* Anchor links */}
              <li>
                <Scroll to="zigzag" >
                  <div className="font-medium text-white-600 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Dapp Features</div>
                </Scroll>
              </li>
              <li>
                <Scroll to="again">
                  <div className="font-medium text-white-600 hover:text-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">Roadmap</div>
                </Scroll>
              </li>
            </ul>
          </nav>

          {/* Right navigation */}
          <nav className="hidden md:flex md:grow justify-end">
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <a className="uiverse" href="/dapp" target="_blank" rel="noopener noreferrer">Open Dapp</a>
              </li>
              <li>
                <a className="uiverse" style={{ marginLeft: "10px" }} href="https://tradeinai.gitbook.io/tradein-ai" target="_blank" rel="noopener noreferrer">WhitePaper</a>
              </li>
              <li>
                <a className="uiverse" style={{ marginLeft: "10px" }} href="https://www.dextools.io/app/en/ether/pair-explorer/0xaa0d392e535b34a7bccf0ccb17528bedef573a17?t=1718136873297" target="_blank" rel="noopener noreferrer">Dextools</a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  );
}