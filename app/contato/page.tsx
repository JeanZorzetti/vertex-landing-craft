import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contato | Fale com Nossa Equipe',
  description: 'Entre em contato com a Vértice Marketing em São Paulo. Rua Cequeira Cesar nº 60, Zona Sul. Tel: (62) 99326-5713. Agende uma conversa gratuita de 30 minutos.',
  keywords: ['contato agência marketing', 'agência marketing são paulo', 'consultoria marketing digital'],
  openGraph: {
    title: 'Contato | Vértice Marketing',
    description: 'Entre em contato e agende uma conversa gratuita. Estamos em São Paulo para transformar seu negócio.',
    url: 'https://verticemarketing.com.br/contato',
  },
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
