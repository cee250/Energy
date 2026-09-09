import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#173f2b] text-white/75 text-xs py-2 border-b border-[#2e6247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <a href="tel:0000000" className="flex items-center gap-1.5 hover:text-[#c9e86b] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#c9e86b]" />
            <span className="font-semibold">0000000</span>
          </a>
          <a href="mailto:info@mashariki-energy.com" className="flex items-center gap-1.5 hover:text-[#c9e86b] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#c9e86b]" />
            <span>info@mashariki-energy.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-white/60">
          <MapPin className="w-3.5 h-3.5 text-[#c9e86b]" />
          <span>Mashariki Energy • Kigali, Rwanda & East Africa</span>
        </div>
      </div>
    </div>
  );
}
