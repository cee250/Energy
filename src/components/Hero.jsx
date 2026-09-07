import React from 'react';
import { Sun, ShieldCheck, ArrowRight, Building2, Zap } from 'lucide-react';

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
    <section id="home" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5 text-emerald-600" />
              <span>Solar & Commercial Energy Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Reliable <span className="text-emerald-600">Solar Energy</span> & Commercial Power Systems
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              We design, install, and maintain high-efficiency solar panel installations, Commercial & Industrial (C&I) microgrids, and battery energy storage for businesses and homes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-sm transition-colors"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-colors"
              >
                <span>View Our Services</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 Solar Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>C&I Zero-Down PPA Financing</span>
              </div>
            </div>
          </div>

          {/* Right Visual Structure Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base">Key Capabilities</h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  Turnkey EPC
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Solar Panel Installation</h4>
                    <p className="text-xs text-slate-500">Commercial & Residential Rooftop PV</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">C&I Microgrids & PPAs</h4>
                    <p className="text-xs text-slate-500">Zero-CAPEX Power Purchase Agreements</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">24/7 Asset Monitoring</h4>
                    <p className="text-xs text-slate-500">Operations & Plant Maintenance</p>
                  </div>
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
