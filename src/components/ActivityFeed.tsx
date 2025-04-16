import { useEffect, useState } from "react";
import { Gift, ChevronUp, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Fake user data
const fakeUsers = [
  { name: "Alex", reward: "250 Gems", country: "United States", timeAgo: "2 min" },
  { name: "Sophia", reward: "500 Gems", country: "Canada", timeAgo: "5 min" },
  { name: "Miguel", reward: "170 Gems", country: "Mexico", timeAgo: "7 min" },
  { name: "Emma", reward: "Brawl Pass", country: "United Kingdom", timeAgo: "12 min" },
  { name: "Li", reward: "950 Gems", country: "China", timeAgo: "15 min" },
  { name: "Raj", reward: "80 Gems", country: "India", timeAgo: "18 min" },
  { name: "Anna", reward: "360 Gems", country: "Germany", timeAgo: "23 min" },
  { name: "Felipe", reward: "170 Gems", country: "Brazil", timeAgo: "26 min" },
  { name: "Yuki", reward: "Brawl Pass Plus", country: "Japan", timeAgo: "30 min" },
  { name: "Olga", reward: "250 Gems", country: "Russia", timeAgo: "33 min" },
  { name: "Lucas", reward: "800 Gems", country: "Argentina", timeAgo: "35 min" },
  { name: "Isabella", reward: "420 Gems", country: "Italy", timeAgo: "38 min" },
  { name: "Mohammed", reward: "Brawl Pass", country: "UAE", timeAgo: "40 min" },
  { name: "Nina", reward: "300 Gems", country: "Sweden", timeAgo: "42 min" },
  { name: "Carlos", reward: "650 Gems", country: "Spain", timeAgo: "45 min" },
  { name: "Aisha", reward: "280 Gems", country: "Egypt", timeAgo: "48 min" },
  { name: "David", reward: "Brawl Pass Plus", country: "Australia", timeAgo: "50 min" },
  { name: "Maria", reward: "450 Gems", country: "Portugal", timeAgo: "52 min" },
  { name: "Jin", reward: "720 Gems", country: "South Korea", timeAgo: "55 min" },
  { name: "Sophie", reward: "190 Gems", country: "France", timeAgo: "58 min" }
];

const ActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Rotate through fake activities every few seconds
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % fakeUsers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const user = fakeUsers[currentActivity];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex justify-center">
          <CollapsibleTrigger className="bg-black/80 border-t border-l border-r border-white/10 rounded-t-lg px-4 py-1 flex items-center gap-1 text-sm text-white/80 hover:text-white">
            {isOpen ? (
              <>
                <ChevronDown size={16} />
                <span>Hide Activity</span>
              </>
            ) : (
              <>
                <ChevronUp size={16} />
                <span>Show Activity</span>
              </>
            )}
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="bg-black/80 border-t border-white/10 py-2 px-4 max-w-full">
            <div className="flex items-center justify-center text-sm overflow-x-hidden whitespace-nowrap">
              <div className="flex items-center animate-pulse-soft">
                <Gift size={16} className="text-brawl-green mr-2 flex-shrink-0" />
              </div>
              <span className="text-white font-bold mr-1">{user.name}</span>
              {!isMobile && <span className="text-gray-300 mr-1">from</span>}
              <span className="text-white mr-1">{user.country}</span>
              {!isMobile && <span className="text-gray-300 mr-1">just received</span>}
              {isMobile && <span className="text-gray-300 mr-1">got</span>}
              <span className="text-brawl-green font-bold">{user.reward}</span>
              <span className="text-gray-400 ml-2 hidden sm:inline">• {user.timeAgo} ago</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ActivityFeed;
