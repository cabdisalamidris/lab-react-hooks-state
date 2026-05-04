import React from 'react'

function Cart({ cart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
  <p key={item.id}>{item.name} is in your cart.</p>
    ))}
    </div>
  );
}

export default Cart;
