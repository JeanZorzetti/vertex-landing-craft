import BlogSection from '@/components/BlogSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Blog - Vértice Marketing',
  description: 'Acompanhe as últimas tendências, estratégias e novidades do marketing digital.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
