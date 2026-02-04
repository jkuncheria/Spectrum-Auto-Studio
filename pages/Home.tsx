import React from 'react';
import Hero from '../components/Hero';
import ClientBanner from '../components/ClientBanner';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import GoogleReviews from '../components/GoogleReviews';
import OurStory from '../components/OurStory';
import Contact from '../components/Contact';
import InstagramFeed from '../components/YouTubeGallery';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <ClientBanner /> */}
      <Categories />
      <AboutHome />
      {/* <OurStory /> */}

      {/* <Inspiration /> */}
      <InstagramFeed />
      <GoogleReviews />
      <Contact simplified={true} />
      <Difference />
    </>
  );
};

export default Home;

