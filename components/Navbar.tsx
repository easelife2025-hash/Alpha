'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon, CallIcon } from '@/components/Icons';
import { GYM_DETAILS } from '@/lib/gym-data';
import { getGymCurrentStatus, GymOpenStatus } from '@/lib/hours-helper';

interface NavbarProps {
  onOpenTrial: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState<GymOpenStatus>(getGymCurrentStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090cd9] backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#08090c]/90 to-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading uppercase flex items-center gap-2 group"
            >
              <span className="w-2.5 h-6 bg-red-600 rounded-xs group-hover:bg-red-500 transition-colors" />
              <span>ALPHA FITNESS</span>
            </a>

            {/* Zone 2: Clean 4-6 text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                About
              </a>
              <a
                href="#programs"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Programs
              </a>
              <a
                href="#facility"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Facility
              </a>
              <a
                href="#why-alpha"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Why Alpha
              </a>
              <a
                href="#calculator"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Fitness Calc
              </a>
              <a
                href="#reviews"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Reviews
              </a>
              <a
                href="#location-hours"
                className="hover:text-white transition-colors duration-150 py-1"
              >
                Location & Hours
              </a>
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {status && (
                <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 mr-2" suppressHydrationWarning>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  <span className="font-medium text-slate-300" suppressHydrationWarning>{status.statusText}</span>
                </div>
              )}

              {/* Call Icon Button */}
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white flex items-center justify-center transition-all border border-white/10 active:scale-95"
                title={`Call ${GYM_DETAILS.phone}`}
                aria-label="Call Alpha Fitness"
              >
                <CallIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
              </a>

              {/* WhatsApp Icon Button with official green style */}
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all shadow-md shadow-[#25D366]/30 active:scale-95"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </a>

              <button
                onClick={onOpenTrial}
                className="px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-red-900/40"
              >
                Join Now
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-md lg:hidden ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08090cf5] backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between sm:hidden overflow-y-auto">
          <div className="space-y-4 pt-2">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Nerul East, Sector 27</span>
              {status && (
                <span className="flex items-center gap-1.5" suppressHydrationWarning>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  <span className="text-slate-200" suppressHydrationWarning>{status.statusText}</span>
                </span>
              )}
            </div>

            <nav className="flex flex-col space-y-3 text-lg font-semibold text-slate-200">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                About Alpha
              </a>
              <a
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Training Programs
              </a>
              <a
                href="#facility"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Equipment & Facility
              </a>
              <a
                href="#why-alpha"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Why Alpha Fitness
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Physique Calculator
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Member Reviews (4.9★)
              </a>
              <a
                href="#location-hours"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors"
              >
                Location & Hours
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-sm rounded-lg text-center"
            >
              Claim Free 1-Day Trial
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-slate-200 font-medium hover:bg-white/10"
              >
                <CallIcon className="w-4 h-4 text-red-500" />
                <span>Call Us</span>
              </a>

              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#25D366]/15 border border-[#25D366]/30 rounded-lg flex items-center justify-center gap-2 text-[#25D366] font-medium hover:bg-[#25D366]/25"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
