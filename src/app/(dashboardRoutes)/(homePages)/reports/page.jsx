"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  all: "View your coaching session feedback and performance evaluations",
  coaching: "Review detailed feedback from your coaching sessions",
  performance: "View your performance evaluations",
};

const Reports = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get("tab");
      if (tabParam && tabTitles.hasOwnProperty(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "coaching":
        return <CoachingFeedback />;
      case "performance":
        return <TechniqueReport />;
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
        {subTitles[activeTab]}
      </p>

      {/* Tabs */}
      <div className="w-full mb-6 px-2">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap gap-2 justify-start text-xs sm:text-sm md:text-base">
            {Object.entries(tabTitles).map(([key, label]) => (
              <button
                key={key}
                className={`pb-2 font-semibold break-words text-left transition-all duration-300 ${
                  activeTab === key
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400 hover:text-black"
                }`}
                onClick={() => {
                  setActiveTab(key);
                  const url = new URL(window.location.href);
                  url.searchParams.set("tab", key);
                  router.push(url.pathname + "?" + url.searchParams.toString());
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Reports;
