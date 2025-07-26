// components/HeroSection.tsx

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    // The main container remains the same
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Responsive Content Container */}
      {/* UPDATED: Padding changes with screen size for better spacing */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl font-light tracking-wider mb-2 text-brand-gold-light">
          Best Caterers in Chandigarh Since 2010
        </p>
        
        {/* Responsive Main Headline */}
        {/* UPDATED: Font size now scales from 5xl on mobile up to 9xl on extra-large screens */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-4 drop-shadow-md">
          Every Flavor Tells a Story
        </h1>
        
        {/* Responsive Body Text */}
        <p className="text-md sm:text-lg lg:text-xl max-w-4xl mx-auto mb-8 font-light text-gray-200">
          Crafting unforgettable culinary experiences for weddings, corporate events, and intimate gatherings across the Tri-City.
        </p>
        
        {/* Responsive Button */}
        {/* UPDATED: Both padding and font size scale up with the screen size for a consistently prominent CTA */}
        <Link 
          href="/services"
          className="bg-brand-red text-white font-bold 
                     text-lg py-3 px-8 
                     md:text-xl md:py-4 md:px-12 
                     lg:text-2xl lg:py-5 lg:px-14 
                     rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 border-brand-gold-light hover:bg-red-700"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;