import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Old Town Auto Spa | Phoenix Mobile Detailing"
        description="Learn about Old Town Auto Spa, Phoenix's trusted mobile detailing company. Professional auto detailing, ceramic coatings, PPF, and window tinting services."
        keywords="about Old Town Auto Spa, Phoenix mobile detailing, auto detailing Phoenix, ceramic coating Phoenix, PPF Phoenix"
        canonical="https://splashmobiledetail.com/about"
      />
      <AboutComponent />
    </>
  );
};

export default About;

