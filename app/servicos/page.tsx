import ServicesSection from '@/components/ServicesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Serviços - Vértice Marketing',
  description: 'Conheça nosso ecossistema completo de soluções para acelerar o crescimento do seu negócio.',
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
