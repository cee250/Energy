import React from 'react';
import { ShieldCheck, ArrowRight, Sun, Factory, Zap, Building2, TrendingDown, Award } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const stats = [
    { label: 'Installed Capacity', value: '185+ MWp', sub: 'Across 420+ Installations' },
    { label: 'CO₂ Emissions Offset', value: '520k Tons', sub: 'Equivalent to 2.1M Trees' },
    { label: 'Client Energy Savings', value: '$62M+', sub: 'Average 35% Bill Reduction' },
    { label: 'System Reliability', value: '99.92%', sub: '24/7 Monitoring & O&M' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eco-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-solar-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center md:justify-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-eco-500/30 text-eco-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-eco-500/5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-eco-400 animate-ping" />
            <Award className="w-3.5 h-3.5" />
            <span>Tier-1 Commercial & Industrial Solar Integrator</span>
          </div>
        </div>

        {/* Main Grid Hero Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Powering Industry with <span className="bg-gradient-to-r from-eco-400 via-eco-300 to-solar-400 bg-clip-text text-transparent">Clean Solar Energy</span> & Smart Microgrids
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              AuraGrid delivers turn-key <strong>Commercial & Industrial (C&I) solar panel installations</strong>, Battery Energy Storage Systems (BESS), and utility-grade renewable infrastructure tailored for maximum ROI and carbon reduction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-400 hover:to-eco-500 text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-eco-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <span>Request C&I Feasibility Study</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-base px-6 py-4 rounded-xl transition-all duration-200"
              >
                <TrendingDown className="w-5 h-5 text-solar-400" />
                <span>Estimate Solar ROI</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-eco-400 shrink-0" />
                <span>25-Year Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-eco-400 shrink-0" />
                <span>Zero-CAPEX PPA Funding Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-eco-400 shrink-0" />
                <span>Turnkey EPC Execution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Interactive Highlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl glow-emerald">
              
              {/* Card Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-eco-500/10 border border-eco-500/20 flex items-center justify-center text-eco-400">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Commercial & Industrial Focus</h3>
                    <p className="text-xs text-slate-400">Factories, Logistics, Mining, Retail Parks</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-eco-500/10 text-eco-400 border border-eco-500/20">
                  Active Live Grid
                </span>
              </div>

              {/* Dynamic Energy Flow Mock */}
              <div className="py-6 space-y-4">
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sun className="w-6 h-6 text-solar-400 animate-pulse" />
                    <div>
                      <span className="text-xs text-slate-400 block">Solar Array Generation</span>
                      <span className="text-lg font-bold text-white">4.8 MW Peak output</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-eco-400 bg-eco-500/10 px-2 py-1 rounded">+94% Offset</span>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-eco-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">BESS Storage Bank</span>
                      <span className="text-lg font-bold text-white">12.5 MWh Capacity</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded">Peak Shaving Active</span>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">Grid Dependency</span>
                      <span className="text-lg font-bold text-white">Reduced by 68%</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">$18,400 / mo saved</span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full text-center py-3 bg-slate-800 hover:bg-slate-700 text-eco-400 border border-eco-500/30 rounded-xl font-bold text-sm transition-colors"
              >
                Schedule On-Site Technical Audit →
              </button>

            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl transition-all duration-300 group"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-eco-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
