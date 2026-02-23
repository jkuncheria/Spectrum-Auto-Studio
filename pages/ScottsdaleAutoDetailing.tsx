import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ScottsdaleAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete interior and exterior detailing services to restore your vehicle to showroom condition.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with professional-grade ceramic coatings that shield your paint for years.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Remove swirls, scratches, and oxidation to reveal a flawless, mirror-like finish.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Premium window films for heat rejection, UV protection, and enhanced privacy.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Invisible protection against rock chips, scratches, and road debris.',
      href: '/factory-finish-system'
    },
    {
      title: 'Vehicle Wraps',
      description: 'Custom vinyl wraps for color changes, commercial branding, or unique designs.',
      href: '/vehicle-wraps'
    }
  ];

  const benefits = [
    'Mobile service - we come to your Scottsdale location',
    'Serving North Scottsdale, Old Town, and surrounding areas',
    'Flexible scheduling including weekends',
    'Premium products and professional-grade equipment',
    'Fully insured and experienced technicians',
    'Competitive pricing with no hidden fees'
  ];

  const areas = [
    'North Scottsdale',
    'Old Town Scottsdale',
    'South Scottsdale',
    'Gainey Ranch',
    'McCormick Ranch',
    'DC Ranch',
    'Grayhawk',
    'Kierland',
    'Scottsdale Airpark',
    'Paradise Valley (nearby)'
  ];

  return (
    <>
      <SEO
        title="Scottsdale Auto Detailing | Mobile Car Detailing & Ceramic Coating | Old Town Auto Spa"
        description="Professional auto detailing services in Scottsdale, AZ. Mobile detailing, ceramic coatings, paint correction, window tinting & PPF. Serving North Scottsdale, Old Town & surrounding areas. Call (602) 807-8989 for a free quote!"
        keywords="Scottsdale auto detailing, mobile car detailing Scottsdale, ceramic coating Scottsdale, paint correction Scottsdale, window tinting Scottsdale, PPF Scottsdale, car wash Scottsdale, auto spa Scottsdale AZ"
        canonical="https://www.oldtownautospa.com/scottsdale-auto-detailing"
        serviceSchema={{
          name: "Scottsdale Auto Detailing Services",
          description: "Professional mobile auto detailing, ceramic coating, paint correction, and window tinting services in Scottsdale, Arizona.",
          provider: "Old Town Auto Spa",
          areaServed: ["Scottsdale", "North Scottsdale", "Old Town Scottsdale", "Paradise Valley"],
          priceRange: "$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">SCOTTSDALE SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Professional Auto Detailing in Scottsdale, AZ
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Old Town Auto Spa brings premium auto detailing services directly to you in Scottsdale. From luxury vehicles in North Scottsdale to everyday cars in Old Town, we deliver showroom-quality results at your home or office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:6028078989"
                  className="bg-stone-800 hover:bg-stone-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-700"
                >
                  <Phone className="w-5 h-5" />
                  (602) 807-8989
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/services/auto-detailing.webp"
                alt="Auto Detailing Services in Scottsdale, AZ"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">5-Star Rated in Scottsdale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Scottsdale Auto Detailing Services
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a complete range of professional auto care services to Scottsdale residents and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.href}
                className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-[#F0E130] transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F0E130] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Scottsdale Chooses Old Town Auto Spa
              </h2>
              <div className="w-20 h-1 bg-[#F0E130] mb-8"></div>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#F0E130] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Shield className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Fully Insured</h3>
                <p className="text-gray-400 text-sm">Complete peace of mind</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">Only the best materials</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Flexible Hours</h3>
                <p className="text-gray-400 text-sm">Weekends available</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Award className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">10+ Years</h3>
                <p className="text-gray-400 text-sm">Industry experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Scottsdale Areas We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide mobile auto detailing services throughout Scottsdale and surrounding communities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="bg-stone-800 rounded-full px-6 py-3 border border-stone-700 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#F0E130]" />
                <span className="text-gray-300">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 md:p-16 text-center border border-stone-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Premium Auto Detailing in Scottsdale?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote. We'll bring our professional detailing services directly to your Scottsdale location.
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
                Call (602) 807-8989
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScottsdaleAutoDetailing;
