import ServicesSection from '@/components/ServicesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Serviços - Vértice Marketing',
  description: 'Conheça nosso ecossistema completo de soluções para acelerar o crescimento do seu negócio.',
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="v-pattern-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M15 0 L22.5 15 L30 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#v-pattern-cta)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para <span className="text-gold">escalar</span> seu negócio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato e descubra como nossas soluções podem transformar seus resultados.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 hover:scale-105"
            >
              Fale conosco
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
