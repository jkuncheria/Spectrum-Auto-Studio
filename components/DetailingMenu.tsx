import React from 'react';
import { Sparkles, Shield, Star, Check } from 'lucide-react';

const DetailingMenu: React.FC = () => {
  const packages = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#F0E130]" />,
      title: 'Quick Service',
      price: '$49',
      priceNote: '',
      description: 'Perfect for a quick, high-quality exterior clean',
      features: [
        'Ceramic infused foam & wash',
        'Spotless water rinse & towel dry',
        'Wheels & tire dressing'
      ],
      popular: false
    },
    {
      icon: <Shield className="w-6 h-6 text-[#F0E130]" />,
      title: 'Deep Clean',
      price: '$199 – $299',
      priceNote: 'Cars | Truck/SUV | 3rd Row',
      description: 'Total refresh for selling, buying, or returning from a road trip',
      features: [
        'Complete interior deep clean',
        'Full exterior wash & dry',
        'Stain & odor removal'
      ],
      popular: true
    },
    {
      icon: <Star className="w-6 h-6 text-[#F0E130]" />,
      title: 'Complete Detail',
      price: '$369 – $519',
      priceNote: 'Cars | Truck/SUV | 3rd Row',
      description: 'Keep your vehicle looking its very best',
      features: [
        'Paint protection & gloss enhancement',
        'Interior rejuvenation & preservation',
        'Premium finish inside & out'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-black px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Detailing <span className="italic text-[#F0E130]">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Pricing may vary depending on the cleanliness or complexity of your vehicle
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-transparent border rounded-xl p-8 ${
                pkg.popular ? 'border-[#F0E130]' : 'border-gray-800'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F0E130] text-black text-xs font-bold px-4 py-1 rounded-sm uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="border border-[#F0E130] p-3 rounded-lg inline-block mb-6">
                {pkg.icon}
              </div>

              {/* Title & Price */}
              <h3 className="text-[#F0E130] text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-white text-3xl font-bold mb-1">{pkg.price}</p>
              {pkg.priceNote && (
                <p className="text-gray-500 text-sm mb-4">{pkg.priceNote}</p>
              )}
              {!pkg.priceNote && <div className="mb-4"></div>}

              {/* Description */}
              <p className="text-gray-400 mb-6">{pkg.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F0E130] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="tel:6028078989"
                className="block w-full text-center bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Call to Book
              </a>
            </div>
          ))}
        </div>

        {/* Basic Service Note */}
        <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 text-center">
          <p className="text-gray-300">
            <span className="text-[#F0E130] font-semibold">Basic Service from $89</span>
            <span className="text-gray-400"> — Best for vehicles that only need a car wash with quick vacuuming and complete wipe down</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailingMenu;
