import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ClientBanner from '../components/ClientBanner';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import GoogleReviews from '../components/GoogleReviews';
import OurStory from '../components/OurStory';
import Contact from '../components/Contact';
import DetailingMenu from '../components/DetailingMenu';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Old Town Auto Spa | Phoenix Auto Detailing, Ceramic Coating & Window Tinting"
        description="Old Town Auto Spa - Phoenix's premier auto detailing company. Professional ceramic coatings, window tinting, vehicle wraps, and paint correction. Serving Phoenix, Scottsdale, Paradise Valley, Chandler & Fountain Hills."
        keywords="Phoenix auto detailing, ceramic coating Phoenix, window tinting Phoenix, vehicle wraps Phoenix, paint correction Phoenix, Scottsdale detailing, Paradise Valley auto spa"
        canonical="https://www.oldtownautospa.com"
      />
      <Hero />
      <DetailingMenu />
      {/* <ClientBanner /> */}
      <Contact simplified={true} />
      <Categories />
      <AboutHome />
      {/* <OurStory /> */}

      {/* <Inspiration /> */}
      <GoogleReviews />
      <Difference />

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote today or call us directly. We're here to help protect and enhance your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:6028078989"
              className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-600"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

