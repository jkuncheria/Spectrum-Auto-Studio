import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
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
    <section className="py-16 px-4 md:px-16 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#F21C1D] font-bold tracking-wider text-sm uppercase">FOLLOW US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            See Our Latest Work on Instagram
          </h2>
          <div className="w-16 h-1 bg-[#F21C1D] mx-auto"></div>
        </div>
        <div className="elfsight-app-6c655919-8f45-46c3-83c2-1cf945e1f618" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramFeed;
