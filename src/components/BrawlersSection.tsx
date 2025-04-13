
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const brawlers = [
  {
    id: 1,
    name: "Spike",
    description: "The legendary cactus brawler with deadly spike attacks.",
    rarity: "Legendary",
    image: "/spike.png"
  },
  {
    id: 2,
    name: "Shelly",
    description: "The starting brawler with powerful shotgun blasts.",
    rarity: "Starting",
    image: "/shelly.png"
  },
  {
    id: 3,
    name: "El Primo",
    description: "The wrestling champion with devastating close-range attacks.",
    rarity: "Rare",
    image: "/el-primo.png"
  }
];

const BrawlersSection = () => {
  return (
    <section id="brawlers" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gem-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Unlock <span className="text-brawl-red">Epic</span> Brawlers</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Use your gems to unlock and upgrade these powerful brawlers and dominate the arena!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brawlers.map((brawler) => (
            <div 
              key={brawler.id}
              className="bg-gradient-to-b from-brawl-dark/80 to-brawl-dark border border-white/10 rounded-2xl overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-brawl-purple/30 to-brawl-blue/30 flex items-center justify-center">
                <img 
                  src={brawler.image} 
                  alt={brawler.name} 
                  className="h-40 w-auto animate-pulse-soft"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.className = "h-40 w-40";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-lilita">{brawler.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    brawler.rarity === 'Legendary' ? 'bg-brawl-yellow/20 text-brawl-yellow' :
                    brawler.rarity === 'Starting' ? 'bg-brawl-green/20 text-brawl-green' :
                    'bg-brawl-blue/20 text-brawl-blue'
                  }`}>
                    {brawler.rarity}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{brawler.description}</p>
                <Button className="w-full font-bold bg-brawl-purple hover:bg-brawl-purple/80 rounded-xl">
                  Unlock Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-bold rounded-xl">
            View All Brawlers
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrawlersSection;
