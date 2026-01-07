"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const defaultPosts = [
  {
    id: "1736105400000",
    title: "Tráfego Pago em 2026: O Guia Completo para Dominar Google Ads e Meta Ads no Novo Cenário Digital",
    excerpt: "Descubra as estratégias essenciais, tendências de IA, novos custos e métricas de ROI que vão definir o sucesso em tráfego pago em 2026. Um guia completo baseado em dados reais do mercado brasileiro.",
    date: "05 Jan 2026",
    readTime: "15 min",
    category: "Tráfego Pago",
    author: "Vértice Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: `<h1>Tráfego Pago em 2026: O Guia Completo para Dominar Google Ads e Meta Ads no Novo Cenário Digital</h1>

<p>O mercado de tráfego pago está passando pela maior transformação da última década. Com a chegada de 2026, profissionais e empresas precisam dominar não apenas as plataformas tradicionais, mas também entender profundamente como a inteligência artificial, novos custos e mudanças regulatórias impactam diretamente o ROI das campanhas.</p>

<p>Neste guia completo, vamos explorar tudo o que você precisa saber para ter sucesso em tráfego pago em 2026, com dados reais do mercado brasileiro e estratégias práticas.</p>

<h2>📊 O Cenário Atual: Números que Você Precisa Conhecer</h2>

<h3>ROI Médio no Brasil</h3>

<p>Segundo pesquisas recentes, o <strong>ROI médio de tráfego pago no Brasil é de 422%</strong>, mas essa métrica varia drasticamente entre 200% e 1000% dependendo do setor, qualidade da gestão e estratégia implementada.</p>

<p>Para 2026, a métrica de ouro não é mais apenas o ROAS (Return on Ad Spend), mas sim a <strong>relação LTV/CAC</strong> (Lifetime Value dividido pelo Custo de Aquisição de Cliente). Se o cliente não retorna para comprar ou se o serviço não tem recorrência, o custo de aquisição inicial via tráfego pago pode inviabilizar completamente a operação no longo prazo.</p>

<h3>O Impacto dos Novos Custos</h3>

<p>A partir de 1º de janeiro de 2026, <strong>todas as empresas que investem em Meta Ads no Brasil enfrentarão um aumento de 12,15%</strong> no custo final das campanhas. Esse aumento é resultado do repasse direto de PIS/Cofins e ISS aos anunciantes brasileiros.</p>

<h2>🤖 A Revolução da Inteligência Artificial</h2>

<p>A Meta oficializou seu plano mais ambicioso: <strong>automatizar completamente a criação de anúncios usando inteligência artificial até o final de 2026</strong>. Isso significa que sistemas inteligentes farão ajustes automáticos de lances, segmentação, distribuição de orçamento e testes contínuos.</p>

<h2>📈 Google Ads vs Meta Ads: Qual Escolher em 2026?</h2>

<p>A resposta não é "ou/ou", mas "e/e". As agências e empresas que mais crescem em 2026 utilizam Google Ads para capturar demanda imediata (bottom-funnel) e Meta Ads para educação e conscientização (top-funnel).</p>

<h2>🎯 Métricas que Realmente Importam em 2026</h2>

<ol>
<li><strong>CAC</strong> (Custo de Aquisição de Cliente)</li>
<li><strong>LTV</strong> (Lifetime Value)</li>
<li><strong>Relação LTV/CAC</strong> - Ideal: acima de 3:1</li>
<li><strong>CTR</strong> - Meta: acima de 2% para Search</li>
<li><strong>Taxa de Conversão</strong> - Meta: acima de 3% para e-commerce</li>
</ol>

<h2>💰 Quanto Investir?</h2>

<p><strong>Google Ads:</strong> Mínimo R$ 3.000/mês<br>
<strong>Meta Ads:</strong> Mínimo R$ 2.000/mês<br>
<strong>Estratégia Integrada:</strong> Ideal R$ 10.000-20.000/mês</p>

<h2>🚀 Estratégias Que Funcionam</h2>

<ol>
<li><strong>Segmentação por Intenção</strong> - Não por demografia</li>
<li><strong>First-Party Data</strong> - Dados próprios são ouro</li>
<li><strong>Criativos de Alta Performance</strong> - UGC performando 3x melhor</li>
<li><strong>Funil Completo</strong> - Do awareness à conversão</li>
<li><strong>Remarketing Avançado</strong> - Sequência de anúncios inteligente</li>
</ol>`
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const postId = params.id as string;

    // Buscar post do localStorage primeiro
    const savedPosts = localStorage.getItem("blogPosts");
    let foundPost = null;

    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      foundPost = posts.find((p: any) => p.id === postId);
    }

    // Se não encontrou no localStorage, buscar nos posts padrão
    if (!foundPost) {
      foundPost = defaultPosts.find((p) => p.id === postId);
    }

    if (foundPost) {
      setPost(foundPost);
    }

    setLoading(false);
  }, [params.id]);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-300"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <Header />

      {/* Floating Share Button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        <button
          onClick={sharePost}
          className="group p-3 bg-white text-navy hover:bg-gold hover:text-white rounded-full transition-all duration-300 shadow-lg"
          title="Compartilhar"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      <main className="py-12">
        {/* Hero Image */}
        <div className="relative h-[400px] w-full mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
        </div>

        {/* Content */}
        <article className="container mx-auto px-6 max-w-4xl -mt-32 relative z-10">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Blog</span>
          </Link>

          {/* Post Header */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
            {/* Category */}
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-gold font-bold text-sm uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Por:</span>
                <span>{post.author}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground border-l-4 border-gold pl-4 mb-8">
              {post.excerpt}
            </p>

            {/* Share Button */}
            <Button
              onClick={sharePost}
              variant="outline"
              className="gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </div>

          {/* Post Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 relative overflow-hidden">
            {/* Decorative gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full"></div>
            <div
              className="prose prose-xl max-w-none relative z-10
                prose-headings:text-navy prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:mb-8 prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-16 prose-h2:mb-8
                prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-gold/30
                prose-h2:bg-gradient-to-r prose-h2:from-navy prose-h2:to-navy/80
                prose-h2:bg-clip-text prose-h2:text-transparent
                prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-12 prose-h3:mb-6
                prose-h3:text-navy/90
                prose-p:text-foreground/90 prose-p:leading-[1.8] prose-p:mb-6
                prose-p:text-lg prose-p:tracking-wide
                prose-strong:text-navy prose-strong:font-bold prose-strong:text-xl
                prose-ol:my-8 prose-ol:space-y-4
                prose-ul:my-8 prose-ul:space-y-4
                prose-li:text-lg prose-li:leading-relaxed prose-li:pl-2
                prose-li:marker:text-gold prose-li:marker:font-bold
                prose-a:text-gold prose-a:font-semibold prose-a:no-underline
                prose-a:underline-offset-4 hover:prose-a:underline hover:prose-a:text-gold-light
                prose-blockquote:border-l-4 prose-blockquote:border-gold
                prose-blockquote:bg-gradient-to-r prose-blockquote:from-gold/5 prose-blockquote:to-transparent
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
                prose-blockquote:rounded-r-lg prose-blockquote:my-8
                prose-code:bg-navy/10 prose-code:text-navy prose-code:px-2
                prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base
                prose-pre:bg-navy/95 prose-pre:text-white prose-pre:rounded-xl
                prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-lg
                prose-hr:border-gold/20 prose-hr:my-12
                prose-table:border prose-table:border-navy/20 prose-table:rounded-lg
                prose-th:bg-navy/5 prose-th:p-4 prose-th:font-bold
                prose-td:p-4 prose-td:border prose-td:border-navy/10
                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          </div>
        </article>
      </main>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Link href="/contato">
          <button className="bg-gold hover:bg-gold-light text-navy font-bold px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Falar com Especialista
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
