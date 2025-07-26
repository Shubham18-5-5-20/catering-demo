import GalleryPageContent from '@/components/GalleryPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <GalleryPageContent />
      <Footer />
    </main>
  );
}