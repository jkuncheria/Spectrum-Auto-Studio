import React, { useEffect } from 'react';

const GoogleReviews: React.FC = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 bg-black px-4 md:px-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F21C1D] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#F21C1D' }}>WHAT OUR CUSTOMERS SAY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            Customer Reviews
          </h2>
          <div className="w-20 h-1 bg-[#F21C1D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience with Spectrum Auto Studio.
          </p>
        </div>
        
        <div className="elfsight-app-71480034-c421-4dc1-97b7-4b70839d9803" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default GoogleReviews;
