'use client';

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { WhatsAppIcon, CallIcon } from '@/components/Icons';
import { GYM_DETAILS } from '@/lib/gym-data';
import { getGymCurrentStatus, GymOpenStatus } from '@/lib/hours-helper';

export function LocationHoursSection() {
  const [status, setStatus] = useState<GymOpenStatus>(getGymCurrentStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const schedule = [
    { day: 'Monday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Tuesday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Wednesday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Thursday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Friday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Saturday', hours: '6:00 AM – 11:00 PM', continuous: true },
    { day: 'Sunday', hours: '9:00 AM – 12:00 PM & 4:00 PM – 9:00 PM', continuous: false },
  ];

  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  // map 1->0, 2->1 ... 6->5, 0->6
  const scheduleDayIdx = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <section id="location-hours" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>Visit Alpha Fitness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase font-heading leading-tight mb-4">
            Location, Hours & Direct Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently situated opposite the NMMC Fire Brigade in Sector 27 Nerul East. Ample parking, early morning access, and late evening sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours Card & Contact */}
          <div className="lg:col-span-6 space-y-6">
            {/* Opening Hours Schedule Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1015] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      Weekly Operational Hours
                    </h3>
                    <div className="text-xs text-slate-400">17 Daily Continuous Hours</div>
                  </div>
                </div>

                {status && (
                  <div className="text-right" suppressHydrationWarning>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" suppressHydrationWarning>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span suppressHydrationWarning>{status.statusText}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono" suppressHydrationWarning>
                      {status.nextEventText}
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule List */}
              <div className="space-y-2.5">
                {schedule.map((slot, idx) => {
                  const isToday = idx === scheduleDayIdx;
                  return (
                    <div
                      key={slot.day}
                      className={`flex items-center justify-between p-2.5 rounded-lg text-xs transition-colors ${
                        isToday
                          ? 'bg-red-600/10 border border-red-500/30 text-white font-semibold'
                          : 'text-slate-300 hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        )}
                        <span>{slot.day}</span>
                        {isToday && (
                          <span className="text-[10px] text-red-400 uppercase font-bold">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-slate-300">{slot.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
                ⚡ <em>Floor trainers and locker amenities are fully functional during all scheduled hours.</em>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#0e1015] border border-white/10 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white font-heading">
                Direct Contact Affordances
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md shadow-red-950/40">
                    <CallIcon className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Direct Call</div>
                    <div className="text-sm font-bold font-mono text-white">{GYM_DETAILS.phone}</div>
                  </div>
                </a>

                <a
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-white transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-all shadow-md shadow-[#25D366]/30">
                    <WhatsAppIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#25D366] uppercase font-semibold">WhatsApp Chat</div>
                    <div className="text-sm font-bold font-mono">Instant Reply</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Address & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1015] border border-white/10 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Gym Location & Landmark
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {GYM_DETAILS.address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Landmark Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Prominent Landmark</div>
                  <div className="text-xs font-bold text-red-400 mt-0.5">
                    Opposite NMMC Fire Brigade
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Sector / Zone</div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Sector 27, Nerul East
                  </div>
                </div>
              </div>

              {/* Real Interactive Google Maps Embed */}
              <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#161821] shadow-2xl mb-6">
                <div className="flex items-center justify-between p-3 bg-[#0d0f15] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-white">Alpha Fitness</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400">Nerul East, Sector 27</span>
                  </div>

                  <a
                    href={GYM_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-red-400 hover:text-red-300 font-medium"
                  >
                    <span>Enlarge</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Interactive Map iFrame */}
                <div className="relative w-full h-72 sm:h-80 bg-neutral-900">
                  <iframe
                    title="Alpha Fitness Location Map"
                    src="https://maps.google.com/maps?q=Alpha%20fitness%2C%20Shop%20no%205%2C%20Plot%20no%20105%2C%20Nerul%20East%2C%20Sector%2027%2C%20Navi%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.08] opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={GYM_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-950/40 active:scale-[0.99]"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App for Navigation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
