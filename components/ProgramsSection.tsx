'use client';

import React, { useState } from 'react';
import { Flame, Clock, Target, ArrowRight, MessageCircle } from 'lucide-react';
import { TRAINING_PROGRAMS, GYM_DETAILS } from '@/lib/gym-data';

interface ProgramsSectionProps {
  onOpenTrial: (programTitle?: string) => void;
}

export function ProgramsSection({ onOpenTrial }: ProgramsSectionProps) {
  const [selectedId, setSelectedId] = useState(TRAINING_PROGRAMS[0].id);

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-2">
              <Target className="w-4 h-4" />
              <span>Target-Driven Methodologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight">
              Training Programs Built for Real Progress
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-sm">
            Whether building dense muscle, dropping body fat, or starting your first day with zero experience, our coaches calibrate the ideal roadmap.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_PROGRAMS.map((prog) => {
            const isSelected = prog.id === selectedId;
            return (
              <div
                key={prog.id}
                onClick={() => setSelectedId(prog.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#12141c] border-red-500/50 shadow-xl shadow-red-950/20'
                    : 'bg-[#0e1015] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400 bg-red-600/10 px-2.5 py-1 rounded-md border border-red-500/20">
                      {prog.intensity} Intensity
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{prog.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-heading">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-medium text-red-500 mb-3">{prog.subtitle}</div>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Pillars
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog.focus.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-300">Ideal For:</strong> {prog.idealFor}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenTrial(prog.title);
                      }}
                      className="py-2 px-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Try Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${GYM_DETAILS.rawPhone}?text=Hi%20Alpha%20Fitness%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                        prog.title
                      )}%20program.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 rounded-lg transition-colors"
                      title="Ask via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
