import React from 'react';
import { Sun, Phone, Mail, MapPin, ShieldCheck, Award, ArrowRight, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-sm">
      
      {/* Top Banner / Newsletter */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 via-white to-slate-50 p-6 sm:p-8 rounded-2xl border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Stay Connected
              </span>
              <h3 className="text-xl font-bold text-slate-900">Subscribe to Clean Energy & Solar Market Updates</h3>
              <p className="text-xs text-slate-600 mt-1">Receive quarterly C&I solar tariff insights, battery storage developments, and project news.</p>
            </div>

            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-emerald-600 w-full sm:w-64 shadow-xs"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shrink-0 shadow-xs">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight block leading-none">AuraGrid</span>
              <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Renewable Energy</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Full-service renewable energy developer providing turnkey solar panel installations, C&I microgrids, and agricultural water pumping systems.
          </p>

          <div className="space-y-2 pt-1 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>+250 788 300 000</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>info@energy.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => scrollTo('home')} className="hover:text-emerald-700 transition-colors">Home</button></li>
            <li><button onClick={() => scrollTo('about')} className="hover:text-emerald-700 transition-colors">About Us</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">Services</button></li>
            <li><button onClick={() => scrollTo('projects')} className="hover:text-emerald-700 transition-colors">Projects & Case Studies</button></li>
            <li><button onClick={() => scrollTo('calculator')} className="hover:text-emerald-700 transition-colors">Solar ROI Calculator</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-emerald-700 transition-colors">Contact Us</button></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Core Services</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">Solar Panel Installation</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">C&I Microgrids & PPAs</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">Battery Energy Storage (BESS)</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">Solar Water Pumping</button></li>
            <li><button onClick={() => scrollTo('services')} className="hover:text-emerald-700 transition-colors">24/7 Operations & Maintenance</button></li>
          </ul>
        </div>

        {/* Certifications & Trust */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Quality Standards</h4>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">ISO 9001 Certified Quality</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-semibold text-slate-800">Tier-1 BloombergNEF PV</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-2xs">
              <Sun className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-slate-800">25-Year Panel Warranty</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AuraGrid Energy Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">ESG Disclosures</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
