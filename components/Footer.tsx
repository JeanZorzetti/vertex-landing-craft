"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logos/logo-white.png"
              alt="Vértice Marketing"
              width={200}
              height={55}
              className="h-12 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* CTA */}
          <p className="text-primary-foreground/70 mb-6 max-w-md">
            Quer entender como podemos ajudar seu negócio? Agende uma conversa gratuita e sem compromisso.
          </p>

          <Button
            variant="gold"
            size="lg"
            className="mb-12 gold-shimmer"
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
            <MessageCircle className="w-5 h-5 mr-2" />
            Entrar em Contato
          </Button>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Vértice Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
