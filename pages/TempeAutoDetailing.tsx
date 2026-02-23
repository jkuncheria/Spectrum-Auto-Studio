import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Shield, Sparkles, Clock, Award, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import SEO from '../components/SEO';

const TempeAutoDetailing: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete interior and exterior detailing perfect for busy students and professionals.',
      href: '/auto-detailing'
    },
    {
      title: 'Ceramic Coating',
      description: 'Protect your vehicle from Arizona sun damage with long-lasting ceramic protection.',
      href: '/ceramic-coatings'
    },
    {
      title: 'Paint Correction',
      description: 'Remove swirls and scratches caused by automatic car washes and parking lot damage.',
      href: '/paint-correction'
    },
    {
      title: 'Window Tinting',
      description: 'Essential heat rejection for Tempe summers - keep your car cool while parked on campus or at work.',
      href: '/window-tinting'
    },
    {
      title: 'Paint Protection Film',
      description: 'Guard against rock chips from I-10 and Loop 101 commutes.',
      href: '/factory-finish-system'
    },
    {
      title: 'Vehicle Wraps',
      description: 'Custom wraps for personal style or business branding in the Tempe market.',
      href: '/vehicle-wraps'
    }
  ];

  const benefits = [
    'Convenient mobile service - we come to ASU campus, apartments, or your workplace',
    'Student-friendly scheduling around class times',
    'Corporate fleet services for Tempe businesses',
    'Weekend availability for busy professionals',
    'Competitive pricing with student discounts available',
    'Quick turnaround for time-sensitive needs'
  ];

  const areas = [
    'Downtown Tempe',
    'ASU Campus Area',
    'Tempe Marketplace',
    'South Tempe',
    'Tempe Town Lake',
    'McClintock Corridor',
    'Guadalupe',
    'Ahwatukee (nearby)',
    'Mesa Border'
  ];

  const localFeatures = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#F0E130]" />,
      title: 'ASU Student Friendly',
      description: 'We understand student schedules and budgets. Mobile service comes to your dorm, apartment, or campus parking.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#F0E130]" />,
      title: 'Corporate Services',
      description: 'Fleet detailing for Tempe businesses along the 101 corridor and downtown tech companies.'
    }
  ];

  return (
    <>
      <SEO
        title="Tempe Auto Detailing | Mobile Car Detailing Near ASU | Old Town Auto Spa"
        description="Professional auto detailing in Tempe, AZ. Mobile detailing services near ASU, Tempe Marketplace & downtown. Ceramic coatings, paint correction, window tinting. Student discounts available! Call (602) 807-8989."
        keywords="Tempe auto detailing, car detailing near ASU, mobile detailing Tempe, ceramic coating Tempe, window tinting Tempe AZ, paint correction Tempe, ASU car detailing, Tempe Marketplace auto detail"
        canonical="https://www.oldtownautospa.com/tempe-auto-detailing"
        serviceSchema={{
          name: "Tempe Auto Detailing Services",
          description: "Professional mobile auto detailing, ceramic coating, and window tinting services in Tempe, Arizona. Serving ASU students, residents, and businesses.",
          provider: "Old Town Auto Spa",
          areaServed: ["Tempe", "ASU", "Tempe Marketplace", "South Tempe", "Ahwatukee"],
          priceRange: "$$"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">TEMPE SERVICE AREA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Auto Detailing in Tempe, AZ
              </h1>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                From ASU students keeping their first car pristine to tech professionals along the Tempe Town Lake corridor, Old Town Auto Spa delivers premium mobile detailing services throughout Tempe.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We understand Tempe's unique mix of college life, thriving businesses, and desert climate. Our services are designed to protect your vehicle from the intense Arizona sun while fitting your busy schedule.
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
                src="/services/ceramic-coating.webp"
                alt="Auto Detailing Services in Tempe near ASU"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-xl p-4 border border-stone-800 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                  ))}
                </div>
                <p className="text-white font-semibold">Trusted by ASU Students & Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempe-Specific Features */}
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
              Auto Detailing Services in Tempe
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're a Sun Devil, a downtown professional, or a Tempe resident, we have services tailored to your needs.
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
                Why Tempe Chooses Old Town Auto Spa
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
                <p className="text-gray-400 text-sm">Complete peace of mind</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Sparkles className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">Professional-grade only</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Clock className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Flexible Hours</h3>
                <p className="text-gray-400 text-sm">Work around your classes</p>
              </div>
              <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 text-center">
                <Award className="w-10 h-10 text-[#F0E130] mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">Student Discounts</h3>
                <p className="text-gray-400 text-sm">Show your ASU ID</p>
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
              Tempe Neighborhoods We Serve
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mobile detailing throughout Tempe - from Mill Avenue to the 101 corridor.
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
              Ready for Premium Auto Detailing in Tempe?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're near ASU, Tempe Marketplace, or anywhere in between - we'll come to you with professional detailing services.
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

export default TempeAutoDetailing;
