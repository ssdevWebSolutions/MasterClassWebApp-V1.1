"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FitnessPage() {
  const progress = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 95 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 92 },
    { day: "Fri", value: 87 },
    { day: "Sat", value: 65 },
    { day: "Sun", value: 0 },
  ];

  return (
    <div className="bg-white p-8 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Training Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={progress}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#000000" barSize={40} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
