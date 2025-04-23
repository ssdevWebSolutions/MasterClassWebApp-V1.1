"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarDays, Clock, Dumbbell, FileText, FileUp, LineChart } from "lucide-react";
import { Button } from "@/app/Components/ui/button";
import Link from "next/link";

import SkeletonTrackingAnalysis from "./Components/SkeletonTracking";
import TechniqueComparison from "./Components/Comparision";
import PerformanceReports from "./Components/Reports";

const tabTitles = {
  videoAnalysis: "Skeleton Tracking",
  Comparision: "Comparison",
  Reports: "Performance Reports",
};

const mainTitles = {
  videoAnalysis: "Skeleton Tracking Analysis",
  Comparision: "Technique Comparison Analysis",
  Reports: "Performance Reports",
};

const FitnessPlans = () => {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "videoAnalysis";
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const renderSecondaryTabContent = () => {
    switch (selectedTab) {
      case "Reports":
        return <PerformanceReports />;
      case "Comparision":
        return <TechniqueComparison />;
      case "videoAnalysis":
      default:
        return <SkeletonTrackingAnalysis />;
    }
  };

  const tabOptions = [
    { key: "videoAnalysis", label: "Video Analysis" },
    { key: "Comparision", label: "Comparison" },
    { key: "Reports", label: "Reports" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        Dashboard &gt; {tabTitles[selectedTab] || "Overview"}
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        {mainTitles[selectedTab] || "Performance Reports"}
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-xl">
          <FileUp className="text-red-500 mb-2" />
          <h3 className="text-xs font-semibold text-gray-500">UPLOAD VIDEO</h3>
          <p className="text-sm font-semibold mb-2">Upload Video</p>
          <p className="text-sm text-gray-500">Upload or record a video for motion analysis</p>
          <div className="mt-4 flex gap-2">
            <Link href={"/skeleton-tracking/upload-video"}> <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">Upload Video</button></Link>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">Record Now</button>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <Clock className="text-red-500 mb-2" />
          <h3 className="text-xs font-semibold text-gray-500">RECENT ANALYSIS</h3>
          <p className="text-sm font-semibold mb-2">Recent Analysis</p>
          <p className="text-sm text-gray-500">Continue working on your recent analysis</p>
          <div className="mt-4">
            <Link href={"/skeleton-tracking/recent-analysis"}><button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">View Recent</button></Link>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <FileText className="text-red-500 mb-2" />
          <h3 className="text-xs font-semibold text-gray-500">TEMPLATES</h3>
          <p className="text-sm font-semibold mb-2">Templates</p>
          <p className="text-sm text-gray-500">Use pre-configured analysis templates</p>
          <div className="mt-4">
            <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">Browse Templates</button>
          </div>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="w-full mb-6 px-2">
  <div className="border-b border-gray-200">
    <div className="flex flex-wrap gap-6 justify-start text-xs sm:text-sm md:text-base">
      {tabOptions.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setSelectedTab(tab.key)}
          className={`pb-2 font-semibold break-words text-left transition-all duration-300 ${
            selectedTab === tab.key
              ? "text-black border-b-2 border-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
</div>


      {/* Dynamic Tab Content */}
      <div className="pt-4">{renderSecondaryTabContent()}</div>
    </div>
  );
};

export default FitnessPlans;
