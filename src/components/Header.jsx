import React, { useState } from 'react';
import {
  IoSearchOutline,
  IoBagHandleOutline,
  IoHeartOutline,
} from 'react-icons/io5';

export default function Header({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F1EA]/95 backdrop-blur-md border-b border-[#E5DED4]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Left: NESTA Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 focus:outline-none group"
        >
          <span className="text-xl sm:text-2xl font-extrabold tracking-[0.22em] text-[#1D1D1B]">
            NESTA
          </span>
          <span className="hidden lg:inline-block text-[10px] uppercase font-semibold text-[#77736D] tracking-widest pl-2 border-l border-[#E5DED4]">
            Modern Interiors
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs sm:text-sm font-medium tracking-wide text-[#77736D] hover:text-[#1D1D1B] transition-colors relative py-1 hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Circular and Desktop Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search furniture"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center shadow-2xs hover:bg-[#ECE6DC] active:scale-90 transition-all"
          >
            <IoSearchOutline className="text-base sm:text-lg" />
          </button>

          {/* Desktop Wishlist Button */}
          <button
            type="button"
            onClick={onOpenWishlist}
            aria-label="Wishlist items"
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] hidden sm:flex items-center justify-center shadow-2xs hover:bg-[#ECE6DC] active:scale-90 transition-all"
          >
            <IoHeartOutline className="text-base sm:text-lg" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[#C99235] text-[#FFFEFB] text-[10px] font-bold flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Shopping bag"
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFEFB] border border-[#E5DED4] text-[#1D1D1B] flex items-center justify-center shadow-2xs hover:bg-[#ECE6DC] active:scale-90 transition-all"
          >
            <IoBagHandleOutline className="text-base sm:text-lg" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[#171715] text-[#FFFEFB] text-[10px] font-bold flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Inquire CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center py-2.5 px-5 rounded-full bg-[#171715] hover:bg-[#2c2c28] text-[#FFFEFB] text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-95"
          >
            Book Styling
          </a>

          {/* Animated Mobile Hamburger Button with Bar Morphing */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className={`md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-300 active:scale-90 shadow-2xs ${
              menuOpen
                ? 'bg-[#171715] text-[#FFFEFB] ring-4 ring-[#E5DED4]'
                : 'bg-[#171715] text-[#FFFEFB]'
            }`}
          >
            {/* Top Bar */}
            <span
              className={`w-4 h-0.5 bg-[#FFFEFB] rounded-full transition-transform duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            {/* Middle Bar */}
            <span
              className={`w-4 h-0.5 bg-[#FFFEFB] rounded-full transition-opacity duration-200 ${
                menuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            {/* Bottom Bar */}
            <span
              className={`w-4 h-0.5 bg-[#FFFEFB] rounded-full transition-transform duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer (< md) */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5DED4] bg-[#FFFEFB]/98 backdrop-blur-lg px-5 py-5 space-y-2 animate-fade-in shadow-xl">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ animationDelay: `${idx * 40}ms` }}
              className="flex items-center justify-between py-3 px-4 rounded-2xl text-sm font-semibold text-[#1D1D1B] hover:bg-[#F5F1EA] active:bg-[#ECE6DC] transition-all transform hover:translate-x-1"
            >
              <span>{item.label}</span>
              <span className="text-[#A19B92] text-xs font-bold">→</span>
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5DED4]/70 flex items-center justify-between text-xs text-[#77736D]">
            <span>Atelier Mumbai · Worldwide Delivery</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      )}
    </header>
  );
}
