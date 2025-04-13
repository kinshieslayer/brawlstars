
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img 
            src="/brawlshop-logo.png" 
            alt="Brawl Shop" 
            className="h-10"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
              e.currentTarget.className = "h-10 w-36";
            }}
          />
          <h1 className="text-2xl font-lilita ml-2 text-brawl-purple">
            <span className="text-brawl-blue">Brawl</span>Shop
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#gems" className="hover:text-brawl-purple transition-colors">Gem Packs</a>
          <a href="#benefits" className="hover:text-brawl-purple transition-colors">Benefits</a>
          <a href="#proofs" className="hover:text-brawl-purple transition-colors">Proofs</a>
          <Button className="bg-brawl-green hover:bg-brawl-green/90 rounded-full font-bold">
            Get Free Gems
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#gems" 
              className="hover:text-brawl-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gem Packs
            </a>
            <a 
              href="#benefits" 
              className="hover:text-brawl-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#proofs" 
              className="hover:text-brawl-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Proofs
            </a>
            <Button className="bg-brawl-green hover:bg-brawl-green/90 rounded-full font-bold">
              Get Free Gems
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
