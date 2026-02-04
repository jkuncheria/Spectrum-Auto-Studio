import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
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
    <>
      <SEO
        title="Video Gallery | Spectrum Auto Studio | Denver Auto Detailing"
        description="Watch our auto detailing videos. See the amazing transformations from Spectrum Auto Studio in Denver, Colorado. Interior detailing, ceramic coatings, PPF, and more."
        keywords="auto detailing videos, car detailing gallery Denver, ceramic coating videos, PPF installation, Denver CO detailing"
        canonical="https://spectrumautostudio.com/gallery"
      />
      <section className="py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider text-sm uppercase text-[#F21C1D]">GALLERY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our Work Speaks for Itself
            </h1>
            <div className="w-20 h-1 bg-[#F21C1D] mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Watch our latest projects and see the incredible transformations we achieve. From paint correction to ceramic coatings, our videos showcase the quality of our work.
            </p>
          </div>

          {/* YouTube Gallery Widget */}
          <div className="mb-16">
            <div className="elfsight-app-df88ed1e-568d-4326-a492-3bf2cc67edac" data-elfsight-app-lazy></div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 md:p-16 text-center border border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let us restore your vehicle to showroom condition. Contact us today for a free estimate.
            </p>
            <Link
              to="/contact"
              className="inline-block text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#F21C1D] hover:bg-red-700"
            >
              Get Free Estimate
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;

