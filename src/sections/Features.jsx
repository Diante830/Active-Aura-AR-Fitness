import React, { useState } from 'react';
import './Features.css'; 

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      img: 'https://via.placeholder.com/150',
      title: 'Feature 1',
      description: 'Discover how this feature will help you save time and improve productivity.'
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Feature 2',
      description: 'This feature allows seamless integration with third-party apps.'
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Feature 3',
      description: 'Boost your team\'s collaboration with real-time updates and notifications.'
    },
    {
      img: 'https://via.placeholder.com/150',
      title: 'Feature 4',
      description: 'Experience powerful data analytics and reporting at your fingertips.'
    }
  ];

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      const totalSlides = features.length;
      return (prevIndex + direction + totalSlides) % totalSlides;
    });
  };

  return (
   <center><div className="features-container">
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 300 + 30 * currentIndex}px)` }}>
          {features.map((feature, index) => (
            <div key={index} className="carousel-card">
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>❮</button>
        <button className="next" onClick={() => moveSlide(1)}>❯</button>
      </div>
    </div>
    </center>
  );
};

export default Features;