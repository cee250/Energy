import React from 'react';
import { Sun, Building2, BatteryCharging, Droplets, ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const serviceList = [
    {
      icon: Sun,
      title: 'Solar Panel Installation',
      subtitle: 'Commercial & Residential Photovoltaic PV Systems',
      description: 'Turnkey solar design, equipment procurement, and structural rooftop installation using high-efficiency Tier-1 monocrystalline panels.',
      points: [
        'Monocrystalline PV Panels (>22.5% Efficiency)',
        'Commercial Rooftop & Ground-Mount Systems',
        'Grid Net-Metering & Inverter Synchronization'
      ]
    },
    {
      icon: Building2,
      title: 'C&I Microgrids & PPAs',
      subtitle: 'Zero-CAPEX Power Purchase Agreements',
      description: 'Fully financed megawatt solar installations for commercial enterprises and industrial plants with zero upfront capital expenditure.',
      points: [
        '$0 Upfront Capital Investment Required',
        '20–40% Guaranteed Energy Tariff Discount',
        'Peak-Shaving & Demand Charge Cut'
      ]
    },
    {
      icon: BatteryCharging,
      title: 'Battery Energy Storage (BESS)',
      tagline: '24/7 Power Reserve & Night Displacement',
      description: 'Scalable LFP battery storage systems that store daytime solar energy to power night shifts and critical backup loads.',
      points: [
        'Scalable Storage from 100 kWh to 50+ MWh',
        'Uninterruptible Power Supply (UPS) Transfer',
        'Time-of-Use Tariff Arbitrage'
      ]
    },
    {
      icon: Droplets,
      title: 'Solar Water Pumping',
      subtitle: 'Agricultural Irrigation & Water Supply',
      description: 'High-head DC and AC solar powered water pumps engineered for agricultural irrigation, livestock farming, and community water supply.',
      points: [
        'Zero Fuel Costs for Farmers',
        'High-Flow Submersible Solar Pumps',
        'Automated Tank Level Controls'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            Our Core Services
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Renewable Energy Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Engineered specifically for commercial businesses, industrial facilities, and agricultural projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceList.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-600 mb-3">{s.description}</p>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    {s.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full text-center py-2.5 bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors"
                >
                  Request Proposal →
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
