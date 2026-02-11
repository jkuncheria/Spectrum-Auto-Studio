import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Sparkles, Truck, Building2, Clock, Users } from 'lucide-react';
import SEO from '../components/SEO';

const FleetWashing: React.FC = () => {
  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-[#F0E130]" />,
      title: 'Professional Image',
      description: 'Keep your fleet looking professional and representing your brand with pride on every job.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#F0E130]" />,
      title: 'Flexible Scheduling',
      description: 'We work around your business hours to minimize downtime and keep your fleet on the road.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#F0E130]" />,
      title: 'Protect Your Investment',
      description: 'Regular professional washing extends vehicle life and maintains resale value across your fleet.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#F0E130]" />,
      title: 'Volume Discounts',
      description: 'Competitive pricing for commercial clients with multi-vehicle fleets. The more vehicles, the more you save.'
    }
  ];

  const vehicleTypes = [
    'Box trucks & delivery vans',
    'Service vehicles & work trucks',
    'Company cars & sedans',
    'Passenger vans & shuttles',
    'Construction equipment',
    'Trailers & semi-trucks',
    'Emergency vehicles',
    'Government & municipal vehicles'
  ];

  const services = [
    'Exterior fleet wash',
    'Interior cleaning & sanitization',
    'Engine bay degreasing',
    'Wheel & tire cleaning',
    'Glass cleaning',
    'Vinyl wrap safe washing',
    'Decal & graphics care',
    'Pressure washing'
  ];

  const packages = [
    {
      name: 'Basic Fleet Wash',
      description: 'Exterior cleaning for regular maintenance',
      frequency: 'Weekly/Bi-weekly',
      includes: ['Exterior hand wash', 'Wheel cleaning', 'Window cleaning', 'Tire dressing']
    },
    {
      name: 'Full Fleet Detail',
      description: 'Complete interior and exterior service',
      frequency: 'Monthly',
      includes: ['Full exterior wash', 'Interior vacuum & wipe', 'Dashboard cleaning', 'Odor treatment']
    },
    {
      name: 'Premium Fleet Care',
      description: 'Comprehensive fleet maintenance',
      frequency: 'Quarterly',
      includes: ['Deep exterior clean', 'Full interior detail', 'Engine bay cleaning', 'Paint protection']
    },
    {
      name: 'Custom Program',
      description: 'Tailored to your specific needs',
      frequency: 'Flexible',
      includes: ['Customized services', 'Dedicated account manager', 'Priority scheduling', 'Detailed reporting']
    }
  ];

  return (
    <>
      <SEO
        title="Fleet Washing Phoenix | Commercial Vehicle Detailing Services"
        description="Professional fleet washing and commercial vehicle detailing in Phoenix. Keep your business vehicles clean and professional. Volume discounts available. Free quotes."
        keywords="fleet washing Phoenix, commercial vehicle detailing, fleet cleaning, business vehicle wash, truck washing, van detailing Phoenix"
        canonical="https://www.oldtownautospa.com/fleet-washing"
        serviceSchema={{
          name: "Fleet Washing",
          description: "Commercial fleet washing and detailing services for businesses. Volume discounts available for regular maintenance programs."
        }}
      />
      <section className="py-24 bg-stone-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">FLEET WASHING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Commercial Fleet Washing & Detailing Services
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Keep your commercial fleet looking professional with our comprehensive fleet washing services. From delivery vans to semi-trucks, we provide reliable, high-quality cleaning that fits your business schedule and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Fleet Quote
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
                  src="/fleet.jpg" 
                  alt="Commercial Fleet Washing Services in Phoenix" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Fleet Services?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional fleet maintenance that keeps your business vehicles looking their best while saving you time and money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-stone-900 rounded-2xl p-8 text-center hover:bg-stone-800 transition-colors duration-300 border border-stone-800"
              >
                <div className="bg-stone-800 p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Vehicles We Service</h3>
            <div className="space-y-4">
              {vehicleTypes.map((vehicle, idx) => (
                <div key={idx} className="flex items-start">
                  <Truck className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{vehicle}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Fleet Services Offered</h3>
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Fleet Maintenance Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose a maintenance program that fits your fleet size and business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-[#F0E130] hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{pkg.description}</p>
                <p className="text-[#F0E130] text-sm font-semibold mb-4">Frequency: {pkg.frequency}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F0E130] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-stone-900 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Industries We Serve</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We work with businesses of all sizes across various industries to keep their fleets clean and professional.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Delivery & logistics companies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Construction & contractors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">HVAC & plumbing services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Real estate & property management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Government & municipal fleets</span>
              </li>
            </ul>
          </div>
          <div className="bg-stone-900 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Why Fleet Maintenance Matters</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A clean fleet is more than just appearance—it's about your business reputation and vehicle longevity.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">First impressions matter to customers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Prevent rust and corrosion damage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Maintain higher resale values</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Boost employee pride and morale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#F0E130] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Meet company and safety standards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Keep Your Fleet Looking Professional?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized fleet washing quote. Volume discounts available for commercial clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get Fleet Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:6028078989" className="border-2 border-[#F0E130] text-[#F0E130] hover:bg-[#F0E130] hover:text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default FleetWashing;
