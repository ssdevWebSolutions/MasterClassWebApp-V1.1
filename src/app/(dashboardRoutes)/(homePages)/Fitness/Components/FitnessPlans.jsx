"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { CalendarDays, LineChart, Dumbbell, Lock, Play, CirclePlay, ArrowDownToLine } from "lucide-react";
// import { Button } from "../../ui/button";
import dynamic from "next/dynamic";
import { Button } from "@/app/Components/ui/button";
import Link from "next/link";

export default function FitnessPage() {

const data = [
    { name: "Jan", uv: 80 },
    { name: "Feb", uv: 60 },
    { name: "Mar", uv: 55 },
    { name: "Apr", uv: 70 },
    { name: "May", uv: 85 },
    { name: "Jun", uv: 90 },
  ];


//   const data = [
//     { name: "Week 1", uv: 4000, pv: 2400 },
//     { name: "Week 2", uv: 3000, pv: 1398 },
//     { name: "Week 3", uv: 2000, pv: 9800 },
//     { name: "Week 4", uv: 2780, pv: 3908 },
//   ];


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
    <div className="max-w-4xl mx-auto font-sans">      
        {/* Calendar and Today's Workout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 text-gray-900 ">
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
                <button variant="ghost" size="icon"><CirclePlay/></button>
                <button variant="ghost" size="icon"><ArrowDownToLine/></button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="bg-red-500 hover:bg-red-600 text-white">Download Full Plan</Button>
          
          <Link href={"/Fitness/share"}><Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-100">Share with Coach</Button></Link>
        </div>
      </div>

      {/* Training Progress */}
      <div className="my-8">
  <h3 className="text-lg font-semibold mb-4 sm:text-base text-gray-800">
    Performance Trends
  </h3>

  <div className="bg-white rounded-xl shadow-md px-4 py-6 sm:p-3 w-full overflow-x-auto">
    <div className="min-w-[300px] sm:min-w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 15 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ fontSize: "12px" }} />
          <Bar
            dataKey="uv"
            fill="black"
            barSize={50} // Reduce bar size for mobile responsiveness
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

    </div>
  );
}
