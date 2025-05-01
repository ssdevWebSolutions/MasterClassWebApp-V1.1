"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  CalendarDays,
  Dumbbell,
  Lock,
  CirclePlay,
  ArrowDownToLine,
} from "lucide-react";
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

  const workoutDetails = [
    {
      title: "Bench Press",
      sets: "4 sets x 10 reps",
      rest: "Rest 90 seconds between sets",
    },
    {
      title: "Shoulder Press",
      sets: "3 sets x 12 reps",
      rest: "Rest 60 seconds between sets",
    },
    {
      title: "Tricep Extensions",
      sets: "3 sets x 15 reps",
      rest: "Rest 60 seconds between sets",
    },
    {
      title: "Pull-ups",
      sets: "3 sets x 8 reps",
      rest: "Rest 90 seconds between sets",
    },
    {
      title: "Advanced Technique Videos",
      sets: "Premium content",
      rest: "Expert demonstrations",
      locked: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto  font-sans">
      {/* Calendar and Today's Workout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 p-4 sm:p-6 rounded-lg space-y-2">
          <CalendarDays className="text-red-500" />
          <h2 className="font-semibold">July 2023</h2>
          <p className="text-sm text-gray-600">
            Interactive calendar with daily workout indicators
          </p>
        </div>
        <div className="bg-red-50 p-4 sm:p-6 rounded-lg space-y-2">
          <Dumbbell className="text-red-500" />
          <h2 className="font-semibold">Today's Workout</h2>
          <p className="text-black font-semibold">Upper Body Strength</p>
          <p className="text-sm text-gray-600">
            Focus on shoulders, chest and triceps with progressive overload
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white py-3 sm:py-2">
              Start Workout
            </Button>
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-100 py-3 sm:py-2"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Workout Details */}
      <div className="space-y-4 text-gray-900">
  <h2 className="text-xl sm:text-2xl font-bold">Workout Details</h2>
  <div className="space-y-4">
    {workoutDetails.map((workout, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-gray-100"
      >
        <div className="flex items-start gap-4">
          {workout.locked ? (
            <Lock className="text-red-500" />
          ) : (
            <Dumbbell className="text-red-500 w-8 h-8 sm:w-5 sm:h-5" />
          )}
          <div>
            <p className="font-semibold">{workout.title}</p>
            <p className="text-sm text-gray-600">
              {workout.sets} | {workout.rest}
            </p>
          </div>
        </div>

        {/* Fixed icons always inline regardless of screen size */}
        <div className="flex gap-3 items-center mt-2">
          <button className="text-gray-600 hover:text-black">
            <CirclePlay />
          </button>
          <button className="text-gray-600 hover:text-black">
            <ArrowDownToLine />
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="flex flex-col sm:flex-row gap-4 mt-4">
    <Button className="bg-red-500 hover:bg-red-600 text-white">
      Download Full Plan
    </Button>
    <Link href="/Fitness/share">
      <Button
        variant="outline"
        className="border-red-500 text-red-500 hover:bg-red-100"
      >
        Share with Coach
      </Button>
    </Link>
  </div>
</div>


      {/* Training Progress */}
      <div className="my-8 w-full overflow-x-hidden">
  <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
    Performance Trends
  </h3>
  <div className="bg-white rounded-xl shadow-md px-3 py-5 sm:px-4 sm:py-6 w-full">
    <div className="w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ fontSize: "12px" }} />
          <Bar
            dataKey="uv"
            fill="black"
            barSize={40}
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