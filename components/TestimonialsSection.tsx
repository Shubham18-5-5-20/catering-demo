// components/TestimonialsSection.tsx

import React from 'react';

// Define the structure for a single testimonial
interface Testimonial {
  quote: string;
  author: string;
  eventType: string;
}

// FIX: 'testimonials' is now correctly typed as an array (Testimonial[]) 
// and initialized with placeholder data.
const testimonials: Testimonial[] = [
  {
    quote: "Caterers made our wedding day absolutely perfect. The food was phenomenal, and the service was impeccable. Our guests are still talking about the delicious appetizers!",
    author: "Anjali & Rohan P.",
    eventType: "Wedding Reception",
  },
  {
    quote: "We hired them for our annual corporate gala, and they exceeded all expectations. The entire process was seamless, professional, and the food presentation was stunning. Highly recommended.",
    author: "Sameer T, CEO of Innovate Corp",
    eventType: "Corporate Gala",
  },
  {
    quote: "The catering for my parents' 50th anniversary was a huge hit, thanks to the team. They were so attentive to our needs and created a menu that everyone loved.",
    author: "Priya K.",
    eventType: "Anniversary Party",
  },
];


// Reusable Testimonial Card Component (No changes needed)
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-brand-brown-dark p-8 rounded-lg shadow-lg flex flex-col h-full">
    <div className="text-brand-gold-medium mb-4">
      {/* Using a more standard quotation mark SVG for better visuals */}
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.981 19.82c0-2.399.799-4.223 2.4-5.474-1.12-1.399-1.68-3.249-1.68-5.549 0-4.149 3.199-7.525 7.199-7.525 4 0 7.199 3.376 7.199 7.525 0 2.3-0.56 4.149-1.68 5.549 1.601 1.251 2.4 3.075 2.4 5.474 0 4.149-3.199 7.525-7.199 7.525-4 0-7.199-3.376-7.199-7.525zM12.481 19.82c0 2.749 2.12 4.975 4.719 4.975s4.719-2.225 4.719-4.975c0-2.749-2.12-4.975-4.719-4.975s-4.719 2.225-4.719 4.975z"></path>
      </svg>
    </div>
    <blockquote className="text-gray-200 italic text-lg flex-grow">
      {testimonial.quote}
    </blockquote>
    <footer className="mt-6">
      <p className="font-bold text-white text-xl">{testimonial.author}</p>
      <p className="text-brand-gold-light">{testimonial.eventType}</p>
    </footer>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            We are proud to have been a part of so many special moments. Here’s what some of our happy clients have to share.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This .map() method now works correctly */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;