import React from 'react';
import { Target, ShieldCheck, Zap, Users, CheckCircle2, Award, Globe, Leaf } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: Target,
      title: 'Industrial Energy Independence',
      description: 'We insulate commercial enterprises from grid volatility, load shedding, and escalating utility tariffs through custom rooftop and ground-mounted solar microgrids.'
    },
    {
      icon: ShieldCheck,
      title: 'Tier-1 Engineering & EPC',
      description: 'Our in-house IEEE-certified engineers design, procure, and build high-efficiency solar plants with guaranteed performance ratios and 25-year structural warranties.'
    },
    {
      icon: Zap,
      title: 'Zero-CAPEX Financial Models',
      description: 'Through custom Power Purchase Agreements (PPA) and Lease-to-Own structures, commercial clients adopt solar with $0 upfront capital expenditure.'
    },
    {
      icon: Leaf,
      title: 'Decarbonization & ESG Compliance',
      description: 'We help global brands achieve Scope 1 and Scope 2 net-zero sustainability milestones with verified carbon credit integration and RE100 reporting.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', desc: 'Started with commercial rooftop installations in industrial hubs.' },
    { year: '2017', title: 'C&I Division Expansion', desc: 'Pioneered zero-down PPA financing for manufacturing plants.' },
    { year: '2020', title: 'Utility Microgrids & BESS', desc: 'Integrated multi-megawatt battery energy storage for 24/7 operations.' },
    { year: '2024', title: '180+ MW Milestones', desc: 'Surpassed 180 MWp total installed capacity across 400+ enterprises.' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-500/10 text-eco-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-eco-500/20">
            <Globe className="w-3.5 h-3.5" />
            <span>About AuraGrid Energy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who We Are & What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            AuraGrid Energy is a premier full-service renewable energy developer, EPC contractor, and clean tech power provider. We specialize in empowering commercial, industrial, and residential clients with reliable solar energy generation.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Transforming Industrial Power Consumption for a Sustainable Tomorrow
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Energy is the lifeblood of modern commerce, yet rising utility costs and grid unreliability jeopardize business continuity. Founded by energy engineers and clean-tech visionaries, AuraGrid solves these critical challenges with end-to-end solar solutions.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              From site feasibility analysis, high-voltage electrical engineering, and permitting, to procurement, construction, and long-term O&M monitoring—we manage every phase of your clean energy transition.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-eco-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">ISO 9001 & 45001 Certified</h4>
                  <p className="text-xs text-slate-400">Strict quality & safety protocols</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-eco-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Tier-1 Equipment Only</h4>
                  <p className="text-xs text-slate-400">BloombergNEF Tier-1 modules</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-eco-950 to-slate-900 p-8 flex flex-col justify-between border border-eco-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-eco-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <span className="text-eco-400 font-mono text-xs uppercase tracking-widest block mb-2">Engineering Standard</span>
                  <h4 className="text-2xl font-bold text-white max-w-xs">Built for 25+ Years of Uninterrupted Clean Generation</h4>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">System Availability</span>
                    <span className="font-bold text-eco-400">99.92% Guaranteed</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-eco-500 to-solar-400 h-full w-[99.92%]" />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-solar-400" />
                  <span>Licensed General Contractor & High Voltage Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-eco-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-eco-500/10 border border-eco-500/20 flex items-center justify-center text-eco-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline Milestones */}
        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Our Evolution & Growth</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="border-l-2 border-eco-500 pl-4 space-y-1">
                <span className="text-eco-400 font-extrabold text-lg block">{m.year}</span>
                <h4 className="text-white font-semibold text-sm">{m.title}</h4>
                <p className="text-slate-400 text-xs">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
