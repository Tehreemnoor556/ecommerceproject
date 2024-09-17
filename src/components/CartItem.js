import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <button onClick={handleRemove} className="text-red-500">Remove</button>
    </div>
  );
};

export default CartItem;
