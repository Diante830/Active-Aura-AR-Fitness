import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <center>

      <div className="pricing-container">


        <div className="price-card">

          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Starter</div>
            <h2>Start with a <br></br>5-day Free Trial </h2>
            <p>Full access to real-time AR form correction, coaching and premium workout sessions.</p>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>Free Trial Includes</p>
            <p>5-day premium access</p>
          </div>
          <button className="select-button">Select</button>
        </div>
        <div className="price-card">
          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Popular</div>
            <h2>Get Our <br></br>Basic Plan</h2>
            <p>$12.99/month</p>
            <ul>
              <li>20min & 30min workout sessions</li>
              <li>Real-time Visual and verbal feedback</li>
              <li>Personalized training</li>
              <li>Each session includes a 10min stretching cool down</li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>Basic Plan</p>
            <p>$12.99</p>
          </div>
        </div>
        <div className="price-card">
          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Best Value</div>
            <h2>Get Our <br></br>Premium Plan</h2>
            <p>This is the top section of the card. You can add content here.</p>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>This is the bottom section. You can add more details or actions here.</p>
          </div>
        </div>
      </div>
    </center>

  );
}

export default Pricing;