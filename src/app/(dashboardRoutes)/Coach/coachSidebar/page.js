// File: HomePage/Sidebar.js
"use client"
import { Home,  BarChart, Play,   Users, MessageSquare, Settings,  Menu,  User, PersonStanding, Book, BookAIcon, BookDashedIcon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const sidebarItems = [
  { icon: <Home />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Book />, label: 'Session', href: '../Coach/Sessions' },
  { icon: <BarChart />, label: 'Reports', href: '/reports' },
  { icon: <Play />, label: 'Media', href: '/Media' },
 
 
  { icon: <MessageSquare />, label: 'Chat', href: '/chat' },
  
  { icon: <Users />, label: 'Attendance', href: '/partners' },
  { icon: <PersonStanding />, label: 'Nutrition', href: '/skeleton-tracking' },
  { icon: <User/>, label: 'Profile', href: '/profile' },
  { icon: <Settings />, label: 'Settings', href: '/settings' },
];


 const  CoachSidebar=()=> {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`bg-[#FFF5EF] ${isOpen ? 'w-64' : 'w-16'} md:${isOpen ? 'w-64' : 'w-20'} h-screen p-4 flex flex-col justify-between transition-all duration-300`}>
      
      {/* Toggle Button */}
      <div className="flex-grow overflow-y-auto">
      <div className="flex justify-between items-center mb-6">

        {isOpen && <h1 className="text-xl font-bold">Cricket Masterclass</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black">
          <Menu />
        </button>
      </div>

      <ul className="space-y-4">
        {sidebarItems.map((item, i) => (
          <li key={i} className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer">
          <Link href={item.href} className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer">
            {isOpen ? (
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <span>{item.icon}</span>
            )}
          
          </Link>
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

export default CoachSidebar;
