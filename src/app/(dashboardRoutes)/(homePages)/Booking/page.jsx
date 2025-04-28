"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter, Settings, User } from "lucide-react";
import Link from "next/link";

export default function SessionBookings() {
  const [tab, setTab] = useState("calendar");

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-2 md:p-8 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Dashboard &gt; <span className="text-black font-semibold">Bookings</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Session Bookings</h1>

      {/* Filter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Filter Sessions */}
        <div className="flex items-center p-6 rounded-2xl bg-red-50">
          <div className="flex-shrink-0 bg-white p-2 rounded-full mr-4">
            <Filter className="text-red-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Filter Sessions</h2>
            <p className="text-sm text-gray-500">Customize your session search</p>
          </div>
        </div>

        {/* Session Type */}
        <div className="flex items-center p-6 rounded-2xl bg-red-50">
          <div className="flex-shrink-0 bg-white p-2 rounded-full mr-4">
            <Settings className="text-red-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Session Type</h2>
            <p className="text-sm text-gray-500">Select the type of training session</p>
          </div>
        </div>

        {/* Coach Preference */}
        <div className="flex items-center p-6 rounded-2xl bg-red-50">
          <div className="flex-shrink-0 bg-white p-2 rounded-full mr-4">
            <User className="text-red-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Coach Preference</h2>
            <p className="text-sm text-gray-500">Choose your preferred coach</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button
          className={`pb-2 ${
            tab === "calendar" ? "border-b-2 border-black font-semibold" : "text-gray-500"
          }`}
          onClick={() => setTab("calendar")}
        >
          Calendar View
        </button>
        <button
          className={`pb-2 ${
            tab === "list" ? "border-b-2 border-black font-semibold" : "text-gray-500"
          }`}
          onClick={() => setTab("list")}
        >
          List View
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">July 2023</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-red-50 text-red-500 px-3 py-1 rounded-lg text-sm">
            <ChevronLeft className="w-4 h-4" />
            Previous Month
          </button>
          <button className="flex items-center gap-1 bg-red-50 text-red-500 px-3 py-1 rounded-lg text-sm">
            Next Month
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Available Sessions */}
      <h3 className="text-lg font-semibold mb-4">Available Sessions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Session Cards */}
        {[
          {
            date: "July 15, 9:00 AM",
            title: "Group Batting Session",
            coach: "Michael Clarke",
            rating: 4.9,
          },
          {
            date: "July 16, 2:00 PM",
            title: "1-on-1 Bowling",
            coach: "Shane Warne",
            rating: 5.0,
          },
          {
            date: "July 18, 10:00 AM",
            title: "Cricket Camp",
            coach: "Ricky Ponting",
            rating: 4.8,
          },
          {
            date: "July 20, 4:00 PM",
            title: "Fielding Practice",
            coach: "Jonty Rhodes",
            rating: 4.9,
          },
          {
            date: "July 22, 1:00 PM",
            title: "Wicket Keeping",
            coach: "Adam Gilchrist",
            rating: 4.7,
          },
          {
            date: "July 25, 11:00 AM",
            title: "Group Batting Session",
            coach: "Virat Kohli",
            rating: 5.0,
          },
        ].map((session, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-red-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-shrink-0 bg-white p-2 rounded-full">
                <Settings className="text-red-400 w-5 h-5" />
              </div>
              <div className="text-gray-500 text-sm">{session.date}</div>
            </div>
            <h4 className="text-lg font-semibold mb-1">{session.title}</h4>
            <p className="text-sm text-gray-500">
              Coach: {session.coach} <span className="text-black">({session.rating}★)</span>
            </p>
            <div className="flex gap-3 mt-4">
              
              <Link href="/Booking/bookingSession">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
                  Book Now
                </button>
              </Link>
              <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Your Bookings */}
      <h3 className="text-lg font-semibold mb-4">Your Bookings</h3>

      <div className="flex gap-8 border-b border-gray-200 mb-6">
        <button className="pb-2 border-b-2 border-black font-semibold">Upcoming</button>
        <button className="pb-2 text-gray-500">Past</button>
      </div>

      {/* Upcoming Bookings */}
      <div className="space-y-6">
        {[
          {
            title: "1-on-1 Batting Session",
            date: "July 10, 2023 • 10:00 AM",
            coach: "Brian Lara",
          },
          {
            title: "Group Fielding Practice",
            date: "July 12, 2023 • 2:00 PM",
            coach: "Jonty Rhodes",
          },
          {
            title: "Cricket Camp - Day 1",
            date: "July 14, 2023 • 9:00 AM",
            coach: "Ricky Ponting",
          },
        ].map((booking, idx) => (
          <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                <Settings className="text-red-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">{booking.title}</h4>
                <p className="text-sm text-gray-500">
                  {booking.date} • Coach: {booking.coach}
                </p>
              </div>
            </div>
            <div className="text-gray-400 cursor-pointer">⋮</div>
          </div>
        ))}
      </div>
    </div>
  );
}
