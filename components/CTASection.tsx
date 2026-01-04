"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="v-pattern-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M15 0 L22.5 15 L30 0" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v-pattern-cta)"/>
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Entre em contato com a nossa <span className="text-gold">equipe</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agende uma conversa gratuita e descubra como podemos transformar os resultados do seu negócio.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold/50 hover:scale-105 group"
            >
              Entre em contato com a nossa equipe
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
