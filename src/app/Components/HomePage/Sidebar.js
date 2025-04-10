// File: HomePage/Sidebar.js
import { Home, Calendar, BarChart, Play, Heart, Dumbbell, Activity, ShoppingBag, Users, MessageSquare, Settings, Brain } from 'lucide-react';

const sidebarItems = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <Calendar />, label: 'Bookings' },
  { icon: <BarChart />, label: 'Reports' },
  { icon: <Play />, label: 'Media' },
  { icon: <Heart />, label: 'Nutrition' },
  { icon: <Dumbbell />, label: 'Fitness' },
  { icon: <Activity />, label: 'Performance' },
  { icon: <ShoppingBag />, label: 'Store' },
  { icon: <Users />, label: 'Partners' },
  { icon: <MessageSquare />, label: 'Chat' },
  { icon: <Brain />, label: 'Skeleton Tracking' },
  { icon: <Settings />, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="bg-[#FFF5EF] w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">Cricket Masterclass</h1>
        <ul className="space-y-4">
          {sidebarItems.map((item, i) => (
            <li key={i} className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer">
              {item.icon}<span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-gray-700">
        <p className="font-semibold">Samuel Smith</p>
        <p>Batsman</p>
      </div>
    </aside>
  );
}
