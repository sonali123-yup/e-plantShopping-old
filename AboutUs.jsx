import React from 'react';
import Navbar from './Navbar';

export default function AboutUs({ onNavigate, totalQuantity }) {
  return (
    <div className="page">
      <Navbar onNavigate={onNavigate} totalQuantity={totalQuantity} />
      <section className="about-us-container">
        <p className="eyebrow">OUR STORY</p>
        <h1>About Paradise Nursery</h1>
        <p>Paradise Nursery helps people bring the beauty of nature into their homes. We offer a thoughtfully selected range of indoor plants for beginners and experienced plant lovers.</p>
        <p>Our goal is to make plant shopping simple and enjoyable by providing clear product information and an easy way to choose plants for different rooms and lifestyles.</p>
        <button className="primary-button" onClick={() => onNavigate('plants')}>Explore Plants</button>
      </section>
    </div>
  );
}
