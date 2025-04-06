import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return <>
    <nav>
    <a href="#">
          <img src="./images/logo.svg" alt="Logo" className="logo" />
        </a>
      <ul class="list">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Reviews</a></li>
      </ul>
    </nav>
  </>
}

