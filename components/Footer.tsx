"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C9A961] py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Image
              src="/logos/logo-white.png"
              alt="Vértice Marketing"
              width={400}
              height={120}
              className="h-32 w-auto mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-white font-medium">
            © {currentYear} Vértice Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
