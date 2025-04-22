import { File, Pen, Download, BarChart2, Play } from 'lucide-react';

export default function RecentAnalysisPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">Dashboard &gt; Skeleton Tracking &gt; Recent Analysis</div>

      {/* Header */}
      <h1 className="text-2xl font-semibold">Recent Analysis Sessions</h1>

      {/* Tabs */}
      <div className="flex space-x-6 -b -gray-200 text-sm font-medium">
        <button className="pb-2 -b-2 -black">All Sessions</button>
        <button className="pb-2 text-black-400">This Week</button>
        <button className="pb-2 text-black-400">Last Month</button>
      </div>

      {/* Continue Analysis */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Continue Analysis</h2>
        <div className="space-y-3">
          {["Front Foot Drive Analysis", "Bowling Action Review", "Pull Shot Technique"].map((title, idx) => (
            <div key={title} className="flex items-center justify-between p-4  rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <File className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-medium text-sm">{title}</p>
                  <p className="text-xs text-gray-500">
                    Last edited: {idx === 0 ? "Today, 10:30 AM" : idx === 1 ? "Yesterday, 3:45 PM" : "3 days ago"}
                  </p>
                </div>
              </div>
              <div className="items-center flex gap-3 sm:gap-4 md:gap-5">
  <Play className="text-black-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
  <Pen className="text-black-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
</div>

            
            </div>
          ))}
        </div>
      </div>

      {/* Shared With You */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Shared With You</h2>
        <div className="space-y-3">
          {[
            { name: "Professional Batting Reference", by: "Coach Smith", when: "2 days ago" },
            { name: "Spin Bowling Technique", by: "Coach Williams", when: "1 week ago" }
          ].map(({ name, by, when }) => (
            <div key={name} className="flex items-center justify-between p-4  rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium text-sm">{name}</p>
                  <p className="text-xs text-gray-500">Shared by: {by}, {when}</p>
                </div>
              </div>

              <Download className="w-4 h-4 text-black-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Analysis Templates</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Batting Analysis",
              desc: "Front foot, back foot, and defensive techniques"
            },
            {
              title: "Bowling Analysis",
              desc: "Action, release point, and follow-through"
            },
            {
              title: "Fielding Analysis",
              desc: "Catching, throwing, and ground fielding"
            }
          ].map(({ title, desc }) => (
            <div key={title} className=" p-4 rounded-xl space-y-2 bg-rose-50">
              <File className="w-5 h-5 text-red-500" />
              <p className="font-medium text-sm">{title}</p>
              <p className="text-xs text-gray-500">{desc}</p>
              <button className="bg-red-500 text-white text-xs px-3 py-1 rounded">Use Template</button>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Analysis Statistics</h2>
        <div className="w-full overflow-auto">
          <div className="min-w-[500px] h-64 flex items-end justify-around  rounded-lg p-4">
            {[12, 8, 5, 10, 7, 9].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  style={{ height: `${val * 12}px` }}
                  className="w-16 bg-black rounded"
                ></div>
                <p className="text-xs mt-2">
                  {["Batting", "Bowling", "Fielding", "Footwork", "Balance", "Timing"][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm">New Analysis</button>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-xl text-sm">Import Video</button>
        <button className="bg-white text-black  -gray-300 px-4 py-2 rounded-xl text-sm">Back to Dashboard</button>
      </div>
    </div>
  );
}
