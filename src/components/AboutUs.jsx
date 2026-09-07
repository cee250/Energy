import React from 'react';
import { ShieldCheck, Target, Leaf, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: 'Solar Energy Systems',
      desc: 'Rooftop and ground-mounted photovoltaic systems engineered for maximum annual energy yield.'
    },
    {
      title: 'Commercial & Industrial (C&I)',
      desc: 'Zero-CAPEX Power Purchase Agreements (PPAs) that reduce industrial factory power expenses.'
    },
    {
      title: 'Operations & Maintenance',
      desc: '24/7 IoT monitoring, thermal inspection, and rapid SLA maintenance support.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            About AuraGrid Energy
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Who We Are & What We Do
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We are a full-service renewable energy developer delivering clean, reliable, and cost-effective power solutions for commercial, industrial, and residential clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Driving Sustainability & Lowering Energy Costs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded by clean-tech engineers, AuraGrid handles every phase of your renewable energy transition—from initial site audit and electrical design to equipment procurement, grid interconnection, and 25-year plant maintenance.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tier-1 BloombergNEF Solar Modules</span>
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

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-900 text-base">Core Enterprise Mission</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              "To make clean solar energy accessible and economically advantageous for commercial businesses and communities, reducing reliance on fossil fuels and grid instability."
            </p>
            <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div>
                <span className="text-slate-400 block text-[11px]">System Availability</span>
                <span className="text-emerald-700 font-bold">99.92% SLA</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Average Payback</span>
                <span className="text-slate-900 font-bold">3.2 Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 className="font-bold text-slate-900 text-base mb-2">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
