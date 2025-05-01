import React from "react";
import {
  CalendarDays,
  Flame,
  BarChart3,
  Eye,
  MoreVertical,
  FolderDown,
  FileText,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Download,
  Delete,
  DeleteIcon,
  LucideDelete,
  Trash2,
} from "lucide-react";

const WorkoutHistory = () => {
  return (
    <div className="max-w-5xl mx-auto  space-y-6 text-gray-800 ">
      {/* Breadcrumb */}
     
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[
          { icon: <CalendarDays className="w-5 h-5 text-red-500" />, title: 'Monthly Summary', desc: '24 workouts completed in the last 30 days', btn: 'View Details' },
          { icon: <Flame className="w-5 h-5 text-red-500" />, title: 'Personal Records', desc: '3 new personal bests achieved this month', btn: 'See All' },
          { icon: <BarChart3 className="w-5 h-5 text-red-500" />, title: 'Consistency', desc: '85% adherence to your training schedule', btn: 'Improve' }
        ].map((card, idx) => (
          <div key={idx} className="bg-red-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              {card.icon}
              <span className="text-xs text-red-500 font-semibold">{card.title}</span>
            </div>
            <h3 className="font-semibold mt-1">{card.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
            <button className="mt-3 text-sm font-medium text-white bg-red-500 rounded px-3 py-1">{card.btn}</button>
          </div>
        ))}
      </div>

      {/* Recent Workouts Table */}
      <h2 className="text-xl font-semibold mt-10">Recent Workouts</h2>
      {/* <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Date</th>
              <th>Workout</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Intensity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              ['July 15, 2023', 'Upper Body Strength', 'Completed', '45 min', 'High Intensity'],
              ['July 13, 2023', 'Lower Body Power', 'Completed', '60 min', 'Medium Intensity'],
              ['July 11, 2023', 'Core Stability', 'Completed', '30 min', 'Low Intensity'],
              ['July 9, 2023', 'Full Body Circuit', 'Partial', '40 min', 'High Intensity'],
              ['July 7, 2023', 'Upper Body Strength', 'Completed', '45 min', 'Medium Intensity'],
            ].map((row, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="py-2 pr-4 whitespace-nowrap">{cell}</td>
                ))}
                <td className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-600" />
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="w-full space-y-4 sm:space-y-0 sm:overflow-x-auto mt-4">
  {/* Mobile View */}
  <div className="block sm:hidden space-y-4">
    {[
      ['July 15, 2023', 'Upper Body Strength', 'Completed', '45 min', 'High Intensity'],
      ['July 13, 2023', 'Lower Body Power', 'Completed', '60 min', 'Medium Intensity'],
      ['July 11, 2023', 'Core Stability', 'Completed', '30 min', 'Low Intensity'],
      ['July 9, 2023', 'Full Body Circuit', 'Partial', '40 min', 'High Intensity'],
      ['July 7, 2023', 'Upper Body Strength', 'Completed', '45 min', 'Medium Intensity'],
    ].map(([date, workout, status, duration, intensity], idx) => (
      <div
        key={idx}
        className="rounded-xl border border-gray-200 p-3 text-sm text-gray-800 space-y-2 shadow-sm"
      >
        <div className="flex justify-between items-center text-sm text-gray-800">
          <div>
            <span className="font-semibold">Date:</span> {date}
          </div>
          <div className="flex gap-3 text-gray-600">
            <Eye className="w-4 h-4 cursor-pointer" />
            <MoreVertical className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        <div>
          <span className="font-medium">Workout:</span> {workout}
        </div>
        <div>
          <span className="font-medium">Status:</span> {status}
        </div>
        <div>
          <span className="font-medium">Duration:</span> {duration}
        </div>
        <div>
          <span className="font-medium">Intensity:</span> {intensity}
        </div>
       
      </div>
    ))}
  </div>

  {/* Desktop View */}
  <div className="hidden sm:block overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-600 border-b">
          <th className="py-2">Date</th>
          <th>Workout</th>
          <th>Status</th>
          <th>Duration</th>
          <th>Intensity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[
          ['July 15, 2023', 'Upper Body Strength', 'Completed', '45 min', 'High Intensity'],
          ['July 13, 2023', 'Lower Body Power', 'Completed', '60 min', 'Medium Intensity'],
          ['July 11, 2023', 'Core Stability', 'Completed', '30 min', 'Low Intensity'],
          ['July 9, 2023', 'Full Body Circuit', 'Partial', '40 min', 'High Intensity'],
          ['July 7, 2023', 'Upper Body Strength', 'Completed', '45 min', 'Medium Intensity'],
        ].map((row, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            {row.map((cell, i) => (
              <td key={i} className="py-2 pr-4 whitespace-nowrap">{cell}</td>
            ))}
            <td className="flex items-center space-x-2 py-2">
              <Eye className="w-4 h-4 text-gray-600 cursor-pointer" />
              <MoreVertical className="w-4 h-4 text-gray-600 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
 

      {/* Performance Chart Placeholder */}
      <h2 className="text-xl font-semibold mt-10">Performance Trends</h2>
      <div className="h-64 mt-4 bg-gray-100 flex items-end px-4 space-x-4">
        {[65, 73, 68, 75, 85, 78, 88, 92].map((val, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className="bg-black w-6"
              style={{ height: `${val * 0.6}px` }}
            ></div>
            <span className="text-xs mt-1">Week {idx + 1}</span>
          </div>
        ))}
      </div>

      {/* Workout Categories */}
      <h2 className="text-xl font-semibold mt-10">Workout Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {[
          ['Strength', '12 workouts completed'],
          ['Cardio', '8 workouts completed'],
          ['Flexibility', '4 workouts completed']
        ].map(([title, desc], idx) => (
          <div key={idx} className="bg-red-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="text-xs text-red-500 font-semibold">{title}</span>
            </div>
            <h3 className="font-semibold mt-1">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
            <button className="mt-3 text-sm font-medium text-white bg-red-500 rounded px-3 py-1">View All</button>
          </div>
        ))}
      </div>

      {/* Archived Plans */}
      <h2 className="text-xl font-semibold mt-10">Archived Plans</h2>
      <div className="space-y-3 mt-4">
        {[
          ['Summer Shred 2023', 'Completed on June 30, 2023 | 24 workouts'],
          ['Spring Strength Builder', 'Completed on April 15, 2023 | 36 workouts'],
          ['Winter Maintenance', 'Completed on February 28, 2023 | 48 workouts']
        ].map(([title, subtitle], idx) => (
          <div key={idx} className="flex justify-between items-center  pb-2">
            <div className="flex items-start space-x-2">
              <FolderDown className="w-5 h-5 text-red-500 mt-1" />
              <div>
                <h4 className="font-semibold text-sm">{title}</h4>
                <p className="text-xs text-gray-500">{subtitle}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Download className="w-4 h-4 text-gray-600" />
              <Trash2 className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Export All History</button>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded">Generate Progress Report</button>
      </div>
    </div>
  );
};

export default WorkoutHistory;
