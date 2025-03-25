import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import Features from './sections/Features';
import Pricing from './sections/Pricing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Navigation />
      <center>
        <div className="header-container">
        <div class="card text-center mb-3" >
          <div class="card-body">
            <h5 class="card-title">Get Clarity on your  
            Fitness Goals</h5>
            <p class="card-text">Whether you're focused on your fitness goals or improving your form, Active Aura’s AR assistant ensures your workouts are effective, safe, and 
            tailored just for you.</p>
            
          </div>
        </div>
        
        <div className="download-container">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        
      </div>
      </center>



      <Features />
      <Pricing />

      <div className="container py-4">


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
