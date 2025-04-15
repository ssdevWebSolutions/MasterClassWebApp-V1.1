const WorkoutDetails = () => {
    const workouts = [
      { name: "Bench Press", sets: "4 x 10" },
      { name: "Shoulder Press", sets: "4 x 12" },
      { name: "Deadlift", sets: "3 x 8" },
      { name: "Pull Ups", sets: "3 x 15" },
    ];
  
    return (
      <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Workout</h2>
        <ul className="space-y-4">
          {workouts.map((workout, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-800">{workout.name}</span>
              <span className="text-gray-500">{workout.sets}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkoutDetails;
  