import React from 'react';
import { Image as ImageIcon, MapPin, Plus } from 'lucide-react';

export default function Projects({ onOpenQuote }) {
  // Wireframe slots for user's real projects
  const projectSlots = [
    {
      slotNumber: 1,
      title: 'Project #1 Title Placeholder',
      location: 'Location / Site Name',
      capacity: 'System Capacity (kWp / MWp)',
      type: 'Project Category',
      desc: 'Add project description, specifications, and impact details here once completed.'
    },
    {
      slotNumber: 2,
      title: 'Project #2 Title Placeholder',
      location: 'Location / Site Name',
      capacity: 'System Capacity (kWp / MWp)',
      type: 'Project Category',
      desc: 'Add project description, specifications, and impact details here once completed.'
    },
    {
      slotNumber: 3,
      title: 'Project #3 Title Placeholder',
      location: 'Location / Site Name',
      capacity: 'System Capacity (kWp / MWp)',
      type: 'Project Category',
      desc: 'Add project description, specifications, and impact details here once completed.'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-100/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            // OUR PROJECTS & DEPLOYMENTS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Real-World Project Showcase
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Dedicated layout space reserved for completed Mashariki Energy deployments across East Africa.
          </p>
        </div>

        {/* Project Slots Wireframe Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projectSlots.map((p) => (
            <div key={p.slotNumber} className="bg-slate-50/80 p-5 rounded-2xl border-2 border-dashed border-slate-300 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-500 transition-colors group">
              <div className="space-y-3">
                
                {/* PROJECT IMAGE DROP ZONE */}
                <div className="aspect-[16/10] rounded-xl border border-slate-300 bg-slate-200/60 flex flex-col items-center justify-center text-center p-3 group-hover:bg-emerald-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-emerald-700 mb-2 shadow-xs group-hover:scale-105 transition-transform">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">📷 Add Real Project #{p.slotNumber} Photo</span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded mt-1">
                    Image Slot (16:10)
                  </span>
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Slot #{p.slotNumber}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded">
                      {p.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{p.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs font-semibold text-slate-700">
                <span className="text-slate-500">Capacity:</span>
                <span className="text-emerald-800 font-bold">{p.capacity}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
