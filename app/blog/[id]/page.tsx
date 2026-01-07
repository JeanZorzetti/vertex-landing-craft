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
    id: "1736278800000",
    title: "Marketing de Conteúdo em 2026: Como Criar Estratégias que Convertem e Geram Resultados Reais",
    excerpt: "Descubra as melhores práticas, formatos que mais engajam e estratégias de SEO para criar conteúdo que atrai, educa e converte seu público em clientes fiéis.",
    date: "07 Jan 2026",
    readTime: "12 min",
    category: "Marketing de Conteúdo",
    author: "Vértice Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    content: `<p>O marketing de conteúdo deixou de ser uma tendência para se tornar a espinha dorsal de qualquer estratégia digital bem-sucedida. Em 2026, empresas que investem em conteúdo relevante e estratégico estão gerando <strong>3x mais leads</strong> e gastando <strong>62% menos</strong> do que com marketing tradicional.</p>

<p>Neste guia completo, você vai descobrir como criar uma estratégia de marketing de conteúdo que realmente funciona, com exemplos práticos e métricas comprovadas do mercado brasileiro.</p>

<h2>📌 Por Que Marketing de Conteúdo é Essencial em 2026?</h2>

<p>O comportamento do consumidor mudou radicalmente. Hoje, <strong>70% das pessoas preferem conhecer uma empresa através de artigos</strong> do que de anúncios tradicionais. Além disso, empresas que mantêm blogs recebem <strong>97% mais links</strong> para seus sites.</p>

<h3>Os Números que Comprovam</h3>

<p>Dados recentes do mercado brasileiro mostram que:</p>

<ol>
<li><strong>82%</strong> dos consumidores se sentem mais positivos sobre uma marca após ler conteúdo personalizado</li>
<li><strong>60%</strong> das pessoas são inspiradas a procurar um produto após ler sobre ele</li>
<li><strong>Empresas com blog geram 67% mais leads</strong> por mês do que aquelas que não possuem</li>
</ol>

<h2>🎯 Os 5 Pilares de uma Estratégia de Conteúdo Vencedora</h2>

<h3>1. Conheça Profundamente seu Público</h3>

<p>Antes de criar qualquer conteúdo, você precisa entender quem é seu público-alvo. Crie <strong>personas detalhadas</strong> com:</p>

<ol>
<li>Dados demográficos (idade, localização, cargo)</li>
<li>Dores e desafios específicos</li>
<li>Objetivos e aspirações</li>
<li>Canais de comunicação preferidos</li>
<li>Jornada de compra</li>
</ol>

<h3>2. Planeje seu Calendário Editorial</h3>

<p>Um calendário editorial bem estruturado garante consistência e permite que você:</p>

<ol>
<li>Publique regularmente (mínimo 2-3 vezes por semana)</li>
<li>Cubra todos os estágios do funil de vendas</li>
<li>Aproveite datas sazonais e tendências</li>
<li>Mantenha variedade de formatos</li>
</ol>

<h3>3. Crie Conteúdo de Valor Real</h3>

<p>Seu conteúdo precisa resolver problemas reais. Invista em:</p>

<ol>
<li><strong>Guias completos</strong> - Artigos longos (2000+ palavras) sobre temas específicos</li>
<li><strong>Estudos de caso</strong> - Mostre resultados reais de clientes</li>
<li><strong>Infográficos</strong> - Visual atrai 3x mais engajamento</li>
<li><strong>Vídeos tutoriais</strong> - 88% querem ver mais conteúdo em vídeo</li>
<li><strong>Checklists e templates</strong> - Materiais práticos e acionáveis</li>
</ol>

<h3>4. Otimize para SEO</h3>

<p>Sem SEO, seu conteúdo não será encontrado. Garanta que cada artigo tenha:</p>

<ol>
<li><strong>Palavra-chave principal</strong> no título, H1 e primeiros 100 caracteres</li>
<li><strong>Palavras-chave secundárias</strong> distribuídas naturalmente</li>
<li><strong>Meta description</strong> atraente (150-160 caracteres)</li>
<li><strong>URLs amigáveis</strong> e descritivas</li>
<li><strong>Links internos</strong> para outros conteúdos relevantes</li>
<li><strong>Alt text</strong> em todas as imagens</li>
</ol>

<h3>5. Distribua Estrategicamente</h3>

<p>Criar conteúdo é só o começo. Você precisa distribuí-lo nos canais certos:</p>

<ol>
<li><strong>Redes sociais</strong> - Adapte o formato para cada plataforma</li>
<li><strong>Email marketing</strong> - Newsletter semanal com seus melhores conteúdos</li>
<li><strong>LinkedIn</strong> - Ideal para B2B e conteúdo profissional</li>
<li><strong>WhatsApp Business</strong> - Grupos segmentados por interesse</li>
<li><strong>Parcerias</strong> - Guest posts em blogs relevantes</li>
</ol>

<h2>📊 Métricas que Importam</h2>

<p>Para saber se sua estratégia está funcionando, acompanhe:</p>

<h3>Métricas de Alcance</h3>

<ol>
<li><strong>Tráfego orgânico</strong> - Visitantes vindos de busca</li>
<li><strong>Pageviews</strong> - Visualizações de página</li>
<li><strong>Tempo médio na página</strong> - Quanto maior, melhor</li>
<li><strong>Taxa de rejeição</strong> - Ideal abaixo de 60%</li>
</ol>

<h3>Métricas de Engajamento</h3>

<ol>
<li><strong>Comentários e compartilhamentos</strong></li>
<li><strong>Taxa de cliques (CTR)</strong></li>
<li><strong>Leads gerados</strong></li>
<li><strong>Downloads de materiais</strong></li>
</ol>

<h3>Métricas de Conversão</h3>

<ol>
<li><strong>Leads qualificados (MQL)</strong></li>
<li><strong>Taxa de conversão</strong> - Visitante para lead</li>
<li><strong>Custo por lead (CPL)</strong></li>
<li><strong>ROI do conteúdo</strong></li>
</ol>

<h2>🚀 Formatos de Conteúdo que Mais Convertem</h2>

<h3>1. Blog Posts Otimizados</h3>

<p>Artigos entre <strong>1500-2500 palavras</strong> têm melhor performance no Google. Foque em:</p>

<ol>
<li>Títulos chamativos com números</li>
<li>Subtítulos escaneáveis</li>
<li>Listas e bullet points</li>
<li>Imagens e infográficos</li>
<li>CTAs estratégicos</li>
</ol>

<h3>2. Ebooks e Whitepapers</h3>

<p>Materiais ricos são ótimos para capturar leads qualificados. Características:</p>

<ol>
<li>Conteúdo aprofundado (15-30 páginas)</li>
<li>Design profissional</li>
<li>Dados e estatísticas atualizadas</li>
<li>Exemplos práticos</li>
<li>Landing page dedicada</li>
</ol>

<h3>3. Vídeos e Webinars</h3>

<p>Vídeo marketing cresce <strong>49% ano a ano</strong>. Invista em:</p>

<ol>
<li>Tutoriais e how-tos</li>
<li>Entrevistas com especialistas</li>
<li>Demonstrações de produto</li>
<li>Webinars ao vivo com Q&A</li>
<li>Stories e reels para redes sociais</li>
</ol>

<h2>💡 Erros Comuns a Evitar</h2>

<ol>
<li><strong>Inconsistência</strong> - Postar esporadicamente mata o engajamento</li>
<li><strong>Foco em vendas</strong> - Regra 80/20: 80% educação, 20% promocional</li>
<li><strong>Ignorar SEO</strong> - Sem otimização, ninguém encontra seu conteúdo</li>
<li><strong>Não reutilizar</strong> - Um artigo pode virar vídeo, infográfico, posts sociais</li>
<li><strong>Não medir resultados</strong> - O que não é medido, não pode ser melhorado</li>
</ol>

<h2>🎯 Próximos Passos</h2>

<p>Para começar sua estratégia de marketing de conteúdo:</p>

<ol>
<li><strong>Defina seus objetivos</strong> - Leads? Tráfego? Autoridade?</li>
<li><strong>Pesquise palavras-chave</strong> - Use ferramentas como SEMrush ou Ubersuggest</li>
<li><strong>Crie seu calendário</strong> - Planeje 3 meses à frente</li>
<li><strong>Produza conteúdo piloto</strong> - Comece com 5-10 artigos base</li>
<li><strong>Distribua massivamente</strong> - Use todos os canais disponíveis</li>
<li><strong>Analise e otimize</strong> - Revise métricas mensalmente</li>
</ol>

<p>Lembre-se: marketing de conteúdo é uma maratona, não uma corrida de velocidade. Consistência e qualidade sempre vencem quantidade.</p>`
  },
  {
    id: "1736105400000",
    title: "Tráfego Pago em 2026: O Guia Completo para Dominar Google Ads e Meta Ads no Novo Cenário Digital",
    excerpt: "Descubra as estratégias essenciais, tendências de IA, novos custos e métricas de ROI que vão definir o sucesso em tráfego pago em 2026. Um guia completo baseado em dados reais do mercado brasileiro.",
    date: "05 Jan 2026",
    readTime: "15 min",
    category: "Tráfego Pago",
    author: "Vértice Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: `<p>O mercado de tráfego pago está passando pela maior transformação da última década. Com a chegada de 2026, profissionais e empresas precisam dominar não apenas as plataformas tradicionais, mas também entender profundamente como a inteligência artificial, novos custos e mudanças regulatórias impactam diretamente o ROI das campanhas.</p>

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
          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-2xl"></div>

              <div
                className="prose prose-xl max-w-none relative z-10
                [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-5
                [&>h2]:pb-3 [&>h2]:border-b-2 [&>h2]:border-gold/40 [&>h2]:text-navy
                [&>h2]:tracking-wide

                [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:font-bold [&>h3]:mt-5 [&>h3]:mb-3
                [&>h3]:text-navy/90

                [&>h4]:text-lg [&>h4]:md:text-xl [&>h4]:font-bold [&>h4]:text-navy [&>h4]:mb-2

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

                [&_.stats-grid]:flex [&_.stats-grid]:flex-wrap [&_.stats-grid]:justify-center
                [&_.stats-grid]:gap-4 [&_.stats-grid]:my-10 [&_.stats-grid]:max-w-6xl [&_.stats-grid]:mx-auto

                [&_.stat-card]:rounded-2xl [&_.stat-card]:p-6 [&_.stat-card]:text-center
                [&_.stat-card]:shadow-xl [&_.stat-card]:transform [&_.stat-card]:transition-transform
                [&_.stat-card]:duration-300 hover:[&_.stat-card]:scale-105
                [&_.stat-card]:flex-shrink-0 [&_.stat-card]:w-[280px]

                [&_.stat-card.gold-gradient]:bg-gradient-to-br [&_.stat-card.gold-gradient]:from-amber-50
                [&_.stat-card.gold-gradient]:to-yellow-100 [&_.stat-card.gold-gradient]:border-2
                [&_.stat-card.gold-gradient]:border-gold/30

                [&_.stat-card.blue-gradient]:bg-gradient-to-br [&_.stat-card.blue-gradient]:from-blue-50
                [&_.stat-card.blue-gradient]:to-cyan-100 [&_.stat-card.blue-gradient]:border-2
                [&_.stat-card.blue-gradient]:border-blue-300

                [&_.stat-card.purple-gradient]:bg-gradient-to-br [&_.stat-card.purple-gradient]:from-purple-50
                [&_.stat-card.purple-gradient]:to-pink-100 [&_.stat-card.purple-gradient]:border-2
                [&_.stat-card.purple-gradient]:border-purple-300

                [&_.stat-number]:text-4xl [&_.stat-number]:md:text-5xl [&_.stat-number]:font-black
                [&_.stat-number]:text-navy [&_.stat-number]:mb-2

                [&_.stat-label]:text-base [&_.stat-label]:font-bold [&_.stat-label]:text-navy/80 [&_.stat-label]:mb-2

                [&_.stat-desc]:text-xs [&_.stat-desc]:text-zinc-600

                [&_.alert-box]:rounded-2xl [&_.alert-box]:p-6 [&_.alert-box]:my-10 [&_.alert-box]:flex
                [&_.alert-box]:gap-4 [&_.alert-box]:shadow-xl [&_.alert-box]:border-2
                [&_.alert-box]:max-w-4xl [&_.alert-box]:mx-auto

                [&_.alert-box.warning]:bg-gradient-to-br [&_.alert-box.warning]:from-orange-50
                [&_.alert-box.warning]:to-red-50 [&_.alert-box.warning]:border-orange-300

                [&_.alert-icon]:text-3xl [&_.alert-icon]:flex-shrink-0

                [&_.alert-content>h3]:text-lg [&_.alert-content>h3]:font-bold [&_.alert-content>h3]:text-orange-900
                [&_.alert-content>h3]:mb-2 [&_.alert-content>h3]:mt-0

                [&_.alert-content>p]:text-sm [&_.alert-content>p]:text-orange-800 [&_.alert-content>p]:mb-0

                [&_.insight-box]:bg-gradient-to-br [&_.insight-box]:from-emerald-50 [&_.insight-box]:to-teal-100
                [&_.insight-box]:rounded-2xl [&_.insight-box]:p-6 [&_.insight-box]:my-10 [&_.insight-box]:border-2
                [&_.insight-box]:border-emerald-300 [&_.insight-box]:shadow-xl
                [&_.insight-box]:max-w-4xl [&_.insight-box]:mx-auto

                [&_.insight-box>h3]:text-lg [&_.insight-box>h3]:font-bold [&_.insight-box>h3]:text-emerald-900
                [&_.insight-box>h3]:mb-3 [&_.insight-box>h3]:mt-0

                [&_.insight-box>p]:text-sm [&_.insight-box>p]:text-emerald-800 [&_.insight-box>p]:mb-0
                [&_.insight-box>p]:leading-relaxed

                [&_.feature-card]:bg-gradient-to-br [&_.feature-card]:from-indigo-50 [&_.feature-card]:to-purple-100
                [&_.feature-card]:rounded-2xl [&_.feature-card]:p-6 [&_.feature-card]:my-10 [&_.feature-card]:border-2
                [&_.feature-card]:border-indigo-300 [&_.feature-card]:shadow-xl
                [&_.feature-card]:max-w-4xl [&_.feature-card]:mx-auto

                [&_.feature-header]:mb-4

                [&_.feature-badge]:inline-block [&_.feature-badge]:bg-indigo-600 [&_.feature-badge]:text-white
                [&_.feature-badge]:px-3 [&_.feature-badge]:py-1 [&_.feature-badge]:rounded-full [&_.feature-badge]:text-xs
                [&_.feature-badge]:font-bold [&_.feature-badge]:uppercase [&_.feature-badge]:tracking-wider [&_.feature-badge]:mb-2

                [&_.feature-header>h3]:text-xl [&_.feature-header>h3]:font-bold [&_.feature-header>h3]:text-indigo-900
                [&_.feature-header>h3]:mt-0 [&_.feature-header>h3]:mb-0

                [&_.feature-card>p]:text-sm [&_.feature-card>p]:text-indigo-800 [&_.feature-card>p]:leading-relaxed

                [&_.feature-list]:space-y-2 [&_.feature-list]:mt-4 [&_.feature-list]:mb-0

                [&_.feature-list>li]:text-sm [&_.feature-list>li]:text-indigo-900
                [&_.feature-list>li]:font-medium [&_.feature-list>li]:list-none

                [&_.comparison-grid]:grid [&_.comparison-grid]:grid-cols-1 [&_.comparison-grid]:md:grid-cols-2
                [&_.comparison-grid]:gap-6 [&_.comparison-grid]:my-10 [&_.comparison-grid]:max-w-4xl [&_.comparison-grid]:mx-auto

                [&_.platform-card]:rounded-2xl [&_.platform-card]:p-6 [&_.platform-card]:shadow-xl
                [&_.platform-card]:transform [&_.platform-card]:transition-all [&_.platform-card]:duration-300
                hover:[&_.platform-card]:scale-105 hover:[&_.platform-card]:shadow-2xl

                [&_.platform-card.google-card]:bg-gradient-to-br [&_.platform-card.google-card]:from-red-50
                [&_.platform-card.google-card]:to-orange-100 [&_.platform-card.google-card]:border-2
                [&_.platform-card.google-card]:border-red-300

                [&_.platform-card.meta-card]:bg-gradient-to-br [&_.platform-card.meta-card]:from-blue-50
                [&_.platform-card.meta-card]:to-indigo-100 [&_.platform-card.meta-card]:border-2
                [&_.platform-card.meta-card]:border-blue-400

                [&_.platform-logo]:w-14 [&_.platform-logo]:h-14 [&_.platform-logo]:rounded-full
                [&_.platform-logo]:bg-white [&_.platform-logo]:flex [&_.platform-logo]:items-center
                [&_.platform-logo]:justify-center [&_.platform-logo]:text-2xl [&_.platform-logo]:font-black
                [&_.platform-logo]:text-navy [&_.platform-logo]:mb-3 [&_.platform-logo]:shadow-lg

                [&_.platform-card>h3]:text-xl [&_.platform-card>h3]:font-bold [&_.platform-card>h3]:text-navy
                [&_.platform-card>h3]:mb-2 [&_.platform-card>h3]:mt-0

                [&_.platform-badge]:inline-block [&_.platform-badge]:bg-navy [&_.platform-badge]:text-gold
                [&_.platform-badge]:px-3 [&_.platform-badge]:py-1 [&_.platform-badge]:rounded-full
                [&_.platform-badge]:text-xs [&_.platform-badge]:font-bold [&_.platform-badge]:uppercase [&_.platform-badge]:mb-3

                [&_.platform-desc]:text-sm [&_.platform-desc]:text-zinc-700 [&_.platform-desc]:mb-4

                [&_.platform-features]:space-y-2 [&_.platform-features]:mb-0

                [&_.platform-features>li]:text-sm [&_.platform-features>li]:font-medium
                [&_.platform-features>li]:text-navy [&_.platform-features>li]:list-none

                [&_.tip-box]:bg-gradient-to-r [&_.tip-box]:from-green-50 [&_.tip-box]:to-emerald-100
                [&_.tip-box]:rounded-2xl [&_.tip-box]:p-5 [&_.tip-box]:my-8 [&_.tip-box]:border-2
                [&_.tip-box]:border-green-300 [&_.tip-box]:shadow-lg [&_.tip-box]:text-center
                [&_.tip-box]:max-w-4xl [&_.tip-box]:mx-auto

                [&_.tip-box]:text-sm [&_.tip-box]:text-green-900 [&_.tip-box]:leading-relaxed

                [&_.metrics-list]:space-y-3 [&_.metrics-list]:my-10 [&_.metrics-list]:max-w-3xl [&_.metrics-list]:mx-auto

                [&_.metric-item]:bg-white [&_.metric-item]:rounded-xl [&_.metric-item]:p-4
                [&_.metric-item]:flex [&_.metric-item]:items-start [&_.metric-item]:gap-4
                [&_.metric-item]:shadow-lg [&_.metric-item]:border-2 [&_.metric-item]:border-gray-200
                [&_.metric-item]:transform [&_.metric-item]:transition-all [&_.metric-item]:duration-300
                hover:[&_.metric-item]:shadow-xl hover:[&_.metric-item]:scale-[1.02]

                [&_.metric-item.highlight]:bg-gradient-to-br [&_.metric-item.highlight]:from-amber-50
                [&_.metric-item.highlight]:to-yellow-100 [&_.metric-item.highlight]:border-gold

                [&_.metric-icon]:w-10 [&_.metric-icon]:h-10 [&_.metric-icon]:rounded-full
                [&_.metric-icon]:bg-gradient-to-br [&_.metric-icon]:from-gold [&_.metric-icon]:to-yellow-600
                [&_.metric-icon]:flex [&_.metric-icon]:items-center [&_.metric-icon]:justify-center
                [&_.metric-icon]:text-base [&_.metric-icon]:font-black [&_.metric-icon]:text-white
                [&_.metric-icon]:flex-shrink-0 [&_.metric-icon]:shadow-lg

                [&_.metric-content>h4]:text-base [&_.metric-content>h4]:font-bold [&_.metric-content>h4]:text-navy
                [&_.metric-content>h4]:mb-1 [&_.metric-content>h4]:mt-0

                [&_.metric-content>p]:text-sm [&_.metric-content>p]:text-zinc-600 [&_.metric-content>p]:mb-0

                [&_.investment-grid]:grid [&_.investment-grid]:grid-cols-1 [&_.investment-grid]:md:grid-cols-3
                [&_.investment-grid]:gap-4 [&_.investment-grid]:my-10 [&_.investment-grid]:max-w-4xl [&_.investment-grid]:mx-auto

                [&_.investment-card]:bg-gradient-to-br [&_.investment-card]:from-gray-50 [&_.investment-card]:to-gray-100
                [&_.investment-card]:rounded-2xl [&_.investment-card]:p-6 [&_.investment-card]:text-center
                [&_.investment-card]:shadow-xl [&_.investment-card]:border-2 [&_.investment-card]:border-gray-300
                [&_.investment-card]:transform [&_.investment-card]:transition-all [&_.investment-card]:duration-300
                hover:[&_.investment-card]:scale-105

                [&_.investment-card.featured]:bg-gradient-to-br [&_.investment-card.featured]:from-gold/20
                [&_.investment-card.featured]:to-yellow-100 [&_.investment-card.featured]:border-gold
                [&_.investment-card.featured]:shadow-2xl [&_.investment-card.featured]:relative

                [&_.investment-badge]:absolute [&_.investment-badge]:-top-2 [&_.investment-badge]:left-1/2
                [&_.investment-badge]:-translate-x-1/2 [&_.investment-badge]:bg-navy [&_.investment-badge]:text-gold
                [&_.investment-badge]:px-4 [&_.investment-badge]:py-1 [&_.investment-badge]:rounded-full
                [&_.investment-badge]:text-xs [&_.investment-badge]:font-bold [&_.investment-badge]:uppercase
                [&_.investment-badge]:shadow-lg

                [&_.investment-platform]:text-base [&_.investment-platform]:font-bold [&_.investment-platform]:text-navy/80
                [&_.investment-platform]:mb-3

                [&_.investment-amount]:text-4xl [&_.investment-amount]:md:text-5xl [&_.investment-amount]:font-black
                [&_.investment-amount]:text-navy [&_.investment-amount]:mb-2

                [&_.investment-amount>span]:text-xl [&_.investment-amount>span]:text-navy/60 [&_.investment-amount>span]:font-medium

                [&_.investment-label]:text-xs [&_.investment-label]:text-zinc-600 [&_.investment-label]:uppercase
                [&_.investment-label]:tracking-wider [&_.investment-label]:font-semibold

                [&_.strategies-grid]:grid [&_.strategies-grid]:grid-cols-1 [&_.strategies-grid]:md:grid-cols-2
                [&_.strategies-grid]:lg:grid-cols-3 [&_.strategies-grid]:gap-4 [&_.strategies-grid]:my-10
                [&_.strategies-grid]:max-w-5xl [&_.strategies-grid]:mx-auto

                [&_.strategy-card]:bg-white [&_.strategy-card]:rounded-xl [&_.strategy-card]:p-5
                [&_.strategy-card]:shadow-xl [&_.strategy-card]:border-2 [&_.strategy-card]:border-gray-200
                [&_.strategy-card]:transform [&_.strategy-card]:transition-all [&_.strategy-card]:duration-300
                hover:[&_.strategy-card]:shadow-2xl hover:[&_.strategy-card]:scale-105
                hover:[&_.strategy-card]:border-gold

                [&_.strategy-number]:text-5xl [&_.strategy-number]:font-black [&_.strategy-number]:text-gold/20
                [&_.strategy-number]:mb-3 [&_.strategy-number]:leading-none

                [&_.strategy-card>h4]:text-base [&_.strategy-card>h4]:font-bold [&_.strategy-card>h4]:text-navy
                [&_.strategy-card>h4]:mb-2 [&_.strategy-card>h4]:mt-0

                [&_.strategy-card>p]:text-sm [&_.strategy-card>p]:text-zinc-600 [&_.strategy-card>p]:mb-0"
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
