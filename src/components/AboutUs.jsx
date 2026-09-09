import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
      title: '24/7 Operations & Maintenance',
      desc: 'IoT telemetry monitoring, thermal inspection, and rapid technician SLA support.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            About Mashariki Energy
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Who We Are & What We Do
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            <strong>Mashariki Energy</strong> is a leading clean energy provider delivering turnkey solar power systems, agricultural water pumping, and C&I microgrids across East Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Accelerating East Africa's Transition to Clean, Sustainable Power
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our engineering team manages every aspect of your solar deployment—from initial site audit and electrical engineering to equipment procurement, utility net-metering, and long-term 25-year O&M maintenance.
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
                <span>25-Year Linear Power Output Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2 REAL PHOTOS */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            
            {/* Photo 1 */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Mashariki Energy Site Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white px-2.5 py-1 rounded text-[10px] font-semibold backdrop-blur-xs">
                Site Inspection & Audit
              </div>
            </div>

            {/* Photo 2 */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group">
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80"
                alt="Mashariki Energy Solar Installation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white px-2.5 py-1 rounded text-[10px] font-semibold backdrop-blur-xs">
                Commercial Solar Arrays
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars */}
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
