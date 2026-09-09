import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
  ];

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 w-full bg-[#f3f1e8] border-b border-[#dedccc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[4.5rem] flex items-center justify-between gap-5">
        
        {/* Brand Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 group text-left shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#173f2b] text-[#c9e86b] flex items-center justify-center font-bold">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-[-0.02em] text-[#173f2b] block leading-none">Mashariki</span>
            <span className="text-[9px] font-bold text-[#4d7b3a] tracking-[0.2em] uppercase">ENERGY</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-2 text-xs font-semibold transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-[#79a94b] after:transition-transform ${
                activeSection === link.id
                  ? 'text-[#173f2b] after:scale-x-100'
                  : 'text-slate-600 hover:text-[#173f2b] after:scale-x-0 hover:after:scale-x-100'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="bg-[#173f2b] hover:bg-[#2c6445] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            onClick={onOpenQuote}
            className="bg-[#173f2b] text-white text-[11px] font-bold px-3 py-1.5 rounded-full"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#173f2b] hover:bg-white/70 rounded-full border border-[#d3d5c8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f3f1e8] border-t border-[#dedccc] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium ${
                activeSection === link.id
                  ? 'bg-emerald-100 text-emerald-800 font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
