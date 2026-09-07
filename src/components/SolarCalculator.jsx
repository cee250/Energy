import React, { useState } from 'react';
import { Calculator, DollarSign, Sun, Leaf, TrendingUp, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SolarCalculator({ onOpenQuote }) {
  const [monthlyBill, setMonthlyBill] = useState(250000); // RWF or USD equivalent
  const [currency, setCurrency] = useState('RWF'); // RWF or USD
  const [sector, setSector] = useState('commercial'); // commercial, residential, agricultural

  // Exchange rate ~ 1300 RWF per USD
  const displayBill = currency === 'USD' ? Math.round(monthlyBill / 1300) : monthlyBill;
  const ratePerKwh = currency === 'USD' ? 0.18 : 230; // 230 RWF/kWh or $0.18/kWh

  // Calculation
  const monthlyKwh = displayBill / ratePerKwh;
  const annualKwh = monthlyKwh * 12;
  const requiredKw = Math.round((annualKwh / 1500) * 10) / 10;
  const annualSavings = Math.round(displayBill * 12 * 0.80);
  const co2Offset = Math.round(requiredKw * 1.25);

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solar ROI & Energy Savings Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Estimate your solar capacity requirements, annual electricity savings, and environmental benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  Facility Energy Inputs
                </h3>
                
                {/* Currency Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-bold border border-slate-200">
                  <button
                    onClick={() => setCurrency('RWF')}
                    className={`px-3 py-1 rounded-md transition-colors ${currency === 'RWF' ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                  >
                    RWF
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded-md transition-colors ${currency === 'USD' ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Sector */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Select Sector
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'Residential' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'agricultural', label: 'Agri Water' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSector(s.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-colors ${
                        sector === s.id
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Average Monthly Electricity Bill
                  </label>
                  <span className="text-2xl font-extrabold text-emerald-600 font-mono">
                    {currency === 'USD' ? `$${displayBill.toLocaleString()}` : `${displayBill.toLocaleString()} RWF`}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === 'USD' ? 100 : 100000}
                  max={currency === 'USD' ? 20000 : 25000000}
                  step={currency === 'USD' ? 100 : 100000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Calculated based on standard peak solar irradiance in Rwanda (4.8 kWh/m²/day).</span>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Solar Feasibility Summary</span>
                <span className="text-xs font-bold text-white bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  RENERG Projections
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Recommended PV Size</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {requiredKw} <span className="text-sm text-slate-400">kWp</span>
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Est. Annual Savings</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                    {currency === 'USD' ? `$${annualSavings.toLocaleString()}` : `${(annualSavings / 1000000).toFixed(1)}M RWF`}
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>Est. Payback</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    3.2 <span className="text-sm text-slate-400">Years</span>
                  </p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>Annual CO₂ Reduction</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {co2Offset} <span className="text-sm text-slate-400">Tons</span>
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base py-4 rounded-2xl shadow-lg transition-all"
            >
              <span>Get Customized Technical Proposal</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
