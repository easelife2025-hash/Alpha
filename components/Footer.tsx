'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ArrowUp } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/gym-data';

interface FooterProps {
  onOpenTrial: () => void;
}

export function Footer({ onOpenTrial }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 pt-16 pb-24 sm:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-red-600 rounded-xs" />
              <span className="text-xl font-black tracking-tight text-white uppercase font-heading">
                ALPHA FITNESS
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Nerul’s premier strength & conditioning facility equipped with custom commercial selectorized machinery, calibrated free weights, and dedicated certified coaches.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white font-mono">4.9 ★</span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-400">349+ Google Reviews</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Alpha
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-white transition-colors">
                  Equipment & Facility
                </a>
              </li>
              <li>
                <a href="#why-alpha" className="hover:text-white transition-colors">
                  Why Alpha Fitness
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Physique Calculator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Member Reviews
                </a>
              </li>
              <li>
                <a href="#location-hours" className="hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Operational Hours
            </h4>
            <div className="space-y-2 text-slate-400">
              <div>
                <span className="text-slate-300 font-medium block">Mon – Sat:</span>
                <span className="font-mono text-white">6:00 AM – 11:00 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-slate-300 font-medium block">Sunday:</span>
                <span className="font-mono text-white">9:00 AM – 12:00 PM</span>
                <span className="font-mono text-white block">4:00 PM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Nerul Center
            </h4>
            <address className="not-italic space-y-2 text-slate-400 leading-relaxed">
              <p>Shop 5, Plot 105, Jagatguru Aadi Shankracharya Marg, Opp. NMMC Fire Brigade, Sector 27, Nerul East, Navi Mumbai 400706</p>
              <p className="pt-1 font-mono text-white">
                <a href={`tel:${GYM_DETAILS.phone}`} className="hover:text-red-400">
                  {GYM_DETAILS.phone}
                </a>
              </p>
            </address>

            <div className="pt-3">
              <button
                onClick={onOpenTrial}
                className="py-2 px-3.5 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 font-semibold text-xs rounded-lg transition-colors"
              >
                Claim Free 1-Day Pass
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} ALPHA FITNESS. Nerul East, Navi Mumbai. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
