"use client";

import { Target, Database, TrendingUp, Monitor, Search, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego",
    description:
      "Monitoramos o comportamento do seu público diariamente para garantir que estamos atraindo compradores, não apenas curiosos.",
  },
  {
    icon: Database,
    title: "CRM & Tecnologia Própria",
    description:
      "Implementamos nosso CRM exclusivo para organizar sua casa e garantir que nenhum lead fique sem resposta.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria de Performance",
    description:
      "Analisamos os resultados junto com você para corrigir rotas e definir os próximos passos do crescimento.",
  },
  {
    icon: Monitor,
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites modernos e responsivos que transmitem profissionalismo e convertem visitantes em clientes.",
  },
  {
    icon: Search,
    title: "Consultoria de SEO",
    description:
      "Otimizamos seu site para aparecer nas primeiras posições do Google e atrair tráfego orgânico qualificado.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Criamos e gerenciamos lojas virtuais completas, focadas em experiência do usuário e alta conversão.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Ecossistema <span className="text-gold">Vértice</span>
          </h2>
          <p className="text-muted-foreground">
            Soluções integradas que trabalham juntas para acelerar o crescimento do seu negócio.
          </p>
        </div>

        {/* Services Grid - Ultra Dynamic */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:duration-300" />

              {/* Card */}
              <div className="relative h-full bg-white dark:bg-background rounded-2xl p-8 border-2 border-border/30 group-hover:border-gold/50 transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:via-gold/5 group-hover:to-transparent transition-all duration-700" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Floating particles effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse" />

                {/* Content */}
                <div className="relative">
                  {/* Icon Container with multi-layer animation */}
                  <div className="relative mb-6">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-gold/20 scale-100 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700 ease-out" />

                    {/* Middle pulsing ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gold/5 scale-100 group-hover:scale-110 transition-all duration-500" />

                    {/* Icon background */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-500 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-gold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" strokeWidth={1.5} />
                    </div>

                    {/* Orbiting dot */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping" />
                  </div>

                  {/* Title with underline effect */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-700 ease-out" />
                  </div>

                  {/* Description with staggered reveal */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                    <span className="text-sm font-semibold">Saiba mais</span>
                    <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottom accent line with progress animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
