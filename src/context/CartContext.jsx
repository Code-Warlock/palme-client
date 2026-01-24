import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  
  const [deliveryType, setDeliveryType] = useState('doorstep'); 
  const [selectedLocation, setSelectedLocation] = useState(null); 

  
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item => 
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true); 
  };

  
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  
  const totalWeight = cartItems.reduce((acc, item) => acc + ((item.weightKg || 0.5) * item.qty), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      isCartOpen,
      setIsCartOpen,
      cartTotal,
      totalWeight,
      deliveryType,
      setDeliveryType,
      selectedLocation,
      setSelectedLocation
    }}>
      {children}
    </CartContext.Provider>
  );
};