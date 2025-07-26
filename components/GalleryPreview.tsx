// components/GalleryPreview.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure for a single gallery image
interface GalleryImage {
  src: string;
  alt: string;
  category: 'Weddings' | 'Corporate' | 'Intimate';
}

// FIX 1: galleryImages is now correctly typed as an array (GalleryImage[]) and initialized with placeholder data.
const galleryImages: GalleryImage[] = [
  // Wedding Images
  { src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Elegant Wedding Banquet', category: 'Weddings' },
  { src: 'https://images.pexels.com/photos/265917/pexels-photo-265917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Wedding Appetizer Platter', category: 'Weddings' },
  
  // Corporate Images
  { src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Professional Corporate Lunch', category: 'Corporate' },
  { src: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Corporate Event Buffet', category: 'Corporate' },
  
  // Intimate Gatherings
  { src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Cozy Dinner Party', category: 'Intimate' },
  { src: 'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Gourmet Small Plates', category: 'Intimate' },
];


// Reusable Image Card Component (No changes needed)
const ImageCard = ({ image }: { image: GalleryImage }) => (
  <div className="group relative flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden shadow-xl">
    <Image
      src={image.src}
      alt={image.alt}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4">
      <p className="text-white text-lg font-semibold">{image.alt}</p>
    </div>
  </div>
);

// NEW: A dedicated card to prompt users to see the full gallery
const ViewMoreCard = ({ link }: { link: string }) => (
  <Link href={link} className="group relative flex-shrink-0 w-80 h-96 rounded-lg bg-gray-800 hover:bg-brand-red transition-colors duration-300 flex flex-col justify-center items-center text-white shadow-xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
    <p className="text-xl font-bold">View Full Gallery</p>
  </Link>
);

// Reusable Scrolling Row Component
// FIX 2: The 'images' prop is now correctly typed as an array (GalleryImage[]).
const GalleryRow = ({ title, images, categoryLink }: { title: string, images: GalleryImage[], categoryLink: string }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {/* The .map() method now works correctly. */}
        {images.map((image) => (
          <ImageCard key={image.src} image={image} />
        ))}
        <ViewMoreCard link={categoryLink} />
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const GalleryPreview: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            A Glimpse of Our Craft
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            Explore moments from our past events. Each photo tells a story of flavor, elegance, and unforgettable celebrations.
          </p>
        </div>
        <div>
          {/* The .filter() method now works correctly. */}
          <GalleryRow title="Unforgettable Weddings" images={galleryImages.filter(img => img.category === 'Weddings')} categoryLink="/gallery/weddings" />
          <GalleryRow title="Corporate Excellence" images={galleryImages.filter(img => img.category === 'Corporate')} categoryLink="/gallery/corporate" />
          <GalleryRow title="Intimate Gatherings" images={galleryImages.filter(img => img.category === 'Intimate')} categoryLink="/gallery/intimate" />
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;