import React, { useState } from 'react';
import { Calculator, Sun, DollarSign, ArrowRight } from 'lucide-react';

export default function SolarCalculator({ onOpenQuote }) {
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [sector, setSector] = useState('commercial');

  const annualSavings = Math.round(monthlyBill * 12 * 0.80);
  const requiredKw = Math.round((monthlyBill / 150) * 10) / 10;
  const paybackYears = 3.2;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            Financial Estimator
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Solar ROI & Savings Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Move the slider to estimate system size and annual cost reduction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Facility Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['residential', 'commercial', 'industrial'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSector(s)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold capitalize transition-colors ${
                      sector === s ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-700">Monthly Power Bill:</span>
                <span className="text-emerald-600 font-mono text-xl">${monthlyBill.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="200"
                max="25000"
                step="100"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 text-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500 block">Est. Solar PV Size</span>
                <span className="text-xl font-bold text-slate-900 font-mono">{requiredKw} kWp</span>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="text-xs text-slate-500 block">Annual Savings</span>
                <span className="text-xl font-bold text-emerald-600 font-mono">${annualSavings.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-sm text-sm transition-colors"
            >
              <span>Get Full Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
