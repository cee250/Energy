import React from 'react';
import { Sun, Shield, Award, Linkedin, Twitter, Youtube, Facebook, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Top Banner / Newsletter */}
      <div className="border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Subscribe to Energy Market Intelligence</h3>
            <p className="text-xs text-slate-400 mt-1">Receive quarterly C&I solar tariff updates, regulatory changes, and storage innovations.</p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter corporate email"
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-eco-400 w-full sm:w-64"
            />
            <button className="bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Col */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-eco-500 flex items-center justify-center text-slate-950 font-bold">
              <Sun className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">AuraGrid Energy</span>
          </div>

          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            Empowering enterprise sustainability with turn-key commercial and industrial (C&I) solar panel installations, megawatt-scale battery energy storage systems, and zero-CAPEX power purchase agreements.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-eco-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-eco-400 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-eco-400 transition-colors">Our Services</a></li>
            <li><a href="#calculator" className="hover:text-eco-400 transition-colors">Solar ROI Calculator</a></li>
            <li><a href="#contact" className="hover:text-eco-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Sitemap */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">C&I Solutions</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#c-and-i" className="hover:text-eco-400 transition-colors">Commercial Rooftop PV</a></li>
            <li><a href="#services" className="hover:text-eco-400 transition-colors">Industrial Microgrids</a></li>
            <li><a href="#services" className="hover:text-eco-400 transition-colors">Battery Storage (BESS)</a></li>
            <li><a href="#services" className="hover:text-eco-400 transition-colors">PPA & Zero-CAPEX</a></li>
            <li><a href="#services" className="hover:text-eco-400 transition-colors">24/7 Operations & Maintenance</a></li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Certifications</h4>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Shield className="w-4 h-4 text-eco-400 shrink-0" />
              <span>ISO 9001:2015 Quality</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-solar-400 shrink-0" />
              <span>BloombergNEF Tier-1</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
              <Sun className="w-4 h-4 text-eco-400 shrink-0" />
              <span>RE100 Alliance Partner</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} AuraGrid Energy Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">ESG Disclosures</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
