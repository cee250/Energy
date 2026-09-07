import React from 'react';
import { ShieldCheck, CheckCircle2, Image as ImageIcon, Upload } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Solar PV Systems',
      desc: 'Commercial & residential solar installations designed for maximum long-term power output.'
    },
    {
      title: 'C&I Power Purchase Agreements',
      desc: 'Zero-CAPEX financing models that eliminate upfront installation costs for businesses.'
    },
    {
      title: '24/7 Operations & Care',
      desc: 'IoT telemetry monitoring, thermal inspections, and rapid technician SLA support.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            About Our Company
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Who We Are & What We Do
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            A full-service renewable energy company delivering turnkey solar energy systems, agricultural water pumping, and C&I microgrids.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Text Structure */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Driving Clean Energy Innovation Across Industrial & Commercial Sectors
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our engineering team manages every aspect of your solar deployment—from site audit and electrical engineering to equipment procurement, utility net-metering, and long-term O&M maintenance.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tier-1 Monocrystalline Solar Modules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001 Quality & Safety Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>25-Year Linear Power Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 IMAGE PLACEHOLDERS */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            
            {/* Image Slot 1 */}
            <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-4 hover:border-emerald-500 transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-xs mb-2 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 text-xs">About Image Slot #1</h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Insert Engineering Team / Field Photo
              </p>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded mt-2">
                Image Placeholder
              </span>
            </div>

            {/* Image Slot 2 */}
            <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-4 hover:border-emerald-500 transition-colors group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-xs mb-2 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-800 text-xs">About Image Slot #2</h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Insert Solar Project Installation Photo
              </p>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded mt-2">
                Image Placeholder
              </span>
            </div>

          </div>

        </div>

        {/* 3 Focus Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
