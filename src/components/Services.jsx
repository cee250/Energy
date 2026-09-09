import React from 'react';
import { Sun, Building2, BatteryCharging, Droplets, ArrowRight, Check } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const serviceList = [
    {
      id: 'solar-pv',
      icon: Sun,
      title: 'Solar Panel Installation',
      subtitle: 'Commercial & Residential Photovoltaic PV',
      description: 'Turnkey solar design, equipment procurement, and rooftop installation using monocrystalline Tier-1 modules.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      points: [
        'High-Yield PV Modules (>22.5% Efficiency)',
        'Commercial Rooftop & Ground-Mount',
        'Grid Net-Metering & Inverter Sync'
      ]
    },
    {
      id: 'c-and-i',
      icon: Building2,
      title: 'C&I Microgrids & PPAs',
      subtitle: 'Zero-CAPEX Power Purchase Agreements',
      description: 'Fully financed megawatt solar installations for commercial enterprises and industrial manufacturing facilities.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      points: [
        '$0 Upfront Capital Investment',
        '20–40% Energy Tariff Discount',
        'Peak Shaving & Demand Cut'
      ]
    },
    {
      id: 'bess',
      icon: BatteryCharging,
      title: 'Battery Energy Storage (BESS)',
      subtitle: '24/7 Power Reserve & Night Displacement',
      description: 'Scalable Lithium Iron Phosphate (LiFePO4) battery storage systems that store daytime solar energy for night shifts.',
      image: 'https://images.unsplash.com/photo-1558441719-67450885d2b6?auto=format&fit=crop&w=800&q=80',
      points: [
        'Storage Capacity 100 kWh to 50+ MWh',
        'Uninterruptible Power Supply (UPS)',
        'Time-of-Use Tariff Arbitrage'
      ]
    },
    {
      id: 'water-pumping',
      icon: Droplets,
      title: 'Solar Water Pumping',
      subtitle: 'Agricultural Irrigation & Water Supply',
      description: 'High-head DC and AC solar powered water pumps engineered for agricultural irrigation and community water supply.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      points: [
        'Zero Fuel Expenses for Farmers',
        'High-Flow Submersible Pumps',
        'Automated Tank Level Controls'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-emerald-50/50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
            // OUR SERVICES & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Clean Energy Solutions for Every Sector
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Engineered for commercial businesses, industrial facilities, eco-resorts, and agricultural projects.
          </p>
        </div>

        {/* Service Cards (Elevated white cards over clean energy green background) */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceList.map((s) => {
            const IconComp = s.icon;
            return (
              <div key={s.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group border-t-4 border-t-emerald-600">
                
                {/* Image (Pure Clean Technology, NO humans) */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-xs text-white px-3 py-1 rounded-md text-[11px] font-bold">
                    {s.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">{s.description}</p>

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
                    className="w-full mt-4 text-center py-3 bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
