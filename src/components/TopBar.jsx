import React from 'react';
import { Phone, Mail, MapPin, Award, Zap, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2.5 border-b border-slate-800/80 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Contact Links */}
        <div className="flex items-center gap-6 text-[11px] sm:text-xs">
          <a href="tel:+18005550199" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">+1 (800) 555-0199</span>
          </a>
          <a href="mailto:solutions@auragrid-energy.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>solutions@auragrid-energy.com</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enterprise Solar & C&I Global Hubs</span>
          </div>
        </div>

        {/* Live Grid Status Ticker */}
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-emerald-400 font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE GENERATION: 184.2 MW</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-amber-400 font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Tier-1 EPC Rated</span>
          </div>
        </div>

      </div>
    </div>
  );
}
