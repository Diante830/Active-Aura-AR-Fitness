import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <center>
    <div className="pricing-container">
      <div>
      <h1>Hi</h1>
      </div>
      <div className="price-card">
      {/* Top Section */}
      <div className="card-top">
        <div className="card-tag">Tag</div>
        <h2>Top Section</h2>
        <p>This is the top section of the card. You can add content here.</p>
      </div>

      {/* Bottom Section */}
      <div className="card-bottom">
        <p>This is the bottom section. You can add more details or actions here.</p>
      </div>
      <button className="select-button">Select</button>
    </div>
    <div className="price-card">
      {/* Top Section */}
      <div className="card-top">
        <div className="card-tag">Tag</div>
        <h2>Top Section</h2>
        <p>This is the top section of the card. You can add content here.</p>
      </div>

      {/* Bottom Section */}
      <div className="card-bottom">
        <p>This is the bottom section. You can add more details or actions here.</p>
      </div>
    </div>
    <div className="price-card">
      {/* Top Section */}
      <div className="card-top">
        <div className="card-tag">Tag</div>
        <h2>Top Section</h2>
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