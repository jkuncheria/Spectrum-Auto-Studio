import React, { useState, useRef } from 'react';
import { Heart, MapPin, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-black px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                ref={videoRef}
                src="/spectrumvideo.mp4" 
                loop
                playsInline
                controls
                className={`w-full h-auto object-cover ${isPlaying ? 'block' : 'hidden'}`}
              />
              {!isPlaying && (
                <>
                  <img 
                    src="/thumbnail.png" 
                    alt="Video thumbnail" 
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                  >
                    <div className="w-20 h-20 bg-[#F21C1D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#F21C1D' }}>ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              We protect your vehicle with precision, quality, and care every time.
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              We are Denver's trusted auto detailing and protection specialists. Our certified technicians deliver premium ceramic coatings, paint protection film, window tinting, and professional detailing services. We treat every vehicle like it's our own.
            </p>
            
            <div className="bg-gray-900 rounded-xl p-6 mb-6 border border-gray-800">
              <h3 className="font-bold mb-2" style={{ color: '#F21C1D' }}>What we do best</h3>
              <p className="text-gray-400 text-sm">
                From paint protection film and ceramic coatings to full vehicle wraps and professional detailing, we deliver showroom-quality results. Certified installers, premium products, and industry-leading warranties.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center" style={{ backgroundColor: '#F21C1D' }}
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 hover:bg-[#F21C1D] hover:border-[#F21C1D] font-bold py-4 px-8 rounded-lg transition-all text-center border-white text-white"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

