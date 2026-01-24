import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';
import NotFound from './components/NotFound';
import FAQ from './components/FAQ';         
import Gallery from './components/Gallery'; 
import Contact from './components/Contact'; 

const LandingPage = () => (
  <>
    <AnnouncementBar />
    <Navbar />
    <Hero />
    <AboutSection />
    <ProductShowcase />
    <Testimonials />
    <Footer />
  </>
);

const ShopPage = () => (
  <>
    <AnnouncementBar />
    <Navbar />
    <div className="pt-20">
      <div className="bg-green-50 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900">Shop All Products</h1>
        <p className="text-gray-500 mt-2">Pure palm oil delivered to your doorstep.</p>
      </div>
      <ProductShowcase />
    </div>
    <Footer />
  </>
);

function App() {
  const [siteLoading, setSiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  if (siteLoading) {
    return <Preloader fullScreen={true} />;
  }

  return (
    <CartProvider>
      <Router>
        <div className="font-sans antialiased text-gray-900 bg-white relative">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<FAQ />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <CartDrawer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;