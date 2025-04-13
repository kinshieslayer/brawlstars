
import { Trophy, Sparkles, Zap, Crown } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Unlock Premium Skins",
    description: "Stand out in the arena with exclusive skins that showcase your style and achievements.",
    icon: Sparkles,
    color: "blue"
  },
  {
    id: 2,
    title: "Fast Track Progress",
    description: "Skip the grind and unlock new brawlers and power points instantly with gems.",
    icon: Zap,
    color: "purple"
  },
  {
    id: 3,
    title: "Exclusive Rewards",
    description: "Get access to special offers and limited-time rewards only available with gems.",
    icon: Crown,
    color: "yellow"
  },
  {
    id: 4,
    title: "Dominate Competitions",
    description: "Gain competitive advantage with maxed out brawlers and legendary characters.",
    icon: Trophy,
    color: "red"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-background to-brawl-dark/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Why Buy <span className="text-brawl-yellow">Gems</span>?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Gems are your ticket to the ultimate Brawl Stars experience. Here's what you can do with them:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-background/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start hover:bg-white/5 transition-colors"
            >
              <div className={`mr-4 p-3 rounded-xl ${
                benefit.color === 'blue' ? 'bg-brawl-blue/20 text-brawl-blue' :
                benefit.color === 'purple' ? 'bg-brawl-purple/20 text-brawl-purple' :
                benefit.color === 'yellow' ? 'bg-brawl-yellow/20 text-brawl-yellow' :
                'bg-brawl-red/20 text-brawl-red'
              }`}>
                <benefit.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-lilita mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
