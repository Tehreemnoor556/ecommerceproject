import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      {/* Add a message to the user */}
      <div className="mb-4 p-2 bg-blue-100 text-blue-800 rounded">
        Please fill in your details below to complete your purchase.
      </div>

      {/* Render the checkout form */}
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
