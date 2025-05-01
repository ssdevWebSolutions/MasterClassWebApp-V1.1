import { Play, SkipBack, SkipForward, RefreshCcw, SquarePen, Library, ArrowRight, Video, RotateCcw, ActivitySquare, CalendarClock, FileDown, CirclePlay, DumbbellIcon } from 'lucide-react';

export default function TechniqueComparison() {
  return (
    <div className="max-w-5xl mx-auto  space-y-6 text-gray-800 ">

    

      {/* Select Reference */}
      <h2 className="text-black font-semibold mb-2">Select Reference</h2>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
  <div className="flex items-center gap-4">
    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Coach Smith" className="w-12 h-12 rounded-full" />
    <div>
      <p className="font-medium text-black text-sm sm:text-base">Coach Smith, Online</p>
      <p className="text-gray-500 text-xs sm:text-sm">Professional batting technique</p>
    </div>
  </div>
  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
    <CirclePlay className="w-5 h-5 text-black" />
    <Library className="w-5 h-5 text-black" /> {/* Replace with new icon */}
    <div>
      <p className="font-medium text-black text-sm sm:text-base">Pro Player Library</p>
      <p className="text-gray-500 text-xs sm:text-sm">Collection of professional techniques</p>
    </div>
    <ArrowRight className="w-4 h-4 text-black" />
  </div>
</div>


      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <img src="https://imgs.search.brave.com/MqcxmNGckHXIcCMkPIpOYNjT-NWFmpmfcNxeixrjwFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXNo/c3BvcnRzLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA2/L2JhdHRpbmctdHJp/Y2tzLTEwMjR4Njgy/LmpwZw" alt="Your Technique" className="rounded-xl w-full h-[240px] object-cover" />
          <p className="text-center mt-2 text-black font-medium">Your Technique</p>
        </div>
        <div>
          <img src="https://imgs.search.brave.com/z-E9GyCxLKVIa8pu4C4O9O-FULtB-z6Jre-aGAKOSXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzkyLzYyLzYz/LzM2MF9GXzkyNjI2/MzYxX2w2dDFWZDJU/c2d5Rkx5STJTOTFa/NlBkTlVGcE51dnpX/LmpwZw" alt="Coach's Technique" className="rounded-xl w-full h-[240px] object-cover" />
          <p className="text-center mt-2 text-black font-medium">Coach Smith’s Technique</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <SkipBack className="w-4 h-4" /> Previous Frame
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <Play className="w-4 h-4" /> Play/Pause
        </button>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <SkipForward className="w-4 h-4" /> Next Frame
        </button>
        <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md flex items-center gap-2 text-sm">
          <RefreshCcw className="w-4 h-4" /> Sync Playback
        </button>
      </div>


      {/* Key Differences */}
      <h2 className="text-black font-semibold mb-2">Key Differences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-red-50 p-4 rounded-lg text-black">
          <div className="flex items-center gap-2 mb-2">
            <Video className="w-5 h-5 text-red-500" />
            <p className="font-semibold">Elbow Angle</p>
          </div>
          <p className="text-sm">Your angle: 125°</p>
          <p className="text-sm">Coach angle: 135°</p>
          <p className="text-sm">Difference: -10°</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-black">
          <div className="flex items-center gap-2 mb-2">
            <RotateCcw className="w-5 h-5 text-red-500" />
            <p className="font-semibold">Hip Rotation</p>
          </div>
          <p className="text-sm">Your rotation: 65°</p>
          <p className="text-sm">Coach rotation: 85°</p>
          <p className="text-sm">Difference: -20°</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-black">
          <div className="flex items-center gap-2 mb-2">
            <ActivitySquare className="w-5 h-5 text-red-500" />
            <p className="font-semibold">Bat Path</p>
          </div>
          <p className="text-sm">Your path: Low to high</p>
          <p className="text-sm">Coach path: Straight through</p>
          <p className="text-sm">Adjustment needed</p>
        </div>
      </div>

      {/* Coach Feedback */}
      <div className="mb-10">
        <h3 className="text-black font-semibold mb-2">Coach Feedback</h3>
        <div className="bg-gray-50 p-4 rounded-md h-44 text-sm text-gray-800">
          <p><span className="font-medium">Coach Smith’s Analysis:</span> The player’s elbow angle is too closed during the backswing, causing the bat to come through at a steeper angle. Work on maintaining a more open elbow position and focus on hip rotation to generate more power through the shot.</p>
        </div>
      </div>

      {/* Improvement Plan */}
      <div className="mb-10">
        <h3 className="text-black font-semibold mb-4">Improvement Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <DumbbellIcon className="w-5 h-5 text-red-500" />
            <div>
              <p className="font-medium text-black">Elbow Position Drill</p>
              <p className="text-sm text-gray-500">10 minutes daily practice</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-red-500" />
            <div>
              <p className="font-medium text-black">Hip Rotation Exercise</p>
              <p className="text-sm text-gray-500">3 sets of 15 reps</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FileDown className="w-4 h-4" /> Save Comparison
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <CalendarClock className="w-4 h-4" /> Schedule Follow-up
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FileDown className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
