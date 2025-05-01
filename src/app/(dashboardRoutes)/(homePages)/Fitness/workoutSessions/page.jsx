import { Timer, Dumbbell, Flame, CircleCheck, Play, RotateCcw, Plus, Pencil, Clock, DumbbellIcon, PlaneIcon, CirclePlay } from 'lucide-react';

export default function WorkoutSession() {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6 text-gray-800 sm:p-2  md:p-4 lg:p-8">
      <div className="text-sm text-gray-500">Dashboard &gt; Fitness Plans &gt; Workout Session</div>
      <h1 className="text-2xl font-bold mt-2">Upper Body Strength</h1>
      <p className="text-gray-600 mb-6">Focus on shoulders, chest and triceps with progressive overload</p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card icon={<Timer />} title="Workout Timer" subtitle="00:00:00">
          <div className="flex gap-2">
            <Button label="Start Timer" variant="primary" />
            <Button label="Reset" variant="outline" />
          </div>
        </Card>

        <Card icon={<CircleCheck />} title="Workout Progress" subtitle="0 of 4 exercises completed">
          <Button label="Mark Complete" variant="primary" />
        </Card>

        <Card icon={<Clock />} title="Estimated Duration" subtitle="45 minutes | 320 calories" />
      </div>

      {/* Current Exercise */}
      <div className="mb-6">
        <img
          src="https://imgs.search.brave.com/hbKED3p_9dVSexuP8c4p4F3jK9cSveFZFzHnXQOqTzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzc4LzczLzgz/LzM2MF9GXzM3ODcz/ODMwOV9xR2dlVGpU/UjBvakdyaEh1UzRh/NlZHRXBSOXR3UERB/NS5qcGc"
          alt="Workout"
          className="w-full rounded-lg object-cover h-[300px] md:h-[400px] mb-4"
        />
        <h2 className="text-xl font-semibold">Bench Press</h2>
        <p className="text-gray-600">4 sets x 10 reps | Rest 90 seconds between sets</p>

        <h3 className="mt-4 font-medium">Instructions</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Lie on the bench with your feet flat on the ground</li>
          <li>Grip the bar with hands slightly wider than shoulder-width</li>
          <li>Lower the bar to your chest, keeping elbows at a 45–degree angle</li>
          <li>Push the bar back up to starting position</li>
          <li>Exhale on the push, inhale on the descent</li>
        </ol>

        <div className="flex gap-2 mt-4">
          <Button label="Watch Video Demo" variant="primary" />
          <Button label="Mark Set Complete" variant="outline" />
        </div>
      </div>

      {/* Workout Plan */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Workout Plan</h3>
        <ul className="space-y-3">
  <WorkoutStep title="Bench Press " sets={4} reps={10}  status={<CirclePlay/>} />
  <WorkoutStep title="Shoulder Press" sets={3} reps={12} status={<CirclePlay/>}/>
  <WorkoutStep title="Tricep Extensions" sets={3} reps={15} status={<CirclePlay/>} />
  <WorkoutStep title="Pull-ups" sets={3} reps={8} status={<CirclePlay/>} />
</ul>
        <div className="flex gap-2 mt-4">
          <Button label="End Workout" variant="outline" />
          <Button label="Log Notes" variant="primary" />
        </div>
      </div>

      {/* Performance Tracking */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card icon={<Timer />} title="Previous Weight" subtitle="135 lbs on July 10" />
        <Card icon={<Dumbbell />} title="Suggested Weight" subtitle="140 lbs (+5 lbs)" />
        <Card icon={<Pencil />} title="Record Weight" subtitle="Enter today's weight">
          <Button label="Log Weight" variant="primary" />
        </Card>
      </div>
    </div>
  );
}

function Card({ icon, title, subtitle, children }) {
  return (
    <div className="p-4 bg-red-50 rounded-xl shadow-sm border border-red-100">
      <div className="flex items-center gap-2 mb-2 text-red-600">{icon}</div>
      <div className="flex items-center gap-2 mb-2 text-black-300 font-bold">{title}</div>
      <p className="text-sm text-gray-700 mb-2">{subtitle}</p>
      {children}
    </div>
  );
}

function Button({ label, variant = 'primary' }) {
  const base = 'text-sm font-medium px-4 py-1.5 rounded-lg';
  const styles = variant === 'primary'
    ? 'bg-red-500 text-white hover:bg-red-600'
    : 'border border-red-300 text-red-500 hover:bg-red-100';
  return <button className={`${base} ${styles}`}>{label}</button>;
}

function WorkoutStep({ title, sets, reps, status }) {
    const statusStyles = {
      'Current': 'bg-red-100 text-red-600',
      'Up Next': 'bg-yellow-100 text-yellow-600',
      'Pending': 'bg-gray-100 text-gray-500',
    };
  
    return (
      <li className="flex justify-between items-center bg-white  border-gray-200 rounded-lg p-4  hover:shadow-md transition">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 text-red-500 p-2 rounded-md">
            <DumbbellIcon size={18} />
          </div>
          <div>
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500">{sets} sets × {reps} reps</p>
          </div>
        </div>
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </li>
    );
  }