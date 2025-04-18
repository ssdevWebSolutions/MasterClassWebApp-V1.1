import React from 'react';
import "../../../../assets/css/sessionDetails.css"
import { Droplets, Locate, LocateOff, MapPin, Shield, Shirt, Star, User } from 'lucide-react';

const SessionDetails = () => {
  const reviews = [
    {
      name: 'James Wilson',
      feedback: 'Great session! Coach Clarke provided excellent technical advice that immediately improved my batting.',
      stars: 5
    },
    {
      name: 'Sarah Thompson',
      feedback: 'The group size was perfect - enough attention from the coach while still learning from others.',
      stars: 4
    },
    {
      name: 'Raj Patel',
      feedback: "Worth every penny. Coach Clarke's insights on playing spin bowling were game-changing for me.",
      stars: 5
    }
  ];

  return (
    <div className="session-details-container">
      <h1 className="page-title">Group Batting Session</h1>
      <p>July 15, 9:00 AM – 11:00 AM</p>

      <img
        className="session-image"
        src="https://images.unsplash.com/photo-1625643915943-1f8e8b63c548"
        alt="Cricket Session"
      />

      <section className="info-section">
        <h2><b>Session Information</b></h2>
        <div className="info-cards">
          <div className="info-card"><User/><div><p><b>Coach</b></p><strong>Michael Clarke</strong></div></div>
          <div className="info-card"><Star/><div><p><b>Rating</b></p><strong>4.9★ (128 reviews)</strong></div></div>
          <div className="info-card"><MapPin/><div><p><b>Location</b></p><strong>Main Cricket Ground</strong></div></div>
        </div>
      </section>

      <section className="session-description">
        <h2><b>Session Description</b></h2>
        <p>This group batting session focuses on technique improvement and shot selection against different types of bowling. Coach Michael Clarke will provide personalized feedback while working with a small group of 6 players. Suitable for intermediate to advanced players looking to refine their batting skills.</p>
      </section>

      <section>
        <h2><b>What to Bring</b></h2>
        <ul className="bring-list">
          <li>🏏 Cricket Bat - Your personal bat is recommended</li>
          <li><Shield/><span>Protective Gear - Helmet, pads, gloves, and box</span></li>
          <li><Droplets/> <span>Water Bottle - Stay hydrated during the session</span></li>
          <li><Shirt/><span>Appropriate Clothing - Cricket whites or training attire</span></li>
        </ul>
      </section>

      <section className='session-details'>
        <h2><b>Session Details</b></h2>
        <ul className="session-list">
          <li><strong>Type:</strong> Group Session (6 players max)</li>
          <li><strong>Duration:</strong> 2 hours</li>
          <li><strong>Skill Level:</strong> Intermediate to Advanced</li>
          <li><strong>Price:</strong> $85.00</li>
          <li><strong>Spots Available:</strong> 3 remaining</li>
        </ul>
      </section>

      <section className="coach-profile">
        <h2><b>Coach Profile</b></h2>
        <div className="coach-box">
          <img
            className="coach-img"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="Coach Profile"
          />
          <div className="coach-desc">
            <h4>Michael Clarke</h4>
            <p>Former Australian Captain with over 15 years of professional cricket experience. Specializes in batting technique and mental preparation.</p>
            <button>View Full Profile</button>
          </div>
        </div>
      </section>

      <section>
        <h2><b>Reviews</b></h2>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.name}</strong></p>
              <p>{review.feedback}</p>
              <p>{'⭐'.repeat(review.stars)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="buttons">
        <button className="primary">Book This Session</button>
        <button className="secondary">Back to Sessions</button>
      </div>
    </div>
  );
};

export default SessionDetails;
