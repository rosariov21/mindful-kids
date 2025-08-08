// src/pages/Journal.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Journal() {
  const prompts = [
    "Tell me about a moment today that made you feel proud of yourself.",
    "What’s one thing from your culture or family that makes you smile?",
    "Draw or describe a place where you feel safe and free.",
    "If your heart could speak right now, what would it say?",
    "Write about a time you felt strong, even if it was hard."
  ];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  const [entry, setEntry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!entry.trim()) return;

    try {
      await addDoc(collection(db, 'journals'), {
        prompt: randomPrompt,
        entry,
        createdAt: Timestamp.now()
      });
      setSubmitted(true);
      setEntry('');
    } catch (error) {
      console.error("Error saving journal:", error);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e0e3b1ff', // light gray
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ color: '#2563EB', marginBottom: '1rem' }}>📓 Journal Time</h2>

        {submitted && (
          <p style={{ color: '#16A34A', fontWeight: 'bold' }}>
            ✅ Your thoughts are saved. Thank you for sharing.
          </p>
        )}

        <p style={{
          fontSize: '1.1rem',
          color: '#374151',
          marginBottom: '1rem',
          fontStyle: 'italic'
        }}>
          {randomPrompt}
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write, draw in words, or describe your feelings here..."
            rows="6"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #D1D5DB',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#2563EB',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Save Entry
          </button>
        </form>

        {/* Back to Home */}
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#6B7280',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}