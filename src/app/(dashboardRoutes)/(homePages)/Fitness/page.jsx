"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarDays, LineChart, Dumbbell, Lock } from "lucide-react";
// import { Button } from "../../ui/button";
import dynamic from "next/dynamic";
import { Button } from "@/app/Components/ui/button";

export default function FitnessPage() {




  const data = [
    { name: "Week 1", uv: 4000, pv: 2400 },
    { name: "Week 2", uv: 3000, pv: 1398 },
    { name: "Week 3", uv: 2000, pv: 9800 },
    { name: "Week 4", uv: 2780, pv: 3908 },
  ];


  const workoutDetails = [
    { title: "Bench Press", sets: "4 sets x 10 reps", rest: "Rest 90 seconds between sets" },
    { title: "Shoulder Press", sets: "3 sets x 12 reps", rest: "Rest 60 seconds between sets" },
    { title: "Tricep Extensions", sets: "3 sets x 15 reps", rest: "Rest 60 seconds between sets" },
    { title: "Pull-ups", sets: "3 sets x 8 reps", rest: "Rest 90 seconds between sets" },
    { title: "Advanced Technique Videos", sets: "Premium content", rest: "Expert demonstrations", locked: true },
  ];
 
  const progress = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 95 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 92 },
    { day: "Fri", value: 87 },
    { day: "Sat", value: 65 },
    { day: "Sun", value: 0 },  // Sunday is empty
  ];
  

  return (
    <div className="bg-gray-100 p-8 min-h-screen space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-sm text-gray-500">Dashboard &gt; <span className="font-medium text-gray-900">Fitness Plans</span></div>
        <h1 className="text-3xl font-bold text-black">Fitness Plans</h1>
        <p className="text-gray-600">Your personalized strength and conditioning roadmap</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <CalendarDays className="text-red-500" />
          <h2 className="font-semibold text-gray-900 ">Calendar View</h2>
          <p className="text-sm text-gray-600">Select a date to view your scheduled workout</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <LineChart className="text-red-500" />
          <h2 className="font-semibold text-gray-900 ">Weekly Progress</h2>
          <p className="text-sm text-gray-600">4 of 6 workouts completed this week</p>
          <Button className="mt-2 bg-red-500 hover:bg-red-600 text-white">View Stats</Button>
        </div>
        <div className="bg-red-50 p-6 rounded-lg space-y-2">
          <Dumbbell className="text-red-500" />
          <h2 className="font-semibold text-gray-900 ">Next Workout</h2>
          <p className="text-sm text-gray-600">Core Strength - Tomorrow 6:00 AM</p>
          <Button className="mt-2 bg-red-500 hover:bg-red-600 text-white">Preview</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex gap-8 border-b text-black">
          {["Calendar", "My Plans", "Recommended", "History"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-semibold ${tab === "Calendar" ? "border-b-2 border-black" : "text-gray-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Calendar and Today's Workout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 ">
          <div className="bg-red-50 p-6 rounded-lg space-y-2 text-gray-900 ">
            <CalendarDays className="text-red-500" />
            <h2 className="font-semibold text-gray-900 ">July 2023</h2>
            <p className="text-sm text-gray-600">Interactive calendar with daily workout indicators</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg space-y-2">
            <Dumbbell className="text-red-500" />
            <h2 className="font-semibold">Today's Workout</h2>
            <p className="text-gray-900 font-semibold">Upper Body Strength</p>
            <p className="text-sm text-gray-600">Focus on shoulders, chest and triceps with progressive overload</p>
            <div className="flex gap-4 mt-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Start Workout</Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-100">Download PDF</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Details */}
      <div className="space-y-4 text-gray-900 ">
        <h2 className="text-2xl font-bold">Workout Details</h2>
        <div className="space-y-4">
          {workoutDetails.map((workout, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100">
              <div className="flex items-center gap-4">
                {workout.locked ? (
                  <Lock className="text-red-500" />
                ) : (
                  <Dumbbell className="text-red-500" />
                )}
                <div>
                  <p className="font-semibold">{workout.title}</p>
                  <p className="text-sm text-gray-600">{workout.sets} | {workout.rest}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">⏱️</Button>
                <Button variant="ghost" size="icon">⬇️</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="bg-red-500 hover:bg-red-600 text-white">Download Full Plan</Button>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-100">Share with Coach</Button>
        </div>
      </div>

      {/* Training Progress */}
      <div className="space-y-4 p-10">
      <h2 className="text-2xl font-bold mb-6 text-black">Training Progress</h2>
      <div className="h-72"> {/* height control */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={progress}>
            <XAxis 
              dataKey="day" 
              tickLine={false} 
              axisLine={false}
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              domain={[0, 100]}
              tickLine={false} 
              axisLine={false} 
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              contentStyle={{ borderRadius: '8px', fontSize: '12px' }}
            />
            <Bar 
              dataKey="value" 
              fill="black" 
              radius={[6, 6, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
}
