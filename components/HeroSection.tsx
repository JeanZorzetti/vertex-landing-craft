"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCTATracking } from "@/hooks/use-behavioral-tracking";

const HeroSection = () => {
  const { onCTAClick } = useCTATracking();

  const handleCTAClick = () => {
    // Rastrear clique no CTA principal
    onCTAClick('hero-cta', 'Agendar Conversa Gratuita', 'hero');

    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" data-section="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Otimizado com Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
          alt="Background estratégico de negócios"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-[center_75%]"
        />
        {/* Overlay escuro pesado para máximo contraste */}
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua empresa tem um teto de crescimento?{" "}
            <span className="text-gold">Nós viemos para quebrá-lo.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tráfego, Tecnologia e Estratégia desenhados para quem quer escalar resultados reais.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-300">
            <Button
              variant="gold"
              size="xl"
              className="gold-shimmer"
              onClick={handleCTAClick}
            >
              Agendar Conversa Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
