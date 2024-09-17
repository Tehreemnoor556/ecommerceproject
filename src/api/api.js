import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/products`);
