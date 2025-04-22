"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const coaches = [
  {
    name: "Coach Michael",
    role: "Strength & Conditioning Specialist",
    img: "/coach1.png",
  },
  {
    name: "Coach Sarah",
    role: "Performance Analyst",
    img: "/coach2.png",
  },
  {
    name: "Coach David",
    role: "Cricket Fitness Expert",
    img: "/coach3.png",
  },
];

export default function ShareWorkoutWithCoach() {
  const [workoutDetails, setWorkoutDetails] = useState(false);
  const [performanceData, setPerformanceData] = useState(false);
  const [progressPhotos, setProgressPhotos] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6  text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 space-x-1">
        <span>Dashboard</span> &gt; <span>Fitness Plans</span> &gt; <span className="text-black">Share</span>
      </nav>

      <h1 className="text-2xl font-semibold">Share Workout with Coach</h1>
      <p className="text-gray-600">Get feedback on your Upper Body Strength workout</p>

      {/* Workout Summary */}
      <div className="bg-rose-50 p-4 rounded-xl  border border-rose-100">
        <p className="text-xs text-rose-600 font-medium">TODAY’S WORKOUT</p>
        <h2 className="text-lg font-semibold">Upper Body Strength</h2>
        <p className="text-sm text-gray-500">Focus on shoulders, chest and triceps with progressive overload</p>
      </div>

      {/* Coach Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Coach Selection</h3>
        <div className="">
          {coaches.map((coach, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={coach.img}
                  alt={coach.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{coach.name}</p>
                  <p className="text-sm text-gray-500">{coach.role}</p>
                </div>
              </div>
              <button className="text-sm font-medium text-gray-600 flex items-center gap-1">
                Select <ChevronDown size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
        <p className="text-sm text-gray-500 mb-2">Notes for your coach</p>
        <textarea
          className="w-full h-24 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
          placeholder="Describe any challenges or questions about this workout..."
        />
      </div>

      {/* Workout Data Toggle */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Workout Data to Share</h3>
        <div className="">
          <ToggleItem
            checked={workoutDetails}
            onChange={() => setWorkoutDetails(!workoutDetails)}
            label="Include workout details"
            description="Exercises, sets, reps and instructions"
            icon="📄"
          />
          <ToggleItem
            checked={performanceData}
            onChange={() => setPerformanceData(!performanceData)}
            label="Include performance data"
            description="Weights used, completion rate, rest times"
            icon="📊"
          />
          <ToggleItem
            checked={progressPhotos}
            onChange={() => setProgressPhotos(!progressPhotos)}
            label="Include progress photos"
            description="Form check and technique validation"
            icon="📸"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg">
          Send to Coach
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
      </div>

      {/* Coach Response Info */}
        <div className="text-sm text-gray-500 pt-4">
            <p className="font-medium">What to expect:</p>
            
        </div>
      <div className="text-sm text-gray-500 pt-4 ">
        Coaches typically respond within 24 hours. You’ll receive a notification when feedback is available.
      </div>
    </div>
  );
}

function ToggleItem({ checked, onChange, label, description, icon }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <p className="font-medium">{label}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-rose-500 relative transition duration-200">
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
        </div>
      </label>
    </div>
  );
}
