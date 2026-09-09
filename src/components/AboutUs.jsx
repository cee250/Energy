import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Solar PV Engineering',
      desc: 'Commercial & residential solar systems designed for maximum long-term power output.'
    },
    {
      title: 'C&I Power Purchase Agreements',
      desc: 'Zero-CAPEX financing models that eliminate upfront installation costs for businesses.'
    },
    {
      title: '24/7 Operations & Care',
      desc: 'IoT telemetry monitoring, thermal inspection, and rapid technician SLA support.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            // ABOUT MASHARIKI ENERGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Leading Clean Energy Developer in East Africa
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We deliver turnkey solar energy systems, agricultural water pumping, and C&I microgrids across East Africa.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Driving Energy Independence & Carbon Reduction Across Commercial Sectors
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our engineering team manages every aspect of your solar deployment—from initial site audit and high-voltage electrical design to equipment procurement, utility net-metering, and long-term 25-year O&M maintenance.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Tier-1 Monocrystalline Solar Modules (BloombergNEF Rated)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>ISO 9001 Quality & ISO 45001 Safety Certified</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>25-Year Linear Power Output Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Dual Image Stack (Pure Solar Infrastructure, NO humans) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xs border border-slate-200 relative group">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Solar PV Arrays"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                  Commercial Rooftop PV
                </div>
              </div>

              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xs border border-slate-200 relative group mt-6">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                  alt="Monocrystalline Solar Panel Technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                  Monocrystalline Panels
                </div>
              </div>

            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-slate-800">
              <Award className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <span className="text-lg font-extrabold text-white block leading-none font-mono">15+ YEARS</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Regional Clean Energy Leadership</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 pt-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h4 className="font-bold text-slate-900 text-base mb-2">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
