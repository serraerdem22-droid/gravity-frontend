// src/components/Card.js
// Tekrar kullanılabilir kart bileşeni

import React from 'react';

function Card({ title, description, icon }) {
  return (
    <div className="card">
      {icon && <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>}
      {title && (
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#a5b4fc', marginBottom: '8px' }}>
          {title}
        </h3>
      )}
      {description && (
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default Card;
