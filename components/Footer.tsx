"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    empresa: [
      { name: "Sobre", href: "/sobre" },
      { name: "Serviços", href: "/servicos" },
      { name: "Diferenciais", href: "/diferenciais" },
      { name: "Blog", href: "/blog" },
    ],
    servicos: [
      { name: "Tráfego Pago", href: "/servicos#trafego" },
      { name: "SEO", href: "/servicos#seo" },
      { name: "Social Media", href: "/servicos#social" },
      { name: "Consultoria", href: "/servicos#consultoria" },
    ],
    contato: [
      { icon: Mail, text: "verticecomp@gmail.com", href: "mailto:verticecomp@gmail.com" },
      { icon: Phone, text: "(62) 99326-5713", href: "tel:+556299326571 3" },
      { icon: MapPin, text: "São Paulo, SP", href: "#" },
    ],
  };

  const socialMedia = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/vertice.assessoria/" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="bg-[#C9A961]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/logo-gold-only.png"
              alt="Vértice Marketing"
              width={200}
              height={60}
              className="h-16 w-auto mb-6"
              style={{ objectFit: 'contain' }}
            />
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Transformamos negócios através de estratégias digitais baseadas em dados e resultados mensuráveis.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {navigation.servicos.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              {navigation.contato.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-300 group"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              © {currentYear} Vértice Marketing. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                Termos de Uso
              </Link>
              <Link
                href="/admin/login"
                className="text-white/60 hover:text-white transition-colors duration-300 text-xs opacity-50 hover:opacity-100"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
