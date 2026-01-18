import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Placeholder video (Palm trees)
const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-palm-trees-on-a-sunny-day-2285-large.mp4"; 

const Hero = () => {
  const textRef = useRef(null);
  const videoBlobRef = useRef(null);
  const leafRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Text slides up smoothly
    tl.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    )
    // 2. The Video Blob grows in
    .fromTo(videoBlobRef.current,
      { scale: 0, rotation: -10 },
      { scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-palmeLight flex items-center overflow-hidden pt-20">
      
      {/* Background Decor (Soft Circles like your inspo) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-palmeAccent rounded-l-full opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: Text Content */}
        <div ref={textRef} className="text-left">
          <span className="text-palmeGold font-bold tracking-widest uppercase text-sm mb-4 block">
            100% Organic & Natural
          </span>
          <h1 className="text-palmeGreen font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nature's Gold, <br />
            <span className="italic font-light">Delivered Pure.</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-md leading-relaxed">
            Sourced directly from the finest palms in Nigeria. Premium quality oil for your kitchen, delivered to your doorstep.
          </p>
          <div className="flex gap-4">
            <button className="bg-palmeGreen hover:bg-green-800 text-white font-medium py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
              Shop Collection
            </button>
            <button className="flex items-center gap-2 text-palmeGreen font-bold py-4 px-6 hover:text-green-800 transition-colors">
              <span>See How It's Made</span>
              <span className="bg-palmeAccent p-2 rounded-full">▶</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Video inside a "Blob" Shape */}
        <div className="relative flex justify-center">
          <div 
            ref={videoBlobRef}
            className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] overflow-hidden border-8 border-white shadow-2xl"
            style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }} // CSS Logic for "Blob" shape
          >
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce">
            <p className="text-palmeGreen font-bold text-xl">⭐ 4.9/5</p>
            <p className="text-xs text-gray-500">Customer Rating</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;