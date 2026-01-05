"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postId = params.id as string;

    // Buscar post do localStorage
    const savedPosts = localStorage.getItem("blogPosts");

    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      const foundPost = posts.find((p: any) => p.id === postId);

      if (foundPost) {
        setPost(foundPost);
      }
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
