import React, { useState } from 'react';
import './News.css';

const News = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., API call)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <center>
      <div className="news-container">

        <div className="newsletter-form-container">
          <div className="newsletter-left">
            <h2>Sign Up Today</h2>
            <p>Stay updated with the latest news, exclusive offers, and more!</p>
          </div>
          
          <div className="newsletter-right">
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="email-input"
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </center>
  );
};

export default News;