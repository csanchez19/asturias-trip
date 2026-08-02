export interface ItineraryActivity {
  time?: string;
  title: string;
  description: string;
  location?: string;
  icon?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  subtitle?: string;
  isUnlocked: boolean;
  cowRating?: string; // p. ej. "🐮🐮🐮"
  fairyTip?: string;
  activities: ItineraryActivity[];
}

export type DayStatus = 'locked' | 'unlocked' | 'visited';
