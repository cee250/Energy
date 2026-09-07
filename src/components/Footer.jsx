import React from 'react';
import { Sun, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
              <Sun className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base text-white tracking-tight">AuraGrid Energy</span>
          </div>
          <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
            Turnkey solar panel installation, C&I microgrids, and energy storage solutions.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-1.5 text-xs">
            <li><button onClick={() => scrollTo('home')} className="hover:text-emerald-400">Home</button></li>
            <li><button onClick={() => scrollTo('about')} className="hover:text-emerald-400">About Us</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-400">Services</button></li>
            <li><button onClick={() => scrollTo('projects')} className="hover:text-emerald-400">Projects</button></li>
            <li><button onClick={() => scrollTo('calculator')} className="hover:text-emerald-400">Calculator</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-emerald-400">Contact</button></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact Us</h4>
          <p className="flex items-center gap-2 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+250 788 300 000</span>
          </p>
          <p className="flex items-center gap-2 text-slate-300">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>info@energy.com</span>
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800 py-4 bg-slate-950 text-center text-slate-500 text-[11px]">
        © {new Date().getFullYear()} AuraGrid Energy. All Rights Reserved.
      </div>
    </footer>
  );
}
