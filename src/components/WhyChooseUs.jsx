import React from 'react';
import { ShieldCheck, Award, Zap, Clock, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Tier-1 BNEF Equipment',
      desc: 'We exclusively use BloombergNEF Tier-1 rated solar modules and central smart inverters.'
    },
    {
      icon: Award,
      title: '25-Year Power Guarantee',
      desc: 'All installations include 25-year linear power output performance warranties backed by insurance.'
    },
    {
      icon: Zap,
      title: 'Zero-CAPEX PPA Options',
      desc: 'Commercial & industrial clients can adopt megawatt solar PV with $0 upfront investment.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring & O&M SLA',
      desc: 'Automated IoT telemetry monitoring with guaranteed response dispatch SLA within 4 hours.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
          alt="Solar Background Pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-md border border-emerald-500/30">
            // WHY CHOOSE MASHARIKI ENERGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            High-Performance Solar Engineering Standards
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Built to international IEEE and IEC standards for long-term power generation.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const IconComp = f.icon;
            return (
              <div key={idx} className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
