"use client";
import { useState } from "react";
import { Calendar, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const sessions = [
  {
    title: "U15 Batting Practice",
    time: "Today, 4:00 PM",
    location: "Field 2",
    players: "8 players",
    image: "/u15.jpg",
  },
  {
    title: "Senior Bowling",
    time: "Tomorrow, 6:00 PM",
    location: "Field 1",
    players: "12 players",
    image: "/bowling.jpg",
  },
  {
    title: "Fitness & Conditioning",
    time: "Fri, 7:00 AM",
    location: "Gym",
    players: "10 players",
    image: "/fitness.jpg",
  },
];

export default function UpcomingSessions() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      

      {/* Only Upcoming Tab UI */}
      {activeTab === "Upcoming" && (
        <>
          <h3 className="text-lg font-semibold text-black mb-3">
            Upcoming Sessions
          </h3>
          <div className="flex flex-col gap-4 mb-8">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <Image
                    src={session.image}
                    alt={session.title}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-black">
                      {session.title}
                    </p>
                    <p className="text-sm text-gray-500">{session.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <p>{session.location}</p>
                  <p>{session.players}</p>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <h3 className="text-lg font-semibold text-black mb-3">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FFF5F5] shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  +
                </div>
              </div>
              <p className="font-semibold text-black">Add Session</p>
              <p className="text-sm text-gray-500 mb-2">
                Schedule a new session
              </p>
              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm mt-1">
                Create
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#FFF5F5] shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <p className="font-semibold text-black">Session Report</p>
              <p className="text-sm text-gray-500 mb-2">
                Add notes or feedback
              </p>
              <button className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm mt-1">
                Add Report
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
