import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, DollarSign } from 'lucide-react';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  return (
    <>
      <SEO
        title="Pricing | Auto Detailing Prices Phoenix | Old Town Auto Spa"
        description="View our complete pricing menu for auto detailing services. Transparent pricing for exterior, interior, ceramic coatings, paint correction, and specialty services in Phoenix."
        keywords="auto detailing prices Phoenix, car detailing cost, ceramic coating price, window tinting cost Phoenix, paint correction pricing"
        canonical="https://www.oldtownautospa.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-950 via-stone-900 to-gray-950 px-4 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F0E130]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0E130]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F0E130]/10 border border-[#F0E130]/30 rounded-full px-6 py-2 mb-6">
            <DollarSign className="w-5 h-5 text-[#F0E130]" />
            <span className="text-[#F0E130] font-semibold text-sm uppercase tracking-wider">Pricing</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Complete <span className="text-[#F0E130]">Pricing Menu</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional auto detailing services at competitive prices. No hidden fees, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#F0E130] hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:6028078989"
              className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-600"
            >
              <Phone className="w-5 h-5" />
              (602) 807-8989
            </a>
          </div>
        </div>
      </section>

      {/* Wash Services Section */}
      <section className="py-16 bg-stone-900 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Wash Services</h2>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-8"></div>

          {/* Service Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-stone-800 rounded-xl p-6 border border-stone-700">
              <h3 className="text-[#F0E130] font-bold mb-2">Basic Interior Cleanup <span className="text-gray-400 font-normal text-sm">*1-2 Hours</span></h3>
              <p className="text-gray-400 text-sm">Spray and Wipe Down of Surfaces, Detail Cup Holders, Vacuuming of all visible/major areas, Windows and Windshield. *Not enough time for Stubborn spots & areas, Door Jambs, Hair, Sand, Residues, Extra dirty vehicles</p>
            </div>
            <div className="bg-stone-800 rounded-xl p-6 border border-stone-700">
              <h3 className="text-[#F0E130] font-bold mb-2">Complete Interior Refresh <span className="text-gray-400 font-normal text-sm">*3-6 Hours</span></h3>
              <p className="text-gray-400 text-sm">Complete interior refresh including High Pressure Steam Cleaning, Air Vents, Cracks and Crevices beneath and between Seats, stain & buildup around frequently touched areas, Floor Mats Restored, Carpets and Seats Shampooed and Extracted, Door Jambs Waxed</p>
            </div>
            <div className="bg-stone-800 rounded-xl p-6 border border-stone-700">
              <h3 className="text-[#F0E130] font-bold mb-2">Basic Exterior Wash <span className="text-gray-400 font-normal text-sm">*20-40 Min</span></h3>
              <p className="text-gray-400 text-sm">Soft Horsehair Brush or Hand Mitt, One pass around the vehicle, Wheel Well Wash, Front face of wheels, Bug removal. *Stubborn Debris may be left behind</p>
            </div>
            <div className="bg-stone-800 rounded-xl p-6 border border-stone-700">
              <h3 className="text-[#F0E130] font-bold mb-2">Complete Exterior Detail <span className="text-gray-400 font-normal text-sm">*1-3 Hours</span></h3>
              <p className="text-gray-400 text-sm">Hand Mitt, Foam, Deep Scrub of Tires, Comprehensive Wheel and Wheel Well Cleaning, Bug Removal, Windows Polished, Trims Detailed and Conditioned, Hydrophobic Ceramic Foam Sealant</p>
            </div>
          </div>

          {/* Pricing Tables */}
          <div className="space-y-8">
            {/* Basic Services */}
            <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
              <div className="bg-stone-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Basic Services</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-700">
                      <th className="text-left py-4 px-6 text-gray-400 font-semibold">Service</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Coupe</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Sedan/Light Truck/SUV</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Full Size Truck</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Full Size SUV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-700">
                      <td className="py-4 px-6 text-white font-medium">Exterior</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$69</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$79</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$99</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$109</td>
                    </tr>
                    <tr className="border-b border-stone-700">
                      <td className="py-4 px-6 text-white font-medium">Interior</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$69</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$79</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$89</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$109</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-white font-medium">Full Car</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$129</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$149</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$179</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$209</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Complete Services */}
            <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
              <div className="bg-[#F0E130] px-6 py-4">
                <h3 className="text-xl font-bold text-black">Complete Services</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-700">
                      <th className="text-left py-4 px-6 text-gray-400 font-semibold">Service</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Coupe</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Sedan/Light Truck/SUV</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Full Size Truck</th>
                      <th className="text-center py-4 px-4 text-gray-400 font-semibold">Full Size SUV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-700">
                      <td className="py-4 px-6 text-white font-medium">Exterior</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$129</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$139</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$159</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$179</td>
                    </tr>
                    <tr className="border-b border-stone-700">
                      <td className="py-4 px-6 text-white font-medium">Interior</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$149</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$169</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$179</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$209</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-white font-medium">Full Car</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$249</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$279</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$299</td>
                      <td className="py-4 px-4 text-center text-[#F0E130] font-bold">$359</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Specialty Vehicles */}
            <div className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700">
              <div className="bg-stone-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Specialty Vehicles</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Golf Cart Detail</p>
                  <p className="text-[#F0E130] font-bold text-xl">$109</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Motorcycle Detail</p>
                  <p className="text-[#F0E130] font-bold text-xl">$149</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Motorcycle Chrome Polish</p>
                  <p className="text-[#F0E130] font-bold text-xl">$49</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">RV Wash n' Wax</p>
                  <p className="text-[#F0E130] font-bold text-xl">$199</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">UTV Detail</p>
                  <p className="text-[#F0E130] font-bold text-xl">$119</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-1">Boat Wash</p>
                  <p className="text-[#F0E130] font-bold text-xl">$199+</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">*25% Luxury/Classic Vehicle Upcharge (Extra cost for fresh premium materials to ensure a proper cleaning and to prevent scratching/damage)</p>
        </div>
      </section>

      {/* Exterior Add-Ons Section */}
      <section className="py-16 bg-gray-950 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Exterior Add-On Services</h2>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Add Tire Shine Basic Wash</h3>
                <span className="text-[#F0E130] font-bold">$9</span>
              </div>
              <p className="text-gray-400 text-sm">Enhance Tire Cosmetic</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Ceramic Foam Sealant</h3>
                <span className="text-[#F0E130] font-bold">$20</span>
              </div>
              <p className="text-gray-400 text-sm">Hydrophobic, Anti Static, 2-3 Month protection</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Spray Wax</h3>
                <span className="text-[#F0E130] font-bold">$40</span>
              </div>
              <p className="text-gray-400 text-sm">Light Gloss enhancement w/ 2-3 Month protection</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Hand Carnauba Wax</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$80 | $100 | $120</span>
              </div>
              <p className="text-gray-400 text-sm">High Gloss & 6–12 Month protection</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">6–12 Month Ceramic Sealant</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$79 | $99 | $119</span>
              </div>
              <p className="text-gray-400 text-sm">Hydrophobic, Anti Static, high-gloss sealant</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Clay Bar Treatment</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$29 | $39 | $49</span>
              </div>
              <p className="text-gray-400 text-sm">Remove contaminants from pores of paint</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Machine Wax / Full Body Polish</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$139 | $159 | $199</span>
              </div>
              <p className="text-gray-400 text-sm">Light Swirl Removal & High Gloss</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">One-Step Paint Correction</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$219 | $249 | $299</span>
              </div>
              <p className="text-gray-400 text-sm">50–80% scratch/swirl removal</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">1–2 Yr Ceramic Coating</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$399 | $459 | $559</span>
              </div>
              <p className="text-gray-400 text-sm">*Gyeon Mohs Includes Annual Top Up & 1 Yr Warranty</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">2-3 Yr Ceramic Coating</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$599 | $659 | $799</span>
              </div>
              <p className="text-gray-400 text-sm">*Gyeon Mohs Includes (2) Annual Top Up & 2 Yr Warranty</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Engine Bay Detail</h3>
                <span className="text-[#F0E130] font-bold">$139</span>
              </div>
              <p className="text-gray-400 text-sm">Deep Cleaning of the Engine bay to Remove Grease and Oil</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Engine Bay Wash</h3>
                <span className="text-[#F0E130] font-bold">$59</span>
              </div>
              <p className="text-gray-400 text-sm">Foam and scrub of the visible portion of the engine bay with a spotless rinse</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Headlight Restoration w/ Ceramic Coating</h3>
                <span className="text-[#F0E130] font-bold">$99</span>
              </div>
              <p className="text-gray-400 text-sm">Complete Restoration of the Headlights to bring back a Factory Finish</p>
            </div>

            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Sticker/Adhesive Removal</h3>
                <span className="text-[#F0E130] font-bold">$2-$5/Each</span>
              </div>
              <p className="text-gray-400 text-sm">Complete Removal of Sticker or Adhesive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Add-Ons Section */}
      <section className="py-16 bg-stone-900 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Interior Add-Ons</h2>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Leather Conditioner</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$40 | $50 | $60</span>
              </div>
              <p className="text-gray-400 text-sm">Moisturize and hydrate your leather for long term care and protection</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Chlorine Dioxide Gas Odor Treatment</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$79 | $99 | $119</span>
              </div>
              <p className="text-gray-400 text-sm">Gas Seeps into all cracks and crevices and deep into the foam</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Enzyme Disinfection Odor Treatment</h3>
                <span className="text-[#F0E130] font-bold whitespace-nowrap text-sm">$69 | $79 | $89</span>
              </div>
              <p className="text-gray-400 text-sm">Enzyme Based Cleaner to break down organic soils and Odors</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Enzyme + ClO2 Odor Removal</h3>
                <span className="text-[#F0E130] font-bold">$149</span>
              </div>
              <p className="text-gray-400 text-sm">Complete Odor treatment for the most Extreme Situations</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Bio Hazards; Bodily, Animal</h3>
                <span className="text-[#F0E130] font-bold">$49-$499</span>
              </div>
              <p className="text-gray-400 text-sm">PPE Required and additional Costs incur</p>
            </div>

            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold">Extra Dirty Vehicle</h3>
                <span className="text-[#F0E130] font-bold">$49-$99</span>
              </div>
              <p className="text-gray-400 text-sm">Extra Time to clean your vehicle compared to the standard cleaning time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Packages Section */}
      <section className="py-16 bg-gray-950 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Monthly Package Pricing</h2>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-10"></div>

          <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 border border-stone-700">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-stone-700">
                <span className="text-white font-medium">Basic Monthly Package</span>
                <span className="text-[#F0E130] font-bold">40% off Basic Price</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-700">
                <span className="text-white font-medium">Basic Bi-Weekly Package</span>
                <span className="text-[#F0E130] font-bold">50% off Basic Price</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-700">
                <span className="text-white font-medium">Premium VIP Monthly Package</span>
                <span className="text-[#F0E130] font-bold">40% off Complete Price</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-700">
                <span className="text-white font-medium">Premium VIP Bi-Weekly Package</span>
                <span className="text-[#F0E130] font-bold">50% off Complete Price</span>
              </div>
            </div>

            <p className="text-gray-500 text-xs mb-2">*2 Vehicles Required for Monthly Packages</p>
            <p className="text-gray-500 text-xs mb-2">**If Setting up a Monthly Plan, Only required to pay the monthly price during the initial visit, not the standard price. Schedule next Wash within 30 Calendar Days.</p>
            <p className="text-gray-500 text-xs">**12 Month Commitment with Auto Pay, cancelations prior to 12 months Required to pay the waived initial cleaning fee.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-stone-800 rounded-3xl p-10 md:p-12 text-center border border-stone-700">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Contact us today to schedule your detailing appointment. We're here to help protect and enhance your vehicle.
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
                (602) 807-8989
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
