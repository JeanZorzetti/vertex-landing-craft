"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const defaultPosts = [
  {
    title: "Como aumentar suas vendas com tráfego pago",
    excerpt: "Descubra as estratégias mais eficazes para converter visitantes em clientes através de campanhas de tráfego pago otimizadas.",
    date: "15 Dez 2024",
    readTime: "5 min",
    category: "Tráfego Pago",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "O poder do CRM para seu negócio",
    excerpt: "Entenda como um sistema de CRM bem implementado pode revolucionar a gestão de leads e aumentar suas taxas de conversão.",
    date: "10 Dez 2024",
    readTime: "7 min",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tendências de marketing digital para 2025",
    excerpt: "Fique por dentro das principais tendências que vão dominar o marketing digital no próximo ano e prepare-se para se destacar.",
    date: "05 Dez 2024",
    readTime: "6 min",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(defaultPosts);

  useEffect(() => {
    // Carregar posts do localStorage
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      // Formatar posts para o formato esperado
      const formattedPosts = posts.map((post: any) => ({
        title: post.title,
        excerpt: post.excerpt,
        date: new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
        readTime: "5 min",
        category: post.category,
        image: post.image,
      }));
      // Mostrar apenas os 3 posts mais recentes
      setBlogPosts(formattedPosts.slice(0, 3));
    }
  }, []);

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Background Pattern V entrelaçado */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="v-pattern-blog" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M15 0 L22.5 15 L30 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
              <path d="M0 0 L7.5 15 L15 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.7"/>
              <path d="M15 30 L22.5 45 L30 30" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
              <path d="M0 30 L7.5 45 L15 30" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v-pattern-blog)"/>
        </svg>
      </div>

      {/* Floating particles dourados */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gold/10 backdrop-blur-sm rounded-full border border-gold/30">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">
              Blog & Notícias
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Acompanhe nosso <span className="text-gold">Blog</span>
          </h2>
          <p className="text-white/70 text-lg">
            Fique por dentro das últimas tendências, estratégias e novidades do marketing digital.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700" />

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-gold/10 group-hover:border-gold/40 transition-all duration-500 shadow-2xl group-hover:shadow-gold/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <Link
                    href="#blog"
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
