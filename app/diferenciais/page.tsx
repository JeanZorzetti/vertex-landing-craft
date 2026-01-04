import MissionSection from '@/components/MissionSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Nossos Diferenciais - Vértice Marketing',
  description: 'Conheça os valores e diferenciais que fazem da Vértice Marketing a escolha certa para transformar seu negócio.',
};

export default function DiferenciaisPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MissionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
