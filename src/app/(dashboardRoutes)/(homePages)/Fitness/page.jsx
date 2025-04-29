"use client";

import React, { useState } from "react";
import FitnessPage from "./Components/FitnessPlans";
import { CalendarDays, Dumbbell, LineChart } from "lucide-react";
import { Button } from "@/app/Components/ui/button";
import WorkoutHistory from "./Components/History";
import MyTrainingPlans from "./Components/MyPlans";
import RecommendedPlans from "./Components/Recommended";
import Link from "next/link";

// Titles and Subtitles for each tab
const tabTitles = {
  calendar: "Calendar",
  history: "Workout History",
  myPlans: "My Plans",
  recommended: "Recommended",
};

const mainTitles = {
  calendar: "Fitness Plans",
  history: "Workout History",
  myPlans: "My Training Plans",
  recommended: "Recommended Plans",
};

const subTitles = {
  calendar: "Your personalized strength and conditioning roadmap",
  history: "Track your progress and review past workouts",
  myPlans: "Your personalized workout programs designed for your goals",
  recommended: "Personalized training programs based on your goals and skill level",
};

const FitnessPlans = () => {
  const [selectedTab, setSelectedTab] = useState("calendar");

  const renderSecondaryTabContent = () => {
    switch (selectedTab) {
      case "calendar":
        return <FitnessPage />;
      case "myPlans":
        return <MyTrainingPlans />;
      case "recommended":
        return <RecommendedPlans />;
      case "history":
        return <WorkoutHistory />;
      default:
        return <FitnessPage />;
    }
  };

  const tabOptions = [
    { key: "calendar", label: "Calendar" },
    { key: "myPlans", label: "My Plans" },
    { key: "recommended", label: "Recommended" },
    { key: "history", label: "History" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-2 md:p-8 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        Dashboard &gt; Fitness Plans &gt; {tabTitles[selectedTab]}
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        {mainTitles[selectedTab]}
      </h1>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        {subTitles[selectedTab]}
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <CalendarDays className="text-red-500" />
          <h2 className="font-semibold text-gray-900">Calendar View</h2>
          <p className="text-sm text-gray-600">
            Select a date to view your scheduled workout
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <LineChart className="text-red-500" />
          <h2 className="font-semibold text-gray-900">Weekly Progress</h2>
          <p className="text-sm text-gray-600">
            4 of 6 workouts completed this week
          </p>
          <Button className="mt-2 bg-red-500 hover:bg-red-600 text-white">
            View Stats
          </Button>
        </div>
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <Dumbbell className="text-red-500" />
          <h2 className="font-semibold text-gray-900">Next Workout</h2>
          <p className="text-sm text-gray-600">
            Core Strength - Tomorrow 6:00 AM
          </p>
          <Link href={"/Fitness/workoutSessions"}>
            <Button className="mt-2 bg-red-500 hover:bg-red-600 text-white">
              Preview
            </Button>
          </Link>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-6 border-b text-xs sm:text-sm md:text-base">
        {tabOptions.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`pb-1 font-semibold break-words text-left transition-all duration-300 ${
              selectedTab === tab.key
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderSecondaryTabContent()}</div>
    </div>
  );
};

export default FitnessPlans;
