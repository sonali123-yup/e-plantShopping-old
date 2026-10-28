import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

export default function CartItem({ onNavigate, totalQuantity }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };
  const handleContinueShopping = (event) => {
    event.preventDefault();
    onNavigate('plants');
  };

  return (
    <div className="page">
      <Navbar onNavigate={onNavigate} totalQuantity={totalItems ?? totalQuantity} />
      <header className="page-heading">
        <p className="eyebrow">YOUR SELECTED PLANTS</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
      </header>
      <main className="cart-container">
        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Find a plant to make your space greener.</p>
            <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
          </section>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-row" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product-info">
                    <h2>{item.name}</h2>
                    <p>Unit price: ${item.cost.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                      <span>Quantity: {item.quantity}</span>
                      <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <p className="price">${(item.cost * item.quantity).toFixed(2)}</p>
                    <button className="delete-button" onClick={() => handleRemove(item)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
            <aside className="summary-card">
              <h2>Cart Summary</h2>
              <p>Total items: <strong>{totalItems}</strong></p>
              <p className="summary-total">Total amount: ${totalAmount.toFixed(2)}</p>
              <button className="primary-button full-width" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
              <button className="get-started-button full-width" onClick={handleContinueShopping}>Continue Shopping</button>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
