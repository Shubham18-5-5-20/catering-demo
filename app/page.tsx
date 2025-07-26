// app/page.tsx

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import GalleryPreview from '../components/GalleryPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactCTASection from '../components/ContactCTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactCTASection />
      <Footer />
      
      {/* 
        Future sections will be added here:
        <AboutUsSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      */}
    </main>
  );
}