import React, { useState } from 'react';
import { Sun, ShieldCheck, ArrowRight, Award, Zap, Building2, TrendingDown, BatteryCharging, CheckCircle2, Play } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('pv');

  const stats = [
    { label: 'Installed Solar Capacity', value: '185+ MWp', sub: 'Across 420+ Enterprise Projects' },
    { label: 'Carbon Emissions Offset', value: '520k Tons', sub: 'Equivalent to 2.1M Trees Planted' },
    { label: 'Client Cumulative Savings', value: '$62M+', sub: 'Average 40% Utility OPEX Reduction' },
    { label: 'Power Grid Availability', value: '99.92%', sub: '24/7 Remote IoT Monitoring SLA' }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] py-16 lg:py-24 bg-slate-950 overflow-hidden flex flex-col justify-center">
      
      {/* Ambient Radial Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Background Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Pill */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Tier-1 Commercial & Industrial Renewable Integrator</span>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Powering Enterprise with <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Smart Solar Microgrids</span> & Zero-CAPEX PPAs
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong>AuraGrid Energy</strong> designs, builds, and operates megawatt-scale solar PV installations, battery energy storage systems (BESS), and agricultural water pumps tailored for maximum yield and carbon reduction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Request Technical Feasibility Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-bold text-base px-6 py-4 rounded-2xl backdrop-blur-md transition-all"
              >
                <TrendingDown className="w-5 h-5 text-amber-400" />
                <span>Calculate Solar ROI</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>25-Year Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Upfront CAPEX Financing</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Turnkey High-Voltage EPC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Energy Control Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden glow-emerald">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Live Microgrid Controller</h3>
                    <p className="text-xs text-slate-400">C&I Telemetry & Smart Dispatch</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Sync
                </span>
              </div>

              {/* Status Tabs */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" />
                    <div>
                      <span className="text-xs text-slate-400 block">Rooftop Solar Array Output</span>
                      <span className="text-lg font-bold text-white font-mono">4.8 MW Peak Generation</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    +92% Offset
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BatteryCharging className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">BESS Battery Storage</span>
                      <span className="text-lg font-bold text-white font-mono">12.5 MWh Active Reserve</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                    Peak Shaving
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-6 h-6 text-teal-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">Grid Electricity Reduction</span>
                      <span className="text-lg font-bold text-white font-mono">Cut Tariff Bills by 68%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    $18,400 / mo saved
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full text-center py-3.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 text-emerald-300 border border-emerald-500/30 rounded-xl font-bold text-sm transition-all"
              >
                Schedule Technical Site Audit →
              </button>

            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 group"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors font-mono">
                {s.value}
              </p>
              <p className="text-sm font-bold text-slate-200 mt-1">{s.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
