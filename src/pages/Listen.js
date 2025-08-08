// src/pages/Listen.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Listen() {
  const resources = [
    {
      title: "Chillhop Music – Lofi Hip-Hop by BIPOC Artists",
      url: "https://www.youtube.com/embed/5yx6BWlEVcY",
      color: "#E0F2FE" // soft blue
    },
    {
      title: "Djembe Drum Meditation – African Drumming",
      url: "https://www.youtube.com/embed/1Ns7dg6ikHE",
      color: "#FEF3C7" // soft yellow
    },
    {
      title: "Chillhop Radio – Jazzy Lofi Beats",
      url: "https://www.youtube.com/embed/5yx6BWlEVcY",
      color: "#DCFCE7" // soft green
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFF7ED', // warm beige
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '1.8rem',
        marginBottom: '1rem',
        color: '#92400E',
        textAlign: 'center'
      }}>
        🎧 Mindfulness & Music for Our Communities
      </h2>
      <p style={{
        marginBottom: '2rem',
        fontSize: '1rem',
        color: '#6B7280',
        textAlign: 'center'
      }}>
        These tracks and meditations are from Black, Indigenous, and other creators of color — designed to help us feel seen, safe, and grounded.
      </p>

      {/* Playlist Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {resources.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.color,
              borderRadius: '1rem',
              padding: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ color: '#374151', marginBottom: '0.5rem', textAlign: 'center' }}>
              {item.title}
            </h3>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '0.75rem'
            }}>
              <iframe
                src={item.url}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#3B82F6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}>
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}