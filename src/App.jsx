import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';  
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
     <Navigation />
    
    
     <div className="container py-4">
    
      <section id="features" className="section">
        <h2>Features</h2>
        <p>Explore the amazing features of our mobile app!</p>
      </section>

      <section id="pricing" className="section">
        <h2>Pricing</h2>
        <p>Find the best pricing plan for you!</p>
      </section>

      <section id="reviews" className="section">
        <h2>Reviews</h2>
        <p>What our users say about the app!</p>
      </section>

      </div>

      <Footer />
      
    </>
  );
}

export default App;
