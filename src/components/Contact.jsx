import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Zap, Building2, Sun } from 'lucide-react';

export default function Contact({ isModal, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    facilityType: 'Commercial Roof',
    monthlyBill: '$2,500 - $10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formContent = (
    <div>
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-eco-500/20 text-eco-400 rounded-full flex items-center justify-center mx-auto border border-eco-500/30">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-bold text-white">Proposal Request Received!</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Our senior renewable energy engineering team will review your energy parameters and contact you within <strong>4 business hours</strong>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                if (onClose) onClose();
              }}
              className="bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Done / Close Window
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="s.jenkins@company.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 019-2834"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Apex Logistics Ltd"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Facility / Project Type
              </label>
              <select
                value={formData.facilityType}
                onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              >
                <option>Commercial Rooftop Solar</option>
                <option>Industrial Manufacturing Microgrid</option>
                <option>Battery Storage (BESS)</option>
                <option>Solar Carport & EV Fleet</option>
                <option>Residential High-Yield PV</option>
                <option>O&M / Plant Maintenance</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Est. Monthly Power Spend
              </label>
              <select
                value={formData.monthlyBill}
                onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
              >
                <option>Under $1,000 / mo</option>
                <option>$1,000 - $5,000 / mo</option>
                <option>$5,000 - $20,000 / mo</option>
                <option>$20,000 - $100,000 / mo</option>
                <option>$100,000+ / mo (Enterprise Megawatt)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Project Details & Specific Goals
            </label>
            <textarea
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about roof area, grid stability challenges, or target COD dates..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-eco-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-400 hover:to-eco-500 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-xl shadow-eco-500/20 transition-all text-base"
          >
            <Send className="w-4 h-4 fill-slate-950" />
            <span>Submit C&I Proposal Request</span>
          </button>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-500/10 text-eco-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-eco-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule Your Free Energy Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Our engineering team is ready to evaluate your site, model financial returns, and structure a custom zero-down energy solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-eco-400" />
                Global Energy Headquarters
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-eco-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Headquarters Office</span>
                    <p className="text-white font-medium">100 Clean Tech Parkway, Suite 400<br />Green Energy District, CA 94107</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-eco-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Direct Phone</span>
                    <p className="text-white font-medium">+1 (800) 555-0199 / +1 (415) 889-2040</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-eco-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Inquiries & RFPs</span>
                    <p className="text-white font-medium">solutions@auragrid-energy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-eco-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Engineers On Call</span>
                    <p className="text-white font-medium">Mon - Fri: 7:00 AM – 7:00 PM PST<br />24/7 Operations Monitoring Dispatch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-eco-950/40 to-slate-900 p-6 rounded-3xl border border-eco-500/20 text-xs space-y-3">
              <div className="flex items-center gap-2 text-eco-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>RFP & Technical Bidding Support</span>
              </div>
              <p className="text-slate-300">
                Are you an EPC contractor, industrial facility manager, or municipality preparing an RFP? Send your documentation directly to <strong className="text-white">rfp@auragrid-energy.com</strong> for fast technical compliance response.
              </p>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Request Feasibility Study & Quote</h3>
            <p className="text-xs text-slate-400 mb-6">Fill out the form below to receive a customized site solar assessment.</p>
            {formContent}
          </div>

        </div>

      </div>
    </section>
  );
}
