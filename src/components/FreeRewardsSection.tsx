
import { Button } from "@/components/ui/button";
import { PlayCircle, Gift, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FreeRewardsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="free-rewards" className="py-16 bg-gradient-to-r from-brawl-dark to-black relative">
      <div className="absolute inset-0 bg-gem-pattern opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">
            Get <span className="text-brawl-green">FREE</span> Rewards
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Complete simple offers and earn gems, coins and other exclusive rewards without spending any money!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/50 border border-white/10 rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <PlayCircle size={64} className="text-white/90" />
              </div>
              <img 
                src="/tutorial-thumbnail.png" 
                alt="Video tutorial" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop";
                }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-lilita mb-2">How to Get Free Brawl Stars Rewards</h3>
              <p className="text-gray-400 mb-4">Learn how to complete offers and earn free gems, skins and more in just minutes!</p>
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button className="w-full bg-brawl-purple hover:bg-brawl-purple/80 font-bold rounded-xl">
                    {isOpen ? "Hide Video" : "Watch Tutorial"}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Brawl Stars Free Rewards Tutorial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-brawl-dark/60 border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Gift size={24} className="text-brawl-green mr-3" />
                <h3 className="text-xl font-lilita">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="font-bold text-white">1.</span>
                  <p>Select from available offers that interest you</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">2.</span>
                  <p>Complete the offer requirements (install app, reach game level, etc.)</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">3.</span>
                  <p>Get verified and receive your gems instantly</p>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-white">4.</span>
                  <p>Use your free gems for skins, brawlers, or the Brawl Pass!</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-gradient-to-r from-brawl-green/20 to-brawl-green/5 border border-brawl-green/30 rounded-xl p-6">
              <h3 className="text-xl font-lilita mb-3">Popular Free Offers</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Install Rise of Kingdoms</p>
                    <p className="text-sm text-gray-400">Reach level 10 in the game</p>
                  </div>
                  <div className="flex items-center text-brawl-green font-bold">
                    +250 Gems
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Complete short survey</p>
                    <p className="text-sm text-gray-400">Answer questions about gaming habits</p>
                  </div>
                  <div className="flex items-center text-brawl-green font-bold">
                    +80 Gems
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Free trial subscription</p>
                    <p className="text-sm text-gray-400">Sign up for 7-day streaming trial</p>
                  </div>
                  <div className="flex items-center text-brawl-green font-bold">
                    +150 Gems
                  </div>
                </li>
              </ul>
              <Button className="w-full mt-4 bg-brawl-green hover:bg-brawl-green/80 font-bold rounded-xl">
                View All Free Offers <ExternalLink size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeRewardsSection;
