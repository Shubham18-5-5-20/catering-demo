import AboutPageContent from '@/components/AboutPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <main className="relative bg-gray-900">
      <Navbar />
      <AboutPageContent />
      {/* FIX 2: The Footer component call was placed outside the main tag and had stray text. It's now correctly inside. */}
      <Footer />
    </main>
  );
}