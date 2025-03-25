import React from 'react';
import './Footer.css';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <>

    <div class="footer-basic">
      <footer class="footer">
        <ul class="list">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>Copyright &copy; {currentYear} Active Aura AR Fitness Inc. All rights reserved.</p>
      </footer>
    </div>
  </>
}
