import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, onTabChange }) {
  // 1. Added State for Mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Facility', 'Plans & Rates', 'Contact'];

  // 2. Helper function to close menu when a link is clicked on mobile
  const handleMobileNav = (link) => {
    onTabChange(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020203]/90 backdrop-blur-md border-b border-white/[0.03] transition-all duration-300">
      
      {/* WRAPPED YOUR ORIGINAL HEADER IN THIS DIV */}
      <div className="px-6 md:px-16 py-5 flex items-center justify-between w-full">
        
        {/* LEFT SIDE: YOUR CUSTOM LOGO (UNTOUCHED) */}
        <div 
          onClick={() => onTabChange('Home')} 
          className="flex items-center gap-4 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="relative w-16 h-10 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-1.5 bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-700 rounded-sm shadow-inner z-0" />
            <div className="absolute left-0 flex items-center gap-[1px] z-10 h-8">
              <div className="w-1 h-4 bg-red-600 rounded-sm" />
              <div className="w-1.5 h-6 bg-red-600 rounded-sm" />
              <div className="w-2 h-8 bg-black border border-white/5 rounded-sm" />
            </div>
            <div className="relative w-9 h-9 rounded-full border border-gymAccent bg-black flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.2)] z-20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-sm filter contrast-125 saturate-150 select-none">🐯</span>
            </div>
            <div className="absolute right-0 flex items-center gap-[1px] z-10 h-8">
              <div className="w-2 h-8 bg-black border border-white/5 rounded-sm" />
              <div className="w-1.5 h-6 bg-red-600 rounded-sm" />
              <div className="w-1 h-4 bg-red-600 rounded-sm" />
            </div>
          </div>

          <span className="text-xl font-black tracking-tighter uppercase text-white transition-colors group-hover:text-gymAccent duration-300">
            TIGER <span className="text-gymAccent group-hover:text-white transition-colors duration-300">FITNESS</span>
          </span>
        </div>

        {/* CENTER: YOUR DESKTOP NAV LINKS (UNTOUCHED) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeTab === link;
            return (
              <button
                key={link}
                onClick={() => onTabChange(link)}
                className={`relative text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-300 ease-out py-2 rounded-sm cursor-pointer bg-transparent border-0
                  ${isActive 
                    ? 'text-gymAccent font-black drop-shadow-[0_0_8px_rgba(255,107,0,0.3)]' 
                    : 'text-neutral-400 hover:text-white'
                  }
                `}
              >
                {link === 'Facility' ? 'About Us' : link}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-gymAccent transition-all duration-300 ease-out
                    ${isActive ? 'w-full' : 'w-0 hover:w-full'}
                  `} 
                />
              </button>
            );
          })}
        </div>

        {/* RIGHT SIDE: CTA & MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button 
            onClick={() => onTabChange('Plans & Rates')}
            className="hidden sm:inline-flex items-center justify-center font-sans text-xs font-black uppercase tracking-[0.2em] text-black bg-gymAccent hover:bg-orange-600 px-7 py-3.5 rounded-sm shadow-[0_0_25px_rgba(255,107,0,0.25)] hover:shadow-[0_0_35px_rgba(255,107,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-[1px] active:translate-y-0 select-none cursor-pointer border border-transparent"
          >
            Join Now
          </button>
          
          {/* UPDATED: Mobile Menu Button now actually toggles state! */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-neutral-400 hover:text-white bg-transparent border-0 cursor-pointer p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. NEW MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleMobileNav(link)}
                className={`text-left text-sm font-black uppercase tracking-widest py-3 border-0 bg-transparent cursor-pointer
                  ${activeTab === link ? 'text-gymAccent border-l-2 border-gymAccent pl-4' : 'text-neutral-400 pl-4'}
                `}
              >
                {link === 'Facility' ? 'About Us' : link}
              </button>
            ))}
            <button 
              onClick={() => handleMobileNav('Plans & Rates')}
              className="mt-4 w-full text-center text-xs font-black uppercase tracking-[0.2em] text-black bg-gymAccent px-7 py-4 rounded-sm border-0 cursor-pointer"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}