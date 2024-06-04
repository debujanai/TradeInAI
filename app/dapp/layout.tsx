// /app/dapp/layout.tsx

import React from 'react';

export default function DappLayout({ children }: { children: React.ReactNode }) {
  return (
    <section> 
      {children}
    </section>
  );
}
