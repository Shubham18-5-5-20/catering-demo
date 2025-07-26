// components/ServicesSection.tsx

import React from 'react';
import Link from 'next/link';
// FIX: Import the Image component from Next.js
import Image from 'next/image';

// Define the structure for a single service
interface Service {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Data for our service cards
const services: Service[] = [
  {
    title: 'Wedding Catering',
    description: 'Exquisite dining experiences to make your special day unforgettable.',
    imageUrl: 'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/wedding',
  },
  {
    title: 'Corporate Events',
    description: 'Professional and polished catering solutions for galas, meetings, and conferences.',
    imageUrl: 'https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/corporate',
  },
  {
    title: 'Private Parties',
    description: 'From intimate dinners to lavish celebrations, we cater to your every need.',
    imageUrl: 'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/private-parties',
  },
  {
    title: 'Outdoor Catering',
    description: 'Enjoy gourmet food in the great outdoors with our specialized catering services.',
    imageUrl: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/outdoor',
  },
];

// Reusable Service Card Component
const ServiceCard = ({ service }: { service: Service }) => (
  <Link href={service.link} className="group relative block h-96 w-full overflow-hidden rounded-lg shadow-lg">
    {/* FIX: Replaced <img> with the Next.js <Image> component */}
    {/* The 'fill' prop makes the image cover its parent container, and 'object-cover' ensures it scales correctly. */}
    <Image
      src={service.imageUrl}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
    
    {/* Content */}
    <div className="relative flex h-full flex-col justify-end p-6 text-white">
      <h3 className="text-3xl font-extrabold">{service.title}</h3>
      <p className="mt-2 max-w-xs text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {service.description}
      </p>
    </div>
  </Link>
);


const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Signature Services
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            From grand weddings to exclusive corporate functions, we tailor every detail to create a flawless and memorable experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;