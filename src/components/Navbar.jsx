import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo-green.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  
  const navLinks = ['Home', 'Shop', 'Gallery', 'Testimonials', 'FAQ', 'Contact'];

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          
          <Link to="/" className="z-50 flex items-center">
            <img 
               src={logo} 
               alt="PalmeFoods" 
               className="h-24 md:h-32 w-auto min-w-[140px] md:min-w-[200px] object-contain object-left transition-all duration-300" 
            />
          </Link>

          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="font-bold text-sm text-gray-700 hover:text-palmeGreen transition-colors uppercase tracking-widest relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-palmeGreen transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-bold text-gray-900 hover:text-palmeGreen transition-colors">
               Log In
            </button>
            <button className="bg-palmeGreen text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-900/10 hover:bg-green-800 transition-all transform hover:-translate-y-0.5 text-xs tracking-widest uppercase">
               Sign Up
            </button>
            
            <div 
              className="relative cursor-pointer group w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800 group-hover:text-palmeRed transition-colors" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-palmeRed text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          
          <button 
            className="md:hidden z-50 text-palmeGreen"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </nav>

      
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`} 
        onClick={() => setIsOpen(false)}
      ></div>
      
      
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          
          
          <div className="flex flex-col space-y-6 text-xl font-bold text-gray-800 font-serif">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 pb-4 hover:text-palmeGreen flex justify-between items-center"
              >
                {item}
                <span className="text-gray-300 text-sm">→</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
            
            <button 
              onClick={() => { setIsOpen(false); setIsCartOpen(true); }}
              className="w-full py-4 bg-gray-50 text-gray-900 font-bold rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItems.length})
            </button>
            
            
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50">
                Log In
              </button>
              <button className="py-4 bg-palmeGreen text-white font-bold rounded-lg shadow-lg hover:bg-green-800">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;