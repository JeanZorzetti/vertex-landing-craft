"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
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
</ol>

<hr>

<p><strong>Quer ajuda profissional?</strong></p>

<p>A Vértice Marketing é especialista em tráfego pago com foco em ROI e resultados mensuráveis.</p>

<p>📞 (62) 99326-5713<br>
📧 verticecomp@gmail.com<br>
📍 Rua Cequeira Cesar nº 60, Zona Sul - São Paulo/SP</p>`
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
      <Header />

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

            {/* Share button */}
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-navy prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-navy prose-strong:font-bold
                prose-ul:my-6 prose-li:mb-2
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:py-4
                prose-code:bg-navy/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-table:border prose-th:bg-navy/5 prose-th:p-3
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Gostou do conteúdo?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Entre em contato com a Vértice Marketing e descubra como podemos ajudar seu negócio a crescer com estratégias de tráfego pago personalizadas.
            </p>
            <Link href="/contato">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-bold">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
