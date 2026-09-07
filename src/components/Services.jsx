import React, { useState } from 'react';
import { Sun, Building2, BatteryCharging, Wrench, Car, BarChart3, Check, ArrowRight, Shield } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('c-and-i');

  const services = [
    {
      id: 'c-and-i',
      icon: Building2,
      category: 'Commercial & Industrial',
      title: 'Commercial & Industrial (C&I) Energy Solutions',
      tagline: 'Tailored Megawatt-Scale Clean Power for Heavy Industry, Warehouses, & Corporate Assets',
      description: 'Custom power generation ecosystems designed to lower operational expenditures (OPEX) and shield facilities from grid blackouts and demand charges.',
      features: [
        'Zero-CAPEX Power Purchase Agreements (PPA)',
        'Rooftop, Carport & Ground-Mounted PV Arrays',
        'Grid-Tied Microgrid Integration with Generator Auto-Sync',
        'Peak Shaving & Demand Charge Reduction',
        'Custom Energy Savings & Carbon Reduction Guarantees'
      ],
      badge: 'Core Specialty'
    },
    {
      id: 'solar-install',
      icon: Sun,
      category: 'Solar Engineering',
      title: 'Turnkey Solar Panel Installation',
      tagline: 'Precision High-Efficiency PV Systems for Commercial Buildings & Residences',
      description: 'End-to-end engineering, procurement, and construction (EPC) using top-rated Tier-1 monocrystalline panels and smart solar microinverters.',
      features: [
        'High-Yield Monocrystalline Solar Modules (>22.5% Efficiency)',
        'Commercial String & Central Inverter Systems',
        'Structural Rooftop Weight & Wind Load Compliance',
        'Full Utility Net-Metering & Grid Interconnection',
        '25-Year Linear Power Output Warranty'
      ],
      badge: 'Popular'
    },
    {
      id: 'bess',
      icon: BatteryCharging,
      category: 'Storage Solutions',
      title: 'Battery Energy Storage Systems (BESS)',
      tagline: 'Uninterrupted 24/7 Power Reserve & Energy Arbitrage',
      description: 'Heavy-duty Lithium Iron Phosphate (LiFePO4) storage systems that store excess daytime solar energy to power night shifts or backup critical loads.',
      features: [
        'Scalable Storage from 100 kWh to 50+ MWh',
        'Millisecond Uninterruptible Power Supply (UPS) Transfer',
        'Energy Time-of-Use (TOU) Tariff Arbitrage',
        'Thermal Management & Fire-Safe LFP Cell Chemistry',
        'Smart BMS Integration with Utility Dispatch'
      ],
      badge: 'High ROI'
    },
    {
      id: 'o-and-m',
      icon: Wrench,
      category: 'Operations',
      title: 'Operations & Maintenance (O&M)',
      tagline: 'Proactive 24/7 Monitoring & Predictive Asset Care',
      description: 'Maximize your solar plant yield over its 25+ year lifespan with automated string monitoring, thermal drone inspection, and rapid dispatch technicians.',
      features: [
        'Real-Time IoT Performance & Yield Dashboards',
        'Automated Cleaning & Robotic Panel Scrubbing',
        'Thermal IR Drone Inspections for Micro-crack Detection',
        'Guaranteed Response SLA (< 4 Hours)',
        'Preventative Transformer & Inverter Servicing'
      ],
      badge: 'Managed Care'
    },
    {
      id: 'ev-charging',
      icon: Car,
      category: 'Infrastructure',
      title: 'Commercial EV Fleet Charging',
      tagline: 'High-Speed DC Fast Chargers Powered by Solar Microgrids',
      description: 'Future-proof your commercial fleet or retail property with solar-integrated Level 2 and DC Fast Chargers.',
      features: [
        'Ultra-Fast DC Chargers (60 kW to 360 kW)',
        'Smart Load Balancing & Solar Direct-Charge',
        'Commercial Payment & Billing Management Integration',
        'Fleet Depot Management Software'
      ],
      badge: 'Future Ready'
    },
    {
      id: 'audit',
      icon: BarChart3,
      category: 'Consulting',
      title: 'Energy Audits & ESG Carbon Reporting',
      tagline: 'Data-Driven Energy Optimization & Carbon Accounting',
      description: 'Comprehensive power quality audits and ESG reporting to qualify for green building certifications, tax incentives, and carbon offsets.',
      features: [
        'Detailed Load Profile & Harmonic Distortions Analysis',
        'Scope 1 & 2 GHG Emission Reduction Calculation',
        'Tax Credit & Incentive Advisory',
        'RE100 & Sustainability Certification Support'
      ],
      badge: 'Advisory'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/10 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-solar-500/20">
            <Sun className="w-3.5 h-3.5" />
            <span>Comprehensive Service Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Renewable Energy & C&I Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered specifically for commercial enterprises, industrial facilities, and high-demand energy consumers.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === s.id
                  ? 'bg-eco-500 text-slate-950 shadow-lg shadow-eco-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected Service Detailed View */}
        {services.filter(s => s.id === activeTab).map((s) => {
          const IconComp = s.icon;
          return (
            <div id="c-and-i" key={s.id} className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-eco-400 bg-eco-500/10 px-3 py-1 rounded-full border border-eco-500/20">
                      {s.category}
                    </span>
                    <span className="text-xs font-semibold text-solar-400 bg-solar-500/10 px-3 py-1 rounded-full border border-solar-500/20">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {s.title}
                  </h3>

                  <p className="text-eco-300 font-medium text-base">
                    {s.tagline}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {s.description}
                  </p>

                  <div className="pt-2 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Deliverables & Specifications</h4>
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-eco-500/20 text-eco-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-200 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={onOpenQuote}
                      className="flex items-center justify-center gap-2 bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-eco-500/20"
                    >
                      <span>Request Service Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Feature Card */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eco-400 to-solar-500 flex items-center justify-center text-slate-950 shadow-xl">
                      <IconComp className="w-8 h-8 stroke-[2]" />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs text-slate-400 block">Typical Payback Period</span>
                        <span className="text-xl font-bold text-white">2.8 - 4.5 Years</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs text-slate-400 block">Expected System Life</span>
                        <span className="text-xl font-bold text-white">25 - 30 Years</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-eco-400 shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-white">Bankable Guarantee</span>
                          <span className="text-[11px] text-slate-400 block">Supported by Tier-1 Reinsurance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* All Services Grid Summary */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-slate-900 border-eco-500/50 shadow-lg shadow-eco-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-eco-400 mb-4">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs line-clamp-2">{item.description}</p>
                <span className="text-xs font-semibold text-eco-400 mt-4 inline-flex items-center gap-1">
                  Learn Details →
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
