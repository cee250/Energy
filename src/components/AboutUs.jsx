import React from 'react';
import { Target, ShieldCheck, Leaf, Globe, CheckCircle2, Award, Zap, Building2, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: Target,
      title: 'Commercial Solar PV Engineering',
      description: 'Designing high-efficiency rooftop and ground-mounted photovoltaic systems for factories, warehouses, resorts, and commercial real estate.'
    },
    {
      icon: Leaf,
      title: 'Agricultural & Solar Water Pumping',
      description: 'Deploying heavy-duty solar water pumps for community drinking water, agricultural irrigation, and livestock farming with $0 fuel expense.'
    },
    {
      icon: Globe,
      title: 'Zero-CAPEX Power Purchase Agreements',
      description: 'Enabling enterprises to adopt multi-megawatt clean energy with zero upfront capital expenditure through long-term PPAs.'
    },
    {
      icon: ShieldCheck,
      title: '24/7 Operations & Maintenance (O&M)',
      description: 'Maximizing plant yield with automated IoT telemetry, thermal drone inspections, and guaranteed 4-hour SLA dispatch teams.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Founded', desc: 'Started with commercial rooftop solar installations.' },
    { year: '2018', title: 'C&I Expansion', desc: 'Launched zero-down PPA financing models for industry.' },
    { year: '2021', title: 'Solar Water Pumping', desc: 'Deployed multi-site agricultural irrigation arrays across East Africa.' },
    { year: '2024', title: '185+ MW Milestone', desc: 'Surpassed 185 MWp capacity across 420+ deployments.' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Globe className="w-3.5 h-3.5" />
            <span>About AuraGrid Energy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who We Are & What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            AuraGrid Energy is a premier full-service renewable energy developer, EPC contractor, and clean power provider specializing in Solar PV, Storage, and C&I Microgrids.
          </p>
        </div>

        {/* Narrative */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              Transforming Industrial & Enterprise Energy Infrastructure
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Energy cost and grid instability are two of the biggest obstacles facing commercial enterprises, agricultural projects, and resorts today. AuraGrid delivers turn-key clean energy ecosystems that eliminate grid dependency, lower utility bills by up to 85%, and meet stringent ESG decarbonization goals.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              From site feasibility analysis, high-voltage electrical design, and equipment procurement to installation, utility net-metering, and 25-year O&M care—we handle every phase under one roof.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Tier-1 BloombergNEF Modules</h4>
                  <p className="text-xs text-slate-400">Bankable 25-year linear power warranty</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">ISO 9001 & 45001 Certified</h4>
                  <p className="text-xs text-slate-400">Strict international safety standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden glow-emerald">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Our Enterprise Pledge</h4>
                <p className="text-xs text-slate-400">Guaranteed System Yield & Performance Ratios</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              "We empower businesses and agricultural communities with reliable clean power, protecting them against utility price hikes while reducing global carbon footprints."
            </p>

            <div className="border-t border-slate-800/80 pt-6 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">System Availability:</span>
                <span className="font-bold text-emerald-400 font-mono">99.92% Guaranteed</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Average Payback Timeline:</span>
                <span className="font-bold text-white font-mono">2.8 – 3.8 Years</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Design Engineering Standards:</span>
                <span className="font-bold text-emerald-400">IEEE & IEC Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">{p.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Growth Timeline */}
        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Company History & Track Record</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="border-l-2 border-emerald-500 pl-4 space-y-1">
                <span className="text-emerald-400 font-mono font-extrabold text-lg block">{m.year}</span>
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
