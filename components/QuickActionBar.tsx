'use client';

import React, { useState, useEffect } from 'react';
import { Navigation, Ticket, Share2, Check } from 'lucide-react';
import { WhatsAppIcon, CallIcon } from '@/components/Icons';
import { GYM_DETAILS } from '@/lib/gym-data';
import { getGymCurrentStatus, GymOpenStatus } from '@/lib/hours-helper';

interface QuickActionBarProps {
  onOpenTrial: () => void;
}

export function QuickActionBar({ onOpenTrial }: QuickActionBarProps) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<GymOpenStatus>(getGymCurrentStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Alpha Fitness - Nerul East, Navi Mumbai',
          text: 'Check out Alpha Fitness in Nerul East! 4.9★ rated gym with top heavy-duty equipment.',
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative z-20 -mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#101217] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Live Hours Status Row */}
          <div className="flex items-center gap-3 w-full md:w-auto" suppressHydrationWarning>
            <div
              className={`w-3 h-3 rounded-full shrink-0 ${
                status?.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <div className="text-sm" suppressHydrationWarning>
              <div className="flex items-center gap-2" suppressHydrationWarning>
                <span className="font-bold text-white" suppressHydrationWarning>
                  {status?.statusText || 'Open Now'}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300" suppressHydrationWarning>
                  {status?.nextEventText || 'Closes 11:00 PM'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Mon–Sat: 6 AM–11 PM · Sun: 9 AM–12 PM & 4 PM–9 PM
              </p>
            </div>
          </div>

          {/* 5 Quick Actions (mimicking Google Business Profile) */}
          <div className="grid grid-cols-5 gap-2 w-full md:w-auto">
            {/* Call */}
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex flex-col items-center justify-center p-2.5 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <CallIcon className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-xs font-medium">Call</span>
            </a>

            {/* Directions */}
            <a
              href={GYM_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <Navigation className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">Directions</span>
            </a>

            {/* WhatsApp */}
            <a
              href={GYM_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-sm shadow-[#25D366]/40">
                <WhatsAppIcon className="w-4.5 h-4.5 fill-white" />
              </div>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>

            {/* Claim Trial */}
            <button
              onClick={onOpenTrial}
              className="flex flex-col items-center justify-center p-2.5 sm:px-4 rounded-xl bg-red-600/15 hover:bg-red-600/25 border border-red-500/30 text-red-400 hover:text-red-300 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-md shadow-red-950">
                <Ticket className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Free Pass</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex flex-col items-center justify-center p-2.5 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </div>
              <span className="text-xs font-medium">{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
