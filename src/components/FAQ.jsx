import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  { q: "Is your Palm Oil 100% Organic?", a: "Yes. We source directly from local farms in Osun and Ondo states. It is unadulterated, with no additives or coloring." },
  { q: "How does the Park Pickup work?", a: "During checkout, select 'Park Pickup'. Choose your state and the closest park. We ship it there via waybill, and you collect it. It is cheaper than home delivery!" },
  { q: "Do you sell in bulk?", a: "Yes, we sell 25L and Drums. Please contact us on WhatsApp for wholesale pricing." },
  { q: "How long does delivery take?", a: "Lagos deliveries take 24-48 hours. Interstate deliveries (Park Pickup) take 2-4 days depending on the location." },
  { q: "What is the shelf life?", a: "Our premium oil has a shelf life of 12-18 months when stored in a cool, dry place away from direct sunlight." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-500">Everything you need to know about our oil and delivery.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-800 hover:text-palmeGreen transition-colors"
                >
                  {item.q}
                  <span className="text-palmeGreen text-sm">
                    <FontAwesomeIcon icon={openIndex === i ? faMinus : faPlus} />
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;