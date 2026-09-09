import React, { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-950 text-white shadow-lg border-b border-emerald-900 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 group text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 fill-slate-950" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white block leading-none">Mashariki</span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">ENERGY</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-emerald-900/60 p-1.5 rounded-full border border-emerald-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeSection === link.id
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-extrabold scale-105'
                  : 'text-emerald-100 hover:text-white hover:bg-emerald-900'
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
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-lg"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-emerald-200 hover:text-white rounded-lg border border-emerald-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-b border-emerald-900 px-4 pt-3 pb-5 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-colors ${
                activeSection === link.id
                  ? 'bg-emerald-500 text-slate-950'
                  : 'text-emerald-100 hover:bg-emerald-900'
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
