// File: components/NutritionFitness.js

export default function NutritionFitness({ nutritionTips = [], fitnessGoals = [] }) {
    return (
      <div className="px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nutrition Tips */}
        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Nutrition Tips</h3>
          <ul className="space-y-3">
            {nutritionTips.map((tip, i) => (
              <li key={i} className="text-gray-700 flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Fitness Goals */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Fitness Goals</h3>
          <ul className="space-y-3">
            {fitnessGoals.map((goal, i) => (
              <li key={i} className="text-gray-700 flex items-start">
                <span className="text-blue-500 font-bold mr-2">✔</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  