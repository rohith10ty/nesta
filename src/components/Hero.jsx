import React, { useState, useRef } from 'react';
import {
  IoArrowForward,
  IoSparkles,
  IoShieldCheckmarkOutline,
  IoCarOutline,
  IoCheckmarkCircle,
  IoClose,
} from 'react-icons/io5';

export default function Hero({ onSelectHeroProduct }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState(null);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Parallax Tilt for the Hero Showcase Card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // 4 Hotspots locked to the image subjects: Lamp, Photo Frame, Chair, and Mat
  const hotspots = [
    {
      id: 'lamp',
      top: '28%',
      left: '42%',
      title: 'Luna Brass Floor Lamp',
      tag: 'Lighting',
      price: '₹8,999',
      desc: 'Hand-spun brushed brass arch with weighted travertine base and ambient warm glow.',
      align: 'left',
      direction: 'down',
    },
    {
      id: 'frame',
      top: '32%',
      left: '58%',
      title: 'Kanso Minimalist Wall Art',
      tag: 'Art & Decor',
      price: '₹4,999',
      desc: 'Fine-art archival print with anti-reflective glass in a handcrafted solid oak frame.',
      align: 'center',
      direction: 'down',
    },
    {
      id: 'chair',
      top: '64%',
      left: '60%',
      title: 'Solace Ochre Accent Chair',
      tag: 'Chairs',
      price: '₹24,999',
      desc: 'Ergonomic contoured backrest in warm textured boucle with handcrafted solid oak legs.',
      align: 'center',
      direction: 'up',
    },
    {
      id: 'mat',
      top: '84%',
      left: '88%',
      title: 'Nordic Handwoven Wool Mat',
      tag: 'Textiles',
      price: '₹7,499',
      desc: '100% natural textured New Zealand wool with organic ribbed loop binding.',
      align: 'right',
      direction: 'up',
    },
  ];

  return (
    <section id="home" className="relative pt-4 pb-8 md:pt-10 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center">
          {/* Left Column (Editorial Headline & CTAs) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
            {/* Top Small Collection Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E9BD61] animate-ping" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#77736D] uppercase">
                NEW COLLECTION / 2026
              </p>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-[34px] sm:text-[44px] md:text-[48px] lg:text-[58px] leading-[1.1] font-extrabold tracking-tight text-[#1D1D1B] mb-3 md:mb-4">
              Create Your <br />
              <span className="italic font-normal font-serif text-[#1D1D1B]">
                Perfect
              </span>{' '}
              Home Vibe.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base leading-relaxed text-[#77736D] max-w-[440px] mb-6">
              Furniture crafted for comfort, character and modern living.
              Thoughtfully curated silhouettes bringing timeless Nordic-Japanese
              elegance into your everyday sanctuaries.
            </p>

            {/* CTA Row with hover scale */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <button
                type="button"
                onClick={scrollToCollection}
                className="group py-3 sm:py-3.5 px-6 sm:px-8 rounded-full bg-[#171715] text-[#FFFEFB] text-xs sm:text-sm font-medium hover:bg-[#2c2c28] active:scale-[0.97] transition-all shadow-md flex items-center gap-2"
              >
                <span>Explore Collection</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                type="button"
                onClick={scrollToCollection}
                aria-label="Scroll to collection"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECE6DC] text-[#1D1D1B] flex items-center justify-center border border-[#E5DED4] active:scale-[0.95] hover:bg-[#E5DED4] transition-all shadow-2xs hover:scale-105"
              >
                <IoArrowForward className="text-base sm:text-lg" />
              </button>
            </div>

            {/* Small Highlight Card on Hero Screen */}
            <div className="inline-flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DED4] shadow-xs max-w-sm mb-6 sm:mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ECE6DC] flex items-center justify-center text-[#1D1D1B] flex-shrink-0 font-bold text-sm shadow-2xs">
                ✦
              </div>
              <div className="text-left text-xs">
                <p className="font-bold text-[#1D1D1B]">100% Solid European Oak</p>
                <p className="text-[11px] text-[#77736D]">Sustainably harvested · Master craftsman joinery</p>
              </div>
            </div>

            {/* Desktop / iPad Trust Indicators Strip */}
            <div className="hidden sm:flex items-center gap-6 pt-4 border-t border-[#E5DED4]/80 text-xs text-[#77736D]">
              <div className="flex items-center gap-2">
                <IoCarOutline className="text-[#1D1D1B] text-base" />
                <span>Complimentary White-Glove Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <IoShieldCheckmarkOutline className="text-[#1D1D1B] text-base" />
                <span>5-Year Structural Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column (Hero Furniture Showcase Card with 3D Tilt & Image-Locked Hotspots) */}
          <div className="md:col-span-6 lg:col-span-6">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.25s ease-out',
              }}
              className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#ECE6DC] to-[#E5DED4]/70 p-4 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Organic Breathing Aura Blob */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 md:w-80 h-64 md:h-80 bg-[#FFFEFB]/70 blur-3xl pointer-events-none animate-blob" />

              {/* Floating Pill: BEST SELLER */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] text-[10px] sm:text-xs font-bold tracking-wider shadow-2xs">
                <IoSparkles className="text-[#C99235] text-xs sm:text-sm" />
                <span>BEST SELLER</span>
              </div>

              {/* Floating Price Tag */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 px-3 py-1 rounded-full bg-[#171715]/85 text-[#FFFEFB] text-xs sm:text-sm font-semibold backdrop-blur-xs shadow-xs">
                ₹24,999
              </div>

              {/* Visual Container: Aspect-Locked to the Image so Hotspot Coordinates Never Drift */}
              <div className="relative w-full h-[250px] sm:h-[330px] md:h-[380px] flex items-center justify-center my-3 sm:my-4">
                <div className="relative h-full aspect-[1000/882] max-w-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                    alt="Living Room Scene with Lamp, Wall Art Frame, Accent Chair and Mat"
                    className="w-full h-full object-cover rounded-[22px] drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                  />

                  {/* Hotspots: 1 on Lamp, 1 on Photo Frame, 1 on Chair, 1 on Mat */}
                  {hotspots.map((pin) => {
                    const isSelected = activeHotspot === pin.id;

                    // Direction calculation
                    const tooltipPositionClass =
                      pin.direction === 'down' ? 'top-full mt-2.5' : 'bottom-full mb-2.5';

                    let tooltipAlignClass = 'left-1/2 -translate-x-1/2';
                    if (pin.align === 'left') {
                      tooltipAlignClass = 'left-0 sm:left-1/2 sm:-translate-x-1/2';
                    } else if (pin.align === 'right') {
                      tooltipAlignClass = 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2';
                    }

                    return (
                      <div
                        key={pin.id}
                        style={{ top: pin.top, left: pin.left }}
                        className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        {/* Plus (+) Button with Pulsating Radar Wave */}
                        <button
                          type="button"
                          aria-label={`Inspect ${pin.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(isSelected ? null : pin.id);
                          }}
                          className={`relative w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shadow-lg transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-[#E9BD61] text-[#171715] scale-125 ring-4 ring-white/70'
                              : 'bg-[#171715] text-[#FFFEFB] hover:scale-125 hover:bg-[#2c2c28]'
                          }`}
                        >
                          {/* Radar Ping Wave */}
                          <span className="absolute inset-0 rounded-full bg-[#171715] animate-radar pointer-events-none" />
                          <span className="relative z-10 font-bold">+</span>
                        </button>

                        {/* Hotspot Tooltip Popup */}
                        {isSelected && (
                          <div
                            className={`absolute ${tooltipPositionClass} ${tooltipAlignClass} w-52 sm:w-56 p-3 rounded-2xl bg-[#FFFEFB]/98 backdrop-blur-md border border-[#E5DED4] shadow-2xl z-40 text-left animate-fade-in`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <div>
                                <span className="text-[9px] uppercase font-bold text-[#A19B92] tracking-wider block">
                                  {pin.tag}
                                </span>
                                <h4 className="text-xs font-extrabold text-[#1D1D1B] leading-tight">
                                  {pin.title}
                                </h4>
                              </div>
                              <button
                                type="button"
                                onClick={() => setActiveHotspot(null)}
                                className="text-[#A19B92] hover:text-[#1D1D1B] p-0.5"
                              >
                                <IoClose className="text-sm" />
                              </button>
                            </div>

                            <p className="text-[11px] leading-relaxed text-[#77736D] mb-2">
                              {pin.desc}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-[#E5DED4]/70">
                              <span className="text-xs font-extrabold text-[#1D1D1B]">
                                {pin.price}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectHeroProduct();
                                  setActiveHotspot(null);
                                }}
                                className="text-[10px] font-bold text-[#171715] hover:underline"
                              >
                                View Details →
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating In-Stock Status Card overlay */}
              <div className="absolute bottom-16 left-4 sm:left-6 z-20 bg-[#FFFEFB]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-[#E5DED4] shadow-lg flex items-center gap-3 animate-float pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#ECE6DC] flex items-center justify-center text-[#1D1D1B] flex-shrink-0">
                  <IoCheckmarkCircle className="text-emerald-700 text-base sm:text-lg" />
                </div>
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-bold text-[#1D1D1B]">In Stock & Ready to Ship</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-[#77736D]">Dispatches within 24 hours</p>
                </div>
              </div>

              {/* Product Details Pill inside Hero */}
              <div
                onClick={onSelectHeroProduct}
                className="relative z-10 flex items-center justify-between pt-3 border-t border-[#1D1D1B]/10 cursor-pointer group"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1D1D1B] group-hover:text-black">
                    Solace Lounge Chair
                  </h3>
                  <p className="text-xs text-[#77736D]">
                    Natural Boucle & Solid European Oak
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1D1D1B] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  View specifications →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
