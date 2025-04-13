
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GemPacksSection from "@/components/GemPacksSection";
import BenefitsSection from "@/components/BenefitsSection";
import BrawlersSection from "@/components/BrawlersSection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <GemPacksSection />
      <BenefitsSection />
      <BrawlersSection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
