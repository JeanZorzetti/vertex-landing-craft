"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80)`,
          backgroundPosition: 'center 75%'
        }}
      >
        {/* Overlay escuro pesado para máximo contraste */}
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tráfego pago com{" "}
            <span className="text-gold">transparência</span> e{" "}
            <span className="text-gold">acompanhamento real</span>.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sua agência boutique de marketing digital. Construímos resultados juntos, com relatórios claros e dedicação exclusiva ao seu negócio.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              className="gold-shimmer"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  const headerOffset = 80;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Agendar Conversa Gratuita
            </Button>
            <span className="text-white/70 text-sm">
              Sem compromisso • 30 minutos
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
