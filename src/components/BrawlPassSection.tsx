
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle, Gift } from "lucide-react";

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
    name: "Brawl Pass",
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
      "Everything in Brawl Pass",
      "Instant tier skip (+10)",
      "Exclusive Plus skin",
      "Bonus gems and coins"
    ],
    isFree: false
  }
];

const BrawlPassSection = () => {
  return (
    <section id="brawl-pass" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gem-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Brawl <span className="text-brawl-purple">Pass</span> Options</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose your Brawl Pass tier and unlock exclusive rewards, skins, and progression boosts for each season!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brawlPassOptions.map((option) => (
            <div 
              key={option.id}
              className={`bg-gradient-to-b from-brawl-dark/80 to-brawl-dark border-2 ${
                option.color === 'green' ? 'border-brawl-green/30' : 
                option.color === 'blue' ? 'border-brawl-blue/30' : 
                'border-brawl-yellow/30'
              } rounded-2xl overflow-hidden transition-transform hover:scale-105`}
            >
              <div className={`py-6 px-4 text-center ${
                option.color === 'green' ? 'bg-brawl-green/20' : 
                option.color === 'blue' ? 'bg-brawl-blue/20' : 
                'bg-brawl-yellow/20'
              }`}>
                <div className="flex justify-center mb-2">
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
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className={`mr-2 flex-shrink-0 ${
                        option.color === 'green' ? 'text-brawl-green' : 
                        option.color === 'blue' ? 'text-brawl-blue' : 
                        'text-brawl-yellow'
                      }`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full font-bold rounded-xl ${
                    option.isFree ? 
                    'bg-brawl-green hover:bg-brawl-green/80' : 
                    option.color === 'blue' ? 
                    'bg-brawl-blue hover:bg-brawl-blue/80' : 
                    'bg-brawl-yellow hover:bg-brawl-yellow/80 text-black'
                  }`}
                >
                  {option.isFree ? 'Get Free' : 'Purchase'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrawlPassSection;
