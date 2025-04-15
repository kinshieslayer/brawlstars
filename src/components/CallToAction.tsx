import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useGetFreeDialog } from "@/hooks/use-get-free-dialog";

const CallToAction = () => {
  const { openGetFreeDialog } = useGetFreeDialog();

  const handleBuyNow = () => {
    // Add your shop now logic here
    window.location.href = "#gems";
  };

  return (
    <section className="relative bg-[#1A1F2C] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/17227926-4a10-45aa-bf0e-b6338c4909f8.png" 
                alt="Brawl Shop Logo" 
                className="h-16 mr-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold">
                BEST DEALS FOR <br />
                <span className="text-[#00CC66]">BRAWL STARS</span>
              </h1>
            </div>
            <p className="text-xl mb-8 text-gray-300">
              Get the most epic and cheap Brawl Stars Gems! Safe, Fast, and Reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleBuyNow}
                className="bg-[#00CC66] hover:bg-[#00CC66]/90 text-white font-bold text-lg py-6 px-8 rounded-xl w-full sm:w-auto"
              >
                Shop Now <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={openGetFreeDialog}
                className="bg-transparent border-2 border-[#00CC66] text-[#00CC66] hover:bg-[#00CC66]/10 font-bold text-lg py-6 px-8 rounded-xl w-full sm:w-auto"
              >
                View Deals
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <img 
              src="/lovable-uploads/c9872c50-1ff6-4607-8706-6556bfde5120.png" 
              alt="Brawl Stars Gems" 
              className="max-h-96 md:max-h-[500px] object-contain animate-float"
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9B30FF]/20 rounded-bl-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3D93F8]/20 rounded-tr-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
