import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const plantsArray = [
  {
    category: 'Easy Care Plants',
    plants: [
      { name: 'Snake Plant', cost: 18.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=700&q=80', description: 'A hardy plant that is easy to care for.' },
      { name: 'ZZ Plant', cost: 21.00, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'Glossy leaves and low-maintenance care.' },
      { name: 'Golden Pothos', cost: 16.00, image: 'https://images.unsplash.com/photo-1616690249683-3b1c2c6c6b7c?auto=format&fit=crop&w=700&q=80', description: 'A trailing plant for shelves and baskets.' },
      { name: 'Spider Plant', cost: 14.50, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'A cheerful plant with arching striped leaves.' },
      { name: 'Rubber Plant', cost: 26.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Bold, glossy foliage for a bright corner.' },
      { name: 'Aloe Vera', cost: 14.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A sculptural succulent for a sunny windowsill.' }
    ]
  },
  {
    category: 'Flowering Plants',
    plants: [
      { name: 'Peace Lily', cost: 22.50, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80', description: 'Elegant leaves and graceful white blooms.' },
      { name: 'Anthurium', cost: 24.00, image: 'https://images.unsplash.com/photo-1597055181300-8b8f1f2d9b9b?auto=format&fit=crop&w=700&q=80', description: 'Colourful flowers make a vibrant display.' },
      { name: 'African Violet', cost: 12.99, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'Compact flowering colour for indoor spaces.' },
      { name: 'Orchid', cost: 28.00, image: 'https://images.unsplash.com/photo-1566907225472-1c6f6f6c6c10?auto=format&fit=crop&w=700&q=80', description: 'A refined flowering plant for a tabletop.' },
      { name: 'Bromeliad', cost: 25.50, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'Bright colour and tropical character.' },
      { name: 'Kalanchoe', cost: 13.50, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A cheerful flowering succulent.' }
    ]
  },
  {
    category: 'Statement Plants',
    plants: [
      { name: 'Monstera Deliciosa', cost: 29.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80', description: 'Iconic split leaves add a tropical feel.' },
      { name: 'Bird of Paradise', cost: 42.00, image: 'https://images.unsplash.com/photo-1597055181300-8b8f1f2d9b9b?auto=format&fit=crop&w=700&q=80', description: 'Large leaves create a striking focal point.' },
      { name: 'Fiddle Leaf Fig', cost: 39.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Sculptural leaves for a stylish interior.' },
      { name: 'Areca Palm', cost: 31.00, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'Feathery palm fronds bring a relaxed feel.' },
      { name: 'Jade Plant', cost: 12.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'A compact succulent with rounded leaves.' },
      { name: 'Calathea', cost: 23.00, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'Decorative foliage with beautiful patterns.' }
    ]
  }
];

export { plantsArray };

export default function ProductList({ onNavigate, totalQuantity }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((previous) => ({ ...previous, [plant.name]: true }));
  };

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="page">
      <Navbar onNavigate={onNavigate} totalQuantity={cartQuantity ?? totalQuantity} />
      <header className="page-heading">
        <p className="eyebrow">FIND YOUR GREEN</p>
        <h1>Our Plants</h1>
        <p>Explore our collection, organised to help you find the right plant for your space.</p>
      </header>
      {plantsArray.map((category) => (
        <section className="category-section" key={category.category}>
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <article className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} loading="lazy" />
                <div className="product-content">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="price-row">
                    <span className="price">${plant.cost.toFixed(2)}</span>
                    <button className="add-button" disabled={Boolean(addedToCart[plant.name])} onClick={() => handleAddToCart(plant)}>
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
