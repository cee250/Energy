import React, { useState } from 'react';
import { Sun, Building2, BatteryCharging, Droplets, Car, Wrench, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('c-and-i');

  const services = [
    {
      id: 'c-and-i',
      icon: Building2,
      category: 'Enterprise Microgrids',
      title: 'C&I Power Purchase Agreements (PPA) & Microgrids',
      tagline: 'Zero-CAPEX Megawatt Solar Power for Heavy Industry, Logistics & Commercial Parks',
      description: 'Fully financed, zero-upfront-cost solar power purchase agreements designed to reduce factory OPEX and guarantee 100% operational uptime.',
      features: [
        'Zero-CAPEX Financial Structure (Pay Only for Generated kWh)',
        'Hybrid Generator & Utility Auto-Synchronization',
        'Peak Shaving & Demand Charge Elimination',
        'Guaranteed Energy Rate Discount (20–40% Savings vs Utility Tariff)',
        '25-Year Full Operations & Maintenance Included'
      ],
      badge: 'Zero-CAPEX PPA'
    },
    {
      id: 'solar-install',
      icon: Sun,
      category: 'Solar Engineering',
      title: 'Turnkey Commercial & Residential Solar Installation',
      tagline: 'High-Yield Photovoltaic Systems Built for Maximum Lifetime ROI',
      description: 'Precision engineering, equipment procurement, and structural installation using BloombergNEF Tier-1 solar modules and smart central inverters.',
      features: [
        'Monocrystalline N-Type Solar Modules (>22.8% Efficiency)',
        'Commercial String & Microinverter Systems',
        'Rooftop Wind Load & Waterproof Structural Mounting',
        'Utility Interconnection & Net Metering Support',
        '25-Year Linear Power Warranty'
      ],
      badge: 'Popular'
    },
    {
      id: 'bess',
      icon: BatteryCharging,
      category: 'Energy Storage',
      title: 'Battery Energy Storage Systems (BESS)',
      tagline: 'Uninterrupted 24/7 Power Backup & Energy Arbitrage',
      description: 'Scalable LFP (Lithium Iron Phosphate) battery storage arrays that store excess daytime solar power to run night shifts and backup critical loads.',
      features: [
        'Capacity Options from 100 kWh to 50+ MWh Utility-Scale',
        'Millisecond Uninterruptible Power Supply (UPS) Transfer',
        'Time-of-Use (TOU) Tariff Peak-Shaving',
        'Thermal Management & Liquid-Cooled Cell Chemistry'
      ],
      badge: '24/7 Backup'
    },
    {
      id: 'water-pumping',
      icon: Droplets,
      category: 'Agri-Tech',
      title: 'Solar Water Pumping & Agricultural Irrigation',
      tagline: 'Zero-Fuel Water Supply for Farms, Livestock & Communities',
      description: 'High-head DC and AC solar pumping arrays engineered for agricultural irrigation, water treatment plants, and community water supply.',
      features: [
        'High-Flow Submersible Solar Water Pumps',
        '$0 Fuel & Diesel Running Expenses for Farmers',
        'Automated Tank Level Controls & Smart Telemetry',
        'Rugged Construction Built for Hilly & Off-Grid Terrains'
      ],
      badge: 'Agri Water'
    },
    {
      id: 'ev-charging',
      icon: Car,
      category: 'Clean Mobility',
      title: 'Commercial EV Charging & Fleet Infrastructure',
      tagline: 'Solar-Powered DC Fast Chargers for Fleets & Commercial Properties',
      description: 'Future-proof commercial real estate, logistics depots, and retail hubs with ultra-fast Level 2 and DC Fast Charging stations.',
      features: [
        'DC Fast Chargers (60 kW to 360 kW Output)',
        'Solar Direct-Charge Battery Buffer Systems',
        'RFID & Commercial Mobile Payment Integration'
      ],
      badge: 'EV Fleet'
    },
    {
      id: 'o-and-m',
      icon: Wrench,
      category: 'Operations Care',
      title: 'Operations & Maintenance (O&M) + IoT Monitoring',
      tagline: 'Predictive Care & 24/7 Remote Performance Monitoring',
      description: 'Ensure maximum lifetime yield from your solar investment with automated IoT monitoring, thermal drone scans, and rapid SLA dispatch technicians.',
      features: [
        'Real-Time Web & Mobile Telemetry Dashboards',
        'Robotic & Automated Panel Scrubbing',
        'Guaranteed Response SLA (< 4 Hours)'
      ],
      badge: 'Managed SLA'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Sun className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Core Renewable Energy Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered for commercial enterprises, industrial facilities, resort developments, and agricultural projects.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
                activeTab === s.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
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
            <div key={s.id} className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl transition-all glow-emerald">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {s.category}
                    </span>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {s.title}
                  </h3>

                  <p className="text-emerald-300 font-semibold text-base">
                    {s.tagline}
                  </p>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {s.description}
                  </p>

                  <div className="pt-2 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Features & Specifications</h4>
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-200 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenQuote}
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
                    >
                      <span>Request Custom Proposal for {s.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Feature Card */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                      <IconComp className="w-8 h-8" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">AuraGrid Engineering Guarantee</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Engineered to international IEC and IEEE standards, fitted with Tier-1 BloombergNEF modules, and supported by 24/7 IoT performance telemetry.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-slate-200">Bankable 25-Year Power Guarantee with Reinsurance Backing</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* All Services Summary Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs line-clamp-2">{item.description}</p>
                <span className="text-xs font-semibold text-emerald-400 mt-4 inline-block">
                  View Full Details →
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
