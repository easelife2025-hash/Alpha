'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Pause,
  Play,
} from 'lucide-react';
import { HERO_SLIDES, GYM_DETAILS } from '@/lib/gym-data';

interface HeroCarouselProps {
  onOpenTrial: () => void;
}

export function HeroCarousel({ onOpenTrial }: HeroCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const slide = HERO_SLIDES[currentIdx];

  return (
    <section
      aria-label="Hero Section"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 overflow-hidden bg-[#08090c]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#08090c]"
          >
            {/* Background Image with Fallback */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={currentIdx === 0}
                referrerPolicy="no-referrer"
                sizes="100vw"
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
              />
              {/* Fallback styling behind image */}
              <div className="absolute inset-0 -z-10 bg-radial from-neutral-800 to-black" />
            </div>

            {/* Gradient Scrims for pristine text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-[#08090c]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/90 via-[#08090c]/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Trust Kicker */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 font-medium mb-4">
            <span className="text-red-500 font-bold uppercase tracking-wider">
              {slide.highlight}
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 Google Rated</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Nerul East, Navi Mumbai</span>
          </div>

          {/* Headline / Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-text'}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-heading leading-[1.08] mb-4 sm:mb-6 max-w-2xl">
                {slide.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
                {slide.subheadline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
            <button
              onClick={onOpenTrial}
              className="py-3.5 px-7 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-150 flex items-center justify-center gap-2.5 shadow-xl shadow-red-950/60 group"
            >
              <span>Join Now · Free Day Pass</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={GYM_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-semibold text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Interactive Slide Switcher & Controls */}
          <div className="flex items-center gap-3 text-slate-400 pt-2">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx
                      ? 'w-8 bg-red-500'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 ml-3 border-l border-white/10 pl-3">
              <button
                onClick={prevSlide}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors ml-1"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Strip Adjacency */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 px-5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">4.9 ★ Rating</div>
              <div className="text-xs text-slate-400">349+ Google Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">6 AM – 11 PM</div>
              <div className="text-xs text-slate-400">Mon–Sat Continuous</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">Heavy-Duty</div>
              <div className="text-xs text-slate-400">Red & Black Machines</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">Nerul East</div>
              <div className="text-xs text-slate-400">Opp. NMMC Fire Brigade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
