import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "./providers";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://verticemarketing.com.br'),
  title: {
    default: "Vértice Marketing | Agência de Marketing Digital em São Paulo",
    template: "%s | Vértice Marketing"
  },
  description: "Agência de marketing digital em São Paulo especializada em tráfego pago, CRM proprietário, SEO e performance digital. Resultados mensuráveis para seu negócio crescer.",
  authors: [{ name: "Vértice Marketing", url: "https://verticemarketing.com.br" }],
  keywords: [
    "agência de marketing digital são paulo",
    "tráfego pago",
    "gestão de tráfego",
    "CRM marketing",
    "consultoria de performance",
    "agência de marketing",
    "performance digital",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "SEO",
    "consultoria SEO",
    "criação de sites",
    "e-commerce",
    "marketing digital sp"
  ],
  openGraph: {
    title: "Vértice Marketing | Agência de Marketing Digital em São Paulo",
    description: "Transformamos negócios através de estratégias digitais baseadas em dados. Tráfego pago, CRM proprietário e consultoria de performance para crescimento previsível.",
    type: "website",
    locale: "pt_BR",
    url: "https://verticemarketing.com.br",
    siteName: "Vértice Marketing",
    images: [
      {
        url: "/logos/logo-main.png",
        width: 1200,
        height: 630,
        alt: "Vértice Marketing - Agência de Marketing Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@VerticeMarketing",
    title: "Vértice Marketing | Tráfego Pago e Performance Digital",
    description: "Agência de marketing digital com transparência radical e resultados verificados. Tráfego pago, CRM e consultoria de performance.",
    images: ["/logos/logo-main.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console", // Adicionar código real do Google Search Console
  },
  alternates: {
    canonical: "https://verticemarketing.com.br"
  },
  category: "Marketing Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className={`${gotham.variable} font-sans`}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
