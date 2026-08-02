import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ASTURIAS_ITINERARY } from '../data/itinerary-mock.data';
import { DayStatus, ItineraryDay } from '../models/itinerary.model';

function loadSet(key: string): Set<number | string> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function hasDevQueryParam(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return new URLSearchParams(window.location.search).get('dev') === '1';
}

/**
 * Medianoche en hora de España (CEST, +02:00). Todas las fechas del
 * itinerario caen en agosto, dentro del horario de verano, por lo que el
 * offset +02:00 es fijo y no requiere calculo de DST.
 */
function spainMidnight(dateStr: string): Date {
  return new Date(`${dateStr}T00:00:00+02:00`);
}

@Injectable({ providedIn: 'root' })
export class TripStore {
  private readonly router = inject(Router);

  readonly days = signal<ItineraryDay[]>(ASTURIAS_ITINERARY);
  readonly selectedDayNumber = signal<number | null>(null);
  readonly isModalOpen = signal(false);
  readonly visitedDays = signal<Set<number>>(loadSet('visitedDays') as Set<number>);
  readonly foundCows = signal<Set<string>>(loadSet('foundCows') as Set<string>);
  readonly devUnlockAll = hasDevQueryParam();
  readonly today = signal(new Date());

  readonly selectedDay = computed<ItineraryDay | null>(
    () => this.days().find((d) => d.dayNumber === this.selectedDayNumber()) ?? null,
  );

  readonly dayStatuses = computed<Map<number, DayStatus>>(() => {
    const map = new Map<number, DayStatus>();
    const todayValue = this.today();
    for (const day of this.days()) {
      if (!day.isUnlocked) {
        map.set(day.dayNumber, 'locked');
        continue;
      }
      const dateReached = this.devUnlockAll || todayValue >= spainMidnight(day.date);
      if (!dateReached) {
        map.set(day.dayNumber, 'locked');
        continue;
      }
      map.set(day.dayNumber, this.visitedDays().has(day.dayNumber) ? 'visited' : 'unlocked');
    }
    return map;
  });

  readonly progressPercent = computed(() =>
    Math.round((this.visitedDays().size / this.days().length) * 100),
  );

  constructor() {
    effect(() => {
      localStorage.setItem('visitedDays', JSON.stringify([...this.visitedDays()]));
    });
    effect(() => {
      localStorage.setItem('foundCows', JSON.stringify([...this.foundCows()]));
    });
  }

  openDay(dayNumber: number): void {
    if (this.dayStatuses().get(dayNumber) === 'locked') {
      return;
    }
    this.selectedDayNumber.set(dayNumber);
    this.isModalOpen.set(true);
    this.visitedDays.update((set) => new Set(set).add(dayNumber));
    const targetUrl = `/dia/${dayNumber}`;
    if (this.router.url !== targetUrl) {
      this.router.navigateByUrl(targetUrl);
    }
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/');
    }
  }

  clearSelectedDay(): void {
    this.selectedDayNumber.set(null);
  }

  markCowFound(id: string): void {
    this.foundCows.update((set) => new Set(set).add(id));
  }
}
