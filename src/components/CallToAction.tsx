
import { Button } from "@/components/ui/button";
import { ShoppingCart, Gift } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CallToAction = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-brawl-purple to-brawl-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gem-pattern opacity-10"></div>
      
      {/* Floating gems */}
      <div className="absolute top-10 right-[10%] animate-float">
        <div className="h-16 w-16 bg-white/10 rounded-lg transform rotate-45"></div>
      </div>
      <div className="absolute bottom-10 left-[20%] animate-float animation-delay-1000">
        <div className="h-12 w-12 bg-white/10 rounded-lg transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-lilita mb-4 md:mb-6 text-white">
            Ready to Power Up Your Brawl Stars Experience?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8">
            Join millions of players who are already enjoying premium benefits with our gem packs or get free rewards through our offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brawl-yellow hover:bg-brawl-yellow/90 text-black font-bold text-lg py-4 px-6 rounded-xl transform transition-transform hover:scale-105 active:scale-95">
              <ShoppingCart size={20} className="mr-2" />
              Shop Now
            </Button>
            <Button className="bg-brawl-green hover:bg-brawl-green/90 text-white font-bold text-lg py-4 px-6 rounded-xl transform transition-transform hover:scale-105 active:scale-95">
              <Gift size={20} className="mr-2" />
              Get Free Rewards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
