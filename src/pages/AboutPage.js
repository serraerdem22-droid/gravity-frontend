// src/pages/AboutPage.js
// Hakkında sayfası — projeyi ve yapısını açıklar

import React from 'react';

function AboutPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>📂 Uygulama Yapısı</h1>
      <p style={styles.sub}>
        Bu proje, <strong>frontend.docx</strong>'ta anlatılan klasör mimarisini kullanır.
      </p>

      <div style={styles.tree}>
        <pre style={styles.code}>{`frontend/
├── public/          ← Dış Kapı: favicon & index.html
└── src/
    ├── assets/      ← Depo: resimler, videolar, fontlar
    ├── components/  ← LEGO Parçaları: tekrar kullanılan UI
    ├── pages/       ← Tam Ekranlar: bileşenlerden oluşur
    ├── services/    ← Kuryeler: backend ile iletişim
    ├── styles/      ← Makyaj Odası: renkler & düzenler
    ├── App.js       ← Rota yöneticisi
    └── index.js     ← Giriş noktası`}</pre>
      </div>
    </main>
  );
}

const styles = {
  main: { padding: '60px 40px', maxWidth: '760px', margin: '0 auto' },
  title: { fontSize: '2rem', fontWeight: 700, color: '#e0e7ff', marginBottom: '16px' },
  sub: { color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '40px' },
  tree: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '32px',
  },
  code: {
    fontFamily: "'Courier New', monospace",
    fontSize: '0.95rem',
    color: '#a5b4fc',
    lineHeight: 1.9,
    whiteSpace: 'pre',
  },
};

export default AboutPage;
