import React from 'react';

export default function Navbar({ onNavigate, totalQuantity }) {
  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={() => onNavigate('home')}>🌿 Paradise Nursery</button>
      <div className="navbar-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('plants')}>Plants</button>
        <button onClick={() => onNavigate('cart')}>Cart 🛒 ({totalQuantity})</button>
      </div>
    </nav>
  );
}
