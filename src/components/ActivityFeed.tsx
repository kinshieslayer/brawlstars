
import { useEffect, useState } from "react";
import { Gift } from "lucide-react";

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
  { name: "Olga", reward: "250 Gems", country: "Russia", timeAgo: "33 min" }
];

const ActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    // Rotate through fake activities every few seconds
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % fakeUsers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const user = fakeUsers[currentActivity];

  return (
    <div className="bg-black/80 border-b border-white/10 py-2 px-4 fixed top-0 w-full z-50">
      <div className="flex items-center justify-center text-sm">
        <div className="flex items-center animate-pulse-soft">
          <Gift size={16} className="text-brawl-green mr-2" />
        </div>
        <span className="text-white font-bold mr-1">{user.name}</span>
        <span className="text-gray-300 mr-1">from</span>
        <span className="text-white mr-1">{user.country}</span>
        <span className="text-gray-300 mr-1">just received</span>
        <span className="text-brawl-green font-bold">{user.reward}</span>
        <span className="text-gray-400 ml-2">• {user.timeAgo} ago</span>
      </div>
    </div>
  );
};

export default ActivityFeed;
