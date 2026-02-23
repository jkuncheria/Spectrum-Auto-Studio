import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import CeramicCoatings from './pages/CeramicCoatings';
import WindowTinting from './pages/WindowTinting';
import VehicleWraps from './pages/VehicleWraps';
import AutoDetailing from './pages/AutoDetailing';
import InteriorProtection from './pages/InteriorProtection';
import WheelCaliper from './pages/WheelCaliper';
import PaintCorrection from './pages/PaintCorrection';
import FactoryFinishSystem from './pages/FactoryFinishSystem';
import FleetWashing from './pages/FleetWashing';
import Gallery from './pages/Gallery';
import ScottsdaleAutoDetailing from './pages/ScottsdaleAutoDetailing';
import TempeAutoDetailing from './pages/TempeAutoDetailing';
import AnthemAutoDetailing from './pages/AnthemAutoDetailing';
import ParadiseValleyAutoDetailing from './pages/ParadiseValleyAutoDetailing';
import ChandlerAutoDetailing from './pages/ChandlerAutoDetailing';
import FountainHillsAutoDetailing from './pages/FountainHillsAutoDetailing';
import ScottsdaleLiving from './pages/ScottsdaleLiving';
import TempeLiving from './pages/TempeLiving';
import MembersPricing from './pages/MembersPricing';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
          <Breadcrumbs />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
                        <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
            <Route path="/window-tinting" element={<WindowTinting />} />
            <Route path="/vehicle-wraps" element={<VehicleWraps />} />
            <Route path="/auto-detailing" element={<AutoDetailing />} />
            <Route path="/interior-protection" element={<InteriorProtection />} />
            <Route path="/wheel-caliper" element={<WheelCaliper />} />
            <Route path="/paint-correction" element={<PaintCorrection />} />
            <Route path="/factory-finish-system" element={<FactoryFinishSystem />} />
            <Route path="/fleet-washing" element={<FleetWashing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/scottsdale-auto-detailing" element={<ScottsdaleAutoDetailing />} />
            <Route path="/tempe-auto-detailing" element={<TempeAutoDetailing />} />
            <Route path="/anthem-auto-detailing" element={<AnthemAutoDetailing />} />
            <Route path="/paradise-valley-auto-detailing" element={<ParadiseValleyAutoDetailing />} />
            <Route path="/chandler-auto-detailing" element={<ChandlerAutoDetailing />} />
            <Route path="/fountain-hills-auto-detailing" element={<FountainHillsAutoDetailing />} />
            <Route path="/scottsdale-living" element={<ScottsdaleLiving />} />
            <Route path="/tempe-living" element={<TempeLiving />} />
            <Route path="/members-pricing" element={<MembersPricing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
      </main>

      <Footer />
      
    </div>
    </Router>
  );
};

export default App;