import React from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-[#f3f1e8] text-[#173f2b] overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-[#e2dfd2]">
      
      {/* Energy Solar Field Background Image Overlay (No Humans) */}
        <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/solar-hero.jpg"
          alt="Clean Solar Energy Infrastructure"
          className="w-full h-full object-cover opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f1e8] via-[#f3f1e8]/90 to-[#f3f1e8]/55" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e8f3bf] text-[#4d7b3a] text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.12em] border border-[#c9e86b]">
              <Sun className="w-3 h-3 text-[#4d7b3a]" />
              <span>MASHARIKI ENERGY • EAST AFRICA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173f2b] tracking-[-0.035em] leading-[1.05]">
              <span className="whitespace-nowrap">Turn key</span> <span className="text-[#79a94b]">solar power</span> for a brighter tomorrow
            </h1>

            <p className="text-sm sm:text-base text-[#52645b] max-w-xl font-normal leading-relaxed">
              <strong>Mashariki Energy</strong> delivers engineered solar panel installations, Commercial & Industrial (C&I) microgrids, and solar water pumping systems across East Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#173f2b] hover:bg-[#2c6445] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#173f2b]/20 transition-all hover:scale-105"
              >
                <span>Get Free Solar Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/70 hover:bg-white text-[#173f2b] font-bold text-sm px-6 py-3.5 rounded-full border border-[#d3d5c8] backdrop-blur-sm transition-all"
              >
                <span>Explore Services</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#d3d5c8] grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-[#52645b]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#79a94b] shrink-0" />
                <span>Tier-1 Monocrystalline Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#79a94b] shrink-0" />
                <span>Zero-CAPEX PPA Financing</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image (Pure Energy Technology, NO humans) */}
          <div className="lg:col-span-5">
            <div className="bg-white/75 border border-white rounded-[1.5rem] p-3 shadow-2xl backdrop-blur-md space-y-3 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-sm">
                <img
                  src="/images/solar-hero.jpg"
                  alt="Solar PV Energy Array"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                  <div className="absolute bottom-3 left-3 bg-[#173f2b]/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-[#2e6247]">
                  <span className="w-2 h-2 rounded-full bg-[#c9e86b] animate-ping" />
                  <span>Solar PV Infrastructure • Mashariki Energy</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-[#173f2b] rounded-xl border border-[#2e6247] text-center">
                  <span className="text-white/60 block text-[11px]">System Reliability</span>
                  <span className="font-bold text-[#c9e86b] text-sm">99.92% Grid Uptime</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d3d5c8] text-center">
                  <span className="text-[#52645b] block text-[11px]">Est. Bill Cut</span>
                  <span className="font-bold text-[#173f2b] text-sm">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
