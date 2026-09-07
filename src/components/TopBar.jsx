import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-100 text-slate-600 text-xs py-2 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:+250788300000" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium">+250 788 300 000</span>
          </a>
          <a href="mailto:info@energy.com" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>info@energy.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Renewable Energy & C&I Solutions Hub</span>
        </div>
      </div>
    </div>
  );
}
