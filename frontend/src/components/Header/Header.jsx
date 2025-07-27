import React from 'react';
import Navbar from '../layout/Navbar/Navbar';
import MobileNav from '../layout/MobileNav/MobileNav';

export default function Header() {
  return (
    <header>
      <Navbar />
      <MobileNav />
    </header>
  );
}
