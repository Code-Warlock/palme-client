import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          
          <div className="space-y-8">
            <span className="text-palmeRed font-bold tracking-widest uppercase text-xs">Customer Support</span>
            <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">Get in Touch</h1>
            <p className="text-gray-500 text-lg">Have questions about bulk orders or delivery? Send us a message and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 group-hover:bg-palmeGreen transition-colors rounded-full flex items-center justify-center text-palmeGreen group-hover:text-white">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400">Phone</p>
                  <p className="font-bold text-xl text-gray-900">+2349134033103</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 group-hover:bg-palmeGreen transition-colors rounded-full flex items-center justify-center text-palmeGreen group-hover:text-white">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400">Email</p>
                  <p className="font-bold text-xl text-gray-900">sales@palmefoods.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 group-hover:bg-palmeGreen transition-colors rounded-full flex items-center justify-center text-palmeGreen group-hover:text-white">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400">HQ</p>
                  <p className="font-bold text-xl text-gray-900">12 Agro Road, Ibadan, Oyo State</p>
                </div>
              </div>
            </div>
          </div>

          
          <form className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">First Name</label>
                <input className="w-full p-4 rounded-xl border border-gray-200 focus:border-palmeGreen focus:ring-1 focus:ring-palmeGreen focus:outline-none bg-white transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Last Name</label>
                <input className="w-full p-4 rounded-xl border border-gray-200 focus:border-palmeGreen focus:ring-1 focus:ring-palmeGreen focus:outline-none bg-white transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Email Address</label>
              <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-palmeGreen focus:ring-1 focus:ring-palmeGreen focus:outline-none bg-white transition-colors" placeholder="john@example.com" />
            </div>
            
            <div>
              <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Message</label>
              <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:border-palmeGreen focus:ring-1 focus:ring-palmeGreen focus:outline-none bg-white transition-colors h-32 resize-none" placeholder="I need 50 kegs..."></textarea>
            </div>
            
            <button className="w-full bg-palmeGreen text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20">
              <FontAwesomeIcon icon={faPaperPlane} /> Send Message
            </button>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;