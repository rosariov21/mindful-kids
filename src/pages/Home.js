// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // we'll style more here

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🌟 Welcome to Mindful Kids 🌟</h1>
        <p className="home-subtitle">
          Pick something fun to help you feel better today!
        </p>

        <div className="button-group">
          <Link to="/checkin">
            <button className="home-btn checkin-btn">😃 Check In</button>
          </Link>
          <Link to="/listen">
            <button className="home-btn listen-btn">🎵 Listen</button>
          </Link>
          <Link to="/journal">
            <button className="home-btn journal-btn">📝 Journal</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
