export interface GymOpenStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
}

function getISTDateParts(): { day: number; currentMinutes: number } {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    let weekdayStr = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekdayStr = part.value;
      else if (part.type === 'hour') hour = parseInt(part.value, 10);
      else if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    if (hour === 24) hour = 0;

    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    const day = dayMap[weekdayStr] !== undefined ? dayMap[weekdayStr] : now.getDay();
    return { day, currentMinutes: hour * 60 + minute };
  } catch {
    // Fallback if Intl fails
    const now = new Date();
    return { day: now.getDay(), currentMinutes: now.getHours() * 60 + now.getMinutes() };
  }
}

export function getGymCurrentStatus(): GymOpenStatus {
  const { day, currentMinutes } = getISTDateParts();

  if (day >= 1 && day <= 6) {
    // Monday to Saturday: 6:00 AM (360) to 11:00 PM (1380)
    const openTime = 6 * 60; // 360
    const closeTime = 23 * 60; // 1380

    if (currentMinutes >= openTime && currentMinutes < closeTime) {
      return {
        isOpen: true,
        statusText: 'Open Now',
        nextEventText: 'Closes at 11:00 PM',
        badgeColor: 'emerald',
      };
    } else if (currentMinutes < openTime) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        nextEventText: 'Opens today at 6:00 AM',
        badgeColor: 'amber',
      };
    } else {
      // Past 11 PM
      const nextDayIsSunday = day === 6;
      return {
        isOpen: false,
        statusText: 'Closed for the Night',
        nextEventText: nextDayIsSunday
          ? 'Opens Sunday at 9:00 AM'
          : 'Opens tomorrow at 6:00 AM',
        badgeColor: 'rose',
      };
    }
  } else {
    // Sunday: 9:00 AM (540) to 12:00 PM (720) & 4:00 PM (960) to 9:00 PM (1260)
    const morningOpen = 9 * 60;
    const morningClose = 12 * 60;
    const eveningOpen = 16 * 60;
    const eveningClose = 21 * 60;

    if (currentMinutes >= morningOpen && currentMinutes < morningClose) {
      return {
        isOpen: true,
        statusText: 'Open Now (Morning Slot)',
        nextEventText: 'Closes at 12:00 PM · Reopens 4:00 PM',
        badgeColor: 'emerald',
      };
    } else if (currentMinutes >= eveningOpen && currentMinutes < eveningClose) {
      return {
        isOpen: true,
        statusText: 'Open Now (Evening Slot)',
        nextEventText: 'Closes at 9:00 PM',
        badgeColor: 'emerald',
      };
    } else if (currentMinutes < morningOpen) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        nextEventText: 'Opens today at 9:00 AM (Sunday Slot)',
        badgeColor: 'amber',
      };
    } else if (currentMinutes >= morningClose && currentMinutes < eveningOpen) {
      return {
        isOpen: false,
        statusText: 'Afternoon Break',
        nextEventText: 'Reopens today at 4:00 PM',
        badgeColor: 'amber',
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed for the Day',
        nextEventText: 'Opens Monday at 6:00 AM',
        badgeColor: 'rose',
      };
    }
  }
}
