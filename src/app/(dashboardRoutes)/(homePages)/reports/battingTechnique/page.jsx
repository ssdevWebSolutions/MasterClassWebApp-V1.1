import Image from 'next/image';
import { Download, Share2, Star, Target, CheckCircle, AlertCircle, PlayCircle, PersonStanding, Timer, Dumbbell, Omega, CircleAlert } from 'lucide-react';

const report = {
  title: "Batting Technique Session",
  date: "June 15, 2023",
  coach: "Ricky Ponting",
  summary:
    "Your front foot technique has improved significantly. Your stance is more balanced and your timing on drives is excellent. Focus on maintaining your elbow position during off-side shots to increase power and control.",
  skillAssessment: [
    { title: "Technique", score: 4.7, note: "Excellent stance and balance. Good head position throughout the stroke.",icon:<PersonStanding className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" /> },
    { title: "Timing", score: 4.5, note: "Great timing on front foot drives. Room for improvement on back foot shots." , icon:<Timer className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />},
    { title: "Power", score: 4.2, note: "Good power generation. Work on follow-through to maximize impact." ,icon:<Dumbbell className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />},
    { title: "Shot Selection", score: 4.8, note: "Excellent decision making. Good awareness of field placement." , icon:<Omega className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />},
  ],
  strengths: [
    "Front Foot Technique – Your front foot movement is decisive and balanced",
    "Stance Balance – Excellent weight distribution and readiness position",
    "Drive Timing – Perfect timing on straight and cover drives",
  ],
  improvements: [
    "Elbow Position – Work on maintaining high elbow during off-side shots",
    "Back Foot Play – Practice more back foot shots against short-pitched deliveries",
  ],
  drills: [
    "High Elbow Drill",
    "Back Foot Defense",
    "Shadow Batting",
  ],

};

export default function BattingTechniqueReport() {

      
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      {/* Header */}
      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-400">Dashboard &gt;  Reports &gt;  Coaching Feedback &gt; Batting Technique </p>
        <h1 className="text-2xl md:text-3xl font-bold text-black">{report.title}</h1>
        <p className="text-sm text-gray-600">{report.date} • Coach: {report.coach}</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <Download size={16} /> Download PDF
          </button>
          <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* Session Overview */}
      <div className="bg-red-50 p-4 md:p-6 rounded-xl mb-8">
      <PersonStanding className="w-7 h-7 p-1 rounded-full border border-transparent bg-red-100" />
        <h2 className="font-semibold mb-2 text-black">Summary</h2>
        <p className="text-sm text-gray-600">{report.summary}</p>
      </div>

      {/* Skill Assessment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {report.skillAssessment.map((skill, i) => (
          <div key={i} className="bg-red-50 p-4 rounded-xl">
            <div className="flex-shrink-0">{skill.icon}</div>
            <h3 className="font-semibold text-black">{skill.title} <span className="text-red-500">{skill.score}/5</span></h3>
            <p className="text-sm text-gray-600 mt-1">{skill.note}</p>
          </div>
        ))}
      </div>

      {/* Strengths & Improvements */}
      <div className="mb-8">
  <h2 className="font-semibold text-black mb-2">Detailed Feedback</h2>

  <div className="mb-4">
    <h3 className="text-sm font-medium text-black mb-1">Strengths</h3>
    <ul className="list-none space-y-1">
      {report.strengths.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
          <CheckCircle className="w-8 h-8  p-1.5 rounded-md border  text-red-500 text-sm border-transparent bg-red-100" /> {item}
        </li>
      ))}
    </ul>
  </div>

  <div>
    <h3 className="text-sm font-medium text-black mb-1">Areas for Improvement</h3>
    <ul className="list-none space-y-1">
      {report.improvements.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
          <CircleAlert className="w-8 h-8  p-1 rounded-md border  text-red-500 text-sm border-transparent bg-red-100" /> {item}
          </li>
      ))}
    </ul>
  </div>
</div>


      {/* Video */}
      <div className="mb-8">
        <h2 className="font-semibold text-black mb-2">Video Analysis</h2>
        <div className="rounded-xl overflow-hidden">
          <Image src="/cricket-action.jpg" alt="Video analysis" width={800} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Comments */}
      <div className="mb-8">
        <h2 className="font-semibold text-black mb-2">Coach's Comments</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          John has shown remarkable improvement in his batting technique over the last few sessions. His front foot movement is more decisive, and his balance at the crease has improved significantly. His timing on drives is excellent, particularly on the off-side. However, there are still areas to work on. His elbow position during off-side shots needs attention to increase power and control. Additionally, his back foot play against short-pitched deliveries could be more assertive. I recommend focusing on these areas in the next few practice sessions, with particular emphasis on maintaining a high elbow position during off-side shots. Overall, John is making consistent progress and showing great potential.
        </p>
      </div>

      {/* Drills */}
      <div className="mb-8">
        <h2 className="font-semibold text-black mb-2">Recommended Drills</h2>
        <ul className="list-none space-y-1">
          {report.drills.map((drill, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <Target className="text-red-500 w-4 h-4 mt-1" /> {drill}
            </li>
          ))}
        </ul>
      </div>

      {/* Progress Tracking */}
      <div className="mb-8">
        <h2 className="font-semibold text-black mb-4">Progress Tracking</h2>
        <div className="w-full overflow-x-auto">
          <Image src="/progress-graph.png" alt="Progress Tracking" width={800} height={200} className="w-full h-auto" />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm">
          Book Follow-up Session
        </button>
        <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded-full text-sm">
          Back to Feedback List
        </button>
      </div>
    </div>
  );
}
