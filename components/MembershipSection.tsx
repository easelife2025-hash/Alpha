'use client';

import React from 'react';
import { Check, Ticket, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS } from '@/lib/gym-data';

interface MembershipSectionProps {
  onOpenTrial: (planName?: string) => void;
}

export function MembershipSection({ onOpenTrial }: MembershipSectionProps) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Ticket className="w-3.5 h-3.5" />
            <span>Transparent Memberships · No Hidden Costs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-4">
            Invest in Your Strongest Self
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            All memberships include full floor access 7 days a week, shower & locker facilities, and dedicated trainer induction. Experience the gym free before committing.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#161a25] to-[#0e1015] border-2 border-red-500 shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                  : 'bg-[#0e1015] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-red-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white font-heading mb-1">
                  {plan.name}
                </h3>
                <div className="text-xs font-semibold text-red-400 mb-4">
                  {plan.duration}
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-center">
                  <div className="text-xs text-slate-400 font-medium">Commitment Level</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {plan.priceNote}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Plan Privileges
                  </div>
                  {plan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenTrial(plan.name)}
                  className={`w-full py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/60'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  <span>Claim 1-Day Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${GYM_DETAILS.rawPhone}?text=Hi%20Alpha%20Fitness%2C%20what%20is%20the%20current%20fee%20structure%20for%20the%20${encodeURIComponent(
                    plan.name
                  )}%20package%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-transparent hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Check Fee on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back / Satisfaction Guarantee Note */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-400">
          <p>
            🎁 <strong>First Visit Free:</strong> Every prospective member in Navi Mumbai is entitled to one complimentary 1-day pass. Test the equipment, speak with the coaches, and decide with complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
