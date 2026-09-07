import React from 'react';
import { Sun, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copy */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900">AuraGrid Energy</span>
            <span className="text-slate-400 mx-2">|</span>
            <span className="text-slate-500">© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="flex items-center gap-5 text-slate-600 font-medium">
          <button onClick={() => scrollTo('home')} className="hover:text-emerald-600">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-emerald-600">About</button>
          <button onClick={() => scrollTo('services')} className="hover:text-emerald-600">Services</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-emerald-600">Projects</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-emerald-600">Contact</button>
        </div>

        {/* Direct Contact */}
        <div className="flex items-center gap-4 text-slate-500 text-[11px]">
          <span>+250 788 300 000</span>
          <span>•</span>
          <span>info@energy.com</span>
        </div>

      </div>
    </footer>
  );
}
