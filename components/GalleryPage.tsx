// components/GalleryPage.tsx

import React from 'react';
import Image from 'next/image';

// Define the structure for a single gallery image
interface GalleryImage {
  src: string;
  alt: string;
  category: 'Wedding' | 'Corporate' | 'Intimate';
}

// FIX 1: 'allImages' is now correctly typed as an array (GalleryImage[]) and initialized with a larger data set.
const allImages: GalleryImage[] = [
  // Weddings
  { src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Elegant Wedding Banquet', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Wedding Appetizer Platter', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Outdoor Wedding Reception', category: 'Wedding' },
  { src: 'https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Bride and Groom Toast', category: 'Wedding' },

  // Corporate
  { src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Professional Corporate Lunch', category: 'Corporate' },
  { src: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Corporate Event Buffet', category: 'Corporate' },
  { src: 'https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Conference Catering Spread', category: 'Corporate' },
  { src: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Business Networking Event', category: 'Corporate' },

  // Intimate
  { src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Cozy Dinner Party', category: 'Intimate' },
  { src: 'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Gourmet Small Plates', category: 'Intimate' },
  { src: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Backyard Barbecue Feast', category: 'Intimate' },
  { src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Family Style Dining', category: 'Intimate' },
];


// Reusable Image Card Component (No changes needed)
const ImageCard = ({ image }: { image: GalleryImage }) => (
  <div className="group relative flex-shrink-0 w-80 h-96 md:w-96 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
    <Image
      src={image.src}
      alt={image.alt}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4">
      <p className="text-white text-lg font-semibold">{image.alt}</p>
    </div>
  </div>
);

// Reusable Scrolling Row Component
// FIX 2: The 'images' prop is now correctly typed as an array (GalleryImage[]).
const GalleryRow = ({ title, images }: { title: string, images: GalleryImage[] }) => (
  <div className="mb-16">
    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h3>
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {/* This .map() method now works correctly */}
        {images.map((image) => (
          <ImageCard key={image.src} image={image} />
        ))}
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const GalleryPageContent: React.FC = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A visual journey through the unforgettable events we&#39;ve had the honor to be a part of.
          </p>
        </div>

        {/* Gallery Rows */}
        <div>
          {/* This .filter() method now works correctly */}
          <GalleryRow title="Unforgettable Weddings" images={allImages.filter(img => img.category === 'Wedding')} />
          <GalleryRow title="Corporate Excellence" images={allImages.filter(img => img.category === 'Corporate')} />
          <GalleryRow title="Intimate Gatherings" images={allImages.filter(img => img.category === 'Intimate')} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPageContent;