import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contato - Vértice Marketing',
  description: 'Entre em contato com a Vértice Marketing e descubra como podemos transformar seu negócio.',
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
