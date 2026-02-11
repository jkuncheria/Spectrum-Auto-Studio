import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Sparkles, Eye, Layers, Award } from 'lucide-react';
import SEO from '../components/SEO';

const PaintCorrection: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#F0E130]" />,
      title: 'Remove Swirl Marks',
      description: 'Eliminate those spider-web swirl marks caused by improper washing and automatic car washes.'
    },
    {
      icon: <Eye className="w-8 h-8 text-[#F0E130]" />,
      title: 'Restore Clarity',
      description: 'Bring back the deep, mirror-like finish your paint had when it was new with professional polishing.'
    },
    {
      icon: <Layers className="w-8 h-8 text-[#F0E130]" />,
      title: 'Prep for Protection',
      description: 'Paint correction is essential before applying ceramic coating or PPF for the best results.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#F0E130]" />,
      title: 'Increase Value',
      description: 'A properly corrected and protected finish significantly increases your vehicle\'s resale value.'
    }
  ];

  const defectsRemoved = [
    'Swirl marks and spider webs',
    'Light scratches',
    'Water spots and etching',
    'Oxidation and fading',
    'Buffer trails and holograms',
    'Bird dropping etching',
    'Industrial fallout damage',
    'Clear coat orange peel'
  ];

  const packages = [
    {
      name: 'Single Stage',
      description: 'Light correction',
      correction: '50-60%',
      includes: ['One-step polish', 'Light defect removal', 'Gloss enhancement']
    },
    {
      name: 'Two Stage',
      description: 'Standard correction',
      correction: '70-85%',
      includes: ['Compound stage', 'Polish stage', 'Moderate defect removal']
    },
    {
      name: 'Three Stage',
      description: 'Full correction',
      correction: '90-95%',
      includes: ['Heavy compound', 'Medium polish', 'Fine polish']
    },
    {
      name: 'Wet Sand',
      description: 'Extreme correction',
      correction: '95%+',
      includes: ['Wet sanding', 'Multi-stage polish', 'Show car finish']
    }
  ];

  return (
    <>
      <SEO
        title="Paint Correction Phoenix | Swirl Removal | Polish & Buff"
        description="Professional paint correction in Phoenix. Remove swirls, scratches, water spots. Multi-stage polishing. Prep for ceramic coating. Free quotes."
        keywords="paint correction Phoenix, swirl removal, scratch removal, car polishing Phoenix, paint restoration"
        canonical="https://www.oldtownautospa.com/paint-correction"
        serviceSchema={{
          name: "Paint Correction",
          description: "Multi-stage paint correction to remove swirls, scratches, water spots, and oxidation, restoring your paint to a flawless mirror finish."
        }}
      />
      <section className="py-24 bg-stone-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F0E130] font-bold tracking-wider text-sm uppercase">PAINT CORRECTION</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Paint Correction | Restore Your Paint's True Potential
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Reveal the true beauty of your paint with professional paint correction. Our multi-stage polishing process removes swirls, scratches, and defects to restore a flawless, mirror-like finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:9706186183" className="border-2 border-[#F0E130] text-[#F0E130] hover:bg-[#F0E130] hover:text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/services/paint-correction.webp" 
                  alt="Paint Correction Services in Phoenix" 
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
            <h2 className="text-3xl font-bold text-white mb-4">Why Paint Correction?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Over time, your paint accumulates defects that dull its appearance. Paint correction restores the finish to better than new.
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

        {/* Defects Removed */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Defects We Remove
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {defectsRemoved.map((defect, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{defect}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Correction Levels</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We assess your paint's condition and recommend the appropriate level of correction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-[#F0E130] hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{pkg.description}</p>
                <p className="text-[#F0E130] text-lg font-bold mb-4">{pkg.correction} defect removal</p>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Restore Your Paint?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Experience the transformation of professional paint correction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:9706186183" className="border-2 border-[#F0E130] text-[#F0E130] hover:bg-[#F0E130] hover:text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
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

export default PaintCorrection;
