'use client';
// components/Scroll.tsx
import React from 'react';
import { Link } from 'react-scroll';

interface ScrollProps {
  to: string;
  children: React.ReactNode;
  className?: string; // Add this line to type the className prop
}

const Scroll: React.FC<ScrollProps> = ({ to, children, className }) => (
  <Link
    to={to}
    smooth
    duration={500} // Adjust the duration as needed
    offset={-50} // Offset from the top (adjust based on your header height)
    className={className}
  >
    {children}
  </Link>
);

export default Scroll;
