// File: app/dashboard/page.jsx
"use client";

import UpcomingSessions from "../Components/HomePage/UpcomingSessions";
import PerformanceOverview from "../Components/HomePage/PerformanceOverview";
import NutritionFitness from "../Components/HomePage/NutritionFitness";
import PerformanceTrends from "@/app/Components/HomePage/PerformanceTrends";
import QuickStats from "../Components/HomePage/QuickStats";
import MediaHighlights from "../Components/HomePage/MediaHighlights";

const upcomingSessionsData = [
  { time: "Today, 4:00 PM", title: "Batting Technique with Coach Mike" },
  { time: "Tomorrow, 10:00 AM", title: "Group Fielding with Coach Sarah" },
  { time: "Friday, 2:30 PM", title: "1-on-1 Bowling with Coach James" },
];

const performanceData = [
  { subject: "Batting", A: 75 },
  { subject: "Bowling", A: 60 },
  { subject: "Fielding", A: 85 },
  { subject: "Stamina", A: 70 },
  { subject: "Focus", A: 90 },
];

const nutritionData = [
  { label: "Carbs", value: 60 },
  { label: "Protein", value: 25 },
  { label: "Fat", value: 15 },
];

const trainingData = [
  { day: "Mon", completion: 80 },
  { day: "Tue", completion: 100 },
  { day: "Wed", completion: 70 },
  { day: "Thu", completion: 90 },
  { day: "Fri", completion: 50 },
  { day: "Sat", completion: 60 },
];
const quickStatsData = [
  {
    label: "Sessions Completed",
    value: 42,
    icon: "🏏",
  },
  {
    label: "Avg. Batting Score",
    value: "78.3",
    icon: "📊",
  },
  {
    label: "Calories Burned",
    value: "3,200 kcal",
    icon: "🔥",
  },
  {
    label: "Training Time",
    value: "12 hrs",
    icon: "⏱️",
  },
];

const performanceTrendsData = [
  { date: "2024-10-01", score: 65 },
  { date: "2024-10-02", score: 72 },
  { date: "2024-10-03", score: 78 },
  { date: "2024-10-04", score: 70 },
  { date: "2024-10-05", score: 85 },
  { date: "2024-10-06", score: 80 },
  { date: "2024-10-07", score: 88 },
];


export default function DashboardPage() {
  return (
    <>
    <UpcomingSessions sessions={upcomingSessionsData} />
      <QuickStats stats={quickStatsData}/>
      <PerformanceOverview data={performanceData} />
      <NutritionFitness stats={nutritionData} />
      <PerformanceTrends data={performanceTrendsData} />
      <MediaHighlights />
    </>
  );
}
