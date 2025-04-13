
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle, Gift } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const brawlPassOptions = [
  {
    id: 1,
    name: "Free Pass",
    price: "FREE",
    color: "green",
    features: [
      "Basic rewards each tier",
      "Limited brawl boxes",
      "Basic emotes",
      "Free brawler progression"
    ],
    isFree: true
  },
  {
    id: 2,
    name: "Pro Pass",
    price: "$9.99",
    color: "blue",
    features: [
      "Exclusive seasonal skin",
      "All free rewards",
      "Bonus boxes each tier",
      "Exclusive pins and emotes"
    ],
    isFree: false
  },
  {
    id: 3,
    name: "Brawl Pass Plus",
    price: "$19.99",
    color: "yellow",
    features: [
      "Everything in Pro Pass",
      "Instant tier skip (+10)",
      "Exclusive Plus skin",
      "Bonus gems and coins"
    ],
    isFree: false
  }
];

const BrawlPassSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="brawl-pass" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gem-pattern opacity-5 -z-10"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/3 right-[10%] animate-float">
        <div className="w-10 h-10 bg-brawl-blue/20 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute bottom-1/3 left-[15%] animate-float animation-delay-1000">
        <div className="w-8 h-8 bg-brawl-purple/20 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Brawl <span className="text-brawl-purple">Pass</span> Options</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your Brawl Pass tier and unlock exclusive rewards, skins, and progression boosts for each season!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {brawlPassOptions.map((option, index) => (
            <div 
              key={option.id}
              className={`bg-gradient-to-b from-brawl-dark/80 to-brawl-dark border-2 ${
                option.color === 'green' ? 'border-brawl-green/30' : 
                option.color === 'blue' ? 'border-brawl-blue/30' : 
                'border-brawl-yellow/30'
              } rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-${index * 200}`}
            >
              <div className={`py-6 px-4 text-center ${
                option.color === 'green' ? 'bg-brawl-green/20' : 
                option.color === 'blue' ? 'bg-brawl-blue/20' : 
                'bg-brawl-yellow/20'
              }`}>
                <div className="flex justify-center mb-2 transform transition-transform hover:rotate-12">
                  {option.color === 'yellow' ? (
                    <Crown size={36} className="text-brawl-yellow" />
                  ) : option.color === 'blue' ? (
                    <Crown size={32} className="text-brawl-blue" />
                  ) : (
                    <Gift size={30} className="text-brawl-green" />
                  )}
                </div>
                <h3 className="text-2xl font-lilita">{option.name}</h3>
                <div className="mt-2 text-3xl font-bold">
                  {option.price}
                </div>
              </div>

              <div className="p-6">
                <ul className="mb-6 space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center animate-fade-in" style={{animationDelay: `${idx * 100 + 300}ms`}}>
                      <CheckCircle size={18} className={`mr-2 flex-shrink-0 ${
                        option.color === 'green' ? 'text-brawl-green' : 
                        option.color === 'blue' ? 'text-brawl-blue' : 
                        'text-brawl-yellow'
                      }`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Button 
                    className={`w-full font-bold rounded-xl py-2 ${
                      option.isFree ? 
                      'bg-brawl-green hover:bg-brawl-green/80' : 
                      option.color === 'blue' ? 
                      'bg-brawl-blue hover:bg-brawl-blue/80' : 
                      'bg-brawl-yellow hover:bg-brawl-yellow/80 text-black'
                    } transform transition-transform active:scale-95`}
                  >
                    {option.isFree ? 'Get Free' : 'Purchase'}
                  </Button>
                  
                  {!option.isFree && (
                    <Button variant="outline" className="w-full font-bold rounded-xl py-2 border-2 border-white/20 hover:bg-white/10 text-white transform transition-transform active:scale-95">
                      <Gift size={18} className="mr-2" />
                      Get Free
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrawlPassSection;
