import Navbar from "@/components/Navbar";
import GemPacksSection from "@/components/GemPacksSection";
import BrawlPassSection from "@/components/BrawlPassSection";
import TestimonialSection from "@/components/TestimonialSection";
import FreeRewardsSection from "@/components/FreeRewardsSection";
import ActivityFeed from "@/components/ActivityFeed";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { GetFreeDialogProvider } from "@/hooks/use-get-free-dialog";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <GetFreeDialogProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pb-12">
          <CallToAction />
          <GemPacksSection />
          <FreeRewardsSection />
          <BrawlPassSection />
          <TestimonialSection />
        </main>
        <Footer />
        <ActivityFeed />
        <Toaster />
      </div>
    </GetFreeDialogProvider>
  );
};

export default Index;
