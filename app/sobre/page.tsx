import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sobre Nós - Vértice Marketing',
  description: 'Conheça a Vértice Marketing e nossa missão de transformar negócios através de estratégias digitais baseadas em dados.',
};

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  );
}
