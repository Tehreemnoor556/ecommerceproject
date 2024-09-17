import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => dispatch(setProducts(response.data)));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
