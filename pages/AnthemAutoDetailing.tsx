import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle, Home, Mountain } from 'lucide-react';
import SEO from '../components/SEO';

const AnthemAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete interior and exterior detailing for Anthem families and commuters.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Essential protection against the harsh North Phoenix desert sun and dust storms.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Restore your paint from freeway debris damage on the I-17 commute.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Beat the Anthem heat with premium window films - crucial for desert living.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Shield your vehicle from rock chips on the long I-17 commute to Phoenix.',
      href: '/factory-finish-system'
    },
    {
      title: 'Vehicle Wraps',
      description: 'Custom wraps for personal vehicles or Anthem-based business fleets.',
      href: '/vehicle-wraps'
    }
  ];

  const benefits = [
    'Mobile service - we come directly to your Anthem home',
    'Convenient scheduling for busy commuter families',
    'Protection packages designed for desert climate',
    'Weekend availability to fit your lifestyle',
    'Serving the entire Anthem community since day one',
    'No need to drive to Phoenix for quality detailing'
  ];

  const areas = [
    'Anthem Country Club',
    'Anthem Parkside',
    'Anthem Coventry',
    'Gavilan Peak',
    'Meridian Hills',
    'Parkside at Anthem',
    'New River (nearby)',
    'Desert Hills (nearby)',
    'North Phoenix Border'
  ];

  const localFeatures = [
    {
      icon: <Home className="w-8 h-8 text-[#F0E130]" />,
      title: 'At-Home Convenience',
      description: 'Skip the 30+ minute drive to Phoenix. We bring professional detailing directly to your Anthem driveway while you enjoy your weekend.'
    },
    {
      icon: <Mountain className="w-8 h-8 text-[#F0E130]" />,
      title: 'Desert Climate Experts',
      description: 'We understand how the North Valley sun, dust storms, and desert conditions affect your vehicle. Our treatments are designed for Anthem\'s unique environment.'
    }
  ];

  return (
    <>
      <SEO
        title="Anthem Auto Detailing | Mobile Car Detailing North Phoenix | Old Town Auto Spa"
        description="Professional mobile auto detailing in Anthem, AZ. We come to your Anthem home! Ceramic coatings, paint correction, window tinting & PPF. Serving Anthem Country Club, Parkside & all Anthem neighborhoods. Call (602) 807-8989."
        keywords="Anthem auto detailing, mobile detailing Anthem AZ, car detailing Anthem, ceramic coating Anthem, window tinting Anthem Arizona, Anthem Country Club detailing, North Phoenix auto detailing"
        canonical="https://www.oldtownautospa.com/anthem-auto-detailing"
        serviceSchema={{
          name: "Anthem Auto Detailing Services",
          description: "Professional mobile auto detailing services in Anthem, Arizona. Ceramic coatings, paint correction, and window tinting brought directly to your Anthem home.",
          provider: "Old Town Auto Spa",
          areaServed: ["Anthem", "Anthem Country Club", "New River", "Desert Hills", "North Phoenix"],
          priceRange: "$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">ANTHEM SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Mobile Auto Detailing in Anthem, AZ
              </h1>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Anthem residents no longer need to make the long drive to Phoenix for premium auto detailing. Old Town Auto Spa brings professional-grade services directly to your home in Anthem Country Club, Parkside, or any Anthem neighborhood.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Living in Anthem means dealing with intense desert sun, dust storms, and the daily I-17 commute. Our detailing and protection services are specifically designed to combat these challenges and keep your vehicle looking its best.
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
                src="/services/paint-correction.webp"
                alt="Mobile Auto Detailing in Anthem Arizona"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">Anthem's Trusted Detailers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthem-Specific Features */}
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
              Auto Detailing Services for Anthem Residents
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive auto care services brought directly to your Anthem home - no Phoenix commute required.
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
                Why Anthem Families Choose Us
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
                <h3 className="text-white font-bold mb-2">Desert Protection</h3>
                <p className="text-gray-400 text-sm">Built for AZ climate</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">Professional-grade only</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Weekend Service</h3>
                <p className="text-gray-400 text-sm">Fits your schedule</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Award className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">10+ Years</h3>
                <p className="text-gray-400 text-sm">Industry experience</p>
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
              Anthem Communities We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mobile detailing throughout Anthem and surrounding North Valley communities.
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
              Ready for Premium Detailing in Anthem?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Skip the drive to Phoenix. We'll bring professional auto detailing directly to your Anthem home.
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

export default AnthemAutoDetailing;
