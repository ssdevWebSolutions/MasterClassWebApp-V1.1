import { Calendar, Eye, Download, Dumbbell, PlayCircle, Activity, FileText, PlusCircle } from 'lucide-react';

export default function MyTrainingPlans() {
  return (
    <div className="max-w-4xl mx-auto  font-sans">
      
     
      {/* Active Plans */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { title: 'Strength Builder', status: 'CURRENT', desc: '8-week progressive program - Week 4' },
          { title: 'Cricket Conditioning', status: 'ACTIVE', desc: '12-week specialized program - Week 2' },
          { title: 'Recovery Focus', status: 'ACTIVE', desc: '4-week mobility program - Week 1' }
        ].map((plan, i) => (
          <div key={i} className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-sm">
              <Dumbbell size={16} className="text-red-500" />
              <span className="text-red-600 font-semibold">{plan.status}</span>
            </div>
            <h2 className="font-semibold text-lg mt-2">{plan.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
            <div className="flex gap-2">
              <button className="bg-red-500 text-white px-4 py-1.5 text-sm rounded-md">Continue</button>
              <button className="border border-gray-300 text-sm px-4 py-1.5 rounded-md">Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Plan Details */}
      <h2 className="font-semibold text-xl mb-4">Plan Details: Strength Builder</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-red-500" />
            <h3 className="text-sm font-medium">Program Stats</h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">32 workouts · 8 weeks · 4 days/week</p>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Activity size={16} className="text-red-500" />
            <h3 className="text-sm font-medium">Progress</h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">16 of 32 workouts completed (50%)</p>
          <button className="mt-2 bg-red-500 text-white px-3 py-1 text-sm rounded-md">View Progress</button>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-red-500" />
            <h3 className="text-sm font-medium">Next Session</h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">Lower Body Power – Tomorrow 7:00 AM</p>
          <button className="mt-2 bg-red-500 text-white px-3 py-1 text-sm rounded-md">Preview</button>
        </div>
      </div>

      {/* Weekly Schedule */}
      <h2 className="font-semibold text-xl mb-4">Weekly Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-10">
          <thead className="text-gray-500 text-left">
            <tr>
              <th className="py-2">Day</th>
              <th>Workout</th>
              <th>Duration</th>
              <th>Intensity</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Monday', 'Upper Body Strength', '60 min', 'High Intensity'],
              ['Tuesday', 'Rest Day', 'Recovery', 'Stretching Optional'],
              ['Wednesday', 'Lower Body Power', '55 min', 'High Intensity'],
              ['Thursday', 'Core & Mobility', '45 min', 'Medium Intensity'],
              ['Friday', 'Full Body Circuit', '50 min', 'High Intensity'],
              ['Saturday', 'Active Recovery', '30 min', 'Low Intensity'],
              ['Sunday', 'Rest Day', 'Recovery', 'Stretching Optional']
            ].map(([day, workout, duration, intensity], i) => (
              <tr key={i} className="border-b border-gray-400/50 text-gray-700 ">
                <td className="py-2 flex items-center gap-1"><Calendar size={16} /> {day}</td>
                <td>{workout}</td>
                <td>{duration}</td>
                <td>{intensity}</td>
                <td className="flex gap-3 justify-center py-2">
                  <Eye size={16} className="cursor-pointer" />
                  <Download size={16} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Available Plans */}
      <h2 className="font-semibold text-xl mb-4">Available Plans</h2>
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          { title: 'Power Hitting', tag: 'PREMIUM' },
          { title: 'Fast Bowling', tag: 'PREMIUM' },
          { title: 'Fielding Agility', tag: 'FREE' },
          { title: 'Injury Prevention', tag: 'FREE' }
        ].map((plan, i) => (
          <div key={i} className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-sm">
              <FileText size={16} className="text-red-500" />
              <span className="text-red-600 font-semibold">{plan.tag}</span>
            </div>
            <h3 className="text-lg font-semibold mt-2">{plan.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {plan.title === 'Power Hitting' ? '6-week specialized batting program'
                : plan.title === 'Fast Bowling' ? '8-week bowling speed program'
                : plan.title === 'Fielding Agility' ? '4-week agility and reaction program'
                : '6-week prehab and mobility program'}
            </p>
            <button className="mt-3 bg-red-500 text-white px-4 py-1.5 text-sm rounded-md">Start Plan</button>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-sm rounded-md">
          <PlusCircle size={16} /> Create Custom Plan
        </button>
        <button className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 text-sm rounded-md">
          <Download size={16} /> Import Coach's Plan
        </button>
      </div>
    </div>
  );
}