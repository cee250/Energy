import React from 'react';
import { Sun, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-200/90 border-t border-slate-300 py-6 text-xs text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
            <Sun className="w-4 h-4 fill-white" />
          </div>
          <div>
            <span className="font-bold text-slate-900">Mashariki Energy</span>
            <span className="text-slate-400 mx-2">|</span>
            <span className="text-slate-600">© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4 text-slate-600 text-[11px]">
          <span>0000000</span>
          <span>•</span>
          <span>info@mashariki-energy.com</span>
        </div>

        {/* Corner Link to 1000 Hills Group */}
        <div className="flex items-center gap-1.5">
          <a
            href="https://1000-hills.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-900 hover:text-emerald-950 font-extrabold bg-emerald-100/90 hover:bg-emerald-200/90 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs transition-all shadow-xs"
          >
            <span>1000 Hills Group</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
