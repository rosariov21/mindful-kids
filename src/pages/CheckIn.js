import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function CheckIn() {
  const [mood, setMood] = useState('');
  const [journal, setJournal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    if (!mood) {
      setError("Please choose how you're feeling.");
      return;
    }

    try {
      await addDoc(collection(db, 'checkins'), {
        mood,
        journal,
        createdAt: Timestamp.now()
      });

      setSubmitted(true);
      setMood('');
      setJournal('');
    } catch (err) {
      console.error("Error saving check-in:", err);
      setError("❌ Something went wrong. Please try again.");
    }
  };

  const emojiOptions = [
    { emoji: '😃', label: 'Happy' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😴', label: 'Tired' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F0F9FF', // 🌊 soft blue
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.8rem', color: '#3B82F6' }}>📝 How are you feeling today?</h2>

        {submitted && <p style={{ color: '#16A34A', fontWeight: 'bold' }}>✔️ Thank you for checking in!</p>}
        {error && <p style={{ color: '#DC2626' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#374151' }}>Choose a mood:</strong>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
              {emojiOptions.map(({ emoji, label }) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => setMood(label)}
                  style={{
                    fontSize: '2rem',
                    padding: '0.5rem',
                    border: mood === label ? '3px solid #3B82F6' : '2px solid transparent',
                    borderRadius: '10px',
                    background: '#F3F4F6',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  title={label}
                >
                  {emoji}
                </button>
              ))}
            </div>
            {mood && (
              <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#6B7280' }}>
                You selected: <strong>{mood}</strong>
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label>
              <strong style={{ color: '#374151' }}>Write more (optional):</strong>
              <br />
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Tell us more about your day..."
                rows="4"
                style={{
                  padding: '0.75rem',
                  width: '100%',
                  fontSize: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #D1D5DB',
                  marginTop: '0.5rem'
                }}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}