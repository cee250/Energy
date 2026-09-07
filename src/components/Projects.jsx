import React from 'react';
import { Sun, Droplets, Building, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const projectList = [
    {
      title: 'Ma Campagne Resort Solar Power System',
      location: 'Muhazi, Rwanda',
      capacity: '25 kWp PV System',
      type: 'Resort & Commercial Off-Grid',
      icon: Sun,
      description: 'Off-grid solar system powering eco-resort operations, water heating, and lighting along Lake Muhazi with 24/7 reliability.',
      badge: 'Hospitality Solar'
    },
    {
      title: 'Kirehe District Solar Water Pumping Project',
      location: 'Kirehe District, Eastern Province',
      capacity: '75 kWp Pumping Array',
      type: 'Agri-Irrigation & Community Water',
      icon: Droplets,
      description: 'High-capacity solar water pumping installation delivering clean irrigation water to rural farming communities and agricultural cooperatives.',
      badge: 'Agri Water'
    },
    {
      title: 'Kigali Commercial Rooftop Solar Installation',
      location: 'Kigali Industrial Zone',
      capacity: '150 kWp Grid-Tied PV',
      type: 'Commercial Rooftop',
      icon: Building,
      description: 'Commercial grid-tied solar system cutting monthly electricity tariffs by 65% for manufacturing & warehousing facilities.',
      badge: 'Commercial PV'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Rwanda & Regional Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects in Rwanda
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Proven track record across resorts, agricultural irrigation, commercial rooftops, and community power.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <span>Request Site Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectList.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{p.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 text-xs mb-6 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">System Capacity:</span>
                      <span className="font-bold text-slate-900">{p.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Category:</span>
                      <span className="font-bold text-emerald-600">{p.type}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full text-center py-2.5 bg-white hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors"
                >
                  View Solution Blueprint →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
