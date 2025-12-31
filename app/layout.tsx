import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "./providers";

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
  title: "Vértice Marketing | Agência de Tráfego Pago & Performance",
  description: "Agência de marketing boutique especializada em tráfego pago e performance. Tecnologia proprietária e acompanhamento próximo para resultados reais.",
  authors: [{ name: "Vértice Marketing" }],
  keywords: ["marketing", "tráfego pago", "gestão de tráfego", "CRM", "consultoria de performance", "marketing digital", "agência boutique"],
  openGraph: {
    title: "Vértice Marketing | Agência de Tráfego Pago & Performance",
    description: "O ponto de encontro entre a sua meta e o nosso método. Parceria estratégica para construir resultados reais.",
    type: "website",
    images: [{ url: "https://lovable.dev/opengraph-image-p98pqg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VerticeMarketing",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${gotham.variable} font-sans`}>
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
