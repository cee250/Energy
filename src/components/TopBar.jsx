import React from 'react';
import { Phone, Mail, MapPin, Clock, Award } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        <div className="flex items-center gap-6 text-[11px] sm:text-xs">
          <a href="tel:+250788300000" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+250 788 300 000</span>
          </a>
          <a href="mailto:info@renerg.co.rw" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>info@renerg.co.rw</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kigali, Rwanda & East Africa</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Winner: 2019 Beat Air Pollution Award</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">15+ Years of Excellence</span>
        </div>

      </div>
    </div>
  );
}
