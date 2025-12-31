"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              {/* V Logo with Check */}
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-gold"
                >
                  <path
                    d="M12 12L24 36L36 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M18 24L22 28L30 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-primary-foreground tracking-tight">
                  Vértice
                </span>
                <span className="block text-sm text-gold font-medium -mt-1">
                  Marketing
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <p className="text-primary-foreground/70 mb-6 max-w-md">
            Quer entender como podemos ajudar seu negócio? Agende uma conversa gratuita e sem compromisso.
          </p>

          <Button
            variant="gold"
            size="lg"
            className="mb-12 gold-shimmer"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Conosco no WhatsApp
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
