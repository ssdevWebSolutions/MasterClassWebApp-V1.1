"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";
import {
    ActivitySquare,
    ArrowLeft,
    CalendarDays,
    Download,
    PersonStanding,
    PlayCircle,
    Timer,
    TrendingUp,
    User,
    UserCircle2,
    Watch,
  } from "lucide-react";

 

const performanceData = [
  { name: "Stance", value: 75 },
  { name: "Footwork", value: 80 },
  { name: "Bat Swing", value: 85 },
  { name: "Timing", value: 90 },
  { name: "Shots", value: 65 },
  { name: "Power", value: 78 },
];

export default function TechniqueReport() {
  return (
    <div className="max-w-4xl mx-auto font-sans">
      
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500 mb-6">June 15, 2023 · 10:30 AM · Coach: David Warner</p>
        <button className="bg-red-500 text-white px-4 py-2 text-sm rounded-full flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>


      {/* Session Summary */}
      <div className="bg-red-50 p-4 rounded-xl mb-6">
      <TrendingUp
  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 p-1 rounded-full border border-transparent bg-red-100"
/>

        <h3 className="font-semibold text-gray-800 mb-1">Overall Performance</h3>
        <p className="text-sm text-gray-600">
          Excellent progress shown in this session. Your batting technique has improved significantly, particularly in
          front foot play. Stance is more balanced and timing has improved by approximately 25% compared to previous
          sessions.
        </p>
      </div>

      {/* Technical Analysis */}
      <h2 className="font-semibold text-gray-800 mb-2">Technical Analysis</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
  {[
    {
      title: "Stance",
      text: "Your stance has become more relaxed with weight evenly distributed. Head position is steady and aligned with the middle stump.",
      icon: <PersonStanding className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />,
    },
    {
      title: "Footwork",
      text: "Front foot movement has improved significantly. Quick foot positioning and stable stride adjustments aid better balance during all shots.",
      icon: <PlayCircle className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />,
    },
    {
      title: "Bat Swing",
      text: "Your swing is more controlled and follows a straighter path, allowing better timing and focus on both defensive and attacking shots.",
      icon: <ActivitySquare className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />,
    },
    {
      title: "Timing",
      text: "Timing has improved by 25%, meeting the ball under your eyes. Increased timing enhances shot precision.",
      icon: <Timer className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />,
    },
  ].map((item, index) => (
    <div key={index} className="bg-red-50 p-4 rounded-xl flex flex-col gap-3 items-start">
      <div className="flex-shrink-0">{item.icon}</div>
      <div>
        <h4 className="font-semibold mb-1 text-gray-800">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.text}</p>
      </div>
    </div>
  ))}
</div>
      {/* Performance Metrics */}
      <h2 className="font-semibold text-gray-800 mb-2">Performance Metrics</h2>
      <div className="bg-white rounded-xl shadow-md p-4 mb-8">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="black" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Video Analysis */}
      <h2 className="font-semibold text-gray-800 mb-2">Video Analysis</h2>
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <Image
          src="/profile-analysis.jpg"
          alt="Video Analysis"
          width={300}
          height={200}
          className="rounded-lg mb-3 object-cover"
        />
        <p className="text-md font-bold mb-2">Front Foot Drive Analysis</p>
        <p className="text-sm text-gray-600">
          Your elbow position has improved significantly during drives. The bat face is now coming through straight,
          resulting in better control and direction of shots.
        </p>
      </div>

      {/* Coach's Feedback */}
      <div className="bg-red-50 p-4 rounded-xl mb-6">
        <User
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 p-1 mb-2 rounded-full border border-transparent bg-red-100" />
        <h3 className="font-bold text-gray-800 mb-1">David Warner</h3>
        <p className="text-sm text-gray-600">
          Great improvement in your front foot technique. Your stance has become more balanced and your timing has
          improved significantly. Focus on maintaining elbow position during drives. I'd like to see you work on your
          back foot play, particularly for short deliveries. Your defensive technique is solid, but we need to develop
          more attacking options against spinners. Overall, excellent progress since our last session.
        </p>
      </div>

      {/* Improvement Areas + Recommended Drills */}
      <div className="grid grid-cols-1  gap-6 mb-8">
      <div>
          <h3 className="font-semibold text-gray-800 mb-2">Improvement Areas</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Back Foot Play - Work on pull and cut shots against short-pitched deliveries</li>
            <li>Playing Spin - Develop more attacking options against spinners, especially on turning tracks</li>
            <li>Elbow Position - Maintain high elbow position consistently during front foot drives</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Recommended Drills</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Short Ball Practice - 10 minutes of pull shot practice with bowling machine set to 130–140 km/h</li>
            <li>Spin Footwork Drill - 5 minutes of footwork drills against spinning deliveries on rough pitches</li>
            <li>High Elbow Drive Practice - 15 minutes of shadow batting focusing on maintaining high elbow position</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm">Book follow-up Session</button>
        <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded-full text-sm">
          Back to Reports
        </button>
      </div>
    </div>
  );
}
