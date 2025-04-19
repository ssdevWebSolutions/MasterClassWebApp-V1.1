"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Eye, Download } from "lucide-react";
import Link from "next/link";

const data = [
  { name: "Jan", uv: 80 },
  { name: "Feb", uv: 60 },
  { name: "Mar", uv: 55 },
  { name: "Apr", uv: 70 },
  { name: "May", uv: 85 },
  { name: "Jun", uv: 90 },
];

const reports = [
  {
    date: "June 15, 2023 · 10:30 AM",
    title: "Batting Technique Session",
    description:
      "Great improvement in your front foot technique. Your stance has become more balanced and your timing has improved significantly. Focus on maintaining elbow position during drives.",
  },
  {
    date: "June 8, 2023 · 2:00 PM",
    title: "Bowling Analysis",
    description:
      "Your pace has increased by 5km/h since last session. Good control on line and length. Work on your follow-through to prevent injuries and improve consistency.",
  },
  {
    date: "May 30, 2023 · 9:15 AM",
    title: "Fielding Drills",
    description:
      "Excellent reflexes during close-in fielding drills. Your throwing accuracy has improved. Continue working on ground fielding techniques for better coverage.",
  },
];

const sessionReports = [
  { title: "Wicket-keeping Session", coach: "Michael Clarke", date: "May 22, 2023" },
  { title: "Batting Technique Review", coach: "Ricky Ponting", date: "May 15, 2023" },
  { title: "Spin Bowling Analysis", coach: "Shane Warne", date: "May 8, 2023" },
  { title: "Fitness Assessment", coach: "James Anderson", date: "May 1, 2023" },
  { title: "Match Simulation", coach: "Virat Kohli", date: "April 24, 2023" },
];

const Reports = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="text-sm text-gray-500 mb-2">Dashboard &gt; Reports</div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Performance Reports</h1>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        View your coaching session feedback and performance evaluations
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base">
        <button className="font-semibold text-black border-b-2 border-black pb-1">All Reports</button>
        <Link href={"/reports/coachingFeedback"}><button className="text-gray-400 hover:text-black">Coaching Feedback</button></Link>
        <button className="text-gray-400 hover:text-black">Performance Analysis</button>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by coach, date or keywords"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Filter</button>
      </div>

      {/* Reports */}
      <div className="space-y-4 mb-8">
        {reports.map((report, i) => (
          <div key={i} className="bg-red-50 p-4 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">{report.date}</p>
            <h2 className="font-semibold text-lg mb-1 text-black">{report.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{report.description}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href={"/reports/technique"}><button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">View Full Report</button></Link>
              <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm">
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mb-8">
        <h3 className="text-md font-semibold mb-4">Performance Trends</h3>
        <div className="bg-white rounded-xl shadow-md p-4 w-full">
        <ResponsiveContainer width="100%" height={250}>
  <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="uv" fill="black" barSize={80} radius={[10, 10, 0, 0]} />
  </BarChart>
</ResponsiveContainer>

        </div>
      </div>

      {/* All Session Reports */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-4">All Session Reports</h3>
        <ul className="space-y-3">
          {sessionReports.map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date} · Coach: {item.coach}</p>
              </div>
              <div className="flex gap-3 text-gray-600">
                <Download className="w-4 h-4 cursor-pointer" />
                <Eye className="w-4 h-4 cursor-pointer" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Load more */}
      <div className="text-center">
        <button className="text-sm px-6 py-2 bg-red-50 text-red-500 rounded-full">Load More</button>
      </div>
    </div>
  );
};

export default Reports;
