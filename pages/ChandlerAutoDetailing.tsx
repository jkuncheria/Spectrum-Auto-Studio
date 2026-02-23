import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle, Briefcase, Users } from 'lucide-react';
import SEO from '../components/SEO';

const ChandlerAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete detailing for family vehicles, daily drivers, and weekend cars.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Long-lasting protection ideal for the East Valley sun and freeway commutes.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Remove swirls and scratches from daily driving on the 101 and 202 freeways.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Essential heat rejection for Chandler summers - protect your interior and stay cool.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Guard against rock chips from the Price Corridor and freeway commutes.',
      href: '/factory-finish-system'
    },
    {
      title: 'Fleet Services',
      description: 'Corporate fleet detailing for Chandler businesses and tech companies.',
      href: '/fleet-washing'
    }
  ];

  const benefits = [
    'Mobile service throughout Chandler - home or office',
    'Corporate accounts for Intel, PayPal, and other Chandler businesses',
    'Family-friendly scheduling including weekends',
    'Serving Chandler for over a decade',
    'Competitive pricing for East Valley families',
    'Quick turnaround for busy professionals'
  ];

  const areas = [
    'Downtown Chandler',
    'Ocotillo',
    'Sun Lakes',
    'Chandler Heights',
    'Gilbert Border',
    'Price Corridor',
    'Chandler Fashion Center Area',
    'South Chandler',
    'West Chandler',
    'Intel Campus Area'
  ];

  const localFeatures = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#F0E130]" />,
      title: 'Tech Corridor Convenience',
      description: 'Chandler\'s Price Corridor is home to Intel, PayPal, and countless tech companies. We offer workplace detailing so your car is spotless while you work.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#F0E130]" />,
      title: 'Family-Focused Service',
      description: 'Chandler is known for its family-friendly communities. We specialize in family vehicle care - from minivans to SUVs - with kid-safe, eco-friendly products.'
    }
  ];

  return (
    <>
      <SEO
        title="Chandler Auto Detailing | Mobile Car Detailing East Valley | Old Town Auto Spa"
        description="Professional auto detailing in Chandler, AZ. Mobile service to your home or office. Ceramic coatings, paint correction, window tinting. Serving Ocotillo, Downtown Chandler, Price Corridor & Sun Lakes. Call (602) 807-8989."
        keywords="Chandler auto detailing, mobile car detailing Chandler, ceramic coating Chandler AZ, window tinting Chandler, paint correction East Valley, Ocotillo detailing, Price Corridor auto detail, Chandler car wash"
        canonical="https://www.oldtownautospa.com/chandler-auto-detailing"
        serviceSchema={{
          name: "Chandler Auto Detailing Services",
          description: "Professional mobile auto detailing services in Chandler, Arizona. Serving families and businesses throughout the East Valley.",
          provider: "Old Town Auto Spa",
          areaServed: ["Chandler", "Ocotillo", "Sun Lakes", "Gilbert", "East Valley"],
          priceRange: "$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">CHANDLER SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Auto Detailing in Chandler, AZ
              </h1>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Chandler combines thriving tech industry, beautiful master-planned communities, and family-friendly neighborhoods. Old Town Auto Spa serves all of Chandler with convenient mobile detailing - whether you're at home in Ocotillo or working along the Price Corridor.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From protecting your daily driver against the 101/202 commute to keeping the family SUV spotless for weekend activities, we have Chandler covered.
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
                alt="Auto Detailing Services in Chandler Arizona"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">East Valley's Choice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chandler-Specific Features */}
      <section className="py-16 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localFeatures.map((feature, idx) => (
              <div key={idx} className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
                <div className="bg-stone-900 p-4 rounded-xl inline-block mb-4">
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
      <section className="py-20 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Auto Detailing Services in Chandler
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete auto care for Chandler families, professionals, and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.href}
                className="bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-[#F0E130] transition-all group"
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
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Chandler Chooses Old Town Auto Spa
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
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Shield className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Fully Insured</h3>
                <p className="text-gray-400 text-sm">Complete protection</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Eco-Friendly</h3>
                <p className="text-gray-400 text-sm">Safe for families</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Weekend Hours</h3>
                <p className="text-gray-400 text-sm">Family-friendly times</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Award className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">10+ Years</h3>
                <p className="text-gray-400 text-sm">Serving East Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chandler Neighborhoods We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mobile detailing throughout Chandler and the East Valley.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="bg-stone-900 rounded-full px-6 py-3 border border-stone-800 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#F0E130]" />
                <span className="text-gray-300">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-stone-800 rounded-3xl p-10 md:p-16 text-center border border-stone-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Premium Detailing in Chandler?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Home or office, we bring professional detailing to you anywhere in Chandler.
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

export default ChandlerAutoDetailing;
