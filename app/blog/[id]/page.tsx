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
    content: `
<div class="intro-highlight">
  <p class="lead-text">O mercado de tráfego pago está passando pela maior transformação da última década. Com a chegada de 2026, profissionais e empresas precisam dominar não apenas as plataformas tradicionais, mas também entender profundamente como a inteligência artificial, novos custos e mudanças regulatórias impactam diretamente o ROI das campanhas.</p>
</div>

<p class="text-highlight">Neste guia completo, vamos explorar tudo o que você precisa saber para ter sucesso em tráfego pago em 2026, com dados reais do mercado brasileiro e estratégias práticas.</p>

<div class="section-divider"></div>

<h2>📊 O Cenário Atual: Números que Você Precisa Conhecer</h2>

<div class="stats-grid">
  <div class="stat-card gold-gradient">
    <div class="stat-number">422%</div>
    <div class="stat-label">ROI Médio no Brasil</div>
    <div class="stat-desc">Varia entre 200% e 1000% dependendo do setor</div>
  </div>

  <div class="stat-card blue-gradient">
    <div class="stat-number">12,15%</div>
    <div class="stat-label">Aumento de Custos</div>
    <div class="stat-desc">No Meta Ads a partir de janeiro/2026</div>
  </div>

  <div class="stat-card purple-gradient">
    <div class="stat-number">3:1</div>
    <div class="stat-label">LTV/CAC Ideal</div>
    <div class="stat-desc">Métrica de ouro para 2026</div>
  </div>
</div>

<div class="alert-box warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-content">
    <h3>ATENÇÃO: Mudança Importante para 2026</h3>
    <p>A partir de 1º de janeiro de 2026, <strong>todas as empresas que investem em Meta Ads no Brasil enfrentarão um aumento de 12,15%</strong> no custo final das campanhas. Esse aumento é resultado do repasse direto de PIS/Cofins e ISS aos anunciantes brasileiros.</p>
  </div>
</div>

<div class="insight-box">
  <h3>💡 Insight Estratégico</h3>
  <p>Para 2026, a métrica de ouro não é mais apenas o ROAS (Return on Ad Spend), mas sim a <strong>relação LTV/CAC</strong> (Lifetime Value dividido pelo Custo de Aquisição de Cliente). Se o cliente não retorna para comprar ou se o serviço não tem recorrência, o custo de aquisição inicial via tráfego pago pode inviabilizar completamente a operação no longo prazo.</p>
</div>

<div class="section-divider"></div>

<h2>🤖 A Revolução da Inteligência Artificial</h2>

<div class="feature-card ai-card">
  <div class="feature-header">
    <span class="feature-badge">TENDÊNCIA 2026</span>
    <h3>Automação Completa de Anúncios</h3>
  </div>
  <p>A Meta oficializou seu plano mais ambicioso: <strong>automatizar completamente a criação de anúncios usando inteligência artificial até o final de 2026</strong>.</p>
  <ul class="feature-list">
    <li>✅ Ajustes automáticos de lances</li>
    <li>✅ Segmentação inteligente</li>
    <li>✅ Distribuição otimizada de orçamento</li>
    <li>✅ Testes A/B contínuos</li>
  </ul>
</div>

<div class="section-divider"></div>

<h2>📈 Google Ads vs Meta Ads: Qual Escolher em 2026?</h2>

<div class="comparison-grid">
  <div class="platform-card google-card">
    <div class="platform-logo">G</div>
    <h3>Google Ads</h3>
    <div class="platform-badge">Bottom-Funnel</div>
    <p class="platform-desc">Captura demanda imediata de quem já está buscando sua solução</p>
    <ul class="platform-features">
      <li>🎯 Alta intenção de compra</li>
      <li>📊 Conversão rápida</li>
      <li>💰 ROI mensurável</li>
    </ul>
  </div>

  <div class="platform-card meta-card">
    <div class="platform-logo">M</div>
    <h3>Meta Ads</h3>
    <div class="platform-badge">Top-Funnel</div>
    <p class="platform-desc">Educa e conscientiza seu público sobre problemas e soluções</p>
    <ul class="platform-features">
      <li>👥 Segmentação avançada</li>
      <li>📱 Engajamento social</li>
      <li>🎨 Criativos visuais</li>
    </ul>
  </div>
</div>

<div class="tip-box success">
  <strong>💡 Estratégia Vencedora:</strong> A resposta não é "ou/ou", mas "e/e". As agências e empresas que mais crescem em 2026 utilizam ambas plataformas de forma integrada no funil completo.
</div>

<div class="section-divider"></div>

<h2>🎯 Métricas que Realmente Importam em 2026</h2>

<div class="metrics-list">
  <div class="metric-item">
    <div class="metric-icon">1</div>
    <div class="metric-content">
      <h4>CAC (Custo de Aquisição de Cliente)</h4>
      <p>Quanto você gasta para conquistar cada novo cliente</p>
    </div>
  </div>

  <div class="metric-item">
    <div class="metric-icon">2</div>
    <div class="metric-content">
      <h4>LTV (Lifetime Value)</h4>
      <p>Valor total que um cliente gera durante seu relacionamento com sua empresa</p>
    </div>
  </div>

  <div class="metric-item highlight">
    <div class="metric-icon">3</div>
    <div class="metric-content">
      <h4>Relação LTV/CAC</h4>
      <p><strong>Meta Ideal: Acima de 3:1</strong> - Para cada R$1 gasto em aquisição, retorno de R$3 em valor</p>
    </div>
  </div>

  <div class="metric-item">
    <div class="metric-icon">4</div>
    <div class="metric-content">
      <h4>CTR (Taxa de Cliques)</h4>
      <p>Meta: Acima de 2% para campanhas de Search</p>
    </div>
  </div>

  <div class="metric-item">
    <div class="metric-icon">5</div>
    <div class="metric-content">
      <h4>Taxa de Conversão</h4>
      <p>Meta: Acima de 3% para e-commerce</p>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<h2>💰 Quanto Investir em Tráfego Pago?</h2>

<div class="investment-grid">
  <div class="investment-card">
    <div class="investment-platform">Google Ads</div>
    <div class="investment-amount">R$ 3.000<span>/mês</span></div>
    <div class="investment-label">Investimento Mínimo</div>
  </div>

  <div class="investment-card">
    <div class="investment-platform">Meta Ads</div>
    <div class="investment-amount">R$ 2.000<span>/mês</span></div>
    <div class="investment-label">Investimento Mínimo</div>
  </div>

  <div class="investment-card featured">
    <div class="investment-badge">RECOMENDADO</div>
    <div class="investment-platform">Estratégia Integrada</div>
    <div class="investment-amount">R$ 10-20k<span>/mês</span></div>
    <div class="investment-label">Investimento Ideal</div>
  </div>
</div>

<div class="section-divider"></div>

<h2>🚀 Estratégias Que Funcionam em 2026</h2>

<div class="strategies-grid">
  <div class="strategy-card">
    <div class="strategy-number">01</div>
    <h4>Segmentação por Intenção</h4>
    <p>Não por demografia - Foque no comportamento e intenção real de compra</p>
  </div>

  <div class="strategy-card">
    <div class="strategy-number">02</div>
    <h4>First-Party Data</h4>
    <p>Dados próprios são ouro - Construa sua base e não dependa de third-party cookies</p>
  </div>

  <div class="strategy-card">
    <div class="strategy-number">03</div>
    <h4>Criativos de Alta Performance</h4>
    <p>UGC performando 3x melhor - Conte histórias reais de clientes</p>
  </div>

  <div class="strategy-card">
    <div class="strategy-number">04</div>
    <h4>Funil Completo</h4>
    <p>Do awareness à conversão - Trabalhe todas as etapas da jornada</p>
  </div>

  <div class="strategy-card">
    <div class="strategy-number">05</div>
    <h4>Remarketing Avançado</h4>
    <p>Sequência de anúncios inteligente - Reforce mensagens em momentos estratégicos</p>
  </div>
</div>`
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
          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-2xl"></div>

              <div
                className="prose prose-xl max-w-none relative z-10
                [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-8
                [&>h2]:pb-6 [&>h2]:border-b-4 [&>h2]:border-gold/40 [&>h2]:text-navy
                [&>h2]:tracking-wide

                [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
                [&>h3]:text-navy/90

                [&>h4]:text-xl [&>h4]:md:text-2xl [&>h4]:font-bold [&>h4]:text-navy [&>h4]:mb-3

                [&>p]:text-base [&>p]:md:text-lg [&>p]:leading-relaxed [&>p]:mb-6
                [&>p]:text-zinc-700

                [&>strong]:text-navy [&>strong]:font-bold
                [&>strong]:px-1 [&>strong]:bg-gold/10 [&>strong]:rounded

                [&>ul]:my-4 [&>ul]:space-y-2
                [&>li]:text-base [&>li]:md:text-lg [&>li]:leading-relaxed

                [&_.intro-highlight]:bg-gradient-to-br [&_.intro-highlight]:from-navy/5 [&_.intro-highlight]:via-gold/5 [&_.intro-highlight]:to-navy/5
                [&_.intro-highlight]:rounded-2xl [&_.intro-highlight]:p-8 [&_.intro-highlight]:mb-8 [&_.intro-highlight]:border-l-4 [&_.intro-highlight]:border-gold

                [&_.lead-text]:text-xl [&_.lead-text]:md:text-2xl [&_.lead-text]:font-medium [&_.lead-text]:text-navy/90
                [&_.lead-text]:leading-relaxed [&_.lead-text]:mb-0

                [&_.text-highlight]:text-lg [&_.text-highlight]:text-center [&_.text-highlight]:font-medium
                [&_.text-highlight]:text-gold [&_.text-highlight]:my-8

                [&_.section-divider]:h-px [&_.section-divider]:bg-gradient-to-r [&_.section-divider]:from-transparent
                [&_.section-divider]:via-gold/30 [&_.section-divider]:to-transparent [&_.section-divider]:my-12

                [&_.stats-grid]:grid [&_.stats-grid]:grid-cols-1 [&_.stats-grid]:md:grid-cols-3
                [&_.stats-grid]:gap-6 [&_.stats-grid]:my-10

                [&_.stat-card]:rounded-2xl [&_.stat-card]:p-6 [&_.stat-card]:text-center
                [&_.stat-card]:shadow-xl [&_.stat-card]:transform [&_.stat-card]:transition-transform
                [&_.stat-card]:duration-300 hover:[&_.stat-card]:scale-105

                [&_.stat-card.gold-gradient]:bg-gradient-to-br [&_.stat-card.gold-gradient]:from-amber-50
                [&_.stat-card.gold-gradient]:to-yellow-100 [&_.stat-card.gold-gradient]:border-2
                [&_.stat-card.gold-gradient]:border-gold/30

                [&_.stat-card.blue-gradient]:bg-gradient-to-br [&_.stat-card.blue-gradient]:from-blue-50
                [&_.stat-card.blue-gradient]:to-cyan-100 [&_.stat-card.blue-gradient]:border-2
                [&_.stat-card.blue-gradient]:border-blue-300

                [&_.stat-card.purple-gradient]:bg-gradient-to-br [&_.stat-card.purple-gradient]:from-purple-50
                [&_.stat-card.purple-gradient]:to-pink-100 [&_.stat-card.purple-gradient]:border-2
                [&_.stat-card.purple-gradient]:border-purple-300

                [&_.stat-number]:text-5xl [&_.stat-number]:md:text-6xl [&_.stat-number]:font-black
                [&_.stat-number]:text-navy [&_.stat-number]:mb-3

                [&_.stat-label]:text-lg [&_.stat-label]:font-bold [&_.stat-label]:text-navy/80 [&_.stat-label]:mb-2

                [&_.stat-desc]:text-sm [&_.stat-desc]:text-zinc-600

                [&_.alert-box]:rounded-2xl [&_.alert-box]:p-6 [&_.alert-box]:my-10 [&_.alert-box]:flex
                [&_.alert-box]:gap-4 [&_.alert-box]:shadow-xl [&_.alert-box]:border-2

                [&_.alert-box.warning]:bg-gradient-to-br [&_.alert-box.warning]:from-orange-50
                [&_.alert-box.warning]:to-red-50 [&_.alert-box.warning]:border-orange-300

                [&_.alert-icon]:text-4xl [&_.alert-icon]:flex-shrink-0

                [&_.alert-content>h3]:text-xl [&_.alert-content>h3]:font-bold [&_.alert-content>h3]:text-orange-900
                [&_.alert-content>h3]:mb-2 [&_.alert-content>h3]:mt-0

                [&_.alert-content>p]:text-base [&_.alert-content>p]:text-orange-800 [&_.alert-content>p]:mb-0

                [&_.insight-box]:bg-gradient-to-br [&_.insight-box]:from-emerald-50 [&_.insight-box]:to-teal-100
                [&_.insight-box]:rounded-2xl [&_.insight-box]:p-8 [&_.insight-box]:my-10 [&_.insight-box]:border-2
                [&_.insight-box]:border-emerald-300 [&_.insight-box]:shadow-xl

                [&_.insight-box>h3]:text-2xl [&_.insight-box>h3]:font-bold [&_.insight-box>h3]:text-emerald-900
                [&_.insight-box>h3]:mb-4 [&_.insight-box>h3]:mt-0

                [&_.insight-box>p]:text-base [&_.insight-box>p]:md:text-lg [&_.insight-box>p]:text-emerald-800 [&_.insight-box>p]:mb-0

                [&_.feature-card]:bg-gradient-to-br [&_.feature-card]:from-indigo-50 [&_.feature-card]:to-purple-100
                [&_.feature-card]:rounded-2xl [&_.feature-card]:p-8 [&_.feature-card]:my-10 [&_.feature-card]:border-2
                [&_.feature-card]:border-indigo-300 [&_.feature-card]:shadow-xl

                [&_.feature-header]:mb-6

                [&_.feature-badge]:inline-block [&_.feature-badge]:bg-indigo-600 [&_.feature-badge]:text-white
                [&_.feature-badge]:px-4 [&_.feature-badge]:py-2 [&_.feature-badge]:rounded-full [&_.feature-badge]:text-xs
                [&_.feature-badge]:font-bold [&_.feature-badge]:uppercase [&_.feature-badge]:tracking-wider [&_.feature-badge]:mb-3

                [&_.feature-header>h3]:text-2xl [&_.feature-header>h3]:font-bold [&_.feature-header>h3]:text-indigo-900
                [&_.feature-header>h3]:mt-0 [&_.feature-header>h3]:mb-0

                [&_.feature-card>p]:text-base [&_.feature-card>p]:md:text-lg [&_.feature-card>p]:text-indigo-800

                [&_.feature-list]:space-y-3 [&_.feature-list]:mt-6 [&_.feature-list]:mb-0

                [&_.feature-list>li]:text-base [&_.feature-list>li]:md:text-lg [&_.feature-list>li]:text-indigo-900
                [&_.feature-list>li]:font-medium [&_.feature-list>li]:list-none

                [&_.comparison-grid]:grid [&_.comparison-grid]:grid-cols-1 [&_.comparison-grid]:md:grid-cols-2
                [&_.comparison-grid]:gap-6 [&_.comparison-grid]:my-10

                [&_.platform-card]:rounded-2xl [&_.platform-card]:p-8 [&_.platform-card]:shadow-xl
                [&_.platform-card]:transform [&_.platform-card]:transition-all [&_.platform-card]:duration-300
                hover:[&_.platform-card]:scale-105 hover:[&_.platform-card]:shadow-2xl

                [&_.platform-card.google-card]:bg-gradient-to-br [&_.platform-card.google-card]:from-red-50
                [&_.platform-card.google-card]:to-orange-100 [&_.platform-card.google-card]:border-2
                [&_.platform-card.google-card]:border-red-300

                [&_.platform-card.meta-card]:bg-gradient-to-br [&_.platform-card.meta-card]:from-blue-50
                [&_.platform-card.meta-card]:to-indigo-100 [&_.platform-card.meta-card]:border-2
                [&_.platform-card.meta-card]:border-blue-400

                [&_.platform-logo]:w-16 [&_.platform-logo]:h-16 [&_.platform-logo]:rounded-full
                [&_.platform-logo]:bg-white [&_.platform-logo]:flex [&_.platform-logo]:items-center
                [&_.platform-logo]:justify-center [&_.platform-logo]:text-3xl [&_.platform-logo]:font-black
                [&_.platform-logo]:text-navy [&_.platform-logo]:mb-4 [&_.platform-logo]:shadow-lg

                [&_.platform-card>h3]:text-2xl [&_.platform-card>h3]:font-bold [&_.platform-card>h3]:text-navy
                [&_.platform-card>h3]:mb-3 [&_.platform-card>h3]:mt-0

                [&_.platform-badge]:inline-block [&_.platform-badge]:bg-navy [&_.platform-badge]:text-gold
                [&_.platform-badge]:px-4 [&_.platform-badge]:py-1 [&_.platform-badge]:rounded-full
                [&_.platform-badge]:text-xs [&_.platform-badge]:font-bold [&_.platform-badge]:uppercase [&_.platform-badge]:mb-4

                [&_.platform-desc]:text-base [&_.platform-desc]:text-zinc-700 [&_.platform-desc]:mb-6

                [&_.platform-features]:space-y-2 [&_.platform-features]:mb-0

                [&_.platform-features>li]:text-base [&_.platform-features>li]:font-medium
                [&_.platform-features>li]:text-navy [&_.platform-features>li]:list-none

                [&_.tip-box]:bg-gradient-to-r [&_.tip-box]:from-green-50 [&_.tip-box]:to-emerald-100
                [&_.tip-box]:rounded-2xl [&_.tip-box]:p-6 [&_.tip-box]:my-8 [&_.tip-box]:border-2
                [&_.tip-box]:border-green-300 [&_.tip-box]:shadow-lg [&_.tip-box]:text-center

                [&_.tip-box]:text-base [&_.tip-box]:md:text-lg [&_.tip-box]:text-green-900

                [&_.metrics-list]:space-y-4 [&_.metrics-list]:my-10

                [&_.metric-item]:bg-white [&_.metric-item]:rounded-2xl [&_.metric-item]:p-6
                [&_.metric-item]:flex [&_.metric-item]:items-start [&_.metric-item]:gap-6
                [&_.metric-item]:shadow-lg [&_.metric-item]:border-2 [&_.metric-item]:border-gray-200
                [&_.metric-item]:transform [&_.metric-item]:transition-all [&_.metric-item]:duration-300
                hover:[&_.metric-item]:shadow-xl hover:[&_.metric-item]:scale-[1.02]

                [&_.metric-item.highlight]:bg-gradient-to-br [&_.metric-item.highlight]:from-amber-50
                [&_.metric-item.highlight]:to-yellow-100 [&_.metric-item.highlight]:border-gold

                [&_.metric-icon]:w-12 [&_.metric-icon]:h-12 [&_.metric-icon]:rounded-full
                [&_.metric-icon]:bg-gradient-to-br [&_.metric-icon]:from-gold [&_.metric-icon]:to-yellow-600
                [&_.metric-icon]:flex [&_.metric-icon]:items-center [&_.metric-icon]:justify-center
                [&_.metric-icon]:text-xl [&_.metric-icon]:font-black [&_.metric-icon]:text-white
                [&_.metric-icon]:flex-shrink-0 [&_.metric-icon]:shadow-lg

                [&_.metric-content>h4]:text-xl [&_.metric-content>h4]:font-bold [&_.metric-content>h4]:text-navy
                [&_.metric-content>h4]:mb-2 [&_.metric-content>h4]:mt-0

                [&_.metric-content>p]:text-base [&_.metric-content>p]:text-zinc-600 [&_.metric-content>p]:mb-0

                [&_.investment-grid]:grid [&_.investment-grid]:grid-cols-1 [&_.investment-grid]:md:grid-cols-3
                [&_.investment-grid]:gap-6 [&_.investment-grid]:my-10

                [&_.investment-card]:bg-gradient-to-br [&_.investment-card]:from-gray-50 [&_.investment-card]:to-gray-100
                [&_.investment-card]:rounded-2xl [&_.investment-card]:p-8 [&_.investment-card]:text-center
                [&_.investment-card]:shadow-xl [&_.investment-card]:border-2 [&_.investment-card]:border-gray-300
                [&_.investment-card]:transform [&_.investment-card]:transition-all [&_.investment-card]:duration-300
                hover:[&_.investment-card]:scale-105

                [&_.investment-card.featured]:bg-gradient-to-br [&_.investment-card.featured]:from-gold/20
                [&_.investment-card.featured]:to-yellow-100 [&_.investment-card.featured]:border-gold
                [&_.investment-card.featured]:shadow-2xl [&_.investment-card.featured]:relative

                [&_.investment-badge]:absolute [&_.investment-badge]:-top-3 [&_.investment-badge]:left-1/2
                [&_.investment-badge]:-translate-x-1/2 [&_.investment-badge]:bg-navy [&_.investment-badge]:text-gold
                [&_.investment-badge]:px-6 [&_.investment-badge]:py-2 [&_.investment-badge]:rounded-full
                [&_.investment-badge]:text-xs [&_.investment-badge]:font-bold [&_.investment-badge]:uppercase
                [&_.investment-badge]:shadow-lg

                [&_.investment-platform]:text-lg [&_.investment-platform]:font-bold [&_.investment-platform]:text-navy/80
                [&_.investment-platform]:mb-4

                [&_.investment-amount]:text-5xl [&_.investment-amount]:md:text-6xl [&_.investment-amount]:font-black
                [&_.investment-amount]:text-navy [&_.investment-amount]:mb-2

                [&_.investment-amount>span]:text-2xl [&_.investment-amount>span]:text-navy/60 [&_.investment-amount>span]:font-medium

                [&_.investment-label]:text-sm [&_.investment-label]:text-zinc-600 [&_.investment-label]:uppercase
                [&_.investment-label]:tracking-wider [&_.investment-label]:font-semibold

                [&_.strategies-grid]:grid [&_.strategies-grid]:grid-cols-1 [&_.strategies-grid]:md:grid-cols-2
                [&_.strategies-grid]:lg:grid-cols-3 [&_.strategies-grid]:gap-6 [&_.strategies-grid]:my-10

                [&_.strategy-card]:bg-white [&_.strategy-card]:rounded-2xl [&_.strategy-card]:p-6
                [&_.strategy-card]:shadow-xl [&_.strategy-card]:border-2 [&_.strategy-card]:border-gray-200
                [&_.strategy-card]:transform [&_.strategy-card]:transition-all [&_.strategy-card]:duration-300
                hover:[&_.strategy-card]:shadow-2xl hover:[&_.strategy-card]:scale-105
                hover:[&_.strategy-card]:border-gold

                [&_.strategy-number]:text-6xl [&_.strategy-number]:font-black [&_.strategy-number]:text-gold/20
                [&_.strategy-number]:mb-4 [&_.strategy-number]:leading-none

                [&_.strategy-card>h4]:text-xl [&_.strategy-card>h4]:font-bold [&_.strategy-card>h4]:text-navy
                [&_.strategy-card>h4]:mb-3 [&_.strategy-card>h4]:mt-0

                [&_.strategy-card>p]:text-base [&_.strategy-card>p]:text-zinc-600 [&_.strategy-card>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Gostou do Conteúdo? Fale com nossos especialistas
                </h2>
              </div>

              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                Entre em contato e descubra como podemos ajudar seu negócio a crescer com estratégias de tráfego pago personalizadas.
              </p>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                <a
                  href="https://wa.me/5562993265713?text=Tenho%20interesse%20em%20saber%20mais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/20 p-4 rounded-lg group-hover:bg-gold/30 transition-colors">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm mb-1 font-medium">Telefone/WhatsApp</p>
                      <p className="text-white font-bold text-lg">(62) 99326-5713</p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:verticecomp@gmail.com"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/20 p-4 rounded-lg group-hover:bg-gold/30 transition-colors">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm mb-1 font-medium">E-mail</p>
                      <p className="text-white font-bold text-lg break-all">verticecomp@gmail.com</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href="/contato">
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <Zap className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </Button>
                </Link>
                <p className="text-white/60 text-sm mt-4">
                  Resposta rápida • Atendimento personalizado
                </p>
              </div>
            </div>
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
