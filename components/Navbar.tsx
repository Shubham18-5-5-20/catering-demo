// components/Navbar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  // FIX 1: Correctly destructure the state variables and their setters.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // FIX 2: Correctly place the dependency array inside the useEffect call.
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://redtagcaterers.in/sites/2025/1/redtagcaterer/logo/redtagcaterer.png"
                  alt="Red Tag Caterers Logo"
                  width={180}
                  height={45}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/gallery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>

            {/* Request a Quote Button (Desktop) */}
            <div className="hidden md:block">
               <Link href="/contact" className="bg-brand-red text-white font-bold py-2 px-5 rounded-md text-sm transition-transform transform hover:scale-105">
                  Request a Quote
               </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white p-2 rounded-md focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-brand-brown-dark z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-10">
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold">About Us</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold">Services</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold">Gallery</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white text-xl font-semibold">Contact</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-8 bg-brand-red text-white font-bold py-3 px-8 rounded-full text-lg">
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Overlay for when the menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;