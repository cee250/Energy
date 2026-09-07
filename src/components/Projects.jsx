import React from 'react';
import { Sun, Droplets, Factory, MapPin } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const projects = [
    {
      title: 'Commercial Logistics Distribution Center',
      location: 'Industrial District',
      capacity: '3.4 MWp PV + 6 MWh Storage',
      type: 'Zero-CAPEX PPA',
      icon: Factory,
      desc: 'Commercial rooftop solar installation covering 450,000 sq.ft with peak shaving and grid net-metering.'
    },
    {
      title: 'Agricultural Solar Water Pumping Project',
      location: 'Rural Agricultural Zone',
      capacity: '75 kWp Pumping System',
      type: 'Agri Irrigation',
      icon: Droplets,
      desc: 'High-capacity solar water pumping system delivering clean irrigation water to farming cooperatives.'
    },
    {
      title: 'Lake Muhazi Resort Solar Power System',
      location: 'Lake Muhazi Eco-Resort',
      capacity: '25 kWp PV + Off-Grid Battery',
      type: 'Hospitality Solar',
      icon: Sun,
      desc: 'Off-grid solar installation powering resort operations, water heating, and lighting with 100% clean power.'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Featured Deployments
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Real-World Project Case Studies
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Proven track record across manufacturing, logistics, resorts, and agricultural projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      {p.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{p.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 mb-4">{p.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between text-xs font-semibold text-slate-700">
                  <span>Capacity:</span>
                  <span className="text-emerald-700">{p.capacity}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
