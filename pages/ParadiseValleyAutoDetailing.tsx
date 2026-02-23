import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle, Gem, Car } from 'lucide-react';
import SEO from '../components/SEO';

const ParadiseValleyAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Luxury Auto Detailing',
      description: 'White-glove detailing service for exotic cars, luxury vehicles, and high-end automobiles.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Multi-year protection with premium ceramic coatings worthy of your luxury investment.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Concours-level paint correction to achieve a flawless, mirror-like finish.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Premium ceramic window films for privacy, UV protection, and heat rejection.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Invisible armor to protect your exotic or luxury vehicle from any imperfections.',
      href: '/factory-finish-system'
    },
    {
      title: 'Custom Vehicle Wraps',
      description: 'Bespoke color changes and custom designs for discerning collectors.',
      href: '/vehicle-wraps'
    }
  ];

  const benefits = [
    'Discreet, professional service at your private residence',
    'Experience with Ferrari, Lamborghini, Porsche, Bentley, Rolls-Royce & more',
    'Flexible scheduling around your lifestyle',
    'Concierge-level customer service',
    'Products and techniques trusted by exotic car owners',
    'Complete confidentiality and professionalism'
  ];

  const areas = [
    'Paradise Valley Estates',
    'Clearwater Hills',
    'Mummy Mountain',
    'Camelback Mountain',
    'Lincoln Drive Corridor',
    'Mockingbird Lane',
    'Invergordon Estates',
    'Paradise Valley Country Club',
    'Scottsdale Border'
  ];

  const luxuryBrands = [
    'Ferrari', 'Lamborghini', 'Porsche', 'Bentley', 'Rolls-Royce', 
    'McLaren', 'Aston Martin', 'Mercedes-AMG', 'BMW M', 'Audi RS'
  ];

  const localFeatures = [
    {
      icon: <Gem className="w-8 h-8 text-[#F0E130]" />,
      title: 'Luxury Vehicle Specialists',
      description: 'Paradise Valley is home to some of Arizona\'s finest automobiles. We specialize in exotic and luxury vehicle care with the expertise these investments deserve.'
    },
    {
      icon: <Car className="w-8 h-8 text-[#F0E130]" />,
      title: 'Private Estate Service',
      description: 'We understand the privacy expectations of Paradise Valley residents. Discreet, professional service at your home with complete confidentiality.'
    }
  ];

  return (
    <>
      <SEO
        title="Paradise Valley Auto Detailing | Luxury & Exotic Car Detailing | Old Town Auto Spa"
        description="Elite auto detailing for Paradise Valley's luxury and exotic vehicles. Specialized care for Ferrari, Lamborghini, Porsche, Bentley & more. Ceramic coatings, paint correction, PPF. Private estate service. Call (602) 807-8989."
        keywords="Paradise Valley auto detailing, luxury car detailing Paradise Valley, exotic car detailing Arizona, Ferrari detailing Phoenix, Lamborghini detailing, ceramic coating Paradise Valley, PPF exotic cars, high-end auto detailing"
        canonical="https://www.oldtownautospa.com/paradise-valley-auto-detailing"
        serviceSchema={{
          name: "Paradise Valley Luxury Auto Detailing",
          description: "Elite mobile auto detailing services for luxury and exotic vehicles in Paradise Valley, Arizona. Specialized care for high-end automobiles.",
          provider: "Old Town Auto Spa",
          areaServed: ["Paradise Valley", "Clearwater Hills", "Mummy Mountain", "Camelback Mountain"],
          priceRange: "$$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">PARADISE VALLEY SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Luxury Auto Detailing in Paradise Valley
              </h1>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Paradise Valley is home to Arizona's most prestigious automobiles and discerning collectors. Old Town Auto Spa provides elite detailing services worthy of your luxury investment - delivered with the discretion and professionalism you expect.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From exotic supercars to classic collectibles, our team has the expertise and premium products to maintain your vehicle at concours-level condition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
                >
                  Request Consultation
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
                src="/services/ceramic-coating.webp"
                alt="Luxury Auto Detailing in Paradise Valley Arizona"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">Trusted by Exotic Car Owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Brands */}
      <section className="py-12 bg-stone-900 px-4 md:px-16 border-y border-stone-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">Experienced With</p>
          <div className="flex flex-wrap justify-center gap-6">
            {luxuryBrands.map((brand, idx) => (
              <span key={idx} className="text-gray-400 font-semibold">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Paradise Valley-Specific Features */}
      <section className="py-16 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localFeatures.map((feature, idx) => (
              <div key={idx} className="bg-stone-900 rounded-2xl p-8 border border-stone-800">
                <div className="bg-stone-800 p-4 rounded-xl inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elite Services for Exceptional Vehicles
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive luxury auto care services delivered to your Paradise Valley estate.
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
                Why Paradise Valley Trusts Old Town Auto Spa
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
                <p className="text-gray-400 text-sm">High-value coverage</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">Luxury-grade only</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Your Schedule</h3>
                <p className="text-gray-400 text-sm">Complete flexibility</p>
              </div>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 text-center">
                <Award className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Exotic Expertise</h3>
                <p className="text-gray-400 text-sm">Specialized training</p>
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
              Paradise Valley Areas We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Private estate service throughout Paradise Valley's most exclusive neighborhoods.
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
              Experience Elite Auto Care in Paradise Valley
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Your luxury vehicle deserves exceptional care. Contact us for a private consultation at your Paradise Valley residence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
              >
                Request Consultation
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

export default ParadiseValleyAutoDetailing;
