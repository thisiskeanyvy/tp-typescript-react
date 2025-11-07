// App: composant racine avec routing React Router et providers

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import HomePage from './5-pages/HomePage';
import ProductPage from './5-pages/ProductPage';
import CartPage from './5-pages/CartPage';
import Layout from './4-templates/Layout';

const App = () => {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
};

App.displayName = "App";

export default App;

