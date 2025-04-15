// File: HomePage/Sidebar.js
import { Home, Calendar, BarChart, Play, Heart, Dumbbell, Activity, ShoppingBag, Users, MessageSquare, Settings, Brain, PersonStanding } from 'lucide-react';
import Link from 'next/link';

const sidebarItems = [
  { icon: <Home />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Calendar />, label: 'Bookings', href: '/Components/HomePage/Booking' },
  { icon: <BarChart />, label: 'Reports', href: '/reports' },
  { icon: <Play />, label: 'Media', href: '/Components/HomePage/Media' },
  { icon: <Heart />, label: 'Nutrition', href: '/nutrition' },
  { icon: <Dumbbell />, label: 'Fitness', href: '/Components/HomePage/Fitness' },
  { icon: <Activity />, label: 'Performance', href: '/performance' },
  { icon: <ShoppingBag />, label: 'Store', href: '/store' },
  { icon: <Users />, label: 'Partners', href: '/partners' },
  { icon: <MessageSquare />, label: 'Chat', href: '/chat' },
  { icon: <Brain />, label: 'Skeleton Tracking', href: '/skeleton-tracking' },
  { icon: <PersonStanding />, label: 'Profile', href: '/profile' },
  { icon: <Settings />, label: 'Settings', href: '/settings' },
 
];


export default function Sidebar() {
  return (
    <aside className="bg-[#FFF5EF] w-64 h-screen p-6 flex flex-col justify-between text-black">
      <div>
        <h1 className="text-xl font-bold mb-6">Cricket Masterclass</h1>
        <ul className="space-y-4">
          {sidebarItems.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer">
                {item.icon}
                <span>{item.label}</span>
              </Link>
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
