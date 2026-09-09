import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ isModal, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Solar Installation',
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
        <div className="text-center py-8 space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Murakoze! Proposal Request Received</h3>
          <p className="text-slate-600 text-xs max-w-sm mx-auto">
            Thank you, {formData.name || 'Valued Client'}. Our Mashariki Energy engineering team will review your inquiry and respond within 4 business hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              if (onClose) onClose();
            }}
            className="bg-emerald-600 text-white font-bold px-5 py-2 rounded-lg text-xs"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone Number"
                className="w-full bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
              >
                <option>Solar Panel Installation</option>
                <option>C&I Microgrid & PPA</option>
                <option>Battery Storage (BESS)</option>
                <option>Solar Water Pumping</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Message</label>
            <textarea
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project requirements..."
              className="w-full bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-xs text-sm transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Send Request to Mashariki Energy</span>
          </button>
        </form>
      )}
    </div>
  );

  if (isModal) return formContent;

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Contact Us
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Get In Touch With Mashariki Energy
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Reach out for technical consultations, site audits, or solar quote requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          <div className="lg:col-span-5 bg-slate-200/70 p-6 rounded-2xl border border-slate-300/80 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Kigali Headquarters</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Office Location</span>
                  <span className="text-slate-600">Mashariki Energy • Kigali, Rwanda</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Direct Phone</span>
                  <span className="text-slate-600">0000000</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Email</span>
                  <span className="text-slate-600">info@mashariki-energy.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50/90 p-6 rounded-2xl border border-slate-300/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Send a Proposal Request</h3>
            {formContent}
          </div>

        </div>

      </div>
    </section>
  );
}
