import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Star, Shield, Sparkles, Clock, Award, CheckCircle, Gift, Users, Percent } from 'lucide-react';
import SEO from '../components/SEO';

const ScottsdaleLiving: React.FC = () => {
  const services = [
    {
      title: 'Auto Detailing',
      description: 'Complete interior and exterior detailing to restore your vehicle to showroom condition.',
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
    'Exclusive 20% discount on all services for group members',
    'Priority scheduling for Scottsdale Living members',
    'Mobile service - we come to your Scottsdale location',
    'Premium products trusted by discerning Scottsdale residents',
    'Fully insured with 10+ years of experience',
    'Check back monthly for exclusive member-only specials'
  ];

  return (
    <>
      <SEO
        title="Scottsdale Living Members | Exclusive 20% Off Auto Detailing | Old Town Auto Spa"
        description="Exclusive offer for Scottsdale Living Facebook group members! Get 20% off all auto detailing services. Ceramic coatings, paint correction, window tinting & more. Call (602) 807-8989 and mention Scottsdale Living!"
        keywords="Scottsdale auto detailing discount, Scottsdale Living special offer, ceramic coating Scottsdale, auto detailing Scottsdale AZ, car detailing discount Phoenix"
        canonical="https://www.oldtownautospa.com/scottsdale-living"
      />

      {/* Hero Section with Welcome Message */}
      <section className="relative py-16 bg-gradient-to-br from-gray-950 via-stone-900 to-gray-950 px-4 md:px-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F0E130]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0E130]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F0E130]/10 border border-[#F0E130]/30 rounded-full px-6 py-2 mb-8">
            <Users className="w-5 h-5 text-[#F0E130]" />
            <span className="text-[#F0E130] font-semibold text-sm uppercase tracking-wider">Exclusive Member Access</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome, <span className="text-[#F0E130]">Scottsdale Living</span> Members!
          </h1>
          
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            This is your private page — a special thank you for being part of the Scottsdale Living community. 
            Here you'll find exclusive offers and monthly specials created just for you.
          </p>
          
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Bookmark this page and check back regularly for new member-only deals!
          </p>

          <Link 
            to="/members-pricing" 
            className="inline-flex items-center gap-2 text-[#F0E130] hover:text-yellow-400 font-semibold mb-10 transition-colors"
          >
            View Our Complete Pricing Menu →
          </Link>

          {/* Main Offer Card */}
          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 md:p-12 border border-[#F0E130]/30 shadow-2xl max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-10 h-10 text-[#F0E130]" />
              <span className="text-[#F0E130] font-bold text-lg uppercase tracking-wider">Your Exclusive Offer</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Percent className="w-16 h-16 text-[#F0E130]" />
              <div className="text-left">
                <p className="text-6xl md:text-7xl font-black text-white">20<span className="text-[#F0E130]">%</span></p>
                <p className="text-2xl font-bold text-gray-300">OFF ALL SERVICES</p>
              </div>
            </div>
            
            <p className="text-xl text-white mb-4">
              Just mention <span className="text-[#F0E130] font-bold">"Scottsdale Living"</span> when booking!
            </p>
            
            <p className="text-gray-400 text-sm mb-8">
              *Excludes monthly maintenance packages. Cannot be combined with other offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center text-lg"
              >
                Claim Your Discount
              </Link>
              <a
                href="tel:6028078989"
                className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-600 text-lg"
              >
                <Phone className="w-5 h-5" />
                (602) 807-8989
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F0E130] fill-[#F0E130]" />
                ))}
              </div>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#F0E130]" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F0E130]" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services Included in Your Discount
            </h2>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All of our premium auto care services are eligible for your 20% Scottsdale Living discount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.href}
                className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-[#F0E130] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-[#F0E130] text-black text-xs font-bold px-2 py-1 rounded">
                  20% OFF
                </div>
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
                Why Scottsdale Trusts Old Town Auto Spa
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
                <h3 className="text-white font-bold mb-2">Mobile Service</h3>
                <p className="text-gray-400 text-sm">We come to you</p>
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

      {/* Pricing Table Placeholder - Will be added later */}
      {/* <section className="py-20 bg-stone-900 px-4 md:px-16">
        Pricing table will go here
      </section> */}

      {/* Final CTA */}
      <section className="py-20 bg-stone-900 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-stone-800 rounded-3xl p-10 md:p-16 text-center border border-[#F0E130]/20">
            <Gift className="w-16 h-16 text-[#F0E130] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Claim Your 20% Discount?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today and mention <span className="text-[#F0E130] font-bold">"Scottsdale Living"</span> to receive your exclusive member discount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:6028078989"
                className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-600"
              >
                <Phone className="w-5 h-5" />
                Call (602) 807-8989
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              *20% discount excludes monthly maintenance packages. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScottsdaleLiving;
