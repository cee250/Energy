import React from 'react';
import { Sun, ShieldCheck, ArrowRight, Award, Zap, Building2, Car, Droplets } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const stats = [
    { label: 'Installed Solar Capacity', value: '1.3+ GW', sub: 'Across 12+ African Countries' },
    { label: 'Industry Experience', value: '15+ Years', sub: 'Pioneering Clean Power' },
    { label: 'Environmental Award', value: '2019 Winner', sub: 'Beat Air Pollution Award' },
    { label: 'Active Projects', value: '500+ Sites', sub: 'Commercial, Residential & Agri' }
  ];

  return (
    <section id="home" className="relative py-16 lg:py-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 shadow-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>East Africa’s Leading Renewable Energy Developer</span>
          </div>
        </div>

        {/* Main Grid Hero Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Sustainable <span className="text-emerald-600">Solar Energy</span>, E-Mobility & Smart Real Estate
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              <strong>RENERG Rwanda Ltd</strong> provides end-to-end clean energy solutions across Rwanda and East Africa. From rooftop solar and commercial microgrids to solar water pumping and electric vehicle infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Free Solar Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all"
              >
                <span>Explore Our Projects</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25-Year Panel Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Commercial & Residential</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Solar Water Pumping</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Key Focus Sectors</h3>
                  <p className="text-xs text-slate-500">Rwanda & East Africa Operations</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  ISO Certified
                </span>
              </div>

              {/* Service Quick Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Solar Energy Systems</h4>
                    <p className="text-xs text-slate-500">On-Grid & Off-Grid PV Solutions for Homes & Businesses</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">E-Mobility & EV Charging</h4>
                    <p className="text-xs text-slate-500">Electric Vehicle Charging Infrastructure & Fleets</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Smart Real Estate</h4>
                    <p className="text-xs text-slate-500">Energy Efficient Buildings & Sustainable Architecture</p>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors text-center"
              >
                Schedule Technical Site Audit →
              </button>

            </div>
          </div>

        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-3xl font-extrabold text-emerald-600">{s.value}</p>
              <p className="text-sm font-bold text-slate-900 mt-1">{s.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
