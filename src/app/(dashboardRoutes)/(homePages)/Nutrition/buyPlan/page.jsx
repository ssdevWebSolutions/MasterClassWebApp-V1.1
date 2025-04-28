import React from "react";
import "../../../../assets/css/muscleBuildingPlan.css";

const MuscleBuildingPlan = () => {
  return (
    <div className="muscle-plan">
      <nav className="breadcrumb">
        <span>Dashboard &gt; Nutrition &gt; Purchase Plan</span>
      </nav>

      <header className="header">
        <h1>Muscle Building Plan</h1>
        <img
          src="/recovery-meal.jpg"
          alt="Muscle Building Meal"
          className="header-img"
        />
      </header>

      <section className="details">
        <h2>Plan Details</h2>
        <p>
          This comprehensive 28-day meal plan is specifically designed for cricket players looking to
          build lean muscle mass while maintaining optimal energy levels for training and matches.
          The plan includes high-protein meals, strategic carbohydrate timing, and nutrient-dense foods
          to support muscle recovery and growth.
        </p>
      </section>

      <section className="included">
        <h2>What's Included</h2>
        <ul>
          <li><strong>28-Day Meal Schedule</strong> - Complete breakfast, lunch, dinner and snacks</li>
          <li><strong>Shopping Lists</strong> - Weekly grocery lists for easy preparation</li>
          <li><strong>Nutrition Breakdown</strong> - Detailed macros and calorie information</li>
          <li><strong>Meal Prep Guides</strong> - Time-saving preparation instructions</li>
          <li><strong>Performance Timing Guide</strong> - When to eat before and after training</li>
        </ul>
      </section>

      <section className="pricing-options">
        <h2>Pricing Options</h2>
        <div className="pricing-cards">
          <div className="card">
            <h3>Monthly</h3>
            <p className="price">£29.99 per month</p>
            <p>Access to this meal plan only</p>
            <button>Select</button>
          </div>
          <div className="card ">
            <h3>Annual</h3>
            <p className="price">£199.99 per year</p>
            <p>Access to all meal plans<br />33% savings</p>
            <button>Select</button>
          </div>
          <div className="card">
            <h3>One-time</h3>
            <p className="price">£79.99 one-time</p>
            <p>Permanent access to this plan</p>
            <button>Select</button>
          </div>
        </div>
      </section>

      <section className="payment">
        <h2>Payment Details</h2>
        <form>
          <label>Card Number:</label>
          <input type="text" placeholder="1234 5678 9012 3456" />

          <div className="flex-row">
            <div>
              <label>Expiry Date:</label><br></br>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <label>CVC:</label><br></br>
              <input type="text" placeholder="123" />
            </div>
          </div>

          <label>Name on Card:</label>
          <input type="text" placeholder="John Smith" />
        </form>
      </section>

      <section className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <span>Muscle Building Plan (Monthly)</span>
          <span>£29.99</span>
        </div>
        <div className="summary-item">
          <span>VAT (20%)</span>
          <span>£6.00</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>£35.99</span>
        </div>
        <button className="complete">Complete Purchase</button>
        <p className="terms">
          By completing this purchase, you agree to our Terms of Service and Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default MuscleBuildingPlan;
