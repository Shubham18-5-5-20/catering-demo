// components/ContactCTASection.tsx

import React from 'react';
import Link from 'next/link';

const ContactCTASection: React.FC = () => {
  return (
    <section className="bg-brand-red">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Ready to Plan Your Perfect Event?
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200" style={{ color: '#EECF6D' }}>
          Let us create an unforgettable culinary experience together. Contact us today for a personalized quote.
        </p>
        <Link
          href="/contact"
          className="mt-8 w-full inline-flex items-center justify-center px-12 py-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-brand-red bg-white hover:bg-brand-gold-light transition-colors duration-300 sm:w-auto"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
};

export default ContactCTASection;