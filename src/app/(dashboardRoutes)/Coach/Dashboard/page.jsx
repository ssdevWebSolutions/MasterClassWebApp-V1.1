import React from 'react';

const Dashboard = () => {
  return (
    <>
    <h1 style={{ marginBottom: '20px',padding:'50px' }}>Dashboard Overview</h1>

<div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>

  {/* Top Cards */}
  <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
    {[
      { title: 'Bookings', subtitle: '3 sessions booked', label: 'Today' },
      { title: 'Player Progress', subtitle: '5 players improved', label: 'Progress' },
      { title: 'Notifications', subtitle: '2 new messages', label: 'Alerts' },
    ].map((card, index) => (
      <div key={index} style={{
        backgroundColor: '#fff6f6',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        height: '150px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>{card.label}</div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{card.title}</div>
        <div style={{ fontSize: '14px', color: '#999' }}>{card.subtitle}</div>
      </div>
    ))}
  </div>

  {/* Quick Actions */}
  <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>Quick Actions</div>
  <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
    {[
      { title: 'Session Report', subtitle: 'Create or edit session notes', button: 'Add Report' },
      { title: 'Upload Media', subtitle: 'Add videos to player profiles', button: 'Upload' },
      { title: 'Review Tool', subtitle: 'Analyze player performance', button: 'Review' },
    ].map((action, index) => (
      <div key={index} style={{
        backgroundColor: '#fff6f6',
        borderRadius: '10px',
        padding: '20px',
        width: '200px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{action.title}</div>
        <div style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>{action.subtitle}</div>
        <button style={{
          backgroundColor: '#ff4d4f',
          color: '#fff',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>{action.button}</button>
      </div>
    ))}
  </div>

  {/* Player Progress Tracker */}
  <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>Player Progress Tracker</div>
  <div style={{ display: 'flex', alignItems: 'end', gap: '10px', height: '150px' }}>
    {[
      'John', 'Amit', 'Sara', 'Liam', 'Maya', 'Ravi', 'Zara', 'Noah', 'Ava', 'Leo', 'Sana', 'Omar'
    ].map((name, index) => {
      const height = 80 + Math.random() * 40; // Random bar height for demo
      return (
        <div key={index} style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#ff4d4f',
            width: '20px',
            height: `${height}px`,
            borderRadius: '4px',
            margin: '0 auto'
          }}></div>
          <div style={{ marginTop: '5px', fontSize: '12px' }}>{name}</div>
        </div>
      );
    })}
  </div>
</div>
    </>
    
  );
};

export default Dashboard;
