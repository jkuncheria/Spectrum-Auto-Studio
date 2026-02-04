import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/spectrumlogo.jpeg" 
                alt="Spectrum Auto Studio" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Professional Mobile Detailing<br />
              & Protection Services
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:6307959999" className="hover:text-[#F21C1D]">(630) 795-9999</a></p>
              <p><a href="mailto:Aiden@SpectrumAutoStudio.com" className="hover:text-[#F21C1D]">Aiden@SpectrumAutoStudio.com</a></p>
              <p className="mt-2 font-semibold text-gray-700">704 S Monaco St Pkwy, Denver, CO</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Spectrum-Auto-Studio-61554929586741/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F21C1D] transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/spectrum_auto_studio/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F21C1D] transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.yelp.com/biz/spectrum-auto-studio-denver" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F21C1D] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.55-.88.18-1.94 1.244-1.586zM8.93 8.7l3.246 3.87c.583.695-.07 1.74-.96 1.538l-5.14-1.166a1.072 1.072 0 0 1-.787-1.373 9.2 9.2 0 0 1 1.97-3.39A1.073 1.073 0 0 1 8.93 8.7zm.676 7.164l5.063 1.348c.894.238 1.04 1.455.215 1.808l-4.57 1.96a1.072 1.072 0 0 1-1.378-.612 9.305 9.305 0 0 1-.6-3.906 1.073 1.073 0 0 1 1.27-1.098zm1.753-11.847l.79 5.18c.135.888-.9 1.462-1.53.848L6.91 6.38a1.072 1.072 0 0 1 .012-1.596A9.2 9.2 0 0 1 10.2 2.64a1.073 1.073 0 0 1 1.16 1.377z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-[#F21C1D] font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/auto-detailing" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link to="/paint-correction" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coatings" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link to="/paint-protection-film" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Paint Protection Films
                </Link>
              </li>
              <li>
                <Link to="/vehicle-wraps" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Vinyl Wrap
                </Link>
              </li>
              <li>
                <Link to="/window-tinting" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Window Tint
                </Link>
              </li>
              <li>
                <Link to="/factory-finish-system" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Factory Finish System
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#F21C1D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Available</p>
              <p>Monday - Sunday</p>
              <div className="pt-2 space-y-1">
                <p>By Appointment</p>
                <p className="text-xs text-gray-500 mt-2">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p>&copy; 2026 Spectrum Auto Studio. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 mt-4 text-center">
          <p className="text-xs text-gray-500">
            Built by{' '}
            <a 
              href="https://renolens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline font-medium" style={{ color: '#18AEE4' }}
            >
              RenoLens
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;