'use client';

import React from 'react';
import { MapPin, Ticket } from 'lucide-react';
import { WhatsAppIcon, CallIcon } from '@/components/Icons';
import { GYM_DETAILS } from '@/lib/gym-data';

interface MobileActionDockProps {
  onOpenTrial: () => void;
}

export function MobileActionDock({ onOpenTrial }: MobileActionDockProps) {
  return (
    <aside
      aria-label="Quick action navigation"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0d0f14]/95 backdrop-blur-md border-t border-white/10 px-2 py-2"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        <a
          href={`tel:${GYM_DETAILS.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 active:bg-white/10 active:text-white transition-colors"
        >
          <CallIcon className="w-4 h-4 text-red-500 mb-1" />
          <span className="text-[10px] font-medium leading-tight">Call</span>
        </a>

        <a
          href={GYM_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 active:bg-[#25D366]/10 active:text-[#25D366] transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 fill-[#25D366] mb-1" />
          <span className="text-[10px] font-medium leading-tight">WhatsApp</span>
        </a>

        <a
          href={GYM_DETAILS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-300 active:bg-white/10 active:text-white transition-colors"
        >
          <MapPin className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[10px] font-medium leading-tight">Directions</span>
        </a>

        <button
          onClick={onOpenTrial}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-red-600 text-white font-semibold active:bg-red-700 transition-colors shadow-sm shadow-red-950"
        >
          <Ticket className="w-4 h-4 text-white mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-bold leading-tight">Free Pass</span>
        </button>
      </div>
    </aside>
  );
}
