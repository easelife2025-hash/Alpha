'use client';

import React from 'react';
import Image from 'next/image';
import { Dumbbell, ShieldCheck, Users, Flame, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '@/lib/gym-data';

interface AboutSectionProps {
  onOpenTrial: () => void;
}

export function AboutSection({ onOpenTrial }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4" />
            <span>Built for Dedicated Lifters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-5">
            Nerul’s True Strength & Conditioning Sanctuary
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Alpha Fitness was founded with a singular conviction: to create an uncompromised training facility in Nerul East where quality of machinery, scientific coaching, and genuine member progress take center stage.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-red-500 font-semibold mb-1">01. EQUIPMENT</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Heavy-Duty Biomechanical Stations
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Custom red & black selectorized machines engineered with precision cam profiles for smooth resistance and joint protection throughout the full range of motion.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
              Leg extensions, hack squat, lat towers & chest presses
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-red-500 font-semibold mb-1">02. COACHING</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Active Floor Trainers
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Coaches who remain on the workout floor, actively adjusting pin weights, spotting heavy sets, checking spinal alignment, and offering real-time form correction.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
              Zero pushy sales; 100% focused on safe execution
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-red-500 font-semibold mb-1">03. HYGIENE & AIR</div>
              <h3 className="text-lg font-bold text-white mb-2">
                Dual AC & Sanitized Zones
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Heavy workout floors require pristine ventilation. High-capacity dual air-conditioning, fresh oxygen exchange, speckle rubber shock absorption, and daily sanitization.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
              Clean locker rooms and spotless shower areas
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-red-500 font-semibold mb-1">04. TIMINGS</div>
              <h3 className="text-lg font-bold text-white mb-2">
                6:00 AM to 11:00 PM
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                17 continuous daily operating hours Monday through Saturday. Train before early shifts or de-stress with late-night iron therapy without feeling rushed.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
              Special Sunday morning & evening slots
            </div>
          </div>
        </div>

        {/* Narrative & Visual Feature Row */}
        <div className="bg-[#101218] border border-white/10 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
              The Alpha Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Why We Invested in Real Commercial Iron
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              When visiting most neighbourhood gyms, lifters face rickety machines, sticking cables, and trainers glued to mobile screens. At Alpha Fitness, we personally handpicked every machine frame in signature matte black and fiery crimson red.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether you are an office executive looking to drop 10 kgs, a student aiming to build athletic power, or a seasoned lifter looking for calibrated dumbbells and heavy squat racks, you will find an encouraging, zero-ego community right across from the Nerul Fire Brigade.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenTrial}
                className="py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Book Free Floor Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
              >
                Talk to Head Coach
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-80">
              <Image
                src="/images/alpha_strength_gym_1790420145375.jpg"
                alt="Alpha Fitness interior strength gear"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Signature Facility
                </div>
                <div className="text-sm font-semibold">
                  Nerul East, Sector 27 · Navi Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
