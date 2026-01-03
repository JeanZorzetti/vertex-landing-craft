import MissionSection from '@/components/MissionSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Nossos Diferenciais - Vértice Marketing',
  description: 'Conheça os valores e diferenciais que fazem da Vértice Marketing a escolha certa para transformar seu negócio.',
};

export default function DiferenciaisPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-gold/10 rounded-full border border-gold/30">
              <span className="text-gold text-sm font-bold tracking-widest uppercase">
                Nossos Valores
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              O DNA do nosso <span className="text-gold">Resultado</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Descubra os princípios e valores que nos guiam na busca por resultados extraordinários para nossos parceiros.
            </p>
          </div>
        </div>
      </section>

      <MissionSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="v-pattern-cta-dif" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M15 0 L22.5 15 L30 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#v-pattern-cta-dif)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos <span className="text-gold">crescer juntos</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Faça parte do grupo de empresários que já transformaram seus resultados com a Vértice.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 hover:scale-105"
            >
              Quero começar agora
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
