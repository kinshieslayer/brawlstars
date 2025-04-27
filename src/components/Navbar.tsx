import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useGetFreeDialog } from "@/hooks/use-get-free-dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openGetFreeDialog } = useGetFreeDialog();

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/17227926-4a10-45aa-bf0e-b6338c4909f8.png" 
            alt="Brawl Shop" 
            className="h-10 mr-2"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
              e.currentTarget.className = "h-10 w-10";
            }}
          />
          <h1 className="text-2xl font-lilita text-brawl-purple">
            <span className="text-brawl-blue">Brawl</span>Shop
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#gems" className="hover:text-brawl-purple transition-colors">Gem Packs</a>
          <a href="#brawl-pass" className="hover:text-brawl-purple transition-colors">Brawl Pass</a>
          <a href="#proofs" className="hover:text-brawl-purple transition-colors">Proofs</a>
          <Button 
            className="bg-brawl-green hover:bg-brawl-green/90 rounded-full font-bold"
            onClick={openGetFreeDialog}
          >
            Get Rewards
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a 
            href="#gems" 
            className="hover:text-brawl-purple transition-colors py-2 transform transition-transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Gem Packs
          </a>
          <a 
            href="#brawl-pass" 
            className="hover:text-brawl-purple transition-colors py-2 transform transition-transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Brawl Pass
          </a>
          <a 
            href="#proofs" 
            className="hover:text-brawl-purple transition-colors py-2 transform transition-transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Proofs
          </a>
          <Button 
            className="bg-brawl-green hover:bg-brawl-green/90 rounded-full font-bold self-start"
            onClick={() => {
              setIsMenuOpen(false);
              openGetFreeDialog();
            }}
          >
            Get Rewards
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
