// CartContext: gestion globale du panier avec Context API React
// Fonctions: addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Plant } from '../data/plants';

export interface CartItem {
  plant: Plant;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (plant: Plant, quantity?: number) => void;
  removeFromCart: (plantId: number) => void;
  updateQuantity: (plantId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (plant: Plant, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.plant.id === plant.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { plant, quantity }];
    });
  };

  const removeFromCart = (plantId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.plant.id !== plantId));
  };

  const updateQuantity = (plantId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.plant.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

