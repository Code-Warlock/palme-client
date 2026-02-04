import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); 

  useEffect(() => {
    const storedUser = localStorage.getItem('palme_user');
    const storedToken = localStorage.getItem('palme_token');
    
    
    if (storedUser && storedUser !== "undefined" && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Corrupt user data found, clearing storage.");
        localStorage.removeItem('palme_user');
        localStorage.removeItem('palme_token');
        setUser(null);
      }
    } else {
        
        if (storedUser === "undefined") {
            localStorage.removeItem('palme_user');
            localStorage.removeItem('palme_token');
        }
    }
    setLoading(false);
  }, []);

  const openAuthModal = (mode = 'login') => {
    setActiveTab(mode);
    setShowAuthModal(true);
  };

  const login = (userData, token) => {
      setUser(userData);
      localStorage.setItem('palme_user', JSON.stringify(userData));
      localStorage.setItem('palme_token', token);
      return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('palme_user');
    localStorage.removeItem('palme_token');
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login,  
      logout,
      showAuthModal,
      setShowAuthModal,
      openAuthModal,      
      activeTab,
      setActiveTab     
    }}>
      {children}
    </AuthContext.Provider>
  );
};