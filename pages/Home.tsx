import React from 'react';
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
    </>
  );
};

export default Home;

