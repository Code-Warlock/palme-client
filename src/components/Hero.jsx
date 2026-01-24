import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlayCircle, faLeaf, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';


const slideImages = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg", 
  "/images/carousel.jpg"
];

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-[90vh] pt-8 pb-10 md:pb-20 px-6 relative overflow-hidden">
      
      
      <div className="hidden md:block absolute top-0 right-0 w-[40%] h-[70%] bg-palmeGreen/5 rounded-bl-[10rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full relative z-10">
        
        
        <div className="space-y-6 md:space-y-8 animate-fade-in-up mt-6 md:mt-0 order-1">
          <div className="inline-flex items-center gap-2 border border-palmeGreen/20 rounded-full px-4 py-1 bg-white shadow-sm">
             <span className="w-2 h-2 rounded-full bg-palmeGreen animate-pulse"></span>
             <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-palmeGreen">Est. 2026 • Nigeria</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif leading-tight text-gray-900">
            Wild <span className="text-palmeGreen">Palm Oil</span> <br/>
            <span className="text-3xl md:text-6xl font-light text-gray-600">Liquid Gold.</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed font-light">
            We are committed to creating premium broad spectrum Palm products. 
            100% Organic, filtered, and unadulterated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-palmeGreen text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-green-900/20 hover:bg-green-800 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
            
            <button className="border-2 border-gray-200 text-gray-600 font-bold py-4 px-10 rounded-full hover:border-palmeGreen hover:text-palmeGreen transition-all flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPlayCircle} /> Our Process
            </button>
          </div>
          
          
          <div className="flex items-center gap-8 pt-6 md:pt-10 border-t border-gray-100 md:border-none">
             <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-palmeGreen transition-colors">
                <FontAwesomeIcon icon={faLeaf} size="lg" />
                <span className="text-[10px] font-bold uppercase tracking-widest">100% Organic</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-palmeGreen transition-colors">
                <FontAwesomeIcon icon={faAward} size="lg" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Certified</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-palmeGreen transition-colors">
                <FontAwesomeIcon icon={faUsers} size="lg" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Community</span>
             </div>
          </div>
        </div>

        
        
        <div className="relative h-[300px] md:h-[600px] w-full order-2 lg:order-2 mt-4 lg:mt-0">
           
           <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-gray-100 rounded-full pointer-events-none"></div>
           
           
           <div className="h-full w-full rounded-3xl md:rounded-[3rem] overflow-hidden shadow-xl relative z-10 bg-white">
             <Swiper
               spaceBetween={0}
               centeredSlides={true}
               autoplay={{ delay: 4000, disableOnInteraction: false }}
               pagination={{ clickable: true }}
               modules={[Autoplay, Pagination, Navigation]}
               className="w-full h-full"
             >
               {slideImages.map((img, index) => (
                 <SwiperSlide key={index}>
                   <div className="w-full h-full relative">
                     <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/10"></div>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
           </div>

           
           <div className="absolute top-4 -left-2 md:top-10 md:-left-6 bg-white/95 backdrop-blur p-3 md:p-4 rounded-xl shadow-xl z-20 animate-bounce-slow border border-gray-100 scale-90 md:scale-100">
              <p className="text-[10px] md:text-xs font-bold text-palmeGreen uppercase tracking-wider mb-1">New Harvest</p>
              <p className="text-lg md:text-2xl font-serif font-bold text-gray-900">₦2,500</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;