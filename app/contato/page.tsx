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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-gold/10 rounded-full border border-gold/30">
              <span className="text-gold text-sm font-bold tracking-widest uppercase">
                Entre em Contato
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Vamos conversar sobre o seu <span className="text-gold">Crescimento</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Agende uma conversa gratuita de 30 minutos. Sem compromisso, sem pressão. Apenas uma análise honesta do que podemos fazer pelo seu negócio.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
