// /app/dapp/layout.tsx

import Footer from '@/components/ui/footer';
import React from 'react';

const DappLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <div  style={{  fontFamily: 'Space Grotesk, sans-serif',background: "radial-gradient(circle, #202848, #252b4c, #292e51, #2e3255, #33355a, #323357, #323255, #313052, #2b2a47, #24233d, #1e1d33, #181729)"}}>
      <main className="grow" >
        {children}
      </main>
      </div>
    </>
  );
}

export default DappLayout;
