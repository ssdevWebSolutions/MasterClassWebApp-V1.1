// File: components/QuickStats.js

export default function QuickStats({ stats = [] }) {
    return (
      <div className="px-8 mt-10">
        <h3 className="text-xl font-semibold mb-4">Your Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-orange-100 text-orange-900 p-4 rounded-xl shadow text-center"
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  