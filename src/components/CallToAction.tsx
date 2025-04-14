
import { Button } from "@/components/ui/button";
import { ShoppingCart, Gift, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useGetFreeDialog } from "@/hooks/use-get-free-dialog";

const CallToAction = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const { openGetFreeDialog } = useGetFreeDialog();
  
  const handleBuyNow = () => {
    toast({
      title: "Payment Server Issue",
      description: "Payment server have issue right now. Try get free option instead.",
      variant: "destructive"
    });
  };
  
  return (
    <section className="py-12 md:py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0">
          <div className="h-64 w-64 bg-brawl-purple rounded-bl-full"></div>
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="h-48 w-48 bg-brawl-blue rounded-tr-full"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <h1 className="text-4xl md:text-6xl font-lilita mb-4 text-white">
              Power Up Your <span className="text-brawl-purple">Brawl <br className="hidden md:block" />Stars</span> Adventure!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Get exclusive skins, unlock new brawlers, and dominate the arena with premium gems from the official Brawl Shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleBuyNow}
                className="bg-brawl-yellow hover:bg-brawl-yellow/90 text-black font-bold text-lg py-6 px-8 rounded-xl w-40"
              >
                Shop Now <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={openGetFreeDialog}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg py-6 px-8 rounded-xl w-40"
              >
                View Deals
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <img 
              src="/lovable-uploads/bc283ce1-5c22-49d8-8488-ae367fe74bcb.png" 
              alt="Brawl Stars Character" 
              className="max-h-96 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
