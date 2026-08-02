import { Component, effect, inject, input } from '@angular/core';
import { TripStore } from '../../../state/trip-store';
import { DayNodeComponent } from '../day-node/day-node';
import { ProgressTrailComponent } from '../progress-trail/progress-trail';
import { HiddenCowComponent } from '../hidden-cow/hidden-cow';
import { FairyDiaryModalComponent } from '../../day-detail/fairy-diary-modal/fairy-diary-modal';

interface CowSpot {
  id: string;
  top: string;
  left: string;
}

const COW_SPOTS: CowSpot[] = [
  { id: 'cow-1', top: '14%', left: '72%' },
  { id: 'cow-2', top: '38%', left: '26%' },
  { id: 'cow-3', top: '62%', left: '70%' },
  { id: 'cow-4', top: '86%', left: '28%' },
];

@Component({
  selector: 'app-forest-page',
  imports: [DayNodeComponent, ProgressTrailComponent, HiddenCowComponent, FairyDiaryModalComponent],
  templateUrl: './forest-page.html',
  styleUrl: './forest-page.css',
})
export class ForestPageComponent {
  protected readonly store = inject(TripStore);
  protected readonly cowSpots = COW_SPOTS;

  readonly dayNumber = input<string>();

  constructor() {
    effect(() => {
      const raw = this.dayNumber();
      if (!raw) {
        return;
      }
      const parsed = Number(raw);
      if (Number.isFinite(parsed) && parsed !== this.store.selectedDayNumber()) {
        this.store.openDay(parsed);
      }
    });
  }

  protected onSelectDay(dayNumber: number): void {
    this.store.openDay(dayNumber);
  }
}
