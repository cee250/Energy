import React, { useState } from 'react';
import { Sun, Droplets, Car, Building2, Wrench, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('solar');

  const services = [
    {
      id: 'solar',
      icon: Sun,
      category: 'Clean Generation',
      title: 'Solar Energy Systems (On-Grid & Off-Grid)',
      tagline: 'Residential Rooftops, Commercial Buildings & Megawatt Solar Installations',
      description: 'End-to-end solar PV engineering for homes, commercial enterprises, and off-grid facilities. Reduce grid energy bills by up to 85%.',
      features: [
        'High-Yield Monocrystalline PV Solar Panels (>22.5% Efficiency)',
        'Hybrid Inverters with Battery Backup (LiFePO4 Storage)',
        'On-Grid Net Metering & Utility Syncing',
        'Off-Grid Systems for Rural & Remote Facilities',
        '25-Year Linear Power Warranty & Maintenance'
      ],
      badge: 'Core Service'
    },
    {
      id: 'pumping',
      icon: Droplets,
      category: 'Agri-Tech & Water',
      title: 'Solar Water Pumping & Irrigation',
      tagline: 'Clean & Cost-Free Water Supply for Agriculture & Rural Communities',
      description: 'High-volume solar powered water pumps designed for agricultural irrigation, livestock farming, and municipal drinking water projects across Rwanda.',
      features: [
        'Direct Solar DC & AC Submersible Water Pumps',
        'Zero-Fuel Running Costs for Farmers & Communities',
        'Automated Water Tank Level Sensors & Smart Controllers',
        'High-Head Pumping Capability for Hilly Terrains',
        'Demonstrated 75kWp System Success in Kirehe District'
      ],
      badge: 'Agri & Irrigation'
    },
    {
      id: 'emobility',
      icon: Car,
      category: 'E-Mobility',
      title: 'E-Mobility & EV Charging Infrastructure',
      tagline: 'Accelerating Rwanda’s Transition to Electric Vehicles',
      description: 'Deployment of public and private Level 2 and DC Fast Chargers for electric cars, motorbikes, and commercial transport fleets.',
      features: [
        'High-Speed DC Fast Charging Stations (30 kW to 180 kW)',
        'Solar Direct-Charge Battery Buffer Systems',
        'RFID & Mobile App Payment Integration',
        'Commercial Parking & Fleet Depot Installations'
      ],
      badge: 'Clean Mobility'
    },
    {
      id: 'real-estate',
      icon: Building2,
      category: 'Green Buildings',
      title: 'Smart Real Estate & Green Buildings',
      tagline: 'Energy Efficient Architecture & Sustainable Urban Development',
      description: 'Designing and retrofitting commercial real estate with integrated solar roofs, building management systems (BMS), and green energy certifications.',
      features: [
        'Building-Integrated Photovoltaics (BIPV)',
        'Smart Energy Management & Automation',
        'Green Building Standard Advisory & Certifications',
        'HVAC & Energy Efficiency Optimization'
      ],
      badge: 'Smart Architecture'
    },
    {
      id: 'epc',
      icon: Wrench,
      category: 'Engineering & O&M',
      title: 'EPC Contracting & Plant Maintenance',
      tagline: 'Turnkey Procurement, Construction & 24/7 Operations',
      description: 'Full-scope Engineering, Procurement & Construction (EPC) services with 24/7 remote monitoring and rapid dispatch technician support.',
      features: [
        'Turnkey High-Voltage Engineering & Permitting',
        'Real-Time IoT Performance & Yield Dashboards',
        'Thermal IR Inspections & Panel Cleaning',
        'Guaranteed Response SLA (< 4 Hours)'
      ],
      badge: 'Turnkey Execution'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sun className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services & Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Delivering clean, reliable, and sustainable power solutions across Rwanda and East Africa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                activeTab === s.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected View */}
        {services.filter(s => s.id === activeTab).map((s) => {
          const IconComp = s.icon;
          return (
            <div key={s.id} className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      {s.category}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {s.title}
                  </h3>

                  <p className="text-emerald-700 font-semibold text-base">
                    {s.tagline}
                  </p>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {s.description}
                  </p>

                  <div className="pt-2 space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Technical Features</h4>
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-800 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenQuote}
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
                    >
                      <span>Request Free Quote for {s.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Card */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                      <IconComp className="w-8 h-8" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">RENERG Engineering Advantage</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Designed to international IEC standards, fitted with BloombergNEF Tier-1 modules, and engineered for maximum energy yield in East Africa's climate.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-3 text-xs">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>25-Year Performance Guarantee & Local Technical Support</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* Cards Summary */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                <p className="text-slate-600 text-xs line-clamp-2">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
