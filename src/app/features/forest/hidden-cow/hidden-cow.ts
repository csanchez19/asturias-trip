import { Component, computed, inject, input, signal } from '@angular/core';
import { TripStore } from '../../../state/trip-store';

const COW_MESSAGES = [
  'Muuu-agnifico descubrimiento! 🐄',
  'Esta vaquita tambien quiere bajar el Sella en canoa 🛶',
  'Las vaquitas de montaña saben donde esta la mejor sidra 🍏',
  'Cuentan las hadas que esta vaquita se perdio buscando el Lago Ercina 🏔️',
  'Vaquita encontrada: +1 energia de hada ✨',
  'Esta vaquita prefiere el Cabo de Peñas al atardecer 🌅',
];

let cowInstanceCounter = 0;

@Component({
  selector: 'app-hidden-cow',
  imports: [],
  templateUrl: './hidden-cow.html',
  styleUrl: './hidden-cow.css',
})
export class HiddenCowComponent {
  private readonly store = inject(TripStore);

  readonly cowId = input.required<string>();
  readonly top = input.required<string>();
  readonly left = input.required<string>();

  protected readonly isBouncing = signal(false);
  protected readonly message = signal<string | null>(null);
  protected readonly messageId = `hidden-cow-message-${cowInstanceCounter++}`;

  protected readonly isFound = computed(() => this.store.foundCows().has(this.cowId()));

  protected onTap(): void {
    this.store.markCowFound(this.cowId());
    this.isBouncing.set(true);
    this.message.set(COW_MESSAGES[Math.floor(Math.random() * COW_MESSAGES.length)]);
    setTimeout(() => this.isBouncing.set(false), 500);
    setTimeout(() => this.message.set(null), 2400);
  }
}
