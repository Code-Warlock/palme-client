import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      {/* Animated Graphic Area */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-palmeGreen/10 rounded-full blur-3xl animate-pulse"></div>
        <Bot size={180} className="text-palmeGreen relative z-10 animate-bounce" strokeWidth={1.5} />
        <h1 className="text-9xl font-bold text-palmeGreen/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          404
        </h1>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Oops! We can't find that page.
      </h2>
      <p className="text-gray-500 max-w-md mb-10 text-lg">
        The page you are looking for might have been removed, renamed, or is temporarily unavailable.
      </p>

      <Link 
        to="/" 
        className="group flex items-center gap-2 bg-palmeGreen text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-green-900 transition-all transform hover:-translate-y-1"
      >
        <Home size={20} />
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;