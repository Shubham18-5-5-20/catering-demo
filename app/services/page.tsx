// app/services/page.tsx
import ServicesPageContent from '@/components/ServicesPage'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import ContactCTASection from '@/components/ContactCTASection'; 

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <ServicesPageContent />
      <ContactCTASection />
      <Footer />
    </main>
  );
}