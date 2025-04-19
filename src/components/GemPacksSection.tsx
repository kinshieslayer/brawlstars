import { Star, ShoppingCart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useGetFreeDialog } from "@/hooks/use-get-free-dialog";

const gemPacks = [
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
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const { openGetFreeDialog } = useGetFreeDialog();

  const handlePurchase = (packName: string) => {
    toast({
      title: "Purchase Started",
      description: `Starting purchase for ${packName}...`,
    });
    
    // Simulate API call delay
    setTimeout(() => {
      toast({
        title: "Payment Server Issue",
        description: "Payment server have issue right now. Try get free option instead.",
        variant: "destructive"
      });
    }, 1500);
  };

  return (
    <section id="gems" className="py-12 md:py-16 bg-brawl-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gem-pattern opacity-5 -z-10"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-[10%] animate-float">
        <div className="w-8 h-8 bg-brawl-purple/20 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 right-[15%] animate-float animation-delay-1000">
        <div className="w-6 h-6 bg-brawl-yellow/20 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Choose Your <span className="text-brawl-purple">Gem</span> Pack</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select the perfect gem package for your gaming style. More gems mean more power, more skins, and more fun!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {gemPacks.map((pack, index) => (
            <div 
              key={pack.id}
              className={`gem-card bg-gradient-to-br ${
                pack.color === 'blue' ? 'from-brawl-blue/20 to-brawl-blue/5' :
                pack.color === 'purple' ? 'from-brawl-purple/20 to-brawl-purple/5' :
                pack.color === 'yellow' ? 'from-brawl-yellow/20 to-brawl-yellow/5' :
                pack.color === 'green' ? 'from-brawl-green/20 to-brawl-green/5' :
                'from-brawl-red/20 to-brawl-red/5'
              } rounded-2xl p-4 md:p-6 border-2 ${
                pack.color === 'blue' ? 'border-brawl-blue/30' :
                pack.color === 'purple' ? 'border-brawl-purple/30' :
                pack.color === 'yellow' ? 'border-brawl-yellow/30' :
                pack.color === 'green' ? 'border-brawl-green/30' :
                'border-brawl-red/30'
              } relative animate-fade-in animation-delay-${index * 100} transform hover:translate-y-[-5px] transition-all duration-300`}
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
                  REWARD
                </Badge>
              )}
              
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className={`h-20 w-20 flex items-center justify-center rounded-xl transform transition-transform hover:rotate-12 ${
                  pack.color === 'blue' ? 'bg-brawl-blue/30' :
                  pack.color === 'purple' ? 'bg-brawl-purple/30' :
                  pack.color === 'yellow' ? 'bg-brawl-yellow/30' :
                  pack.color === 'green' ? 'bg-brawl-green/30' :
                  'bg-brawl-red/30'
                }`}>
                  <img 
                    src="/lovable-uploads/43bf57c0-10b4-428a-bc96-d19e11d5e5d9.png" 
                    alt="Gems" 
                    className="h-14 w-14 object-contain"
                  />
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
              
              <p className="text-center text-xl font-bold text-white mb-4 md:mb-6">{pack.price}</p>
              
              <div className="space-y-2">
                <Button 
                  onClick={() => handlePurchase(pack.name)}
                  className={`w-full font-bold rounded-xl py-2 ${
                    pack.color === 'blue' ? 'bg-brawl-blue hover:bg-brawl-blue/80' :
                    pack.color === 'purple' ? 'bg-brawl-purple hover:bg-brawl-purple/80' :
                    pack.color === 'yellow' ? 'bg-brawl-yellow hover:bg-brawl-yellow/80 text-black' :
                    pack.color === 'green' ? 'bg-brawl-green hover:bg-brawl-green/80' :
                    'bg-brawl-red hover:bg-brawl-red/80'
                  } transform transition-transform active:scale-95`}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  {pack.isFree ? "Get Reward" : "Purchase"}
                </Button>
                
                <Button 
                  onClick={openGetFreeDialog}
                  variant="outline" 
                  className="w-full font-bold rounded-xl py-2 border-2 border-white/20 hover:bg-white/10 text-white transform transition-transform active:scale-95"
                >
                  <Gift size={18} className="mr-2" />
                  Get Free
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemPacksSection;
