// components/ServicesPage.tsx

import React from 'react';
import Image from 'next/image';

// Define the structure for a service
interface Service {
  name: string;
  description: string;
  imageUrl: string;
  offerings: string[];
}

// Data for all services
const servicesData: Service[] = [
  {
    name: 'Wedding Catering',
    description: 'Your special day deserves an unforgettable culinary experience. We collaborate with you to design a bespoke menu that reflects your love story, from elegant appetizers and multi-course plated dinners to lavish buffets.',
    imageUrl: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Custom Menu Design', 'Live Cooking Stations', 'Themed Buffets', 'Professional Waitstaff', 'Bar & Beverage Service'],
  },
  {
    name: 'Corporate Events',
    description: 'Elevate your corporate functions with our professional and polished catering solutions. We deliver exceptional food and flawless service that aligns with your brand’s prestige, from galas to executive luncheons.',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Breakfast & Lunch Buffets', 'Gala Dinners & Award Ceremonies', 'Product Launch Receptions', 'Holiday Office Parties', 'All-Day Conference Catering'],
  },
  {
    name: 'Intimate Gatherings',
    description: 'For private parties, milestone birthdays, or family celebrations, we bring the same level of dedication and artistry to a more personal scale. Enjoy a gourmet experience without any of the stress.',
    imageUrl: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    offerings: ['Anniversaries & Birthdays', 'Holiday Family Dinners', 'Themed Cocktail Parties', 'Gourmet Barbecues', 'Personal Chef Experiences'],
  },
];

// Reusable component for each service's detailed view
const ServiceDetailCard = ({ service, index }: { service: Service; index: number }) => (
  // Alternate layout direction for visual interest
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center`}>
    <div className={`relative h-80 w-full rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
      <Image src={service.imageUrl} alt={service.name} layout="fill" objectFit="cover" />
    </div>
    <div className="text-gray-300">
      <h3 className="text-3xl font-bold text-white mb-4">{service.name}</h3>
      <p className="mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2">
        {service.offerings.map((item) => (
          <li key={item} className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ServicesPageContent: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-black">
        <Image
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="A spread of delicious catered food"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold">Catering for Every Occasion</h1>
          <p className="mt-4 text-lg md:text-xl text-brand-gold-light">Crafting exceptional menus tailored to your unique event.</p>
        </div>
      </div>

      {/* Services Details Section */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service, index) => (
            <ServiceDetailCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPageContent;