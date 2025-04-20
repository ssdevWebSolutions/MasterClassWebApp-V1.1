'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { useEffect, useState } from 'react';

const calorieData = [
  { day: 'Mon', calories: 1800 },
  { day: 'Tue', calories: 1750 },
  { day: 'Wed', calories: 2100 },
  { day: 'Thu', calories: 1850 },
  { day: 'Fri', calories: 1400 },
  { day: 'Sat', calories: 2300 },
  { day: 'Sun', calories: 1900 },
];

export default function WeeklyCalorieBarChart() {
  const [barSize, setBarSize] = useState(30);
  const [containerWidth, setContainerWidth] = useState('70%');

  useEffect(() => {
    function updateChartSettings() {
      const width = window.innerWidth;

      if (width < 768) {
        setBarSize(15);
        setContainerWidth('100%'); // Mobile & tablet
      } else {
        setBarSize(30);
        setContainerWidth('70%'); // Laptop and up
      }
    }

    updateChartSettings();
    window.addEventListener('resize', updateChartSettings);

    return () => window.removeEventListener('resize', updateChartSettings);
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer width={containerWidth} height="100%">
        <BarChart data={calorieData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="black" barSize={barSize} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
