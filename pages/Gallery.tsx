import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  return (
    <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
      {title && (
        <div className="p-4 border-b border-stone-800">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] cursor-ew-resize select-none overflow-hidden touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#F0E130] shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#F0E130] rounded-full flex items-center justify-center shadow-lg gap-1">
            <span className="text-black font-bold text-lg">‹</span>
            <span className="text-black font-bold text-lg">›</span>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-[#F0E130]/90 text-black text-sm font-semibold px-3 py-1 rounded">
          AFTER
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const beforeAfterPairs = [
    { before: '/before-and-after/b5.jpeg', after: '/before-and-after/a5.jpeg', title: 'Interior Deep Clean' },
    { before: '/before-and-after/b6.jpeg', after: '/before-and-after/a6.jpeg', title: 'Carpet Detail' },
    { before: '/before-and-after/b7.jpeg', after: '/before-and-after/a7.jpeg', title: 'Full Detail' },
    { before: '/before-and-after/b8.jpeg', after: '/before-and-after/a8.jpeg', title: 'Headliner Restoration' },
    { before: '/before-and-after/b1.jpeg', after: '/before-and-after/a1.jpeg', title: 'Paint Chip Scratch Repair' },
    { before: '/before-and-after/b2.jpeg', after: '/before-and-after/a2.jpeg', title: 'Engine Bay Detail' },
    { before: '/before-and-after/b3.jpeg', after: '/before-and-after/a3.jpeg', title: 'Headlight Restoration' },
    { before: '/before-and-after/b4.jpeg', after: '/before-and-after/a4.jpeg', title: 'Paint Correction' },
  ];

  return (
    <>
      <SEO
        title="Before & After Gallery | Old Town Auto Spa | Phoenix Auto Detailing"
        description="See the amazing transformations from Old Town Auto Spa in Phoenix, AZ. Before and after photos of interior detailing, ceramic coatings, paint correction, and more."
        keywords="auto detailing before after, car detailing gallery Phoenix, ceramic coating results, paint correction Phoenix, detailing transformations"
        canonical="https://www.oldtownautospa.com/gallery"
      />
      <section className="py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider text-sm uppercase text-[#F0E130]">GALLERY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Before & After Transformations
            </h1>
            <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Drag the slider to see the incredible transformations we achieve. From paint correction to full interior details, our work speaks for itself.
            </p>
          </div>

          {/* Before/After Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {beforeAfterPairs.map((pair, index) => (
              <BeforeAfterSlider
                key={index}
                beforeImage={pair.before}
                afterImage={pair.after}
                title={pair.title}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 md:p-16 text-center border border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let us restore your vehicle to showroom condition. Contact us today for a free estimate.
            </p>
            <Link
              to="/contact"
              className="inline-block text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#F0E130] hover:bg-yellow-400"
            >
              Get Free Estimate
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;

