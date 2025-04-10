// File: components/PerformanceTrends.js

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerformanceTrends({ data = [] }) {
  return (
    <div className="px-8 mt-12">
      <h3 className="text-xl font-semibold mb-4">Performance Trends</h3>
      <div className="bg-blue-50 p-4 rounded-xl shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#1E3A8A" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
