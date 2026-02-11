import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sparkles, Award, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

const FactoryFinishSystem: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#F0E130]" />,
      title: 'Complete Protection',
      description: 'Our Factory Finish System provides comprehensive protection that maintains your vehicle\'s original appearance and value.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#F0E130]" />,
      title: 'Showroom Quality',
      description: 'Restore and maintain that brand-new showroom finish with our professional-grade products and techniques.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#F0E130]" />,
      title: 'Premium Results',
      description: 'Experience the highest level of finish quality that exceeds dealership standards.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#F0E130]" />,
      title: 'Expert Application',
      description: 'Our certified technicians use specialized equipment and techniques for flawless results every time.'
    }
  ];

  const services = [
    'Complete paint restoration',
    'Factory-level clear coat protection',
    'Professional paint correction',
    'Surface contamination removal',
    'Swirl and scratch removal',
    'High-gloss finish restoration',
    'Long-term protection packages',
    'Maintenance programs available'
  ];

  const packages = [
    {
      name: 'Essential',
      description: 'Basic factory finish restoration',
      includes: ['Paint decontamination', 'Light polish', 'Sealant application', '6-month protection']
    },
    {
      name: 'Professional',
      description: 'Enhanced restoration',
      includes: ['Full decontamination', 'Single-stage correction', 'Premium sealant', '1-year protection']
    },
    {
      name: 'Premium',
      description: 'Complete restoration',
      includes: ['Deep cleaning', 'Multi-stage correction', 'Ceramic sealant', '2-year protection']
    },
    {
      name: 'Ultimate',
      description: 'Maximum protection',
      includes: ['Full detail prep', 'Full paint correction', 'Ceramic coating', '5+ year protection']
    }
  ];

  return (
    <>
      <SEO
        title="Factory Finish System Phoenix | Professional Paint Restoration"
        description="Professional Factory Finish System services in Phoenix. Restore your vehicle's showroom appearance with our expert paint restoration and protection services. Free quotes."
        keywords="factory finish system Phoenix, paint restoration Phoenix, showroom finish, car paint protection, auto detailing Phoenix"
        canonical="https://www.oldtownautospa.com/factory-finish-system"
        serviceSchema={{
          name: "Factory Finish System",
          description: "Comprehensive paint restoration system that restores your vehicle to showroom-quality finish with professional-grade products and techniques."
        }}
      />
      <section className="py-24 bg-stone-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">FACTORY FINISH SYSTEM</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Factory Finish System | Showroom Quality Restoration
              </h1>
              <div className="w-20 h-1 bg-[#F0E130] mb-6"></div>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Restore your vehicle to its original factory finish with our comprehensive Factory Finish System. Our expert technicians use professional-grade products and techniques to deliver showroom-quality results that protect and enhance your vehicle's appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:6028078989" className="border-2 border-[#F0E130] text-[#F0E130] hover:bg-[#F0E130] hover:text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/services/factory-finish.webp" 
                  alt="Factory Finish System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Factory Finish System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-stone-900 rounded-2xl p-8 hover:shadow-lg border border-stone-800 transition-shadow">
                <div className="bg-stone-800 p-4 rounded-xl inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="mb-20 bg-stone-900 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#F0E130] flex-shrink-0" />
                <span className="text-white">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Packages</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Choose the package that best fits your needs. All packages include our satisfaction guarantee.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="border-2 border-stone-800 rounded-2xl p-6 hover:border-[#F0E130] transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#F0E130]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Restore Your Vehicle's Factory Finish?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts will help you choose the right package for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:6028078989" className="bg-stone-800 hover:bg-stone-700 text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              (602) 807-8989
            </a>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default FactoryFinishSystem;
