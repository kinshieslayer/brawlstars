
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-70 -z-10"></div>
      <div className="absolute inset-0 bg-brawl-dark/70 -z-20"></div>

      {/* Floating gems animation */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="h-16 w-16 md:h-24 md:w-24 bg-brawl-purple rounded-lg transform rotate-45 opacity-70"></div>
      </div>
      <div className="absolute bottom-20 left-10 animate-float animation-delay-1000">
        <div className="h-12 w-12 md:h-20 md:w-20 bg-brawl-blue rounded-lg transform rotate-45 opacity-70"></div>
      </div>
      <div className="absolute top-40 left-1/4 animate-float animation-delay-2000">
        <div className="h-8 w-8 md:h-16 md:w-16 bg-brawl-yellow rounded-lg transform rotate-45 opacity-70"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-lilita mb-4 text-white">
              Power Up Your <span className="text-brawl-purple">Brawl Stars</span> Adventure!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Get exclusive skins, unlock new brawlers, and dominate the arena with premium gems from the official Brawl Shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-brawl-yellow hover:bg-brawl-yellow/90 text-black font-bold text-lg py-6 px-8 rounded-xl">
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg py-6 px-8 rounded-xl">
                View Deals
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/30 blur-xl rounded-full"></div>
              <img 
                src="/gem-hero.png" 
                alt="Brawl Stars Gems" 
                className="relative z-10 w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
