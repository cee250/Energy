import React from 'react';
import { ArrowRight, BatteryCharging, Leaf, Sun } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-[#173f2b] text-white">
      <div className="absolute inset-0 opacity-20"><img src="/images/solar-hero.jpg" alt="Solar panels in daylight" className="w-full h-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#173f2b] via-[#173f2b]/95 to-[#173f2b]/60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#c9e86b] text-xs font-bold uppercase tracking-[0.18em] mb-6"><Sun className="w-4 h-4" /> Mashariki Energy Ltd</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.04]">Practical energy systems for a more resilient future.</h1>
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">We supply and install photovoltaic systems, energy storage, EV charging, clean cooking equipment, and smart kitchens for schools and corporate institutions.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={onOpenQuote} className="inline-flex items-center justify-center gap-2 bg-[#c9e86b] hover:bg-[#d8f28e] text-[#173f2b] font-bold px-6 py-3.5 rounded-full transition-colors">Discuss your project <ArrowRight className="w-4 h-4" /></button>
              <button onClick={() => scrollTo('services')} className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded-full transition-colors">Explore services</button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#c9e86b] font-bold">What we bring together</p>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4"><div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center"><Leaf className="w-5 h-5 text-[#c9e86b]" /></div><div><h3 className="font-semibold">Clean generation</h3><p className="text-sm text-white/65 mt-1">Well-planned photovoltaic supply and installation.</p></div></div>
                <div className="flex gap-4"><div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center"><BatteryCharging className="w-5 h-5 text-[#c9e86b]" /></div><div><h3 className="font-semibold">Reliable continuity</h3><p className="text-sm text-white/65 mt-1">Storage, monitoring, maintenance, and spare-parts support.</p></div></div>
                <div className="pt-5 border-t border-white/15 text-sm text-white/70">From first assessment to ongoing support, we help clients make energy infrastructure work harder and last longer.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
