import React, { useState } from 'react';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { products } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-xs pt-16 sm:pt-24 px-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FFFEFB] rounded-[28px] sm:rounded-[36px] max-h-[80vh] flex flex-col p-4 sm:p-6 shadow-2xl border border-[#E5DED4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-2 pb-3.5 border-b border-[#E5DED4]">
          <div className="flex-1 flex items-center gap-2.5 bg-[#F5F1EA] px-3.5 py-2.5 rounded-full border border-[#E5DED4]">
            <IoSearchOutline className="text-[#77736D] text-base sm:text-lg flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search chairs, recliners, coffee tables, lamps..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#1D1D1B] placeholder-[#A19B92] focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="w-9 h-9 rounded-full bg-[#F5F1EA] text-[#1D1D1B] flex items-center justify-center hover:bg-[#ECE6DC] transition-colors"
          >
            <IoClose className="text-lg" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto no-scrollbar py-2 space-y-2">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-xs sm:text-sm text-[#77736D]">
              No furniture designs matching "{searchTerm}"
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-2xl hover:bg-[#F5F1EA] active:bg-[#ECE6DC] cursor-pointer transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded-xl object-contain bg-[#ECE6DC] p-1 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1B] truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] sm:text-xs uppercase font-semibold text-[#77736D]">
                      {item.category}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#1D1D1B]">
                      {item.formattedPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
