import React from 'react';
import { Building, Factory, Truck, CheckCircle2, TrendingDown, Sun, ArrowUpRight } from 'lucide-react';

export default function CaseStudies({ onOpenQuote }) {
  const projects = [
    {
      title: 'Apex Global Logistics Distribution Hub',
      client: 'Apex Logistics Corp',
      sector: 'Logistics & Warehousing',
      icon: Truck,
      capacity: '3.4 MWp PV + 6.0 MWh BESS',
      savings: '$380,000 / year',
      offset: '2,800 Tons CO₂ / yr',
      payback: '3.2 Years',
      description: 'Zero-CAPEX PPA project covering 450,000 sq.ft of industrial roof space with automated robotic panel maintenance and peak-load shedding.',
      badge: 'Zero-CAPEX PPA'
    },
    {
      title: 'Precision Metal & Heavy Manufacturing Plant',
      client: 'Apex Heavy Industries',
      sector: 'Heavy Industry',
      icon: Factory,
      capacity: '7.8 MWp Microgrid',
      savings: '$890,000 / year',
      offset: '6,400 Tons CO₂ / yr',
      payback: '2.9 Years',
      description: 'High-voltage grid-tied solar microgrid synchronized with dual 2.5 MVA diesel backup generators to ensure 100% factory uptime.',
      badge: 'Hybrid Microgrid'
    },
    {
      title: 'OmniCenter Commercial Retail & Office Park',
      client: 'Omni Real Estate Group',
      sector: 'Commercial Real Estate',
      icon: Building,
      capacity: '1.9 MWp Solar Carport',
      savings: '$210,000 / year',
      offset: '1,550 Tons CO₂ / yr',
      payback: '3.8 Years',
      description: 'Turnkey solar canopy installation over 350 parking spaces featuring 24 integrated DC Fast EV charging stations.',
      badge: 'Solar Canopy + EV'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-500/10 text-eco-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-eco-500/20">
              <Sun className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Commercial & Industrial Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              See how we help industry leaders reduce operational expenses and achieve net-zero targets.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-eco-400 border border-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            <span>Explore All 120+ Deployments</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-eco-500/40 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-eco-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-eco-500/10 text-eco-400 border border-eco-500/20">
                      {p.badge}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                    {p.sector}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-eco-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">System Capacity:</span>
                      <span className="font-bold text-white">{p.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Annual OPEX Cut:</span>
                      <span className="font-bold text-eco-400">{p.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Carbon Offset:</span>
                      <span className="font-bold text-white">{p.offset}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Payback Period:</span>
                      <span className="font-bold text-white">{p.payback}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full text-center py-2.5 bg-slate-950 hover:bg-eco-500 hover:text-slate-950 text-slate-300 font-bold text-xs rounded-xl border border-slate-800 transition-all duration-200"
                >
                  Request Similar Project Analysis
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
