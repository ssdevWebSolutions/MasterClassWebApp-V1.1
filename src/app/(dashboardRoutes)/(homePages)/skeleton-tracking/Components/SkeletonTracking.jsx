import React from 'react';
import { FileUp, Clock, FileText, Video, Ruler, MoveRight, PencilLine, Calendar } from 'lucide-react';

export default function SkeletonTrackingAnalysis() {
  return (
    <div className="max-w-5xl mx-auto  space-y-6 text-gray-800 ">

    
      {/* Top Cards */}
    
      {/* Tabs */}
      
      {/* Video Viewer and Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-xl">
          <Video className="text-red-500 mb-2" />
          <p className="text-sm font-semibold">Video Viewer</p>
          <p className="text-sm text-gray-500">Frame-by-frame analysis with skeleton overlay</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <Ruler className="text-red-500 mb-2" />
          <h3 className="text-xs font-semibold text-gray-500">MEASUREMENT</h3>
          <p className="text-sm font-semibold">Analysis Tools</p>
          <p className="text-sm text-gray-500">Joint angles, movement paths, and velocity tracking</p>
        </div>
      </div>

      {/* Video Analysis Section */}
      <div className="mb-6">
  <h2 className="text-lg font-semibold mb-4">Video Analysis</h2>
  <img
    src="https://imgs.search.brave.com/alFA6Ak_Qas6g-OazrWIA-YHIumOE4pquNIKlpvhlm4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQ0/MDgwNjkyL3ZlY3Rv/ci9jb21wbGV4LXVu/aXRlZC1zdGF0ZXMt/b2YtYW1lcmljYS1w/b2xpdGljYWwtbWFw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1Fd0d3TTdaYVdq/bUFvcXM0VEU2QWsy/NEJEcWZUWV9XY1Ft/TlowbHpaTldZPQ"
    alt="Video analysis dummy"
    className="w-full max-h-[420px] object-cover rounded-xl"
  />
  <div className="flex flex-wrap gap-2 mt-3 text-sm">
    <button className="border px-3 py-1 rounded-md">Previous Frame</button>
    <button className="bg-red-500 text-white px-3 py-1 rounded-md">Play/Pause</button>
    <button className="border px-3 py-1 rounded-md">Next Frame</button>
    <button className="border px-3 py-1 rounded-md">Toggle Skeleton</button>
  </div>
</div>

      {/* Measurements & Annotations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-xl">
          <Ruler className="text-red-500 mb-2" />
          <p className="text-sm font-semibold">Joint Angles</p>
          <p className="text-sm text-gray-500">Elbow: 135°<br/>Knee: 120°<br/>Hip: 95°</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <MoveRight className="text-red-500 mb-2" />
          <p className="text-sm font-semibold">Movement Path</p>
          <p className="text-sm text-gray-500">Bat swing path analysis and trajectory tracking</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl">
          <PencilLine className="text-red-500 mb-2" />
          <p className="text-sm font-semibold">Annotations</p>
          <p className="text-sm text-gray-500">2 annotations added</p>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm mt-2">Add Annotation</button>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Comparison Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="https://imgs.search.brave.com/6VNbjR8g4u02gerFOxXTwG9p5cYpBJkptueH-btaKTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYW4tcGxheWlu/Zy1jcmlja2V0LXN0/YWRpdW1fMTA0ODk0/NC0xNDQ3MzUzOS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw"
              alt="Your technique"
              className="rounded-xl w-full object-cover h-60 mb-3"
            />
            <p className="text-center text-sm mt-1">Your Technique</p>
          </div>
          <div>
            <img
              src="https://imgs.search.brave.com/480Fx5se14Lh2_7VwwVCTCqR__JKapQVKeohvg2ZwoI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5tYXB0aWxlci5j/b20vaW1nLzNkX2My/ODAwMzE3NTkud2Vi/cA"
              alt="Professional reference"
              className="rounded-xl w-full object-cover h-60 mb-3"
            />
            <p className="text-center text-sm mt-1">Professional Reference</p>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Analysis Notes</h3>
        <p className="text-xs text-gray-500 mb-1">Coach Notes</p>
        <textarea
          className="w-full h-32 p-4 border border-gray-200 rounded-xl text-sm"
          placeholder="Add notes about the player's technique..."
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm">Save Analysis</button>
        <button className="border text-sm px-4 py-1 rounded-md">Share with Player</button>
        <button className="border text-sm px-4 py-1 rounded-md">Export Report</button>
      </div>
    </div>
  );
}
