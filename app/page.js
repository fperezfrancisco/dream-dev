import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
