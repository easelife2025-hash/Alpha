'use client';

import React from 'react';
import { Star, Check, X, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, GYM_DETAILS } from '@/lib/gym-data';

interface WhyAlphaSectionProps {
  onOpenTrial: () => void;
}

export function WhyAlphaSection({ onOpenTrial }: WhyAlphaSectionProps) {
  const comparison = [
    {
      feature: 'Floor Trainer Availability',
      alpha: 'Active floor coaches monitoring execution, spotting, and correcting form free of charge',
      others: 'Trainers stay behind desks or only pay attention if you buy expensive PT packages',
    },
    {
      feature: 'Strength Machinery Quality',
      alpha: 'Heavy-duty red & black commercial biomechanical selectorized units and calibrated bars',
      others: 'Generic, squeaky machines with unstable pulleys and limited weight stacks',
    },
    {
      feature: 'Daily Operational Timings',
      alpha: '6:00 AM to 11:00 PM uninterrupted (17 daily hours Mon–Sat)',
      others: 'Strict 4-hour morning and evening slots with restrictive afternoon lockouts',
    },
    {
      feature: 'Ventilation & Floor Hygiene',
      alpha: 'High-volume dual AC units, fresh air circulation, and shock-absorbing speckle rubber',
      others: 'Suffocating basements with poor airflow, lingering odours, and worn-out mats',
    },
    {
      feature: 'Community & Member Atmosphere',
      alpha: 'Zero-ego, respectful lifters and supportive beginners working towards genuine goals',
      others: 'Crowded social hangout spots with prolonged machine hogging and phone scrolling',
    },
  ];

  return (
    <section id="why-alpha" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.9 ★ Google Rating · 349+ Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-4">
            Why Nerul Chooses Alpha Fitness
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We built Alpha Fitness to solve the everyday frustrations lifters face at ordinary gyms. Here is how our standard sets us apart.
          </p>
        </div>

        {/* 6 Key Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e1015] border border-white/10 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 text-red-500 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white font-heading">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-[#101217] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                The Alpha Difference vs Ordinary Gyms
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct benchmark of our Nerul facility against standard neighbourhood gyms.
              </p>
            </div>

            <button
              onClick={onOpenTrial}
              className="py-2.5 px-5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0"
            >
              Verify on Free Trial
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/10 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Criteria</th>
                  <th className="py-4 px-6 text-red-400 font-bold">
                    Alpha Fitness Standard
                  </th>
                  <th className="py-4 px-6 text-slate-500">Ordinary Gyms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-200">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.alpha}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
