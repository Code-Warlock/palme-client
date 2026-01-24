import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image Grid */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-palmeRed/10 rounded-full blur-xl"></div>
          <img 
            src="./images/carousel2.jpg" 
            alt="Palm Processing" 
            className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[400px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block">
            <p className="text-4xl font-serif font-bold text-palmeGreen">100%</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Natural Process</p>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <span className="text-palmeRed font-bold tracking-widest uppercase text-xs">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Rooted in Tradition, <br/>Refined for You.
          </h2>
          <p className="text-gray-600 leading-relaxed font-light text-lg">
            PalmeFoods began with a simple mission: to bridge the gap between rural Nigerian palm farms and the modern kitchen. We don't just sell oil; we preserve a heritage of purity.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-palmeGreen">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Eco-Conscious</h4>
                <p className="text-sm text-gray-500">Sustainable farming practices.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-palmeRed">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Fair Trade</h4>
                <p className="text-sm text-gray-500">Supporting local farmers directly.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;