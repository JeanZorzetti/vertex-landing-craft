"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/diferenciais", label: "Diferenciais" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <Image
              src="/logos/logo-gold-only.png"
              alt="Vértice Marketing"
              width={260}
              height={70}
              className="h-14 md:h-16 w-auto transition-opacity duration-300 hover:opacity-90"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  pathname === link.href ? "text-gold" : (isScrolled ? "text-foreground" : "text-white")
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contato">
              <Button
                variant={isScrolled ? "gold" : "goldOutline"}
                size="sm"
              >
                Contato
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden mt-4 pb-4 border-t pt-4 animate-fade-in ${
            isScrolled ? "border-border/20 bg-white" : "border-white/20 bg-navy-dark/95 backdrop-blur-md"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    pathname === link.href ? "text-gold" : (isScrolled ? "text-foreground" : "text-white")
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="gold"
                  size="sm"
                  className="w-fit"
                >
                  Contato
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
