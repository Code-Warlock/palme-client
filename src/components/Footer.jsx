import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo-green.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <img 
            src={logo} 
            alt="PalmeFoods" 
            className="h-28 md:h-32 w-auto object-contain brightness-110" 
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Bringing the authentic taste of Nigerian palm oil to the world. Pure, unadulterated, and sustainably sourced.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faInstagram} />
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faTiktok} />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-6 text-palmeGreen">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Shop Oil</a></li>
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold mb-6 text-palmeGreen">Help</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Delivery Info</a></li>
            <li><a href="#" className="hover:text-white">Park Locations</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-palmeGreen">Stay Fresh</h4>
          <p className="text-gray-400 text-sm mb-4">Get 10% off your first order.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-l-lg w-full text-sm focus:outline-none focus:border-palmeGreen"
            />
            <button className="bg-palmeGreen px-4 py-3 rounded-r-lg font-bold hover:bg-green-600 transition-colors">GO</button>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PalmeFoods Nigeria. All rights reserved.
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-palmeRed transition-colors">
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default Footer;