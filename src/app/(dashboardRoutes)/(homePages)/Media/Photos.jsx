import React from 'react';

const Photos = () => {
  return (
    <div className="media-section">
      <h2>Filters</h2>
      <div className="filters">
        <input type="date" className="date-filter" />
        <input type="text" placeholder="Search by coach or session" className="text-filter" />
        <button className="filter-button">Apply Filters</button>
      </div>
      <h2>Your Photos</h2>
      <div className="video-list">
        {[
          { title: 'Batting Drill', date: 'Mar 10, 2023', coach: 'Coach Mike', image: 'https://i.imgur.com/kq4WfNY.jpg' },
          { title: 'Bowling Action', date: 'Feb 28, 2023', coach: 'Coach James', image: 'https://i.imgur.com/YgVK0Lx.jpg' },
          { title: 'Fielding Practice', date: 'Feb 15, 2023', coach: 'Coach Sarah', image: 'https://i.imgur.com/yYYUOaT.jpg' },
          { title: 'Fitness Test', date: 'Jan 30, 2023', coach: 'Coach Mike', image: 'https://i.imgur.com/ljOfbtP.jpg' },
        ].map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.image} alt={video.title} />
            <div className="video-info">
              <p className="video-title">{video.title}</p>
              <p className="video-date">{video.date}</p>
              <p className="video-coach">{video.coach}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
