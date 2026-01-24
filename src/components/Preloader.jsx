import React from 'react';

const Preloader = ({ fullScreen = false }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center bg-white ${
        fullScreen 
          ? 'fixed inset-0 z-[9999] w-screen h-screen' 
          : 'w-full h-64' 
      }`}
    >
      
      
      <div className="relative w-24 h-24"> 
        
        
        <div className="absolute inset-0 border-4 border-gray-100 border-t-palmeGreen rounded-full animate-spin"></div>
        
        
        <div className="absolute inset-3 border-4 border-transparent border-b-palmeRed rounded-full animate-spin-reverse"></div>
        
        
        <div className="absolute inset-0 m-auto w-4 h-4 bg-palmeGreen rounded-full animate-ping"></div>
        
      </div>

      
      <div className="mt-8 text-center">
        <h3 className="text-palmeGreen font-bold tracking-[0.3em] text-lg uppercase animate-pulse">
          PalmeFoods
        </h3>
        <p className="text-gray-400 text-xs tracking-widest mt-2 uppercase">
          Loading...
        </p>
      </div>

      
      <style>{`
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;