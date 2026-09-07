import React from 'react';
import { Sun, Droplets, Factory, MapPin, Image as ImageIcon } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const projects = [
    {
      id: 'logistics',
      title: 'Commercial Logistics Distribution Hub',
      location: 'Industrial District',
      capacity: '3.4 MWp PV + 6 MWh Storage',
      type: 'Zero-CAPEX PPA',
      icon: Factory,
      imageTag: '📷 Logistics Hub Rooftop Solar Photo (16:10)',
      desc: 'Commercial rooftop solar installation covering 450,000 sq.ft with peak shaving and grid net-metering.'
    },
    {
      id: 'agri-water',
      title: 'Agricultural Solar Water Pumping System',
      location: 'Kirehe District / Rural Zone',
      capacity: '75 kWp Pumping Array',
      type: 'Agri Irrigation',
      icon: Droplets,
      imageTag: '📷 Solar Water Pumping System Photo (16:10)',
      desc: 'High-capacity solar water pumping system delivering clean irrigation water to farming cooperatives.'
    },
    {
      id: 'resort',
      title: 'Ma Campagne Eco-Resort Solar Power',
      location: 'Lake Muhazi Waterfront',
      capacity: '25 kWp PV + Off-Grid Storage',
      type: 'Hospitality Solar',
      icon: Sun,
      imageTag: '📷 Eco-Resort Off-Grid Solar Photo (16:10)',
      desc: 'Off-grid solar installation powering resort operations, water heating, and lighting with 100% clean power.'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Featured Projects
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Case Studies & Project Deployments
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Proven track record across manufacturing, logistics, eco-resorts, and agricultural projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => {
            const IconComp = p.icon;
            return (
              <div key={p.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* PROJECT IMAGE PLACEHOLDER SLOT */}
                  <div className="aspect-[16/10] rounded-xl border-2 border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-center p-3 hover:border-emerald-500 transition-colors group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-600 mb-1 group-hover:scale-105 transition-transform">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] font-bold text-slate-800">{p.imageTag}</p>
                    <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded mt-1">
                      Project Thumbnail
                    </span>
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {p.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mb-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{p.location}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span className="text-slate-500">Capacity:</span>
                  <span className="text-emerald-700 font-bold">{p.capacity}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
