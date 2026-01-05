import ServicesSection from '@/components/ServicesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Serviços de Marketing Digital',
  description: 'Gestão de Tráfego, CRM Proprietário, Consultoria de Performance, SEO, Criação de Sites e E-commerce. Soluções completas para acelerar seu negócio.',
  keywords: ['gestão de tráfego pago', 'crm marketing', 'consultoria de performance', 'seo sp', 'criação de sites', 'e-commerce'],
  openGraph: {
    title: 'Serviços de Marketing Digital | Vértice Marketing',
    description: 'Gestão de Tráfego, CRM, Performance, SEO e E-commerce para empresas que querem crescer com dados.',
    url: 'https://vertice.roilabs.com.br/servicos',
  },
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
