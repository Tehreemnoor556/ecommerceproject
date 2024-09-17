  import React from 'react';
  import { Link } from 'react-router-dom';

  const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <Link to={`/products/${product.id}`} className="text-blue-500 mt-2 block">View Details</Link>
      </div>
    );
  };

  export default ProductCard;
