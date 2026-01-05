import AllBlogPosts from '@/components/AllBlogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Blog - Vértice Marketing | Todos os Artigos',
  description: 'Acompanhe as últimas tendências, estratégias e novidades do marketing digital. Artigos completos sobre tráfego pago, SEO, CRM e muito mais.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AllBlogPosts />
      <CTASection />
      <Footer />
    </main>
  );
}
