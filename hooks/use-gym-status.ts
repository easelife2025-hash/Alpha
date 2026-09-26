'use client';

import { useSyncExternalStore } from 'react';
import { getGymCurrentStatus, GymOpenStatus } from '@/lib/hours-helper';

export interface GymStatusState {
  status: GymOpenStatus;
  dayIndex: number;
}

let listeners: Array<() => void> = [];
let currentSnapshot: GymStatusState | null = null;
let timerId: ReturnType<typeof setInterval> | null = null;

function computeSnapshot(): GymStatusState {
  const today = new Date().getDay();
  // 0 is Sunday, 1 is Monday ... 6 is Saturday
  // Map to schedule array index: Mon=0, Tue=1, ..., Sat=5, Sun=6
  const dayIndex = today === 0 ? 6 : today - 1;
  return {
    status: getGymCurrentStatus(),
    dayIndex,
  };
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  if (!timerId && typeof window !== 'undefined') {
    currentSnapshot = computeSnapshot();
    timerId = setInterval(() => {
      currentSnapshot = computeSnapshot();
      listeners.forEach((l) => l());
    }, 30000);
  }

  return () => {
    listeners = listeners.filter((l) => l !== listener);
    if (listeners.length === 0 && timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };
}

function getSnapshot(): GymStatusState {
  if (!currentSnapshot && typeof window !== 'undefined') {
    currentSnapshot = computeSnapshot();
  }
  return currentSnapshot || computeSnapshot();
}

function getServerSnapshot(): null {
  return null;
}

export function useGymStatus(): GymStatusState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
