import {
  Component,
  ElementRef,
  HostListener,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { TripStore } from '../../../state/trip-store';
import { ActivityItemComponent } from '../activity-item/activity-item';

const SWIPE_CLOSE_THRESHOLD_PX = 120;
const CLOSE_TRANSITION_MS = 300;

@Component({
  selector: 'app-fairy-diary-modal',
  imports: [ActivityItemComponent],
  templateUrl: './fairy-diary-modal.html',
  styleUrl: './fairy-diary-modal.css',
})
export class FairyDiaryModalComponent {
  protected readonly store = inject(TripStore);

  private readonly sheet = viewChild<ElementRef<HTMLElement>>('sheet');

  protected readonly isDragging = signal(false);
  protected readonly dragDeltaY = signal(0);
  private dragStartY = 0;

  constructor() {
    effect(() => {
      const open = this.store.isModalOpen();
      document.body.classList.toggle('no-scroll', open);
      if (open) {
        queueMicrotask(() => this.sheet()?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.store.isModalOpen()) {
      this.close();
    }
  }

  protected close(): void {
    this.store.closeModal();
    this.dragDeltaY.set(0);
    this.isDragging.set(false);
    setTimeout(() => this.store.clearSelectedDay(), CLOSE_TRANSITION_MS);
  }

  protected onPointerDown(event: PointerEvent): void {
    this.isDragging.set(true);
    this.dragStartY = event.clientY;
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.isDragging()) {
      return;
    }
    const delta = Math.max(0, event.clientY - this.dragStartY);
    this.dragDeltaY.set(delta);
  }

  protected onPointerUp(): void {
    if (!this.isDragging()) {
      return;
    }
    this.isDragging.set(false);
    if (this.dragDeltaY() > SWIPE_CLOSE_THRESHOLD_PX) {
      this.close();
    } else {
      this.dragDeltaY.set(0);
    }
  }
}
