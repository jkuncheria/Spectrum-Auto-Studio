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
    <section className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4 md:px-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F0E130] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#F0E130' }}>WHAT OUR CUSTOMERS SAY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            Customer Reviews
          </h2>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience with Old Town Auto Spa.
          </p>
        </div>
        
        <div className="elfsight-app-d8f63c18-34f1-43f5-b7e8-ed71f1cef58a" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default GoogleReviews;
