import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoStorefrontOutline, IoBagHandleOutline, IoArrowForward } from 'react-icons/io5';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'features', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f9f6f0]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#eae0cf]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Market */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4b5694] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111844] border border-[#4b5694]/40 flex items-center justify-center text-[#eae0cf] shadow-md shadow-[#111844]/15 group-hover:scale-105 transition-transform">
              <IoStorefrontOutline className="text-xl" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-extrabold tracking-tight text-[#111844]">
                Market
              </span>
              <span className="w-2 h-2 rounded-full bg-[#4b5694] inline-block" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#111844] font-bold'
                      : 'text-[#4b5694] hover:text-[#111844] hover:bg-[#eae0cf]/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#111844] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#4b5694] hover:text-[#111844] hover:bg-[#eae0cf]/40 rounded-lg transition-colors"
            >
              Merchant Sign In
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4b5694] hover:bg-[#3b4477] active:bg-[#111844] text-[#eae0cf] text-sm font-semibold shadow-md shadow-[#4b5694]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <IoBagHandleOutline className="text-base" />
              <span>Explore Market</span>
            </a>
          </div>

          {/* Mobile Actions: Try Free & Hamburger Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href="#services"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#eae0cf] text-[#111844]"
            >
              Explore
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-[#111844] hover:text-[#4b5694] hover:bg-[#eae0cf]/50 focus:outline-none focus:ring-2 focus:ring-[#4b5694] transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-[#111844]" />
              ) : (
                <HiMenu className="w-6 h-6 text-[#111844]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[62px] bg-[#111844]/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-[62px] left-0 right-0 bg-[#f9f6f0] border-b border-[#eae0cf] shadow-2xl z-50 md:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#eae0cf] text-[#111844] font-bold'
                    : 'text-[#4b5694] hover:bg-[#eae0cf]/40 hover:text-[#111844]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#111844]" />
                )}
              </a>
            );
          })}

          <div className="pt-4 border-t border-[#eae0cf] space-y-3">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-xl border border-[#7288ae]/40 text-[#111844] font-semibold hover:bg-[#eae0cf]/40 transition-colors"
            >
              Merchant Sign In
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-[#4b5694] text-[#eae0cf] font-bold shadow-md shadow-[#4b5694]/25 active:scale-[0.98] transition-all"
            >
              <span>Explore Marketplace</span>
              <IoArrowForward />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
