import React from 'react';
import { Target, ShieldCheck, Leaf, Globe, CheckCircle2, Award, Users } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: Target,
      title: 'Solar Energy Leadership',
      description: 'Designing and deploying high-efficiency photovoltaic systems for homes, businesses, industrial plants, and agricultural water pumping.'
    },
    {
      icon: Leaf,
      title: 'E-Mobility Solutions',
      description: 'Pioneering clean electric vehicle (EV) charging networks and smart electric fleet infrastructure across Rwanda.'
    },
    {
      icon: Globe,
      title: 'Smart & Green Real Estate',
      description: 'Developing sustainable building developments integrated with renewable power, energy management, and smart automation.'
    },
    {
      icon: ShieldCheck,
      title: '15+ Years Regional Expertise',
      description: 'Over 1.3 GW of clean power projects engineered across Rwanda and 12+ African countries with bankable warranties.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>About RENERG Rwanda Ltd</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Who We Are & What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            RENERG (R) LTD is a leading renewable energy developer headquartered in Kigali, Rwanda. We specialize in solar power installations, e-mobility, and green real estate across East Africa.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Driving Africa's Transition to Clean, Reliable & Affordable Energy
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              With over 15 years of industry experience, RENERG Rwanda Ltd has delivered over <strong>1.3 Gigawatts (GW)</strong> of solar energy capacity across 12+ African countries. Our goal is to make clean power accessible, reliable, and cost-effective for households, enterprises, and agricultural communities.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Recognized as the winner of the prestigious <strong>2019 "Beat Air Pollution" Environmental Award</strong>, RENERG continues to push the boundaries of clean innovation by combining solar PV installations with e-mobility and smart real estate developments.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Winner 2019 Environmental Award</h4>
                  <p className="text-xs text-slate-500">Recognized for clean air advocacy</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">1.3+ GW Global Footprint</h4>
                  <p className="text-xs text-slate-500">Across 12+ African nations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Our Mission</h4>
                <p className="text-xs text-slate-300">Empowering Communities Through Green Innovation</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              "To accelerate the adoption of clean renewable energy, reduce reliance on fossil fuels, and build resilient infrastructure for future generations across Rwanda and Africa."
            </p>

            <div className="border-t border-slate-800 pt-6 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">On-Grid & Off-Grid Solar:</span>
                <span className="font-bold text-emerald-400">100% Certified</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Solar Water Pumping:</span>
                <span className="font-bold text-emerald-400">Agriculture & Irrigation</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">E-Mobility Infrastructure:</span>
                <span className="font-bold text-emerald-400">EV Chargers & Fleets</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
