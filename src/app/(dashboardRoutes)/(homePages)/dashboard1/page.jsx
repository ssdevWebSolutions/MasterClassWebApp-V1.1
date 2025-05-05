// pages/index.js
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <Head>
        <title>Baseball Training Dashboard</title>
        <meta name="description" content="Baseball training dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>Upcoming Sessions</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        overflowX: "none",
        marginBottom: '30px'
      }}>
        {/* Session Card 1 */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          minWidth: '250px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L6 12M6 12L12 18M6 12H18" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Today, 4:00 PM</h2>
          <p style={{
            color: '#6C7A89',
            marginBottom: '15px'
          }}>Batting Technique with Coach Mike</p>
          <button style={{
            backgroundColor: '#E74C3C',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>View Details</button>
        </div>

        {/* Session Card 2 */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          minWidth: '250px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L6 12M6 12L12 18M6 12H18" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Tomorrow, 10:00 AM</h2>
          <p style={{
            color: '#6C7A89',
            marginBottom: '15px'
          }}>Group Fielding Session with Coach Sarah</p>
          <button style={{
            backgroundColor: '#E74C3C',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>View Details</button>
        </div>

        {/* Session Card 3 (partially visible) */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          minWidth: '250px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L6 12M6 12L12 18M6 12H18" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Friday</h2>
          <p style={{
            color: '#6C7A89',
            marginBottom: '15px'
          }}>1-on-1</p>
          <button style={{
            backgroundColor: '#E74C3C',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>View</button>
        </div>
      </div>

      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>Quick Stats</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Stat Card 1 */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          flex: '1',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V6" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V6" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Last Session</h2>
          <p style={{
            color: '#6C7A89'
          }}>March 15, 2023</p>
        </div>

        {/* Stat Card 2 */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          flex: '1',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Sessions Completed</h2>
          <p style={{
            color: '#6C7A89'
          }}>42</p>
        </div>

        {/* Stat Card 3 */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          flex: '1',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Fitness Score</h2>
          <p style={{
            color: '#6C7A89'
          }}>85/100</p>
        </div>

        {/* Stat Card 4 - Nutrition */}
        <div style={{
          backgroundColor: '#FFF8F8',
          borderRadius: '12px',
          padding: '20px',
          flex: '1',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            color: '#E74C3C',
            marginBottom: '15px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8H19C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H6" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V8H15V5Z" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>Nutrition</h2>
          <p style={{
            color: '#6C7A89'
          }}>View Plan</p>
        </div>
      </div>

      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>Performance Trends</h1>

      {/* Chart */}
      <div style={{
        marginBottom: '30px',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <div style={{
          height: '300px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
          {/* Y-axis labels */}
          <div style={{
            position: 'absolute',
            left: '-30px',
            top: '0',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ color: '#777', fontSize: '14px' }}>100</div>
            <div style={{ color: '#777', fontSize: '14px' }}>75</div>
            <div style={{ color: '#777', fontSize: '14px' }}>50</div>
            <div style={{ color: '#777', fontSize: '14px' }}>25</div>
            <div style={{ color: '#777', fontSize: '14px' }}>0</div>
          </div>

          {/* Horizontal grid lines */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}></div>
            <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}></div>
            <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}></div>
            <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}></div>
            <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}></div>
          </div>

          {/* Bars */}
          <div style={{ 
            width: '18%', 
            height: '65%', 
            backgroundColor: '#000', 
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            zIndex: '1'
          }}></div>
          <div style={{ 
            width: '18%', 
            height: '72%', 
            backgroundColor: '#000', 
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            zIndex: '1'
          }}></div>
          <div style={{ 
            width: '18%', 
            height: '67%', 
            backgroundColor: '#000', 
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            zIndex: '1'
          }}></div>
          <div style={{ 
            width: '18%', 
            height: '75%', 
            backgroundColor: '#000', 
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            zIndex: '1'
          }}></div>
          <div style={{ 
            width: '18%', 
            height: '85%', 
            backgroundColor: '#000', 
            borderRadius: '4px 4px 0 0',
            position: 'relative',
            zIndex: '1'
          }}></div>
        </div>

        {/* X-axis labels */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px'
        }}>
          <div style={{ color: '#777', fontSize: '14px' }}>Jan</div>
          <div style={{ color: '#777', fontSize: '14px' }}>Feb</div>
          <div style={{ color: '#777', fontSize: '14px' }}>Mar</div>
          <div style={{ color: '#777', fontSize: '14px' }}>Apr</div>
          <div style={{ color: '#777', fontSize: '14px' }}>May</div>
        </div>
      </div>

    

     
      <div style={{ padding: '20px' }}>
  <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Quick Access</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
    {/* Bookings */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        📅
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Bookings</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>Schedule your next session</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Book Now</button>
    </div>

    {/* Reports */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        📊
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Reports</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>View your performance feedback</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>View Reports</button>
    </div>

    {/* Media */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        🎥
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Media</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>Access your training videos</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>View Media</button>
    </div>

    {/* Nutrition */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        🍴
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Nutrition</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>Track your diet plan</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>View Plan</button>
    </div>

    {/* Fitness */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        🏋️‍♂️
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Fitness</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>Access your workout routines</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>View Workouts</button>
    </div>

    {/* Store */}
    <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#ffe3e3', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        🛒
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Store</h3>
      <p style={{ color: '#6b7280', margin: '0 0 20px 0' }}>Shop cricket equipment</p>
      <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Shop Now</button>
    </div>
  </div>
</div>



    </div>
  );
}