import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id))
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover mt-4" />
      <p className="text-xl font-semibold mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductPage;
