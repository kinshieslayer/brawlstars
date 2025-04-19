import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    og_load: () => void;
  }
}

interface GetFreeDialogContextType {
  isOpen: boolean;
  openGetFreeDialog: () => void;
  closeGetFreeDialog: () => void;
}

const GetFreeDialogContext = createContext<GetFreeDialogContextType | undefined>(undefined);

export const GetFreeDialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [brawlStarsId, setBrawlStarsId] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Add content locker script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.textContent = 'var ebcGi_Vio_BywlHc={"it":4295780,"key":"b81e0"};';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://d2yc6hxtq0phup.cloudfront.net/ca7b465.js';
    document.body.appendChild(script2);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="d2yc6hxtq0phup.cloudfront.net"]');
      scripts.forEach(script => script.remove());
      script1.remove();
    };
  }, []);

  const openGetFreeDialog = () => setIsOpen(true);
  const closeGetFreeDialog = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brawlStarsId.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Brawl Stars ID",
        variant: "destructive"
      });
      return;
    }

    // Call the content locker function
    if (typeof window._Pg === 'function') {
      window._Pg();
    }
  };

  return (
    <GetFreeDialogContext.Provider value={{ isOpen, openGetFreeDialog, closeGetFreeDialog }}>
      {children}
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-brawl-dark text-white border-brawl-purple/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-lilita text-center text-brawl-green">Get Free Rewards</DialogTitle>
            <DialogDescription className="text-white/80 text-center">
              Complete offers to get free gems and rewards
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/30 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={20} />
              <p className="text-sm text-yellow-200">
                Do not cheat while doing these tasks and do not use VPN or you will not get your reward. 
                Admin or support will check them manually before approval.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="brawl-id" className="text-sm font-medium">
                Your Brawl Stars ID
              </label>
              <Input 
                id="brawl-id"
                placeholder="Enter your Brawl Stars ID" 
                value={brawlStarsId}
                onChange={(e) => setBrawlStarsId(e.target.value)}
                className="bg-background/40 border-white/20"
                required
              />
              <p className="text-xs text-white/60">
                After admin or support verifies that everything is done correctly, you will receive your reward.
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brawl-green hover:bg-brawl-green/80 font-bold text-white rounded-xl transform transition-transform active:scale-95"
            >
              Start Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </GetFreeDialogContext.Provider>
  );
};

export const useGetFreeDialog = (): GetFreeDialogContextType => {
  const context = useContext(GetFreeDialogContext);
  if (!context) {
    throw new Error('useGetFreeDialog must be used within a GetFreeDialogProvider');
  }
  return context;
};
