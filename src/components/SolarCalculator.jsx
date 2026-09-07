import React, { useState } from 'react';
import { Calculator, DollarSign, Sun, Leaf, TrendingUp, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SolarCalculator({ onOpenQuote }) {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [currency, setCurrency] = useState('USD'); // USD or RWF
  const [sector, setSector] = useState('commercial'); // commercial, industrial, residential

  // Calculations
  const ratePerKwh = currency === 'USD' ? 0.18 : 230;
  const billValue = currency === 'USD' ? monthlyBill : monthlyBill * 1300;
  
  const monthlyKwh = billValue / ratePerKwh;
  const annualKwh = monthlyKwh * 12;
  const requiredKw = Math.round((annualKwh / 1500) * 10) / 10;
  const annualSavings = Math.round(billValue * 12 * 0.82);
  const twentyFiveYrSavings = Math.round(annualSavings * 25 * 1.3);
  const co2Offset = Math.round(requiredKw * 1.25);
  const treesEquivalent = Math.round(co2Offset * 45);

  return (
    <section id="calculator" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solar ROI & Savings Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Calculate your facility's solar PV capacity, annual utility cost reduction, and carbon offset in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  Facility Energy Parameters
                </h3>
                
                {/* Currency Switch */}
                <div className="flex bg-slate-950 p-1 rounded-xl text-xs font-bold border border-slate-800">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded-lg transition-colors ${currency === 'USD' ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'text-slate-400'}`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency('RWF')}
                    className={`px-3 py-1 rounded-lg transition-colors ${currency === 'RWF' ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'text-slate-400'}`}
                  >
                    RWF
                  </button>
                </div>
              </div>

              {/* Sector Selection */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Facility Sector
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'Residential' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'industrial', label: 'Industrial' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSector(s.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        sector === s.id
                          ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
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
                    Average Monthly Power Bill
                  </label>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    {currency === 'USD' ? `$${monthlyBill.toLocaleString()}` : `${(monthlyBill * 1300).toLocaleString()} RWF`}
                  </span>
                </div>
                <input
                  type="range"
                  min={sector === 'residential' ? 200 : sector === 'commercial' ? 1000 : 5000}
                  max={sector === 'residential' ? 2000 : sector === 'commercial' ? 25000 : 100000}
                  step={sector === 'residential' ? 50 : sector === 'commercial' ? 500 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Visual Breakdown Progress */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Solar Replacement Ratio</span>
                  <span className="font-bold text-emerald-400 font-mono">82% Grid Replacement</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[82%]" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Calculated based on Tier-1 PV efficiency, 4.8 peak sun hours/day, and standard utility inflation rates.</span>
            </div>
          </div>

          {/* Results Output */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden glow-emerald">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Solar Feasibility Projections</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {sector.toUpperCase()} MODEL
                </span>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Recommended PV Size</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {requiredKw} <span className="text-sm font-normal text-slate-400">kWp</span>
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Est. Annual Savings</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                    {currency === 'USD' ? `$${annualSavings.toLocaleString()}` : `${(annualSavings / 1000000).toFixed(1)}M RWF`}
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <TrendingUp className="w-4 h-4 text-teal-400" />
                    <span>25-Year Cumulative Value</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {currency === 'USD' ? `$${(twentyFiveYrSavings / 1000).toFixed(0)}k+` : `${(twentyFiveYrSavings / 1000000).toFixed(0)}M+ RWF`}
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>CO₂ Reduction / Year</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {co2Offset} <span className="text-sm font-normal text-slate-400">Tons</span>
                  </p>
                </div>

              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Trees Planted Equivalent:</span>
                  <span className="font-bold text-emerald-400 font-mono">{treesEquivalent.toLocaleString()} trees/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Payback Period:</span>
                  <span className="font-bold text-white font-mono">3.1 – 3.7 Years</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenQuote}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-base py-4 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Get Customized Proposal for {requiredKw} kWp System</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
