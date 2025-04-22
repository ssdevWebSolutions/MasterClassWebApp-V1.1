"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../../../assets/css/reports.css";

import AllReports from "./Components/AllReports";
import CoachingFeedback from "./Components/CoachingFeedback";
import TechniqueReport from "./Components/Performance";

const tabTitles = {
  all: "All Reports",
  coaching: "Coaching Feedback",
  performance: "Performance Analysis",
};

const titles = {
  all: "All Reports",
  coaching: "Coaching Feedback",
  performance: "Batting Technique Session Report",
};



const subTitles = {
  all: " View your coaching session feedback and performance evaluations",
  coaching: "Review detailed feedback from your coaching sessions",
  performance: "View your performance evaluations",
};

const Reports = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";

  const [activeTab, setActiveTab] = useState(initialTab);

 

  const renderTabContent = () => {
    switch (activeTab) {
      case "coaching":
        return <CoachingFeedback />;
      case "performance":
        return <TechniqueReport/>;
      case "all":
      default:
        return <AllReports />;
    }
  };

  

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Dynamic Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2"> 
        Dashboard &gt; Reports &gt; {tabTitles[activeTab] || "Reports"}
      </div>

      {/* Dynamic Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        {titles[activeTab] || "Performance Reports"}
      </h1>

      <p className="text-gray-500 mb-6 text-sm md:text-base">
      {subTitles[activeTab] }
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base">
        {Object.entries(tabTitles).map(([key, label]) => (
          <button
            key={key}
            className={`pb-1 font-semibold ${
              activeTab === key
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-black"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Reports;
