import { Download, Eye, Pencil, Filter, Calendar, Users, FileText, Settings, Plus } from 'lucide-react';

export default function PerformanceReports() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 text-gray-800 ">

      {/* Top Nav */}
      {/* <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex space-x-6 items-center">
          <div className="text-xl font-bold">Logo</div>
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            <span className="cursor-pointer">Dashboard</span>
            <span className="cursor-pointer">Bookings</span>
            <span className="cursor-pointer text-black">Reports</span>
            <span className="cursor-pointer">Users</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-black">Settings</button>
          <button className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full">Add New</button>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div> */}

     
      {/* Filters */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6">
        <select className="border p-2 rounded-lg bg-gray-50 w-full md:w-1/4">
          <option>Select player or team</option>
        </select>
        <input type="text" placeholder="Select date range" className="border p-2 rounded-lg bg-gray-50 w-full md:w-1/4" />
        <select className="border p-2 rounded-lg bg-gray-50 w-full md:w-1/4">
          <option>All statuses</option>
        </select>
        <button className="bg-red-500 text-white font-medium px-4 py-2 rounded-lg">Apply Filters</button>
      </div>

      {/* Reports Table */}
      <div className="w-full bg-white rounded-lg">
        {[
          ['Batting Technique Analysis', 'Rohit Sharma', 'Rahul Dravid', 'May 20, 2023'],
          ['Bowling Speed Progression', 'Jasprit Bumrah', 'Zaheer Khan', 'May 18, 2023'],
          ['Fielding Reflexes Assessment', 'Ravindra Jadeja', 'Jonty Rhodes', 'May 15, 2023'],
          ['Wicketkeeping Skills Evaluation', 'Rishabh Pant', 'MS Dhoni', 'May 12, 2023'],
          ['Team Batting Performance', 'Team India U19', 'VVS Laxman', 'May 10, 2023'],
          ['Spin Bowling Technique', 'Kuldeep Yadav', 'Anil Kumble', 'May 8, 2023'],
          ['Batting Against Pace', 'Virat Kohli', 'Ravi Shastri', 'May 5, 2023'],
          ['All-rounder Skills Assessment', 'Hardik Pandya', 'Kapil Dev', 'May 3, 2023']
        ].map(([title, player, coach, date], index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-black/10 text-sm">
            <div className="w-full md:w-2/5 font-medium flex items-center space-x-2">
              <FileText size={16} />
              <span>{title}</span>
            </div>
            <div className="hidden md:flex md:w-1/5 text-gray-700">{player}</div>
            <div className="hidden md:flex md:w-1/5 text-gray-700">Coach: {coach}</div>
            <div className="w-24 text-gray-500 text-sm hidden md:block">{date}</div>
            <div className="flex space-x-3 text-gray-600">
              <Download size={16} />
              <Eye size={16} />
              <Pencil size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-4">
        <button className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm">Load More</button>
        <p className="text-sm text-gray-500 mt-1">Showing 8 of 24 reports</p>
      </div>

      {/* Chart */}
      <div className="mt-10 w-full overflow-x-auto">
        <div className="min-w-[600px] h-[280px] flex justify-between items-end border-l border-b pb-2 px-4">
          {['Batting', 'Bowling', 'Fielding', 'Fitness', 'Strategy', 'Mental'].map((label, i) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-20 bg-black rounded"
                style={{ height: `${60 - i * 5}px` }}
              ></div>
              <div>
              <span className="text-sm mt-2 rotate-[25deg] whitespace-nowrap">{label}</span>
              </div>
         
            </div>
              
          ))}
           
        </div>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="text-sm font-bold mb-1">Top Performer</div>
          <div className="text-sm text-gray-700 mb-3">Virat Kohli – 92% improvement</div>
          <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">View Details</button>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="text-sm font-bold mb-1">Most Improved</div>
          <div className="text-sm text-gray-700 mb-3">Rishabh Pant – 78% growth rate</div>
          <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">View Details</button>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="text-sm font-bold mb-1">Needs Attention</div>
          <div className="text-sm text-gray-700 mb-3">3 players require focused training</div>
          <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">View List</button>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="text-sm font-bold mb-1">Generate Report</div>
          <div className="text-sm text-gray-700 mb-3">Create custom performance report</div>
          <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">Create New</button>
        </div>
      </div>
    </div>
  );
}
