import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQ | Old Town Auto Spa | Auto Detailing Questions Phoenix"
        description="Frequently asked questions about Old Town Auto Spa services in Phoenix and Parker, Colorado. Get answers about our auto detailing services, ceramic coatings, headlight restoration, pricing, and more."
        keywords="auto detailing FAQ, car detailing questions Phoenix, ceramic coating FAQ, headlight restoration questions, Parker CO detailing"
        canonical="https://www.oldtownautospa.com/faq"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

