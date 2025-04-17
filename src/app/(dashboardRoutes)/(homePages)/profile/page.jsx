// ProfilePage.jsx
"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const router=useRouter();
  const performanceData = [
    { date: "15 May 2023", type: "Bowling Session", coach: "Mike Smith", rating: "8/10" },
    { date: "10 May 2023", type: "Match Performance", coach: "vs Yorkshire", rating: "9/10" },
    { date: "5 May 2023", type: "Fitness Assessment", coach: "Sarah Johnson", rating: "7/10" },
    { date: "28 Apr 2023", type: "Bowling Session", coach: "Mike Smith", rating: "8/10" },
    { date: "20 Apr 2023", type: "Match Performance", coach: "vs Sussex", rating: "8/10" },
  ];

  const barData = [75, 80, 78, 82, 90, 88]; // Example bar heights for Jan - Jun

  const handleClick=()=>{
    router.push("/editprofile")
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex gap-6 items-start">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Profile"
          className="w-60 h-60 object-cover rounded-2xl"
        />
        <div className="bg-red-50 p-6 rounded-xl shadow-sm w-60">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <p className="text-sm text-gray-600">Manage your personal details and team information</p>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleClick}>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-2 gap-y-4 text-gray-700 text-sm">
          <div><strong>Full Name:</strong> James Anderson</div>
          <div><strong>Role:</strong> Fast Bowler</div>
          <div><strong>Team:</strong> Lancashire County Cricket Club</div>
          <div><strong>Email:</strong> james.anderson@example.com</div>
          <div><strong>Phone:</strong> +44 7700 900123</div>
        </div>
      </div>

      <div className="mt-10 border-b pb-2 flex space-x-6 text-gray-700 font-semibold">
        <span className="border-b-2 border-black pb-1">Performance History</span>
        <span className="cursor-pointer">Media Archive</span>
        <span className="cursor-pointer">Fitness & Nutrition</span>
      </div>

      <div className="mt-6">
        <table className="w-full text-left border-collapse">
          <thead className="text-sm text-gray-600">
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Activity</th>
              <th className="py-2">Coach</th>
              <th className="py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((entry, index) => (
              <tr key={index} className="border-b text-sm">
                <td className="py-2">{entry.date}</td>
                <td className="py-2">{entry.type}</td>
                <td className="py-2">{entry.coach}</td>
                <td className="py-2">{entry.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Performance Chart</h3>
        <div className="flex items-end gap-4 h-40">
          {barData.map((height, i) => (
            <div
              key={i}
              className="bg-black w-8"
              style={{ height: `${height}%` }}
              title={`Month: ${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs mt-2 text-gray-600 w-full max-w-md">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>
      </div>

      <button className="mt-10 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
        Download Full Report
      </button>
    </div>
  );
};

export default ProfilePage;
