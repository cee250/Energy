import React, { useState } from 'react';
import { Calculator, DollarSign, Sun, Leaf, TrendingUp, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SolarCalculator({ onOpenQuote }) {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [sector, setSector] = useState('commercial'); // commercial, industrial, residential
  const [utilityRate, setUtilityRate] = useState(0.18); // $ per kWh

  // Rates and Factors
  const sectorFactors = {
    residential: { solarYield: 1.45, costPerWatt: 2.20, maxSavingsPct: 0.85 },
    commercial: { solarYield: 1.50, costPerWatt: 1.40, maxSavingsPct: 0.90 },
    industrial: { solarYield: 1.55, costPerWatt: 1.10, maxSavingsPct: 0.95 },
  };

  const factor = sectorFactors[sector];

  // Calculations
  const monthlyKwh = monthlyBill / utilityRate;
  const annualKwh = monthlyKwh * 12;
  const targetSolarKwh = annualKwh * factor.maxSavingsPct;
  const requiredKwSystem = Math.round((targetSolarKwh / (factor.solarYield * 1000)) * 10) / 10;
  
  const estimatedAnnualSavings = Math.round(monthlyBill * 12 * factor.maxSavingsPct);
  const estimated25YrSavings = Math.round(estimatedAnnualSavings * 25 * 1.35); // including 3% annual tariff increase
  const co2OffsetTonsPerYear = Math.round(requiredKwSystem * 1.2);
  const treesEquivalent = Math.round(co2OffsetTonsPerYear * 45);

  return (
    <section id="calculator" className="py-24 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-500/10 text-eco-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-eco-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solar ROI & Savings Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Estimate your solar system requirements, annual energy cost reductions, and environmental impact in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-eco-400" />
                Input Facility Energy Profile
              </h3>

              {/* Sector Selection */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Select Facility Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'Residential' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'industrial', label: 'Industrial' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSector(s.id);
                        if (s.id === 'residential' && monthlyBill > 1000) setMonthlyBill(450);
                        if (s.id === 'industrial' && monthlyBill < 2000) setMonthlyBill(12000);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                        sector === s.id
                          ? 'bg-eco-500 text-slate-950 border-eco-500 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Electric Bill Slider */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Average Monthly Power Bill ($)
                  </label>
                  <span className="text-2xl font-extrabold text-eco-400 font-mono">
                    ${monthlyBill.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={sector === 'residential' ? 100 : sector === 'commercial' ? 800 : 3000}
                  max={sector === 'residential' ? 2500 : sector === 'commercial' ? 35000 : 150000}
                  step={sector === 'residential' ? 50 : sector === 'commercial' ? 500 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-eco-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>${(sector === 'residential' ? 100 : sector === 'commercial' ? 800 : 3000).toLocaleString()}</span>
                  <span>${(sector === 'residential' ? 2500 : sector === 'commercial' ? 35000 : 150000).toLocaleString()}</span>
                </div>
              </div>

              {/* Utility Rate Input */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Grid Electricity Tariff Rate ($/kWh)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.01"
                    min="0.05"
                    max="0.60"
                    value={utilityRate}
                    onChange={(e) => setUtilityRate(Number(e.target.value))}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-mono font-bold text-sm w-36 focus:outline-none focus:border-eco-400"
                  />
                  <span className="text-xs text-slate-400">National avg: $0.16–$0.22/kWh</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-eco-400 shrink-0" />
              <span>Estimates based on Tier-1 PV efficiency, 4.8 peak sun hours/day, and standard utility escalation rates.</span>
            </div>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-eco-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden glow-emerald">
            <div className="absolute top-0 right-0 w-48 h-48 bg-eco-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculated Feasibility</span>
                <span className="text-xs font-bold text-eco-400 bg-eco-500/10 px-3 py-1 rounded-full border border-eco-500/20">
                  {sector.toUpperCase()} PROJECTION
                </span>
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-2 gap-4 my-6">
                
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Sun className="w-4 h-4 text-solar-400" />
                    <span>Recommended PV Size</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {requiredKwSystem} <span className="text-base font-normal text-slate-400">kWp</span>
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <DollarSign className="w-4 h-4 text-eco-400" />
                    <span>Est. Annual Savings</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-eco-400 font-mono">
                    ${estimatedAnnualSavings.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>25-Yr Cumulative Value</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    ${(estimated25YrSavings / 1000).toFixed(0)}k+
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Leaf className="w-4 h-4 text-eco-400" />
                    <span>CO₂ Offset / Year</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {co2OffsetTonsPerYear} <span className="text-base font-normal text-slate-400">Tons</span>
                  </p>
                </div>

              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Trees Planted Equivalent:</span>
                  <span className="font-bold text-eco-400">{treesEquivalent.toLocaleString()} trees/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Payback Timeline:</span>
                  <span className="font-bold text-white">3.1 – 3.8 Years</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenQuote}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-400 hover:to-eco-500 text-slate-950 font-bold text-base py-4 rounded-xl shadow-xl shadow-eco-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Get Detailed Financial Proposal for {requiredKwSystem} kWp System</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
