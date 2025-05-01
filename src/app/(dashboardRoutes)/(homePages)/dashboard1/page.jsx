import React from 'react';

const Dashboard = () => {
  const performanceData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 72 },
    { month: 'Mar', score: 68 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 82 },
    { month: 'Jun', score: 78 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-2 md:p-8 font-sans">
      <h2 className="text-2xl font-semibold">Hi Samuel! Ready to master your next session?</h2>

      {/* Upcoming Sessions */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Upcoming Sessions</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { time: "Today, 4:00 PM", session: "Batting Technique with Coach Mike" },
            { time: "Tomorrow, 10:00 AM", session: "Group Fielding Session with Coach Sarah" },
            { time: "Friday, 2:30 PM", session: "1-on-1 Bowling with Coach James" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
              <div>
                <p className="font-semibold">{item.time}</p>
                <p className="mt-2 text-gray-600">{item.session}</p>
              </div>
              <button className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Stats</h3>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
          {[
            { label: "Last Session", value: "March 15, 2023" },
            { label: "Sessions Completed", value: "42" },
            { label: "Fitness Score", value: "85/100" },
            { label: "Nutrition Score", value: "78/100" },
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center space-y-2 hover:shadow-lg transition">
              <p className="text-gray-500">{stat.label}</p>
              <strong className="text-lg">{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Trends */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Performance Trends</h3>
        <div className="flex items-end gap-4 h-48 border rounded-lg p-4 overflow-x-auto">
          {performanceData.map((data) => (
            <div key={data.month} className="flex flex-col items-center">
              <div
                className="w-8 bg-indigo-500 rounded-t"
                style={{ height: `${data.score * 1.5}px` }}
              ></div>
              <span className="mt-2 text-sm text-gray-600">{data.month}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Access</h3>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            { title: "Bookings", action: "Book Now" },
            { title: "Reports", action: "View Reports" },
            { title: "Media", action: "View Media" },
            { title: "Nutrition", action: "View Plan" },
            { title: "Fitness", action: "View Workouts" },
            { title: "Store", action: "Shop Now" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
              <p className="text-gray-700 text-center">{item.title}</p>
              <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">{item.action}</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
