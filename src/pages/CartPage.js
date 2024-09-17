import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default CartPage;
