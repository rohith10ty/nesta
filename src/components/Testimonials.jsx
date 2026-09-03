import React, { useRef } from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reviews" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Arrow Navigation on Mobile */}
        <div className="flex items-end justify-between mb-5 md:mb-8">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#77736D] uppercase mb-1">
              VERIFIED CLIENTS
            </p>
            <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold tracking-tight text-[#1D1D1B] leading-tight">
              Loved By <br className="sm:hidden" />
              Modern Homes.
            </h2>
          </div>

          {/* Small Navigation Arrows (Mobile only) */}
          <div className="flex md:hidden items-center gap-1.5 pb-1">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous testimonial"
              className="w-8 h-8 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center text-xs hover:bg-[#ECE6DC] active:scale-90 transition-all shadow-2xs"
            >
              <IoChevronBack />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next testimonial"
              className="w-8 h-8 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center text-xs hover:bg-[#ECE6DC] active:scale-90 transition-all shadow-2xs"
            >
              <IoChevronForward />
            </button>
          </div>
        </div>

        {/* Mobile View: Horizontally Swipeable Carousel (< md) */}
        <div
          ref={scrollContainerRef}
          className="flex md:hidden items-stretch gap-3 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 scroll-smooth"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Desktop / iPad View: 3-Column Grid (md+) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
