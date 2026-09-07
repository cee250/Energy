import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, PhoneCall, ChevronRight, Zap } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Calculator', href: '#calculator', id: 'calculator' },
    { name: 'C&I Solutions', href: '#c-and-i', id: 'c-and-i' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-eco-400 to-eco-600 flex items-center justify-center text-slate-950 shadow-lg shadow-eco-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sun className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl tracking-tight text-white">AuraGrid</span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-solar-500/20 text-solar-400 border border-solar-500/30 uppercase tracking-widest">Energy</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">Solar & C&I Renewable Solutions</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-eco-500 text-slate-950 shadow-md font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Contact */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18005550199" className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-eco-400 transition-colors">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-eco-400">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Expert Help</span>
              <span className="font-semibold">+1 (800) 555-0199</span>
            </div>
          </a>

          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-400 hover:to-eco-500 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-eco-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="bg-eco-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-eco-500/20 text-eco-400 border border-eco-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a href="tel:+18005550199" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300">
              <PhoneCall className="w-5 h-5 text-eco-400" />
              <span>Call us: <strong>+1 (800) 555-0199</strong></span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-eco-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              Get Free Commercial Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
