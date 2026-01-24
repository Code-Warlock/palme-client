import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';

// Placeholder Unsplash images - replace with your real farm photos later!
const images = [
  "https://images.unsplash.com/photo-1621956536417-1f4150b04044?q=80&w=600",
  "https://images.unsplash.com/photo-1598514972236-4d249d944434?q=80&w=600",
  "https://images.unsplash.com/photo-1543666299-813c932f949c?q=80&w=600",
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600"
];

const Gallery = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="bg-white py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-palmeGreen font-bold tracking-widest uppercase text-xs">Our Farm</span>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mt-2">The Gallery</h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">See where the freshness comes from. From the palm tree to the keg.</p>
          </div>

          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((src, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 group relative">
                <img src={src} alt="Farm Life" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;