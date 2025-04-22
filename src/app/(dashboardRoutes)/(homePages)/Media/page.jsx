"use client";

import { useState } from "react";


export default function MediaArchive() {
    
    const [activeTab, setActiveTab] = useState("videos");

  const recentVideos = [
    { title: "Batting Practice", date: "May 15, 2023" },
    { title: "Bowling Technique", date: "May 10, 2023" },
    { title: "Fielding Drills", date: "May 5, 2023" },
    { title: "Wicket Keeping", date: "April 28, 2023" },
  ];

  const trainingSessions = [
    { title: "Front Foot Defense", date: "April 20, 2023" },
    { title: "Cover Drive", date: "April 15, 2023" },
    { title: "Yorker Practice", date: "April 10, 2023" },
    { title: "Spin Bowling", date: "April 5, 2023" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Dashboard &gt; <span className="text-black">Media</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Media Archive</h1>
      <p className="text-gray-600 mb-6">
        Review your training videos and photos to track your progress
      </p>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-1 ${
            activeTab === "videos" ? "border-b-2 border-black font-semibold" : "text-gray-500"
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-4 py-2 ${
            activeTab === "photos" ? "border-b-2 border-black font-semibold" : "text-gray-500"
          }`}
        >
          Photos
        </button>
      </div>

      {/* Filters */}
      {activeTab === "videos" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-1  text-sm">
              <p>Date From</p>
              <input
                type="date"
                placeholder="Select start date"
                className="bg-gray-100 rounded p-3 w-full text-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-1  text-sm">
              <p>Date To</p>
              <input
                type="date"
                placeholder="Select end date"
                className="bg-gray-100 rounded p-3 w-full text-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-1  text-sm">
              <p>Coach</p>
              <select className="bg-gray-100 rounded p-3 w-full text-gray-700">
                <option>Select coach</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-1  text-sm">
              <p>Session</p>
              <select className="bg-gray-100 rounded p-3 w-full text-gray-700">
                <option>Select session</option>
              </select>
            </div>
            
          
           
           
            
           
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded mb-10">
            Apply Filters
          </button>

          {/* Recent Videos */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">Recent Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {recentVideos.map((video, index) => (
                <div
                  key={index}
                  className=" p-4 rounded-lg bg-red-50 flex flex-col items-start"
                >
                  <div className="text-red-400 mb-2">🎥</div>
                  <h3 className="font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Uploaded: {video.date}</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Training Sessions */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">Training Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {trainingSessions.map((session, index) => (
                <div
                  key={index}
                  className=" p-4 rounded-lg bg-red-50 flex flex-col items-start"
                >
                  <div className="text-red-400 mb-2">🎥</div>
                  <h3 className="font-semibold mb-1">{session.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Uploaded: {session.date}</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="bg-red-100 hover:bg-red-200 text-red-500 font-medium py-2 px-6 rounded-full">
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
}
