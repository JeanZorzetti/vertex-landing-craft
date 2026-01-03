"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4472C4] py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/logos/logo-white.png"
              alt="Vértice Marketing"
              width={300}
              height={80}
              className="h-20 w-auto mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-white/70">
            © {currentYear} Vértice Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
