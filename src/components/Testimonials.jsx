import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  { name: "Mrs. Adebayo", role: "Chef, Lagos", text: "The flavor is unlike anything in the market. It reminds me of my grandmother's cooking in the village." },
  { name: "John Doe", role: "Home Cook", text: "Delivery was seamless. The park pickup option saved me so much on shipping fees!" },
  { name: "Sarah K.", role: "Health Enthusiast", text: "Finally, palm oil that doesn't have a chemical aftertaste. Pure, clean, and healthy." },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-palmeGreen font-bold tracking-widest uppercase text-xs">Testimonials</span>
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16 mt-2">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-palmeRed/10 text-6xl absolute top-4 left-4" />
              
              <div className="relative z-10">
                <div className="flex justify-center gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-xs text-palmeGreen uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;