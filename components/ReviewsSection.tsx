'use client';

import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, GYM_DETAILS } from '@/lib/gym-data';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#08090c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Google Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight">
              Rated 4.9 Stars by 349+ Lifters
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Read how everyday professionals, beginners, and competitive athletes transformed their strength, health, and confidence at Alpha Fitness Nerul.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#101217] border border-amber-500/20 flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-amber-400 font-mono leading-none">4.9</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white">Google Business</div>
              <div className="text-xs text-slate-400">349 verified member ratings</div>
              <a
                href={GYM_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 mt-1"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{rev.date}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold text-xs font-mono">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    {rev.badge && (
                      <div className="text-[10px] text-slate-400">{rev.badge}</div>
                    )}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500">Nerul East</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Google */}
        <div className="text-center">
          <a
            href={GYM_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-colors"
          >
            <span>View All 349+ Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
