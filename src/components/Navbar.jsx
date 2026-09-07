import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Auto-hide when scrolling down, show when scrolling up or near top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
      setScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Removed Calculator link
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 group text-left">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-none">AuraGrid</span>
            <span className="text-[9px] font-bold text-emerald-700 tracking-wider uppercase">RENEWABLE ENERGY</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeSection === link.id
                  ? 'bg-emerald-50 text-emerald-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-xs transition-colors"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                activeSection === link.id
                  ? 'bg-emerald-50 text-emerald-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
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
