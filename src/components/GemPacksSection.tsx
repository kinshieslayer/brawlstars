
import { Star, ShoppingCart, TrendingUp, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const gemPacks = [
  {
    id: 0,
    name: "Free Gems",
    gems: 30,
    price: "FREE",
    popular: false,
    bestValue: false,
    color: "green",
    isFree: true
  },
  {
    id: 1,
    name: "Starter Pack",
    gems: 80,
    price: "$1.99",
    popular: false,
    bestValue: false,
    color: "blue",
    isFree: false
  },
  {
    id: 2,
    name: "Value Pack",
    gems: 170,
    price: "$4.99",
    popular: true,
    bestValue: false,
    color: "purple",
    isFree: false
  },
  {
    id: 3,
    name: "Pro Pack",
    gems: 360,
    price: "$9.99",
    popular: false,
    bestValue: true,
    color: "yellow",
    isFree: false
  },
  {
    id: 4,
    name: "Mega Pack",
    gems: 950,
    price: "$19.99",
    popular: false,
    bestValue: false,
    color: "red",
    isFree: false
  },
];

const GemPacksSection = () => {
  return (
    <section id="gems" className="py-16 bg-brawl-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Choose Your <span className="text-brawl-purple">Gem</span> Pack</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select the perfect gem package for your gaming style. More gems mean more power, more skins, and more fun!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gemPacks.map((pack) => (
            <div 
              key={pack.id}
              className={`gem-card bg-gradient-to-br ${
                pack.color === 'blue' ? 'from-brawl-blue/20 to-brawl-blue/5' :
                pack.color === 'purple' ? 'from-brawl-purple/20 to-brawl-purple/5' :
                pack.color === 'yellow' ? 'from-brawl-yellow/20 to-brawl-yellow/5' :
                pack.color === 'green' ? 'from-brawl-green/20 to-brawl-green/5' :
                'from-brawl-red/20 to-brawl-red/5'
              } rounded-2xl p-6 border-2 ${
                pack.color === 'blue' ? 'border-brawl-blue/30' :
                pack.color === 'purple' ? 'border-brawl-purple/30' :
                pack.color === 'yellow' ? 'border-brawl-yellow/30' :
                pack.color === 'green' ? 'border-brawl-green/30' :
                'border-brawl-red/30'
              } relative`}
            >
              {pack.popular && (
                <Badge className="absolute -top-3 right-4 bg-brawl-purple text-white px-3 py-1 rounded-full font-bold">
                  POPULAR
                </Badge>
              )}
              {pack.bestValue && (
                <Badge className="absolute -top-3 right-4 bg-brawl-yellow text-black px-3 py-1 rounded-full font-bold">
                  BEST VALUE
                </Badge>
              )}
              {pack.isFree && (
                <Badge className="absolute -top-3 right-4 bg-brawl-green text-white px-3 py-1 rounded-full font-bold">
                  FREE
                </Badge>
              )}
              
              <div className="mb-6 flex justify-center">
                <div className={`h-24 w-24 flex items-center justify-center rounded-xl ${
                  pack.color === 'blue' ? 'bg-brawl-blue/30' :
                  pack.color === 'purple' ? 'bg-brawl-purple/30' :
                  pack.color === 'yellow' ? 'bg-brawl-yellow/30' :
                  pack.color === 'green' ? 'bg-brawl-green/30' :
                  'bg-brawl-red/30'
                }`}>
                  {pack.isFree ? (
                    <Gift className="h-14 w-14 text-brawl-green" />
                  ) : (
                    <img 
                      src={`/gem-${pack.color}.png`}
                      alt="Gems" 
                      className="h-14 w-14 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                        e.currentTarget.className = "h-14 w-14";
                      }}
                    />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-lilita mb-2 text-white text-center">{pack.name}</h3>
              
              <div className="flex justify-center items-center mb-2">
                <Star 
                  fill={pack.color === 'blue' ? '#3D93F8' : 
                        pack.color === 'purple' ? '#9B30FF' :
                        pack.color === 'yellow' ? '#FFCC00' :
                        pack.color === 'green' ? '#00CC66' :
                        '#FF4040'} 
                  size={18} 
                  className={`text-${
                    pack.color === 'blue' ? 'brawl-blue' :
                    pack.color === 'purple' ? 'brawl-purple' :
                    pack.color === 'yellow' ? 'brawl-yellow' :
                    pack.color === 'green' ? 'brawl-green' :
                    'brawl-red'
                  } mr-2`}
                />
                <span className="text-2xl font-lilita text-white">{pack.gems} Gems</span>
              </div>
              
              <p className="text-center text-xl font-bold text-white mb-6">{pack.price}</p>
              
              <Button className={`w-full font-bold rounded-xl py-6 ${
                pack.color === 'blue' ? 'bg-brawl-blue hover:bg-brawl-blue/80' :
                pack.color === 'purple' ? 'bg-brawl-purple hover:bg-brawl-purple/80' :
                pack.color === 'yellow' ? 'bg-brawl-yellow hover:bg-brawl-yellow/80 text-black' :
                pack.color === 'green' ? 'bg-brawl-green hover:bg-brawl-green/80' :
                'bg-brawl-red hover:bg-brawl-red/80'
              }`}>
                {pack.isFree ? (
                  <>
                    Get Free
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} className="mr-2" />
                    Buy Now
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemPacksSection;
