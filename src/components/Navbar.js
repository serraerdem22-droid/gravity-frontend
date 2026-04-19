// src/components/Navbar.js
// Tekrar kullanılabilir üst navigasyon bileşeni

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components.css';

const navLinks = [
  { path: '/',       label: 'Ana Sayfa' },
  { path: '/about',  label: 'Hakkında'  },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>⚡ Gravity</span>
      <div style={styles.links}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={{
              ...styles.link,
              ...(location.pathname === path ? styles.linkActive : {}),
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 40px',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#a5b4fc',
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '6px 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s',
  },
  linkActive: {
    color: '#a5b4fc',
    borderBottom: '2px solid #6366f1',
  },
};

export default Navbar;
