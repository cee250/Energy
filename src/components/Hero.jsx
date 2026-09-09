import React from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
      
      {/* Energy Solar Field Background Image Overlay (No Humans) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
          alt="Clean Solar Energy Infrastructure"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-extrabold uppercase tracking-widest border border-emerald-500/30">
              <Sun className="w-3.5 h-3.5 text-emerald-400" />
              <span>// MASHARIKI ENERGY • EAST AFRICA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Turnkey <span className="text-emerald-400">Solar Power</span> & Commercial Microgrids
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              <strong>Mashariki Energy</strong> delivers engineered solar panel installations, Commercial & Industrial (C&I) microgrids, and solar water pumping systems across East Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
              >
                <span>Get Free Solar Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-base px-7 py-4 rounded-xl border border-slate-700 backdrop-blur-sm transition-all"
              >
                <span>Explore Services</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tier-1 Monocrystalline Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-CAPEX PPA Financing</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image (Pure Energy Technology, NO humans) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md space-y-3">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar PV Energy Array"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Solar PV Infrastructure • Mashariki Energy</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">System Reliability</span>
                  <span className="font-bold text-emerald-400 text-sm">99.92% Grid Uptime</span>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">Est. Bill Cut</span>
                  <span className="font-bold text-white text-sm">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
