import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 pt-16 pb-8 px-4 md:px-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/oldtownlogo.webp" 
                alt="Old Town Auto Spa" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Professional Mobile Detailing<br />
              & Protection Services
            </p>
            <div className="text-sm text-stone-400 mb-4 space-y-1">
              <p><a href="tel:6028078989" className="hover:text-[#F0E130]">(602) 807-8989</a></p>
              <p><a href="mailto:info@oldtownautospa.com" className="hover:text-[#F0E130]">info@oldtownautospa.com</a></p>
              <p className="mt-2 font-semibold text-stone-300">Serving Phoenix, Anthem, Paradise Valley, Scottsdale, Chandler & Fountain Hills</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61568419739370" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#F0E130] transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/oldtownautospa/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#F0E130] transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-[#F0E130] font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/auto-detailing" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link to="/paint-correction" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coatings" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Ceramic Coating
                </Link>
              </li>
                            <li>
                <Link to="/vehicle-wraps" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Vinyl Wrap
                </Link>
              </li>
              <li>
                <Link to="/window-tinting" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Window Tint
                </Link>
              </li>
              <li>
                <Link to="/factory-finish-system" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Factory Finish System
                </Link>
              </li>
              <li>
                <Link to="/fleet-washing" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Fleet Washing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#F0E130]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="font-semibold text-[#F0E130]">Available</p>
              <p>Monday - Sunday</p>
              <div className="pt-2 space-y-1">
                <p>By Appointment</p>
                <p className="text-xs text-gray-500 mt-2">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p>&copy; 2026 Old Town Auto Spa. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-4 mt-4 text-center">
          <p className="text-xs text-gray-500">
            Built by{' '}
            <a 
              href="https://renolens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline font-medium" style={{ color: '#F0E130' }}
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