
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GemPacksSection from "@/components/GemPacksSection";
import BenefitsSection from "@/components/BenefitsSection";
import BrawlPassSection from "@/components/BrawlPassSection";
import TestimonialSection from "@/components/TestimonialSection";
import FreeRewardsSection from "@/components/FreeRewardsSection";
import ActivityFeed from "@/components/ActivityFeed";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pb-12">
        <HeroSection />
        <GemPacksSection />
        <BrawlPassSection />
        <BenefitsSection />
        <FreeRewardsSection />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
      <ActivityFeed />
    </div>
  );
};

export default Index;
