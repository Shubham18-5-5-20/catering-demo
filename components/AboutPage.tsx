// components/AboutPage.tsx

import React from 'react';
import Image from 'next/image';

const AboutPageContent: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        {/* UPDATED: Replaced the generic team photo with a more relevant catering image */}
        <Image
          src="https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Chef preparing a gourmet dish"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl text-brand-gold-light">A Passion for Flavor, A Commitment to Excellence</p>
        </div>
      </div>

      {/* 2. Our Story Section */}
      <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From a Simple Idea to the City&#39;s Premier Caterer</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Founded in 2010, Caterers was born from a simple yet powerful idea: that every event, no matter its size, deserves a culinary experience that is both memorable and exceptional. We started with a small, passionate team dedicated to bringing authentic flavors and innovative dishes to the table. Over the last decade, we&#39;ve grown into one of the most trusted catering firms in the city, but our core belief remains the same: every flavor tells a story. [1]
          </p>
        </div>
      </section>

      {/* 3. Our Philosophy / Core Values */}
      <section className="bg-brand-brown-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Our Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
            <div>
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-brand-red mx-auto mb-4">
                {/* Icon for Quality */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Uncompromising Quality</h3>
              <p className="text-gray-300">We source only the freshest local produce and finest ingredients. Quality is the foundation of every dish we create. [2]</p>
            </div>
            <div>
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-brand-red mx-auto mb-4">
                {/* Icon for Creativity */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Culinary Creativity</h3>
              <p className="text-gray-300">Our chefs are artists. We blend traditional recipes with modern techniques to craft innovative menus that delight and surprise. [3]</p>
            </div>
            <div>
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-brand-red mx-auto mb-4">
                {/* Icon for Service */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Impeccable Service</h3>
              <p className="text-gray-300">From planning to execution, our professional team is dedicated to providing a seamless, stress-free experience for you and your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet the Team Section */}
      <section className="bg-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Meet Our Leaders</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Placeholder Team Member Cards */}
            <div className="space-y-4">
              <Image className="mx-auto h-40 w-40 rounded-full object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Founder" width={160} height={160} />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Founder&#39;s Name</h3>
                <p className="text-brand-gold-medium">Founder & Visionary</p>
              </div>
            </div>
            <div className="space-y-4">
              <Image className="mx-auto h-40 w-40 rounded-full object-cover" src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Head Chef" width={160} height={160} />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Chef&#39;s Name</h3>
                <p className="text-brand-gold-medium">Executive Chef</p>
              </div>
            </div>
            <div className="space-y-4">
              <Image className="mx-auto h-40 w-40 rounded-full object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Events Manager" width={160} height={160} />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Manager&#39;s Name</h3>
                <p className="text-brand-gold-medium">Head of Events</p>
              </div>
            </div>
            <div className="space-y-4">
              <Image className="mx-auto h-40 w-40 rounded-full object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Client Relations" width={160} height={160} />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Relations Manager&#39;s Name</h3>
                <p className="text-brand-gold-medium">Client Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageContent;