import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleGetStartedClick = () => setPage('plants');

  if (page === 'plants') {
    return <ProductList onNavigate={setPage} totalQuantity={totalQuantity} />;
  }
  if (page === 'cart') {
    return <CartItem onNavigate={setPage} totalQuantity={totalQuantity} />;
  }
  if (page === 'about') {
    return <AboutUs onNavigate={setPage} totalQuantity={totalQuantity} />;
  }

  return (
    <main className="landing-page">
      <Navbar onNavigate={setPage} totalQuantity={totalQuantity} />
      <section className="background-image">
        <div className="landing-overlay">
          <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
          <h1>Welcome To Paradise Nursery</h1>
          <p>Discover beautiful indoor plants for every room, every routine, and every plant lover.</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
          <button className="secondary-button" onClick={() => setPage('about')}>About Us</button>
        </div>
      </section>
    </main>
  );
}
