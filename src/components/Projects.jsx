import React, { useState } from 'react';
import { Sun, Droplets, Building, Factory, Truck, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      id: 'logistics',
      category: 'commercial',
      title: 'Apex Logistics Global Distribution Hub',
      location: 'Industrial Hub',
      capacity: '3.4 MWp PV + 6.0 MWh BESS',
      savings: '$380,000 / year',
      payback: '3.2 Years',
      icon: Truck,
      description: 'Zero-CAPEX PPA project covering 450,000 sq.ft of warehouse roof space with automated robotic panel scrubbing and peak-load shaving.',
      badge: 'Zero-CAPEX PPA'
    },
    {
      id: 'manufacturing',
      category: 'industrial',
      title: 'Precision Metal & Heavy Manufacturing Plant',
      location: 'Heavy Industrial Park',
      capacity: '7.8 MWp Hybrid Microgrid',
      savings: '$890,000 / year',
      payback: '2.9 Years',
      icon: Factory,
      description: 'High-voltage grid-tied solar microgrid synchronized with dual 2.5 MVA generators to guarantee 100% factory operating uptime.',
      badge: 'Hybrid Microgrid'
    },
    {
      id: 'resort',
      category: 'hospitality',
      title: 'Ma Campagne Eco-Resort Solar Power System',
      location: 'Lake Muhazi Waterfront',
      capacity: '25 kWp Off-Grid Solar + BESS',
      savings: '100% Diesel Displacement',
      payback: '3.5 Years',
      icon: Sun,
      description: 'Off-grid solar installation powering luxury eco-resort operations, water heating, and lighting with zero noise or diesel emissions.',
      badge: 'Off-Grid Resort'
    },
    {
      id: 'agri-water',
      category: 'agriculture',
      title: 'Kirehe District Solar Water Pumping Project',
      location: 'Kirehe District, Eastern Province',
      capacity: '75 kWp Solar Pumping Array',
      savings: '$0 Fuel Expenses',
      payback: 'Community Project',
      icon: Droplets,
      description: 'High-capacity solar water pumping installation delivering clean irrigation water to rural farming cooperatives and agricultural land.',
      badge: 'Agri Irrigation'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>Proven Global Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Projects
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              Proven track record across manufacturing, logistics, resorts, and agricultural irrigation.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 px-6 py-3 rounded-2xl font-bold text-sm transition-all"
          >
            <span>Explore All Deployments</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'industrial', label: 'Heavy Industry' },
            { id: 'commercial', label: 'Logistics & Commercial' },
            { id: 'hospitality', label: 'Resorts & Hotels' },
            { id: 'agriculture', label: 'Agri Water Pumping' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                filter === f.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((p) => {
            const IconComp = p.icon;
            return (
              <div key={p.id} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{p.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">System Capacity:</span>
                      <span className="font-bold text-white font-mono">{p.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Annual Value:</span>
                      <span className="font-bold text-emerald-400 font-mono">{p.savings}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full text-center py-3 bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-all"
                >
                  Request Technical Case Study PDF →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
