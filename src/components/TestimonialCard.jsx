import React from 'react';
import { IoStar } from 'react-icons/io5';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-[270px] sm:w-[290px] md:w-full rounded-[24px] sm:rounded-[30px] bg-[#FCFAF6] border border-[#E5DED4] p-4 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 text-[#E9BD61] mb-3 sm:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <IoStar key={i} className="text-xs sm:text-sm" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-sm leading-relaxed text-[#1D1D1B] italic mb-5">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Customer Avatar & Bio */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-[#E5DED4]/80">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border border-[#E5DED4]"
          loading="lazy"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1B]">
            {testimonial.name}
          </h4>
          <p className="text-[10px] sm:text-xs text-[#77736D]">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
