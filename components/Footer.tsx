"use client";

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

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8 mt-8" />

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
