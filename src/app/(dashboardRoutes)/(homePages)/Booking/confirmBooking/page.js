"use client"
import React, { useEffect, useState } from 'react';
import "../../../../assets/css/booking.css"
import { CalendarDays, CreditCard, DollarSign, MapPin, UserRound, Users } from 'lucide-react';

const SESSION_FEE = 75;

const BookingConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedSessions = sessionStorage.getItem('selectedSessions');
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, []);

  const totalAmount = sessions.length * SESSION_FEE;

  // Helper function to split session text into date and time
  const parseSession = (sessionString) => {
    const [date, time] = sessionString.split(' - ');
    return { date, time };
  };

  return (
    <div className="booking-container">
      <nav className="breadcrumb">
        Dashboard &gt; Bookings &gt; <span className="breadcrumb-current">Confirmation</span>
      </nav>

      <div className="session-details-box">
        <h2 className="session-heading">Your Selected Sessions</h2>

        {sessions.length > 0 ? (
          <div className="session-cards">
            {sessions.map((session, index) => {
              const { date, time } = parseSession(session);
              return (
                <div key={index} className="session-card">
                  <div className="session-card-header">
                    <CalendarDays size={20} className="session-icon" />
                    <div>
                      <h4 className="session-date">{date}</h4>
                      <p className="session-time">{time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No sessions selected.</p>
        )}
      </div>

      <div className="section">
        <h3 className="section-heading">Session Information</h3>
        <ul className="info-list">
          <li>
            <span className="icon"><UserRound/></span>
            <div>
              <p className="label">Coach</p>
              <p className="value">Michael Clarke (4.9★)</p>
            </div>
          </li>
          <li>
            <span className="icon"><MapPin/></span>
            <div>
              <p className="label">Location</p>
              <p className="value">Sydney Cricket Ground, Net Practice Area 3</p>
            </div>
          </li>
          <li>
            <span className="icon"><Users/></span>
            <div>
              <p className="label">Session Type</p>
              <p className="value">Group Session (Max 6 players)</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-heading">Payment Details</h3>
        <ul className="info-list">
          <li>
            <span className="icon"><DollarSign/></span>
            <div>
              <p className="label">Total Fee</p>
              <p className="value">${totalAmount.toFixed(2)}</p>
            </div>
          </li>
          <li>
            <span className="icon"><CreditCard/></span>
            <div>
              <p className="label">Payment Method</p>
              <select
                className="payment-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select payment method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-heading">Cancellation Policy</h3>
        <p className="policy-text">
          Free cancellation up to 24 hours before the session. Late cancellations will incur a 50% fee.
          No-shows will be charged the full amount.
        </p>
      </div>

      <div className="button-group">
        <button className="btn secondary">Back to Sessions</button>
        <button className="btn primary">Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
