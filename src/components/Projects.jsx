import React from 'react';
import { Sun, Droplets, Factory, MapPin } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  const projects = [
    {
      id: 'logistics',
      title: 'Commercial Logistics Distribution Hub',
      location: 'Industrial District',
      capacity: '3.4 MWp PV + 6 MWh Storage',
      type: 'Zero-CAPEX PPA',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
      desc: 'Commercial rooftop solar installation covering 450,000 sq.ft with peak shaving and grid net-metering.'
    },
    {
      id: 'agri-water',
      title: 'Agricultural Solar Water Pumping System',
      location: 'Kirehe District / Agricultural Zone',
      capacity: '75 kWp Pumping Array',
      type: 'Agri Irrigation',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1595838788459-6ab361b2b960?auto=format&fit=crop&w=800&q=80',
      desc: 'High-capacity solar water pumping system delivering clean irrigation water to farming cooperatives.'
    },
    {
      id: 'resort',
      title: 'Lake Muhazi Resort Solar Power',
      location: 'Lake Muhazi Waterfront',
      capacity: '25 kWp PV + Off-Grid Storage',
      type: 'Hospitality Solar',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      desc: 'Off-grid solar installation powering resort operations, water heating, and lighting with 100% clean power.'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
            // FEATURED DEPLOYMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Case Studies & Project Deployments
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Proven track record across manufacturing, logistics, eco-resorts, and agricultural projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => {
            const IconComp = p.icon;
            return (
              <div key={p.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-colors group">
                <div className="space-y-3">
                  {/* PROJECT IMAGE THUMBNAIL */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xs border border-slate-200 relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-white px-2.5 py-1 rounded-md text-[10px] font-bold">
                      {p.type}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{p.location}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">{p.title}</h3>
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
