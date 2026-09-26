'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Ticket, MessageSquare, ArrowRight, Dumbbell, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/gym-data';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function TrialModal({ isOpen, onClose, defaultPlan }: TrialModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (6 AM - 10 AM)');
  const [goal, setGoal] = useState('Weight Loss & Fat Shred');
  const [submitted, setSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Generate random VIP Pass ID
    const randomCode = 'ALPHA-' + Math.floor(100000 + Math.random() * 900000);
    setPassCode(randomCode);
    setSubmitted(true);
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Alpha Fitness Team! I have registered for a Free 1-Day Workout Pass on your website.%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Pass ID:* ${passCode}%0A*Preferred Slot:* ${encodeURIComponent(
      timeSlot
    )}%0A*Goal:* ${encodeURIComponent(goal)}%0A%0APlease confirm my trial session!`;

    window.open(`https://wa.me/${GYM_DETAILS.rawPhone}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#0e1015] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-white z-10 my-8 overflow-hidden"
        >
          {/* Subtle Red Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700" />

          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-semibold uppercase tracking-wider mb-2">
                <Ticket className="w-4 h-4" />
                <span>Complimentary 1-Day VIP Pass</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-heading">
                Experience Alpha Fitness Free
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Test-drive our heavy-duty selectorized machines, meet our certified coaches, and feel the high-energy training vibe at Nerul East.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Preferred Workout Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Morning (6 AM - 10 AM)" className="bg-slate-900">
                        Morning (6 AM - 10 AM)
                      </option>
                      <option value="Mid-Day (11 AM - 4 PM)" className="bg-slate-900">
                        Mid-Day (11 AM - 4 PM)
                      </option>
                      <option value="Evening (5 PM - 8 PM)" className="bg-slate-900">
                        Evening (5 PM - 8 PM)
                      </option>
                      <option value="Night Owl (8 PM - 11 PM)" className="bg-slate-900">
                        Night Owl (8 PM - 11 PM)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Weight Loss & Fat Shred" className="bg-slate-900">
                        Weight Loss & Fat Shred
                      </option>
                      <option value="Muscle Building & Bulking" className="bg-slate-900">
                        Muscle Building & Bulking
                      </option>
                      <option value="General Strength & Health" className="bg-slate-900">
                        General Strength & Health
                      </option>
                      <option value="Personal Training Guidance" className="bg-slate-900">
                        Personal Training Guidance
                      </option>
                    </select>
                  </div>
                </div>

                {defaultPlan && (
                  <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg text-xs text-red-200 flex items-center justify-between">
                    <span>Interested Plan: <strong>{defaultPlan}</strong></span>
                    <span className="text-red-400 font-semibold">Special Offer</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm rounded-lg shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <span>Generate Free Trial Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> No Payment Required
                  </span>
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-3.5 h-3.5 text-red-400" /> Full Floor Access
                  </span>
                </div>
              </form>
            </div>
          ) : (
            /* Pass Generated Screen */
            <div className="text-center py-2">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 font-heading">
                VIP Trial Pass Activated!
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Welcome, <strong className="text-white">{name}</strong>. Your 1-day pass for Alpha Fitness Nerul is confirmed.
              </p>

              {/* Digital Pass Card */}
              <div className="p-4 bg-gradient-to-b from-white/10 to-white/5 border border-red-500/40 rounded-xl mb-6 text-left relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <div className="font-heading font-black tracking-wider text-white text-base">
                    ALPHA FITNESS
                  </div>
                  <span className="px-2 py-0.5 bg-red-600/30 text-red-300 border border-red-500/40 text-[10px] font-mono rounded">
                    NERUL EAST
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pass Code:</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm tracking-wider">
                      {passCode}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Preferred Slot:</span>
                    <span>{timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Focus:</span>
                    <span>{goal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-right">Opposite NMMC Fire Brigade, Sec 27</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/50"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Pass to Trainer on WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
