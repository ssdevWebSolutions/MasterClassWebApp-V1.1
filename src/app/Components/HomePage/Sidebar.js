// File: HomePage/Sidebar.js
"use client"
import { Home, Calendar, BarChart, Play, Heart, Dumbbell, Activity, ShoppingBag, Users, MessageSquare, Settings, Brain, Menu, icons, User } from 'lucide-react';
import { useState } from 'react';

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
  { icon: <User />, label: 'Profile' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`bg-[#FFF5EF] ${isOpen ? 'w-64' : 'w-20'} h-screen p-4 flex flex-col justify-between transition-all duration-300`}>      <div>
      {/* Toggle Button */}
      <div className="flex justify-between items-center mb-6">

        {isOpen && <h1 className="text-xl font-bold">Cricket Masterclass</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black">
          <Menu />
        </button>
      </div>

      <ul className="space-y-4">
        {sidebarItems.map((item, i) => (
          <li key={i} className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer">
            {isOpen ? (
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <span>{item.icon}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
      {/* <div className="text-sm text-gray-700">
        <p className="font-semibold">Samuel Smith</p>
        <p>Batsman</p>
        <User/>
      </div> */}
    </aside>
  );
}
