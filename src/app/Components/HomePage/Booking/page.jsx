"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react"; // Optional: or your own calendar icon

export default function SessionBookings() {
  const [view, setView] = useState("calendar");
  const [tab, setTab] = useState("upcoming");

  const availableSessions = [
    { date: "July 15, 9:00 AM", title: "Group Batting Session", coach: "Michael Clarke", rating: 4.9 },
    { date: "July 16, 2:00 PM", title: "1-on-1 Bowling", coach: "Shane Warne", rating: 5.0 },
    { date: "July 18, 10:00 AM", title: "Cricket Camp", coach: "Ricky Ponting", rating: 4.8 },
    { date: "July 20, 4:00 PM", title: "Fielding Practice", coach: "Jonty Rhodes", rating: 4.9 },
    { date: "July 22, 1:00 PM", title: "Wicket Keeping", coach: "Adam Gilchrist", rating: 4.7 },
    { date: "July 25, 11:00 AM", title: "Group Batting Session", coach: "Virat Kohli", rating: 5.0 },
  ];

  const myBookings = [
    { date: "July 10, 2023 • 10:00 AM", title: "1-on-1 Batting Session", coach: "Brian Lara" },
    { date: "July 12, 2023 • 2:00 PM", title: "Group Fielding Practice", coach: "Jonty Rhodes" },
    { date: "July 14, 2023 • 9:00 AM", title: "Cricket Camp – Day 1", coach: "Ricky Ponting" },
  ];

  return (
    <div className="p-6 bg-white text-black">
      <div className="text-sm text-gray-400  mb-2">Dashboard &gt; Bookings</div>
      <h1 className="text-2xl font-bold mb-6">Session Bookings</h1>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {["Filter Sessions", "Session Type", "Coach Preference"].map((item) => (
          <div key={item} className="bg-red-50 p-4 rounded-2xl flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <CalendarIcon className="text-red-400 w-6 h-6" />
            </div>
            <div>
              <div className="font-semibold">{item}</div>
              <div className="text-sm text-gray-500">
                {item === "Filter Sessions" && "Customize your session search"}
                {item === "Session Type" && "Select the type of training session"}
                {item === "Coach Preference" && "Choose your preferred coach"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar/List View Toggle */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => setView("calendar")}
          className={`border-b-2 pb-1 ${view === "calendar" ? "border-black" : "border-transparent"}`}
        >
          Calendar View
        </button>
        <button
          onClick={() => setView("list")}
          className={`border-b-2 pb-1 ${view === "list" ? "border-black" : "border-transparent"}`}
        >
          List View
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">July 2023</h2>
        <div className="flex gap-2">
          <button className="bg-red-100 text-red-500 px-4 py-1 rounded-full">Previous Month</button>
          <button className="bg-red-100 text-red-500 px-4 py-1 rounded-full">Next Month</button>
        </div>
      </div>

      {/* Available Sessions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {availableSessions.map((session, idx) => (
          <div key={idx} className="bg-red-50 p-4 rounded-2xl">
            <div className="text-sm text-gray-500 mb-1">{session.date}</div>
            <h3 className="font-semibold mb-1">{session.title}</h3>
            <div className="text-sm text-gray-600 mb-4">
              Coach: {session.coach} ({session.rating}★)
            </div>
            <div className="flex gap-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Book Now</button>
              <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full text-sm">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Your Bookings */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Bookings</h2>
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => setTab("upcoming")}
            className={`border-b-2 pb-1 ${tab === "upcoming" ? "border-black" : "border-transparent"}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setTab("past")}
            className={`border-b-2 pb-1 ${tab === "past" ? "border-black" : "border-transparent"}`}
          >
            Past
          </button>
        </div>

        <div className="space-y-4">
          {myBookings.map((booking, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-red-100 p-2 rounded-full">
                <CalendarIcon className="text-red-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">{booking.title}</h3>
                <div className="text-sm text-gray-500">
                  {booking.date} • Coach: {booking.coach}
                </div>
              </div>
              <div className="ml-auto">
                <button className="text-gray-500">⋮</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
