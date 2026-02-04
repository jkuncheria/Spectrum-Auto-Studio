import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Award, Sparkles, Shield, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#F21C1D]" />,
      title: 'Over a Decade of Expertise',
      description: 'More than 10 years of experience in professional auto detailing and protection services.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#F21C1D]" />,
      title: 'State-of-the-Art Facility',
      description: 'Our modern facility features industry-leading equipment and techniques.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#F21C1D]" />,
      title: 'Premium Protection',
      description: 'Ceramic coatings, paint protection films, and professional detailing services.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#F21C1D]" />,
      title: 'Transparent Customer Care',
      description: 'Honest communication and exceptional service every step of the way.'
    }
  ];

  const services = [
    'Interior Detailing',
    'Exterior Detailing',
    'Paint Corrections',
    'Ceramic Coatings',
    'Paint Protection Films',
    'Window Tinting',
    'Vinyl Wraps',
    'Factory Finish System'
  ];

  return (
    <section className="py-24 bg-gray-950 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img 
            src="/services/auto-detailing.webp" 
            alt="About Us - Professional Auto Detailing and Protection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className="text-[#F21C1D] font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">
              Denver's Premier Auto Studio
            </h1>
          </div>
        </div>

        {/* Main About Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to Spectrum Auto Studio</h2>
            <div className="w-20 h-1 bg-[#F21C1D] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-800">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-white">Spectrum Auto Studio</span>, Denver's premier destination for top-tier car detailing. With over a decade of expertise, we specialize in interior and exterior detailing, paint corrections, ceramic coatings, and paint protection films.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our <span className="font-bold text-white">state-of-the-art facility</span>, industry-leading techniques, and transparent customer care redefine automotive aesthetics and elevate your driving experience.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Choose Spectrum Auto Studio for a seamless blend of passion and precision, ensuring your vehicle reflects <span className="font-bold text-[#F21C1D]">luxury and style</span>, enhancing its value and extending its life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:6307959999" 
                  className="flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#F21C1D] hover:bg-red-700"
                >
                  <Phone className="w-5 h-5" />
                  (630) 795-9999
                </a>
                <div className="flex items-center justify-center gap-2 bg-gray-800 text-gray-300 font-bold py-4 px-8 rounded-xl border border-gray-700">
                  <MapPin className="w-5 h-5 text-[#F21C1D]" />
                  Denver, CO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Aiden Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#F21C1D] font-bold tracking-wider text-sm uppercase">ALL ABOUT SPECTRUM AUTO STUDIO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Meet Aiden</h2>
            <p className="text-gray-400">Owner of Spectrum Auto Studio</p>
            <div className="w-20 h-1 bg-[#F21C1D] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F21C1D]">
                <img 
                  src="/aiden.webp" 
                  alt="Aiden - Owner of Spectrum Auto Studio"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm <span className="font-bold text-white">Aiden</span>, and cars aren't just my business. They're my lifelong passion.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  With over <span className="font-bold text-[#F21C1D]">15 years of entrepreneurial experience</span> in detailing, I've had the privilege of perfecting my craft at prestigious dealerships like <span className="font-bold text-white">Porsche and Lamborghini</span>, where precision and excellence are paramount.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Spectrum Auto Studio, I'm committed to delivering incredible results with honesty and transparency, ensuring your vehicle not only looks its absolute best but receives care and attention you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-[#F21C1D] transition-colors">
                <div className="bg-gray-800 p-4 rounded-xl inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Banner */}
        <div className="bg-[#F21C1D] rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Star Reviews Banner */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-20 text-center border border-gray-800">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-[#F21C1D] fill-[#F21C1D]" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white">Where Detail Expertise Meets Luxury</p>
          <p className="text-gray-400 mt-2">Trusted by customers across the Denver Metro Area</p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center border border-gray-800">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#F21C1D]" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Transform Your Vehicle at Spectrum Auto Studio
          </h3>
          <p className="text-xl text-[#F21C1D] font-semibold mb-2">
            Premium Detailing, Lasting Protection.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book Your Transformation Today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:6307959999" 
              className="flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#F21C1D] hover:bg-red-700"
            >
              <Phone className="w-5 h-5" />
              (630) 795-9999
            </a>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


