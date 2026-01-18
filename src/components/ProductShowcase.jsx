import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mock Data
const products = [
  { size: '250ml', price: '₦1,500', label: 'Starter Pack' },
  { size: '500ml', price: '₦2,800', label: 'Best Seller' },
  { size: '1 Litre', price: '₦5,000', label: 'Family Size' },
  { size: '5 Litres', price: '₦23,000', label: 'Bulk Saver' },
];

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.product-card', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-white relative">
      {/* Background Decor */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-palmeAccent rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-palmeGreen font-display text-4xl font-bold mb-4">Pure Selections</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the perfect size for your needs. 100% filtered, unadulterated palm oil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="product-card group bg-palmeLight rounded-3xl p-6 relative transition-all hover:bg-white hover:shadow-xl hover:-translate-y-2">
              
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-white text-palmeGreen text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {item.label}
              </span>

              {/* Image Area (Circle) */}
              <div className="h-48 w-48 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                {/* We will put real bottle images here later. For now, text: */}
                <div className="text-center">
                    <div className="text-4xl">🍾</div>
                    <span className="text-gray-400 text-xs">Bottle Img</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-800 text-center">{item.size}</h3>
              <p className="text-palmeGreen font-bold text-lg text-center mt-1 mb-4">{item.price}</p>
              
              <button className="w-full bg-palmeGreen text-white font-medium py-3 rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;