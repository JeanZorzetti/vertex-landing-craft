import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
