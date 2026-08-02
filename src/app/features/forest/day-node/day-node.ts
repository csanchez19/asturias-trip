import { Component, computed, input, output } from '@angular/core';
import { DayStatus, ItineraryDay } from '../../../models/itinerary.model';

@Component({
  selector: 'app-day-node',
  imports: [],
  templateUrl: './day-node.html',
  styleUrl: './day-node.css',
})
export class DayNodeComponent {
  readonly day = input.required<ItineraryDay>();
  readonly status = input.required<DayStatus>();
  readonly select = output<number>();

  protected readonly unlockDateLabel = computed(() =>
    new Date(this.day().date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' }),
  );

  protected readonly summaryIcon = computed(() => this.day().activities[0]?.icon ?? '🗺️');

  protected readonly ariaLabel = computed(() => {
    const d = this.day();
    switch (this.status()) {
      case 'locked':
        return `Dia ${d.dayNumber}, bloquejat fins al ${this.unlockDateLabel()}`;
      case 'visited':
        return `Dia ${d.dayNumber}, ${d.title}, ja visitat`;
      default:
        return `Dia ${d.dayNumber}, ${d.title}, disponible`;
    }
  });

  protected onActivate(): void {
    if (this.status() === 'locked') {
      return;
    }
    this.select.emit(this.day().dayNumber);
  }
}
