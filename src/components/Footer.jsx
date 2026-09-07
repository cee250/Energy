import React from 'react';
import { Sun, Shield, Award, Linkedin, Twitter, Mail, Phone, MapPin, Leaf } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">RENERG Rwanda Ltd</span>
          </div>

          <p className="text-xs leading-relaxed text-slate-400">
            Leading provider of renewable energy solutions in Rwanda and East Africa. Specializing in solar energy, solar water pumping, e-mobility, and smart real estate.
          </p>

          <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-semibold">
            <Award className="w-4 h-4 shrink-0" />
            <span>Winner: 2019 Beat Air Pollution Award</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Rwanda Projects</a></li>
            <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Solar ROI Calculator</a></li>
            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Core Solutions</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Solar Energy (On & Off Grid)</a></li>
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Solar Water Pumping & Irrigation</a></li>
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">E-Mobility & EV Chargers</a></li>
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">Smart Real Estate & Green Buildings</a></li>
            <li><a href="#services" className="hover:text-emerald-400 transition-colors">EPC & Plant Maintenance</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kigali Office</h4>
          <div className="space-y-2 text-xs text-slate-300">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kigali, Rwanda & East Africa</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+250 788 300 000</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>info@renerg.co.rw</span>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} RENERG (R) LTD. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
