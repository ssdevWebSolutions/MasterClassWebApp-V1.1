"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card } from "@/app/Components/ui/card";
import { Button } from "@/app/Components/ui/button";

import "@/app/assets/css/logFood.css";
import { Search } from "lucide-react";

const recentFoods = [
  { id: 1, name: "Oatmeal with Banana", calories: 220, protein: 8, carbs: 40, fat: 4 },
  { id: 2, name: "Protein Smoothie", calories: 180, protein: 20, carbs: 15, fat: 5 },
  { id: 3, name: "Scrambled Eggs", calories: 140, protein: 12, carbs: 2, fat: 10 },
  { id: 4, name: "Whole Grain Toast", calories: 80, protein: 3, carbs: 15, fat: 1 },
];

const RecentTab = ({ foods, onSelectFood, selectedFoodIds }) => (
  <div className="recent-tab">
    {foods.map((food) => (
      <Card key={food.id} className="food-card">
        <div>
          <div className="food-info">{food.name}</div>
          <div className="food-details">
            {food.calories} cal • {food.protein}g protein • {food.carbs}g carbs • {food.fat}g fat
          </div>
        </div>
        <Button onClick={() => onSelectFood(food)} className="addBtn">+</Button>
      </Card>
    ))}
  </div>
);

const SelectedFoodsSummary = ({ selectedFoods }) => {
  const totals = selectedFoods.reduce(
    (acc, food) => {
      acc.calories += food.calories;
      acc.protein += food.protein;
      acc.carbs += food.carbs;
      acc.fat += food.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <Card className="meal-summary">
      <div className="meal-summary-title">Meal Summary</div>
      <div className="meal-summary-details">
        Total: {totals.calories} calories • {totals.protein}g protein • {totals.carbs}g carbs • {totals.fat}g fat
      </div>
    </Card>
  );
};

export default function FoodLogger() {
  const [selectedFoodIds, setSelectedFoodIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const selectedFoods = recentFoods.filter((food) => selectedFoodIds.includes(food.id));

  const toggleFoodSelection = (food) => {
    setSelectedFoodIds((prev) =>
      prev.includes(food.id) ? prev.filter((id) => id !== food.id) : [...prev, food.id]
    );
  };

  const filteredFoods = recentFoods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-logger">
      <h1>Log Food for Breakfast</h1>


      <div className="search-bar-wrapper">
        <label><h2><b>Search Foods</b></h2></label>
        <span className="search-icon"><Search /></span>
        <input
          type="text"
          placeholder="Type to search for foods..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>



      <Tabs defaultValue="recent">
        <TabsList className="tabs-list">
          <TabsTrigger value="recent" className="tabs-trigger">Recent</TabsTrigger>
          <TabsTrigger value="favorites" className="tabs-trigger">Favorites</TabsTrigger>
          <TabsTrigger value="database" className="tabs-trigger">Database</TabsTrigger>
          <TabsTrigger value="myfoods" className="tabs-trigger">My Foods</TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
          <RecentTab
            foods={filteredFoods}
            onSelectFood={toggleFoodSelection}
            selectedFoodIds={selectedFoodIds}
          />
          
          {selectedFoods.length > 0 && (
            
            <div className="selected-section">
              <h2><b>Selected Food</b></h2>
              <div className="selected-foods-list">
                {selectedFoods.map((food) => (
                  <Card key={food.id} className="food-card selected">
                    <div>
                      <div className="food-info">{food.name}</div>
                      <div className="food-details">
                        {food.calories} cal • {food.protein}g protein • {food.carbs}g carbs • {food.fat}g fat
                      </div>
                    </div>
                    <Button onClick={() => toggleFoodSelection(food)} className="addBtn">-</Button>
                  </Card>
                ))}
              </div>

              <SelectedFoodsSummary selectedFoods={selectedFoods} />
            </div>
          )}
        </TabsContent>


        <TabsContent value="favorites">
          <p>Favorites tab content goes here...</p>
        </TabsContent>

        <TabsContent value="database">
          <p>Database tab content goes here...</p>
        </TabsContent>

        <TabsContent value="myfoods">
          <p>My Foods tab content goes here...</p>
        </TabsContent>
      </Tabs>
      <div className="custom-food-form">
        <h2><b>Custom Food</b></h2>


        <div className="form-group">
          <label htmlFor="foodName">Food Name</label>
          <input type="text" id="foodName" placeholder="e.g., Greek Yogurt" />
        </div>



        <div className="form-row">
          <div className="form-group">
            <label htmlFor="calories">Calories</label>
            <input type="number" id="calories" placeholder="e.g., 150" />
          </div>

          <div className="form-group">
            <label htmlFor="protein">Protein (g)</label>
            <input type="number" id="protein" placeholder="e.g., 10" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="carbs">Carbs (g)</label>
            <input type="number" id="carbs" placeholder="e.g., 12" />
          </div>

          <div className="form-group">
            <label htmlFor="fat">Fat (g)</label>
            <input type="number" id="fat" placeholder="e.g., 5" />
          </div>
        </div>



        <Button className="submit-button">Add Food</Button>
      </div>


    </div>
  );
}
