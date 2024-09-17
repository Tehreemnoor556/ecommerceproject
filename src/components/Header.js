import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">E-Commerce</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/cart" className="mr-4">Cart</Link>
          <Link to="/order-history">Order History</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
