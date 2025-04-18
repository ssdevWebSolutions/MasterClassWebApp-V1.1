"use client"
import React, { useState } from 'react';
import "../../../../assets/css/bookinglist.css"

const sessionsData = [
  { date: '2025-07-15T09:00', type: 'Group Batting Session', coach: 'Michael Clarke (4.9★)', spots: '8 spots left' },
  { date: '2025-07-16T14:00', type: '1-on-1 Bowling', coach: 'Shane Warne (5.0★)', spots: '1 spot left' },
  { date: '2025-07-18T10:00', type: 'Cricket Camp', coach: 'Ricky Ponting (4.8★)', spots: '12 spots left' },
  { date: '2025-07-20T16:00', type: 'Fielding Practice', coach: 'Jonty Rhodes (4.9★)', spots: '6 spots left' },
  { date: '2025-07-22T13:00', type: 'Wicket Keeping', coach: 'Adam Gilchrist (4.7★)', spots: '4 spots left' },
  { date: '2025-07-25T11:00', type: 'Group Batting Session', coach: 'Virat Kohli (5.0★)', spots: '2 spots left' },
];

const bookings = [
  { date: 'July 10, 10:00 AM', type: '1-on-1 Batting Session', coach: 'Brian Lara', status: 'Confirmed' },
  { date: 'July 12, 2:00 PM', type: 'Group Fielding Practice', coach: 'Jonty Rhodes', status: 'Confirmed' },
  { date: 'July 14, 9:00 AM', type: 'Cricket Camp – Day 1', coach: 'Ricky Ponting', status: 'Confirmed' },
];

const SessionBookings = () => {
  const [viewMode, setViewMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const sessionsPerPage = 3;

  const indexOfLastSession = currentPage * sessionsPerPage;
  const indexOfFirstSession = indexOfLastSession - sessionsPerPage;
  const currentSessions = sessionsData.slice(indexOfFirstSession, indexOfLastSession);
  const totalPages = Math.ceil(sessionsData.length / sessionsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(prev => prev - 1);

  const groupedByDate = sessionsData.reduce((acc, session) => {
    const dateKey = new Date(session.date).toDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(session);
    return acc;
  }, {});

  return (
    <div className="booking-wrapper">
      <nav className="breadcrumb">
        Dashboard &gt; Bookings &gt; <span className="breadcrumb-current">{viewMode === 'list' ? 'List View' : 'Calendar View'}</span>
      </nav>

      <h1 className="page-title">Session Bookings</h1>

      <div className="filters">
        <div className="filter-card">🔍 Filter Sessions<br /><span>Customize your session search</span></div>
        <div className="filter-card">🗂️ Session Type<br /><span>Select the type of training session</span></div>
        <div className="filter-card">🧑‍🏫 Coach Preference<br /><span>Choose your preferred coach</span></div>
      </div>

      <div className="tab-switch">
        <span className={`tab ${viewMode === 'calendar' ? 'active' : 'inactive'}`} onClick={() => setViewMode('calendar')}>Calendar View</span>
        <span className={`tab ${viewMode === 'list' ? 'active' : 'inactive'}`} onClick={() => setViewMode('list')}>List View</span>
      </div>

      {viewMode === 'list' ? (
        <>
          <div className="search-filter">
            <input className="search-input" placeholder="Search sessions..." />
            <div className="btn-group">
              <button className="btn sort">Sort</button>
              <button className="btn filter">Filter</button>
            </div>
          </div>

          <div className="table-wrapper">
            <h2 className="section-heading">Available Sessions</h2>
            <table className="sessions-table">
              <tbody>
                {currentSessions.map((session, i) => (
                  <tr key={i}>
                    <td>{new Date(session.date).toLocaleString()}</td>
                    <td>{session.type}</td>
                    <td>{session.coach}</td>
                    <td>{session.spots}</td>
                    <td>👁️</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 1} className="page-btn">Previous</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={nextPage} disabled={currentPage === totalPages} className="page-btn">Next</button>
            </div>
          </div>
        </>
      ) : (
        <div className="calendar-view">
          <h2 className="section-heading">Sessions Calendar</h2>
          {Object.entries(groupedByDate).map(([date, sessions], idx) => (
            <div key={idx} className="calendar-day">
              <h4 className="calendar-date">{date}</h4>
              <table className="sessions-table">
                <tbody>
                  {sessions.map((session, i) => (
                    <tr key={i}>
                      <td>{new Date(session.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                      <td>{session.type}</td>
                      <td>{session.coach}</td>
                      <td>{session.spots}</td>
                      <td>👁️</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      <div className="table-wrapper">
        <h2 className="section-heading">Your Bookings</h2>
        <div className="tabs">
          <span className="tab active">Upcoming</span>
          <span className="tab inactive">Past</span>
        </div>
        <table className="sessions-table">
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <td>{booking.date}</td>
                <td>{booking.type}</td>
                <td>{booking.coach}</td>
                <td>{booking.status}</td>
                <td>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionBookings;
