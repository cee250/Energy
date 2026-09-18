import React from 'react';
import { Sun } from 'lucide-react';

export default function Footer() {
  return <footer className="bg-[#102c1f] text-white/70 py-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-[#c9e86b] text-[#173f2b] flex items-center justify-center"><Sun className="w-4 h-4" /></span><span className="text-sm"><strong className="text-white">Mashariki Energy Ltd</strong><span className="mx-2 text-white/30">•</span>Energy systems for a resilient future.</span></div><a href="https://1000-hills.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#c9e86b] hover:text-white transition-colors">1000 Hills Group <span aria-hidden="true">↗</span></a></div></footer>;
}
