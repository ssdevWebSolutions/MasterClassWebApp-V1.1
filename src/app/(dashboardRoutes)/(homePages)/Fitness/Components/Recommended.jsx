import { CalendarDays, Eye, Flame, Clock, Dumbbell, User, Download } from 'lucide-react';

export default function RecommendedPlans() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 text-gray-800 ">
    
      {/* Top Recommendations */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              tag: 'BEGINNER FRIENDLY',
              title: 'Strength Foundations',
              desc: '8-week program to build core strength and proper form'
            },
            {
              tag: 'INTERMEDIATE',
              title: 'Power & Agility',
              desc: '12-week program focusing on explosive movements'
            },
            {
              tag: 'ADVANCED',
              title: 'Elite Performance',
              desc: '16-week intensive program for competitive athletes'
            }
          ].map((item, index) => (
            <div key={index} className="bg-rose-50 p-4 rounded-xl space-y-2">
              <div className="text-xs text-rose-600 font-medium flex items-center gap-1">
                <Flame className="w-4 h-4" /> {item.tag}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="flex space-x-2 pt-2">
                <button className="bg-rose-600 text-white px-4 py-1 rounded-md text-sm">View Details</button>
                <button className="text-rose-600 border border-rose-600 px-4 py-1 rounded-md text-sm">Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        <img src="https://imgs.search.brave.com/ZqwuYnU-VNqPypkAWcyRYeXcHRzpfz0ewJ6XAxqICEQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg1/NDU3NzAyL3Bob3Rv/L2tpY2tib3hpbmct/Y2xhc3MuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWtZMVZj/SVhZSW9XRkdONGZF/SDBmanM0b3UwYTJD/eVZ2X2VfdHZnSkZj/WW89" alt="Program" className="rounded-xl w-full h-auto object-cover lg:col-span-2" />
        <div className="bg-rose-50 p-4 rounded-xl space-y-3">
          <div className="text-xs text-rose-600 font-medium flex items-center gap-1">
            <Flame className="w-4 h-4" /> Strength Foundations
          </div>
          <p className="text-sm text-gray-600">This 8-week program is designed for beginners looking to build a solid foundation in strength training. Focus on proper form, progressive overload, and core stability.</p>
          <div className="flex space-x-2 pt-2">
            <button className="bg-rose-600 text-white px-4 py-1 rounded-md text-sm">Start Program</button>
            <button className="text-rose-600 border border-rose-600 px-4 py-1 rounded-md text-sm">Preview Week 1</button>
          </div>
        </div>
      </div>

      {/* Program Schedule */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Program Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="text-gray-500">
              <tr>
                <th className="py-2">Day</th>
                <th>Focus</th>
                <th>Duration</th>
                <th>Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Monday', 'Upper Body Focus', '45 minutes', 'Beginner'],
                ['Tuesday', 'Rest Day', 'Recovery', 'All Levels'],
                ['Wednesday', 'Lower Body Focus', '50 minutes', 'Beginner'],
                ['Thursday', 'Core & Mobility', '30 minutes', 'Beginner'],
                ['Friday', 'Full Body Circuit', '45 minutes', 'Beginner'],
                ['Saturday', 'Active Recovery', '30-60 minutes', 'All Levels'],
                ['Sunday', 'Rest Day', 'recovery', 'Steching Optional']
              ].map(([day, focus, time, level], i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{day}</td>
                  <td>{focus}</td>
                  <td>{time}</td>
                  <td>{level}</td>
                  <td  className='flex '>
                   <Eye className="w-4 h-4 text-gray-400" />
                   <Download className="w-4 h-4 text-gray-400 ml-2" />
                 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* What You'll Need */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">What You'll Need</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <Dumbbell className="w-4 h-4 text-rose-600 mt-1" />
            <span><b>Basic Equipment</b>: dumbbells, resistance bands, and a yoga mat</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <Clock className="w-4 h-4 text-rose-600 mt-1" />
            <span><b>Time Commitment</b>: 3–5 days per week, 30–50 minutes per session</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <User className="w-4 h-4 text-rose-600 mt-1" />
            <span><b>Skill Level</b>: Beginner friendly, no prior experience needed</span>
          </div>
        </div>
      </div>

      {/* Coach Recommendations */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Coach Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['COACH PICK', 'HIIT for Cricket', 'High-intensity interval training designed for cricket players'],
            ['POPULAR', 'Mobility Mastery', 'Improve flexibility and prevent injuries with this 6-week program'],
            ['NEW', 'Off-Season Builder', 'Maintain and build strength during your off-season']
          ].map(([tag, title, desc], i) => (
            <div key={i} className="bg-rose-50 p-4 rounded-xl space-y-2">
              <div className="text-xs text-rose-600 font-medium flex items-center gap-1">
                <Flame className="w-4 h-4" /> {tag}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
              <button className="bg-rose-600 text-white px-4 py-1 rounded-md text-sm">View Program</button>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-4">
          <button className="bg-rose-600 text-white px-4 py-1 rounded-md text-sm">Find More Programs</button>
          <button className="text-rose-600 border border-rose-600 px-4 py-1 rounded-md text-sm">Take Fitness Assessment</button>
        </div>
      </div>
    </div>
  );
}