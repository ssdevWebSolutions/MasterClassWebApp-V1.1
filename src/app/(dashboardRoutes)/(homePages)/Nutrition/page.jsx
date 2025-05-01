"use client"
import React from 'react';
import '../../../assets/css/nutritionDashboard.css';
import WeeklyCalorieBarChart from '@/app/Components/NutritionDashboard/WeeklyCalorieBarChart';
import { useRouter } from 'next/navigation';

// Separated chart data (though we're not using it in this version)
const calorieData = [
  { day: 'Mon', calories: 1800 },
  { day: 'Tue', calories: 1750 },
  { day: 'Wed', calories: 2100 },
  { day: 'Thu', calories: 1850 },
  { day: 'Fri', calories: 1400 },
  { day: 'Sat', calories: 2300 },
  { day: 'Sun', calories: 1900 },
];

const NutritionDashboard = () => {

  const router=useRouter();
  const handleLogFoodRouting=(item)=>{
    // console.log(item);
    if(item=="Breakfast")
    {
      router.push("/Nutrition/logFood");
    }
  }

  const handlePlanRouting=(planbtn,plan)=>{
    console.log(planbtn,plan)
    if(planbtn==true && plan=="Muscle Building Plan" )
    {
      router.push("/Nutrition/muscleBuildingPlanPreview")
    }
    else if(planbtn==true && plan=="Recovery Nutrition" )
    {
      router.push("/Nutrition/recoveryNutritionPreview")
    }
    else if(planbtn=="Buy Plan" && plan=="Muscle Building Plan")
    {
      router.push()
    }
    else if(planbtn=="Buy Plan" && plan=="Recovery Nutrition")
    {
      router.push()
    }
    else if(planbtn=="View Plan")
    {
      router.push("/Nutrition/cricketPerformanceDiet");
    }
  }

  return (
    <div className="nutrition-dashboard">
      <h2 className="title">Nutrition Dashboard</h2>

      <section className="tracker-section">
        <h3>Daily Tracker</h3>
        <div className="tracker-grid">
          {[
            { title: 'Breakfast', cals: 320, protein: 15, carbs: 30, fat: 12 },
            { title: 'Lunch', cals: 520, protein: 25, carbs: 45, fat: 20 },
            { title: 'Dinner', cals: 480, protein: 30, carbs: 40, fat: 18 },
            { title: 'Snacks', cals: 250, protein: 8, carbs: 25, fat: 10 },
          ].map((item) => (
            <div className="tracker-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>
                {item.cals} calories • {item.protein}g protein • {item.carbs}g carbs • {item.fat}g fat
              </p>
              <button className="log-btn" onClick={()=>handleLogFoodRouting(item.title)}>Log Food</button>
            </div>
          ))}
        </div>
      </section>

      <section className="summary-section">
        <h3>Nutrition Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <h4>CALORIES</h4>
            <p>1,570</p>
            <span>Daily goal: 2,200</span>
          </div>
          <div className="summary-card">
            <h4>PROTEIN</h4>
            <p>78g</p>
            <span>Daily goal: 120g</span>
          </div>
          <div className="summary-card">
            <h4>CARBS</h4>
            <p>140g</p>
            <span>Daily goal: 220g</span>
          </div>
          <div className="summary-card">
            <h4>FAT</h4>
            <p>60g</p>
            <span>Daily goal: 73g</span>
          </div>
        </div>
      </section>

        <section>
        <h3>Weekly Calorie Trend</h3>
        <WeeklyCalorieBarChart/>
        </section>
      

      <section className="meal-plan-section">
        <h3>Meal Plans</h3>
        <div className="meal-grid">
          {[
            {
              title: 'Cricket Performance Diet',
              desc: 'Optimized for match days and training sessions',
              btn: 'View Plan',
            },
            {
              title: 'Muscle Building Plan',
              desc: 'High protein meals for strength development',
              btn: 'Buy Plan',
              locked: true,
            },
            {
              title: 'Recovery Nutrition',
              desc: 'Anti-inflammatory foods to speed recovery',
              btn: 'Buy Plan',
              locked: true,
            },
          ].map((plan) => (
            <div className="meal-card" key={plan.title}>
              <h4>{plan.title}</h4>
              <p>{plan.desc}</p>
              <div className="meal-buttons">
                <button className="btn primary" onClick={()=>handlePlanRouting(plan.btn,plan.title)}>{plan.btn}</button>
                {plan.locked && <button className="btn secondary" onClick={()=>handlePlanRouting(plan.locked,plan.title)}>Preview</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="notes-section">
        <h3>Dietary Notes</h3>
        <label>Personal Notes</label>
        <textarea placeholder="Add notes about your diet, allergies, or meal preferences here..."></textarea>
        <button className="save-btn">Save Notes</button>
      </section>
    </div>
  );
};

export default NutritionDashboard;
