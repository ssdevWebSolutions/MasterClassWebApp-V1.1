'use client';

import { Search, TrendingUp, Eye, Download, CircleHelp } from 'lucide-react';
import { PlayCircle } from 'lucide-react';
import {  Target, ShieldCheck } from "lucide-react";
import Link from 'next/link';


export default function CoachingFeedback() {


    const feedbackData = [
        {
          date: "June 15, 2023",
          coach: "Ricky Ponting",
          title: "Batting Technique Session",
          icon: TrendingUp,
          description:
            "Your front foot technique has improved significantly. Your stance is more balanced and your timing on drives is excellent. Focus on maintaining your elbow position during off-side shots to increase power and control.",
        },
        {
          date: "June 8, 2023",
          coach: "James Anderson",
          title: "Bowling Mechanics",
          icon: Target,
          description:
            "Your run-up rhythm is more consistent, resulting in better balance at delivery. Your seam position has improved, giving you more movement off the pitch. Work on varying your pace without telegraphing changes to batsmen.",
        },
        {
          date: "May 30, 2023",
          coach: "Jonty Rhodes",
          title: "Fielding Techniques",
          icon: ShieldCheck,
          description:
            "Your ground fielding has improved dramatically. Your throwing accuracy from the boundary is excellent. Continue working on your diving technique to ensure safer landings and quicker recovery for return throws.",
        },
      ];
      

  return (
    <div className="max-w-4xl mx-auto  font-sans">
    
         <h3 className="performance-trends-title text-md font-semibold mb-3 sm:text-sm">Search feedback</h3>


      {/* Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by coach, date or keywords"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">Filter</button>
      </div>

      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-4 text-black">Recent Coaching Feedback</h3>

      <div className="space-y-6 mb-10">
      {feedbackData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-red-50 p-6 rounded-xl space-y-3 shadow-sm"
          >
            {/* Icon */}
            <Icon className="w-8 h-8 p-1 rounded-full border border-transparent bg-red-100 text-red-500" />

            {/* Date + Coach */}
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
            {item.date} • Coach: {item.coach}
            </p>

            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-black">
            {item.title}
            </h4>

            <p className="text-[11px] sm:text-sm md:text-base text-gray-600">
            {item.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href={"/reports/battingTechnique"}><button className="bg-red-500 text-white font-bold border border-red-500  text-red-500 px-6 py-2 rounded-full text-sm">
                View Detailed Feedback
              </button></Link>
              <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded-full text-sm">
                Download Notes
              </button>
            </div>
          </div>
        );
      })}
    </div>
  


      <h3 className="text-base font-semibold mb-4 text-black">Skill Area Breakdown</h3>
      <div className="h-60 bg-gray-100 rounded-xl mb-10 flex items-center justify-center">
        {/* Placeholder for chart */}
        <span className="text-sm text-gray-400">[Chart Placeholder]</span>
      </div>

      <h3 className="text-base font-semibold mb-4 text-black">All Coaching Feedback</h3>
      <div className="bg-white rounded-xl overflow-hidden">
  {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between px-4 py-3 border-b border-gray-200 text-sm text-gray-700 gap-2"
    >
      {/* Top section: Date and Skill */}
      <div className="flex sm:flex-row sm:items-center xs:flex-col xs:items-center gap-1 md:w-1/2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-red-500" />
          <span className="text-xs xs:text-sm">May {22 - index * 7}, 2023</span>
        </div>
        <span className="text-xs sm:text-sm ml-0 xs:ml-2">Wicket-keeping</span>
      </div>

      {/* Middle section: Player name */}
      <div className="text-[10px] sm:text-xs md:text-sm md:w-1/4 text-left md:text-center">
  Michael Clarke
</div>

      {/* Bottom section: Rating and Icons */}
      <div className="flex items-center gap-4 md:justify-end justify-start text-xs sm:text-sm md:w-1/4">
        <span>4.8/5</span>
        <Download className="w-4 h-4 cursor-pointer" />
        <Eye className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  ))}
</div>


      <div className="mt-6 text-center">
        <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded-full text-sm">
          Load More
        </button>
      </div>
    </div>
  );
}
