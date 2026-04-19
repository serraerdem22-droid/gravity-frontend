// src/pages/HomePage.js
// Ana sayfa — bileşenler bir araya gelerek tam ekranı oluşturur

import React from 'react';
import Card from '../components/Card';

const features = [
  { icon: '🧩', title: 'Bileşenler',    description: 'Tekrar kullanılabilir LEGO parçaları gibi. src/components/ klasöründe yaşarlar.' },
  { icon: '📄', title: 'Sayfalar',      description: 'Bileşenlerin bir araya gelmesiyle oluşan tam ekranlar. src/pages/ klasöründe.' },
  { icon: '🚀', title: 'Servisler',     description: 'Backend ile iletişimi sağlayan gizli kuryeler. src/services/ klasöründe.' },
  { icon: '🎨', title: 'Stiller',       description: 'Renk, yazı tipi ve süsleme kodları. src/styles/ klasöründe.' },
];

function HomePage() {
  return (
    <main style={styles.main}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>⚡ Gravity Frontend</h1>
        <p style={styles.heroSub}>
          Modern React uygulama yapısı — her klasör kendi rolünü biliyor.
        </p>
        <button className="btn btn-primary" style={{ marginTop: '24px' }}>
          🚀 Keşfet
        </button>
      </section>

      {/* Feature Cards */}
      <section style={styles.grid}>
        {features.map((f) => (
          <Card key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </section>
    </main>
  );
}

const styles = {
  main: { padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' },
  hero: { textAlign: 'center', marginBottom: '60px' },
  heroTitle: { fontSize: '2.8rem', fontWeight: 700, color: '#e0e7ff', marginBottom: '16px' },
  heroSub: { fontSize: '1.1rem', color: '#94a3b8', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
};

export default HomePage;
