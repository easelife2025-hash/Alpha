'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/gym-data';

interface FacilityGalleryProps {
  onOpenTrial: () => void;
}

export function FacilityGallery({ onOpenTrial }: FacilityGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['All', 'Strength Equipment', 'Free Weights', 'Training Floor', 'Cardio & Stamina'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="facility" className="py-20 sm:py-28 bg-[#08090c] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-2">
            <Dumbbell className="w-4 h-4" />
            <span>Facility & Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-4">
            Forged in Matte Black & Crimson Iron
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a look inside Alpha Fitness. Heavy-duty selectorized stations, calibrated Olympic plates, multi-tier dumbbells, and clean rubber flooring designed for uncompromising workouts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#101217] border border-white/10 hover:border-red-500/40 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Enlarge Affordance */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 relative">
                <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation Strip */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-red-950/40 via-[#101218] to-[#101218] border border-red-500/30 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">
              Want to inspect the machines in person?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Walk in anytime between 6:00 AM – 11:00 PM opposite NMMC Fire Brigade, Nerul East.
            </p>
          </div>

          <button
            onClick={onOpenTrial}
            className="py-3 px-6 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-red-950/50"
          >
            <span>Book 1-Day Trial Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0e1015] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#0e1015] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono font-semibold text-red-500 uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenTrial();
                }}
                className="py-2.5 px-5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0"
              >
                Experience This Floor
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
