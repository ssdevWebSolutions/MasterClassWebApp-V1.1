import React from 'react';
import "../../../assets/css/dashboard1.css"

const Dashboard = () => {
  const performanceData = [
    { month: 'Jan', score: 65 },
    { month: 'Feb', score: 72 },
    { month: 'Mar', score: 68 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 82 },
    { month: 'Jun', score: 78 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Hi Samuel! Ready to master your next session?</h2>

      <section className="upcoming-sessions">
        <h3>Upcoming Sessions</h3>
        <div className="cards">
          <div className="card">
            <p><strong>Today, 4:00 PM</strong></p>
            <p>Batting Technique with Coach Mike</p>
            <button className='btn'>View Details</button>
          </div>
          <div className="card">
            <p><strong>Tomorrow, 10:00 AM</strong></p>
            <p>Group Fielding Session with Coach Sarah</p>
            <button  className='btn'>View Details</button>
          </div>
          <div className="card">
            <p><strong>Friday, 2:30 PM</strong></p>
            <p>1-on-1 Bowling with Coach James</p>
            <button className='btn'>View Details</button>
          </div>
        </div>
      </section>

      <section className="quick-stats">
        <h3>Quick Stats</h3>
        <div className="cards">
          <div className="card">
            <p>Last Session</p>
            <strong>March 15, 2023</strong>
          </div>
          <div className="card">
            <p>Sessions Completed</p>
            <strong>42</strong>
          </div>
          <div className="card">
            <p>Fitness Score</p>
            <strong>85/100</strong>
          </div>
          <div className="card">
            <p>Nutrition Score</p>
            <strong>78/100</strong>
          </div>
        </div>
      </section>

      <section className="performance-trends">
        <h3>Performance Trends</h3>
        <div className="bar-chart">
          {performanceData.map((data) => (
            <div key={data.month} className="bar-container">
              <div className="bar" style={{ height: `${data.score}px` }}></div>
              <span>{data.month}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-access">
        <h3>Quick Access</h3>
        <div className="cards">
          <div className="card">
            <p>Bookings</p>
            <button className='btn'>Book Now</button>
          </div>
          <div className="card">
            <p>Reports</p>
            <button className='btn'>View Reports</button>
          </div>
          <div className="card">
            <p>Media</p>
            <button className='btn'>View Media</button>
          </div>
          <div className="card">
            <p>Nutrition</p>
            <button className='btn'>View Plan</button>
          </div>
          <div className="card">
            <p>Fitness</p>
            <button className='btn'>View Workouts</button>
          </div>
          <div className="card">
            <p>Store</p>
            <button className='btn'>Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
