// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown-dark text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* About Section */}
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-white text-2xl font-bold">
              Red Tag <span className="text-brand-gold-medium">Caterers</span>
            </h3>
            <p className="text-gray-400 text-base">
              Crafting unforgettable culinary experiences since 2010. We specialize in bespoke catering for weddings, corporate events, and intimate gatherings across the Tri-City.
            </p>
            <div className="flex space-x-6">
              {/* Add social media links here */}
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/services" className="text-base text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link href="/gallery" className="text-base text-gray-400 hover:text-white">Gallery</Link></li>
                  <li><Link href="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Our Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/services/wedding" className="text-base text-gray-400 hover:text-white">Wedding Events</Link></li>
                  <li><Link href="/services/corporate" className="text-base text-gray-400 hover:text-white">Corporate Events</Link></li>
                  <li><Link href="/services/intimate" className="text-base text-gray-400 hover:text-white">Intimate Gatherings</Link></li>
                  <li><Link href="/services/media" className="text-base text-gray-400 hover:text-white">Media Events</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Get in Touch</h3>
                <div className="mt-4 space-y-4 text-base text-gray-400">
                  <p>SC0-35, Near Fountain<br/>Sector 17, Chandigarh</p>
                  <p>+91 98721 51166</p>
                  <p>[email protected]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 Red Tag Caterers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;