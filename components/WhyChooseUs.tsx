// components/WhyChooseUs.tsx

import React from 'react';

// The FeatureCard component remains unchanged.
const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white group-hover:bg-black/30 p-8 rounded-lg text-center flex flex-col items-center shadow-md group-hover:shadow-lg group-hover:backdrop-blur-sm border border-gray-200 group-hover:border-white/10 transition-all duration-500 ease-in-out">
    <div className="text-brand-red group-hover:text-brand-gold-medium mb-4 transition-colors duration-500 ease-in-out">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-500 ease-in-out">{title}</h3>
    <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500 ease-in-out">
      {children}
    </p>
  </div>
);


const WhyChooseUs: React.FC = () => {
  return (
    // FIX 1: The <section> tag is now just a semantic container.
    <section>
      {/* 
        FIX 2: All styling has been moved to this div.
        The hover background is now set to 'brand-gold-dark'.
      */}
      <div className="group bg-brand-gold-light hover:bg-brand-gold-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ease-in-out">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-brown-dark group-hover:text-white transition-colors duration-500 ease-in-out">
              Our Commitment to <span className="text-brand-red group-hover:text-brand-gold-medium transition-colors duration-500 ease-in-out">Excellence</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-gray-700 group-hover:text-gray-300 max-w-3xl mx-auto transition-colors duration-500 ease-in-out">
              For over a decade, we have been the trusted choice for catering in the Tri-City area. Here’s why our clients choose us for their most important events.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              title="Bespoke Menus"
            >
              Your vision, our culinary artistry. We specialize in creating fully customized menus that reflect your taste and the theme of your event, using only the freshest, highest-quality ingredients.
            </FeatureCard>

            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Decade of Experience"
            >
              With over 10 years of experience serving thousands of events, our seasoned team ensures flawless execution and peace of mind for every occasion, from intimate gatherings to grand celebrations.
            </FeatureCard>

            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Impeccable Service"
            >
              Our professional and attentive staff are the heart of our service. We are dedicated to providing a seamless and memorable experience for you and your guests from start to finish.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;