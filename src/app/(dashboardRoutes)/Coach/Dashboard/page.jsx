import React from 'react';
import { FaCalendarAlt, FaChartLine, FaBell, FaFileAlt, FaUpload, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        marginBottom: '10px',
        padding: '10px',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>Coach Dashboard Overview</h1>

      {/* Top Cards */}
      <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
        {[
          {
            icon: <FaCalendarAlt size={24} color="#ff6f61" />,
            title: 'Bookings',
            subtitle: '3 sessions booked',
            label: 'Today'
          },
          {
            icon: <FaChartLine size={24} color="#28a745" />,
            title: 'Player Progress',
            subtitle: '5 players improved',
            label: 'Progress'
          },
          {
            icon: <FaBell size={24} color="#ffc107" />,
            title: 'Notifications',
            subtitle: '2 new messages',
            label: 'Alerts'
          },
        ].map((card, index) => (
          <div key={index} style={{
            backgroundColor: '#fff6f6',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            height: '200px',
            position: 'relative',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            {/* Icon at top left */}
            <div style={{ 
              color: '#ff4d4f', 
              marginBottom: '10px',
              fontSize: '24px'
            }}>
              {card.icon}
            </div>
            {/* Label */}
            <div style={{ color: '#999', fontSize: '14px', marginBottom: '10px' }}>{card.label}</div>
            {/* Title */}
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
              {card.title}
            </div>
            {/* Subtitle */}
            <div style={{ fontSize: '14px', color: '#555' }}>
              {card.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '24px' }}>Quick Actions</div>
      <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
        {[
          {
            icon: <FaFileAlt size={24} color="#ff4d4f" />,
            title: 'Session Report',
            subtitle: 'Create or edit session notes',
            button: 'Add Report'
          },
          {
            icon: <FaUpload size={24} color="#ff4d4f" />,
            title: 'Upload Media',
            subtitle: 'Add videos to player profiles',
            button: 'Upload'
          },
          {
            icon: <FaSearch size={24} color="#ff4d4f" />,
            title: 'Review Tool',
            subtitle: 'Analyze player performance',
            button: 'Review'
          },
        ].map((action, index) => (
          <div key={index} style={{
            backgroundColor: '#fff6f6',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            height: '200px',
            position: 'relative',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            {/* Icon at top left */}
            <div style={{ 
              color: '#ff4d4f', 
              marginBottom: '10px',
              fontSize: '24px'
            }}>
              {action.icon}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
              {action.title}
            </div>
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>
              {action.subtitle}
            </div>
            <button style={{
              backgroundColor: '#ff4d4f',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '15px',
              left: '20px'
            }}>{action.button}</button>
          </div>
        ))}
      </div>

      {/* Player Progress Tracker */}
      <div style={{
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '24px',
      }}>Player Progress Tracker</div>

      <div style={{
        display: 'flex',
        alignItems: 'end',
        gap: '15px',
        height: '225px',
        width: '100%',
        marginBottom: '30px',
        padding: '20px',
        justifyContent: 'center'
      }}>
        {[
          'John', 'Amit', 'Sara', 'Liam', 'Maya', 'Ravi', 'Zara', 'Noah', 'Ava', 'Leo', 'Sana', 'Omar'
        ].map((name, index) => {
          const height = 100 + Math.random() * 60;
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
  );
};

export default Dashboard;