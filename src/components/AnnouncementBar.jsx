import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    
    <div 
      className={`bg-palmeGreen text-white overflow-hidden transition-all duration-500 ease-in-out ${
        isVisible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="py-2.5 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          
          <div className="hidden md:flex gap-6 items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} /> +2349134033103
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} /> nali@palmefoods.com
            </span>
          </div>

          
          <div className="flex-1 text-center pr-8 md:pr-0">
            <span className="animate-pulse">🌿 Grand Opening Sale:</span> 
            <span className="ml-2 text-white/90 font-medium normal-case hidden sm:inline">Get 20% off your first 5L Keg. Use Code: </span>
            <span className="bg-white text-palmeRed px-2 py-0.5 rounded ml-1 font-bold">FRESH20</span>
          </div>

          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4 items-center border-r border-white/20 pr-4">
              <a href="#" className="hover:text-green-200 transition-colors"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>

            
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-white/60 hover:text-white transition-colors p-1 transform hover:rotate-90 duration-300"
              aria-label="Close Announcement"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;