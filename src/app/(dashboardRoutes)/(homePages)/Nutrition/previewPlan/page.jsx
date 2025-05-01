"use client"
import React from "react";
import "../../../../assets/css/recoveryNutritionPlanPreview.css";
import { useRouter } from "next/navigation";

const KeyBenefits = () => {
  return (
    <section className="key-benefits">
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Reduced Inflammation:</strong> Anti-inflammatory foods to minimize post-exercise soreness.</li>
        <li><strong>Faster Recovery:</strong> Optimized protein intake for muscle repair and growth.</li>
        <li><strong>Improved Energy Levels:</strong> Strategic carbohydrate timing for glycogen replenishment.</li>
        <li><strong>Enhanced Hydration:</strong> Electrolyte-rich options to maintain fluid balance.</li>
      </ul>
    </section>
  );
};

const SampleMealDay = () => {
  const router=useRouter();
  return (
    <section className="meal-day">
      <h2>Sample Meal Day</h2>
      <div className="meal card">
        <h3>Breakfast</h3>
        <p>Greek yogurt with berries, honey and walnuts. Green tea with lemon.</p>
      </div>
      <div className="meal card">
        <h3>Post-Training Snack</h3>
        <p>Tart cherry juice smoothie with whey protein and banana.</p>
      </div>
      <div className="meal card">
        <h3>Lunch</h3>
        <p>Grilled salmon with quinoa, roasted sweet potatoes and steamed broccoli.</p>
      </div>
      <div className="meal card">
        <h3>Dinner</h3>
        <p>Turmeric chicken with brown rice, spinach salad and avocado.</p>
      </div>
    </section>
  );
};

const Pricing = () => {
  const router=useRouter();
  return (
    <section className="pricing ">
      <h2>Pricing</h2>
      <div className="price-box card">
        <p className="price">£49.99</p>
        <p>Full access to the Recovery Nutrition Plan</p>
        <div className="buttons">
          <button className="btn buy">Buy Now</button>
          <button className="btn back" onClick={()=>router.back()}>Back to Plans</button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const router=useRouter();
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial card">
        <strong>JAMES ANDERSON</strong>
        <em>County Cricket Player</em>
        <p>
          This plan helped me recover much faster between matches during tournament
          season. I noticed less muscle soreness and better energy levels
          throughout the competition.
        </p>
      </div>
      <div className="testimonial card">
        <strong>SARAH TAYLOR</strong>
        <em>Professional Cricket Coach</em>
        <p>
          As a coach, I've seen remarkable improvements in my players' recovery times
          since implementing this nutrition plan. Highly recommended for serious
          cricketers.
        </p>
      </div>
      <div className="buttons">
        <button className="btn buy">Buy Now</button>
        <button className="btn back" onClick={()=>router.back()}>Back to Plans</button>
      </div>
    </section>
  );
};

const RecoveryMealPlan = () => {
  return (
    <div className="recovery-meal-plan">
      <header className="header">
        <h1>Recovery Nutrition Plan Preview</h1>
        <img src="/recovery-meal.jpg" alt="Recovery Meal" className="header-img" />
      </header>

      <section className="overview">
        <h2>Plan Overview</h2>
        <p>
          The Recovery Nutrition Plan is designed to help cricket players recover faster after intense training sessions and matches. This plan focuses on anti-inflammatory foods, proper hydration, and nutrient timing to reduce muscle soreness, repair tissue damage, and replenish energy stores.
        </p>
      </section>

      <KeyBenefits />
      <SampleMealDay />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default RecoveryMealPlan;
