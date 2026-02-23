import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle, Droplets, Sun } from 'lucide-react';
import SEO from '../components/SEO';

const FountainHillsAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete interior and exterior detailing for Fountain Hills residents and retirees.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Essential protection against the intense Sonoran Desert sun and monsoon dust.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Restore sun-faded paint and remove desert pinstriping from Fountain Hills roads.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Premium heat rejection for comfortable driving in the Fountain Hills climate.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Guard against rock chips on Shea Boulevard and the Beeline Highway.',
      href: '/factory-finish-system'
    },
    {
      title: 'Vehicle Wraps',
      description: 'Custom wraps for personal style or local Fountain Hills business branding.',
      href: '/vehicle-wraps'
    }
  ];

  const benefits = [
    'Mobile service - we come to your Fountain Hills home',
    'No need to drive to Scottsdale or Mesa for quality detailing',
    'Flexible scheduling for retirees and working professionals',
    'Desert climate protection specialists',
    'Serving the Fountain Hills community with pride',
    'Convenient service while you enjoy the fountain or golf'
  ];

  const areas = [
    'Downtown Fountain Hills',
    'Fountain Hills Boulevard',
    'Sunridge Canyon',
    'FireRock Country Club',
    'Eagle Mountain',
    'CopperWynd',
    'Balera',
    'Crestview',
    'Rio Verde (nearby)',
    'Fort McDowell (nearby)'
  ];

  const localFeatures = [
    {
      icon: <Droplets className="w-8 h-8 text-[#F0E130]" />,
      title: 'Fountain Hills\' Trusted Detailer',
      description: 'Just like the famous fountain that defines your town, we bring a refreshing level of quality to auto care. Fountain Hills deserves premium service without the drive to the city.'
    },
    {
      icon: <Sun className="w-8 h-8 text-[#F0E130]" />,
      title: 'Desert Protection Experts',
      description: 'Fountain Hills sits in the beautiful Sonoran Desert, but that sun is brutal on vehicles. Our ceramic coatings and PPF are specifically chosen to combat Arizona\'s extreme UV exposure.'
    }
  ];

  return (
    <>
      <SEO
        title="Fountain Hills Auto Detailing | Mobile Car Detailing | Old Town Auto Spa"
        description="Professional mobile auto detailing in Fountain Hills, AZ. We come to you! Ceramic coatings, paint correction, window tinting & PPF. Serving Sunridge Canyon, FireRock, Eagle Mountain & all Fountain Hills. Call (602) 807-8989."
        keywords="Fountain Hills auto detailing, mobile detailing Fountain Hills, car detailing Fountain Hills AZ, ceramic coating Fountain Hills, window tinting Fountain Hills, Sunridge Canyon detailing, FireRock auto detail"
        canonical="https://www.oldtownautospa.com/fountain-hills-auto-detailing"
        serviceSchema={{
          name: "Fountain Hills Auto Detailing Services",
          description: "Professional mobile auto detailing services in Fountain Hills, Arizona. Ceramic coatings, paint correction, and window tinting brought to your Fountain Hills home.",
          provider: "Old Town Auto Spa",
          areaServed: ["Fountain Hills", "Sunridge Canyon", "FireRock", "Eagle Mountain", "Rio Verde"],
          priceRange: "$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">FOUNTAIN HILLS SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Auto Detailing in Fountain Hills, AZ
              </h1>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Fountain Hills is a hidden gem in the Arizona desert - a peaceful community known for its world-famous fountain, stunning mountain views, and tight-knit residents. Old Town Auto Spa is proud to bring premium mobile detailing services directly to this special community.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                No more driving 30+ minutes to Scottsdale or Mesa for quality auto care. We bring professional-grade detailing, ceramic coatings, and paint protection right to your Fountain Hills driveway.
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
                src="/services/window-tint.webp"
                alt="Auto Detailing Services in Fountain Hills Arizona"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">Fountain Hills' Choice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fountain Hills-Specific Features */}
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
              Auto Detailing Services in Fountain Hills
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete auto care services brought directly to your Fountain Hills home.
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
                Why Fountain Hills Trusts Old Town Auto Spa
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
                <h3 className="text-white font-bold mb-2">Desert Tough</h3>
                <p className="text-gray-400 text-sm">AZ climate protection</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">Professional-grade only</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Your Schedule</h3>
                <p className="text-gray-400 text-sm">Flexible appointments</p>
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
              Fountain Hills Areas We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mobile detailing throughout Fountain Hills and nearby communities.
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
              Ready for Premium Detailing in Fountain Hills?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Skip the drive to Scottsdale. We bring professional auto detailing directly to your Fountain Hills home.
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

export default FountainHillsAutoDetailing;
