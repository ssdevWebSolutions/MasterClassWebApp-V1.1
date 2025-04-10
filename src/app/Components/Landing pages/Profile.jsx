"use client";
import React from 'react';
import { Mail, Phone, CreditCard, MessageSquare, Home, Edit } from 'lucide-react';


const Profile = () => {
//     const token = useSelector((state) => state.user.datas.users);

    
  return (
    <div className="max-w-5xl mx-auto p-10">
      {/* <Navbar /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-teal-600">PROFILE</h2>
            <Edit className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="font-medium">Name</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>Mobile Number</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>Mail ID</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gray-500" />
                <span>My Saved Cards</span>
              </div>
              <span className="text-gray-500">&gt;</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-500" />
                <span>Permissions</span>
              </div>
              <span className="text-gray-500">&gt;</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-gray-500" />
              <div>
                <span>10 Church Street</span>
                <p className="text-sm text-gray-500">Madhapur, 500081</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* My Clubs Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2 ">
          <h2 className="text-lg font-semibold text-teal-600 mb-4">MY CLUBS</h2>
          <div className="flex items-center gap-4">
            <img src="/path-to-club-logo.png" alt="Club Logo" className="w-16 h-16" />
            <span className="text-lg font-medium text-gray-700">Masterclass Cricket Coaching</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
