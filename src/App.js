import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminPanel from './pages/AdminPanel';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
        
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />
         
          {/* Route for a specific product, with :id as a dynamic URL parameter */}
          <Route path="/products/:id" element={<ProductPage />} />

          {/* Route for the shopping cart page */}
          <Route path="/cart" element={<CartPage />} />

          {/* Route for the checkout page */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Route for the order history page */}
          <Route path="/order-history" element={<OrderHistoryPage />} />

          {/* Route for the admin panel page */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
