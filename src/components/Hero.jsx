import React from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2, Image as ImageIcon, Upload } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const stats = [
    { value: '185+ MW', label: 'Installed Capacity' },
    { value: '420+', label: 'Commercial Projects' },
    { value: '35%', label: 'Avg Energy Bill Cut' },
    { value: '25 Yrs', label: 'Panel Performance Warranty' }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="py-16 md:py-20 bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sun className="w-3.5 h-3.5 text-emerald-600" />
              <span>Solar & C&I Renewable Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Powering Business with <span className="text-emerald-600">Clean Solar Energy</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              End-to-end solar panel installations, Commercial & Industrial (C&I) microgrids, and energy storage systems designed for maximum financial ROI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-colors"
              >
                <span>Get Free Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-colors"
              >
                <span>Our Services</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 Equipment Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-CAPEX PPA Options</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Frame Placeholder */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-3">
              {/* IMAGE PLACEHOLDER BOX */}
              <div className="aspect-[16/10] rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/40 flex flex-col items-center justify-center text-center p-6 transition-all hover:bg-emerald-50/70 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm mb-3 group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Hero Banner Image Placeholder</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Insert Commercial Solar Rooftop / Installation Photo here (Recommended: 1200 x 750px)
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-white border border-emerald-200 px-3 py-1 rounded-full mt-3 shadow-xs">
                  <Upload className="w-3 h-3" /> Ready for Image Upload
                </span>
              </div>

              {/* Overlay Stat Summary */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-500 block text-[11px]">System Reliability</span>
                  <span className="font-bold text-emerald-600 text-sm">99.92% Grid Uptime</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-500 block text-[11px]">Est. Bill Cut</span>
                  <span className="font-bold text-slate-900 text-sm">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{s.value}</p>
              <p className="text-xs font-semibold text-slate-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
