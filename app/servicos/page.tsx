import ServicesSection from '@/components/ServicesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Serviços - Vértice Marketing',
  description: 'Conheça nosso ecossistema completo de soluções para acelerar o crescimento do seu negócio.',
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  );
}
