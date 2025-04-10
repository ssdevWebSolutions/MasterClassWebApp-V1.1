// File: components/PerformanceOverview.js

export default function PerformanceOverview({ stats = [] }) {
    return (
      <div className="px-8 mt-12">
        <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-yellow-50 p-4 rounded-xl shadow text-center">
              <p className="text-3xl font-bold text-yellow-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  