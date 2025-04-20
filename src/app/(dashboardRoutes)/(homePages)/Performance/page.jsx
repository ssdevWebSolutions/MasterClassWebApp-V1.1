import React from 'react';
import '../../../assets/css/addMatchForm.css';

const AddMatchForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Add Match Details</h2>

      <div className="section">
        <h3>Match Information</h3>
        <div className="row">
          <div className="input-group">
            <label>Date:</label>
            <input type="date" placeholder="DD/MM/YYYY" className="input" />
          </div>
          <div className="input-group">
            <label>Opponent Team:</label>
            <input type="text" placeholder="Enter opponent team name" className="input" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Venue:</label>
            <input type="text" placeholder="Enter match venue" className="input" />
          </div>
          <div className="input-group">
            <label>Match Type:</label>
            <select className="input">
              <option value="">T20/ODI/Test</option>
              <option value="T20">T20</option>
              <option value="ODI">ODI</option>
              <option value="Test">Test</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Batting Performance</h3>
        <div className="row">
          <div className="input-group">
            <label>Runs Scored:</label>
            <input type="number" placeholder="Enter runs" className="input" />
          </div>
          <div className="input-group">
            <label>Balls Faced:</label>
            <input type="number" placeholder="Enter balls faced" className="input" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>4s:</label>
            <input type="number" placeholder="Number of boundaries" className="input" />
          </div>
          <div className="input-group">
            <label>6s:</label>
            <input type="number" placeholder="Number of sixes" className="input" />
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Bowling Performance</h3>
        <div className="row">
          <div className="input-group">
            <label>Overs Bowled:</label>
            <input type="number" placeholder="Enter overs" className="input" />
          </div>
          <div className="input-group">
            <label>Wickets Taken:</label>
            <input type="number" placeholder="Enter wickets" className="input" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label>Runs Conceded:</label>
            <input type="number" placeholder="Enter runs conceded" className="input" />
          </div>
          <div className="input-group">
            <label>Maidens:</label>
            <input type="number" placeholder="Enter maidens" className="input" />
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Fielding Performance</h3>
        <div className="row">
          <div className="input-group">
            <label>Catches:</label>
            <input type="number" placeholder="Enter catches taken" className="input" />
          </div>
          <div className="input-group">
            <label>Run Outs:</label>
            <input type="number" placeholder="Enter run outs" className="input" />
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Match Notes</h3>
        <div className="input-group">
          <label>Performance Notes:</label>
          <textarea placeholder="Add any additional notes about your performance" className="textarea"></textarea>
        </div>
      </div>

      <div className="section">
        <h3>Shot Distribution (Wagon Wheel)</h3>
        <img
          src="/mnt/data/WhatsApp Image 2025-04-19 at 10.47.19_63b257d3.jpg"
          alt="Wagon Wheel"
          className="wagon-wheel"
        />
        <p className="shot-info">Click on the diagram to mark shot locations.</p>
      </div>

      <div className="button-row">
        <button className="btn cancel">Cancel</button>
        <button className="btn save">Save Match</button>
      </div>
    </div>
  );
};

export default AddMatchForm;
