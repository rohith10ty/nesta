import React from 'react';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoLinkedin,
} from 'react-icons/io5';

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1D1B] text-[#F5F1EA] pt-10 sm:pt-16 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8 rounded-t-[32px] sm:rounded-t-[48px] mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Multi-column Layout / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#2c2c28]">
          {/* Brand Info */}
          <div className="md:col-span-4 lg:col-span-5 space-y-3">
            <span className="text-2xl font-extrabold tracking-[0.22em] text-[#FFFEFB] block">
              NESTA
            </span>
            <p className="text-xs sm:text-sm text-[#A19B92] leading-relaxed max-w-sm">
              Furniture crafted for comfort, character and modern living.
              Curating elevated Nordic-Japanese sanctuaries since 2024.
            </p>
            <div className="pt-2 text-xs text-[#77736D]">
              <p>Flagship Atelier: Kala Ghoda, Mumbai 400001</p>
              <p className="mt-0.5">Contact: concierge@nesta.in</p>
            </div>
          </div>

          {/* Quick Collection Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFEFB] mb-3">
              Collection
            </h4>
            <ul className="space-y-2 text-xs text-[#ECE6DC]">
              <li>
                <a
                  href="#collection"
                  onClick={(e) => handleLinkClick(e, '#collection')}
                  className="hover:text-white transition-colors"
                >
                  Lounge Chairs
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  onClick={(e) => handleLinkClick(e, '#collection')}
                  className="hover:text-white transition-colors"
                >
                  Recliners & Sofas
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  onClick={(e) => handleLinkClick(e, '#collection')}
                  className="hover:text-white transition-colors"
                >
                  Coffee & Side Tables
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  onClick={(e) => handleLinkClick(e, '#collection')}
                  className="hover:text-white transition-colors"
                >
                  Sculptural Lighting
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFEFB] mb-3">
              Studio
            </h4>
            <ul className="space-y-2 text-xs text-[#ECE6DC]">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleLinkClick(e, '#features')}
                  className="hover:text-white transition-colors"
                >
                  Craft & Materials
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleLinkClick(e, '#reviews')}
                  className="hover:text-white transition-colors"
                >
                  Client Stories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Bespoke Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFEFB] mb-3">
              Follow Our Atelier
            </h4>
            <p className="text-xs text-[#A19B92] leading-relaxed mb-4">
              Explore ongoing interior projects, bespoke architectural commissions, and material drops.
            </p>
            <div className="flex items-center gap-3 text-lg text-[#ECE6DC]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#262624] flex items-center justify-center hover:bg-[#383834] hover:text-white transition-colors"
              >
                <IoLogoInstagram className="text-base" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#262624] flex items-center justify-center hover:bg-[#383834] hover:text-white transition-colors"
              >
                <IoLogoFacebook className="text-base" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-[#262624] flex items-center justify-center hover:bg-[#383834] hover:text-white transition-colors"
              >
                <IoLogoPinterest className="text-base" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#262624] flex items-center justify-center hover:bg-[#383834] hover:text-white transition-colors"
              >
                <IoLogoLinkedin className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A19B92]">
          <p>© 2026 NESTA Interiors Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#77736D]">Privacy & Cookies</span>
            <span className="text-[#2c2c28]">·</span>
            <span className="text-[11px] text-[#77736D]">Terms of Service</span>
            <span className="text-[#2c2c28]">·</span>
            <span className="text-[11px] text-[#77736D]">5-Year Warranty Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
