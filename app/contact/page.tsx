import ContactPageContent from '@/components/ContactPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
 

export default function ContactPage() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}