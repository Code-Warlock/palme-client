import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import logo from '../assets/logo-green.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="PalmeFoods" className="h-12 object-contain" /> 
          <span className={`font-bold text-xl ${isScrolled ? 'text-palmeGreen' : 'text-white'}`}>
            PalmeFoods
          </span>
        </div>

        {/* MENU LINKS (Desktop) */}
        <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
        </div>

        {/* CART ICON */}
        <div className="flex items-center gap-4">
          <ShoppingCart className={`w-6 h-6 ${isScrolled ? 'text-palmeGreen' : 'text-white'}`} />
          <Menu className={`md:hidden w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;