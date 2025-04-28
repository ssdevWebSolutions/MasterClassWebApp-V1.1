import React from 'react';
import './MatchDay.css';

const MatchDay = () => {
    return (
        <div className="matchday-container">
            <h3 className="section-title">Match Day Nutrition</h3>

            {/* Breakfast */}
            <div className="meal-section">
                <h4>Breakfast (3–4 hours before match)</h4>
                <ul>
                    <li><strong>Oatmeal with Honey:</strong> 80g oats, 1 tbsp honey, 200ml milk, 1 banana</li>
                    <li><strong>Whole Grain Toast:</strong> 2 slices with 2 eggs and avocado</li>
                    <li><strong>Fresh Fruit Smoothie:</strong> Mixed berries, banana, yogurt, and honey</li>
                </ul>
            </div>

            {/* Pre-Match Snack */}
            <div className="meal-section">
                <h4>Pre-Match Snack (1–2 hours before)</h4>
                <ul>
                    <li><strong>Energy Bar:</strong> 1 sports bar with 30g carbs; 10g protein</li>
                    <li><strong>Banana:</strong> 1 medium banana with 1 tbsp peanut butter</li>
                </ul>
            </div>

            {/* During Match */}
            <div className="meal-section">
                <h4>During Match</h4>
                <ul>
                    <li><strong>Sports Drink:</strong> 500ml electrolyte drink per hour of play</li>
                    <li><strong>Energy Gels:</strong> 1 gel every 45–60 minutes during extended play</li>
                </ul>
            </div>

            {/* Post-Match */}
            <div className="meal-section">
                <h4>Post-Match Recovery</h4>
                <ul>
                    <li><strong>Recovery Shake:</strong> 25g protein, 50g carbs; 500ml milk</li>
                    <li><strong>Chicken & Rice Bowl:</strong> 150g chicken, 100g rice, mixed vegetables</li>
                </ul>
            </div>

            {/* Hydration Schedule */}
            <div className="meal-section">
                <h4>Hydration Schedule</h4>
                <table className="hydration-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Morning</td>
                            <td>500ml</td>
                            <td>Water with lemon</td>
                        </tr>
                        <tr>
                            <td>Pre-match (1hr)</td>
                            <td>300–500ml</td>
                            <td>Water</td>
                        </tr>
                        <tr>
                            <td>During match</td>
                            <td>150–200ml every 15min</td>
                            <td>Sports drink</td>
                        </tr>
                        <tr>
                            <td>Post-match</td>
                            <td>500–750ml</td>
                            <td>Recovery drink + water</td>
                        </tr>
                        <tr>
                            <td>Evening</td>
                            <td>500ml</td>
                            <td>Water</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Notes */}
            <div className="notes-section">
                <h4>Nutritionist Notes</h4>
                <p>
                    This plan is designed for a typical match day. Adjust portion sizes based on your body weight, match duration,
                    and weather conditions. For morning matches, consume the pre-match meal 2–3 hours before start time.
                    For afternoon matches, include a substantial lunch 3–4 hours before play.
                </p>
            </div>
            {/* Buttons */}
            <div className="button-group">
                <button className="btn-primary">Add to My Meal Plan</button>
                <button className="btn-outline">Download PDF</button>
                <button className="btn-outline">Schedule Consultation</button>
            </div>

        </div>
    );
};

export default MatchDay;
