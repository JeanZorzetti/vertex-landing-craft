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
  title: "Vértice Marketing | Tráfego Pago, CRM e Performance Digital",
  description: "Sua parceira estratégica em marketing digital. Tráfego pago transparente, CRM proprietário e consultoria de performance para crescimento previsível.",
  authors: [{ name: "Vértice Marketing" }],
  keywords: ["marketing digital", "tráfego pago", "gestão de tráfego", "CRM", "consultoria de performance", "agência de marketing", "performance digital", "Google Ads", "Meta Ads"],
  openGraph: {
    title: "Vértice Marketing | Tráfego Pago, CRM e Performance Digital",
    description: "O ponto de encontro entre a sua visão e a nossa tecnologia. Parceria estratégica para crescimento previsível com dados verificados.",
    type: "website",
    locale: "pt_BR",
    siteName: "Vértice Marketing",
  },
  twitter: {
    card: "summary_large_image",
    site: "@VerticeMarketing",
    title: "Vértice Marketing | Tráfego Pago e Performance",
    description: "Sua parceira estratégica em marketing digital com transparência radical e resultados verificados.",
  },
  robots: {
    index: true,
    follow: true,
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
